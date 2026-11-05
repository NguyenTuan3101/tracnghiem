# -*- coding: utf-8 -*-
import re
import json
import pymupdf

PDF = r"c:\Users\Admin\Downloads\tracnghiem\2024 on tap xlmt trong cntp 01.pdf"
OUT = r"c:\Users\Admin\Downloads\tracnghiem\questions.js"

doc = pymupdf.open(PDF)

# Build stream of (text, is_bold) spans across all pages
spans = []
for page in doc:
    blocks = page.get_text("dict")["blocks"]
    for b in blocks:
        if b.get("type") != 0:
            continue
        for line in b.get("lines", []):
            for s in line.get("spans", []):
                text = s.get("text", "")
                if not text:
                    continue
                font = s.get("font", "")
                flags = s.get("flags", 0)
                bold = bool(flags & 2**4) or "Bold" in font or "bold" in font.lower()
                # Skip lone page numbers that are just digits on their own line-ish
                spans.append({"text": text, "bold": bold})

# Merge into a single annotated string: wrap bold with << >> around chunks
# Better: build plain text and parallel bold mask for option letters

full_text_parts = []
for s in spans:
    full_text_parts.append(s["text"])
full_text = "".join(full_text_parts)

# Also build text with markers for bold regions
marked_parts = []
for s in spans:
    t = s["text"]
    if s["bold"]:
        marked_parts.append("«" + t + "»")
    else:
        marked_parts.append(t)
marked = "".join(marked_parts)

# Normalize whitespace somewhat but keep newlines between logical lines by reconstructing per line
# Rebuild page-aware line text for easier parsing
lines = []  # list of {text, bold_ranges as set of option letters detected}
for page in doc:
    blocks = page.get_text("dict")["blocks"]
    for b in blocks:
        if b.get("type") != 0:
            continue
        for line in b.get("lines", []):
            line_text = ""
            line_bold = ""
            for s in line.get("spans", []):
                t = s.get("text", "")
                font = s.get("font", "")
                flags = s.get("flags", 0)
                bold = bool(flags & 2**4) or "Bold" in font or "bold" in font.lower()
                line_text += t
                if bold:
                    line_bold += t
                else:
                    line_bold += " " * len(t)
            lines.append({"text": line_text.strip(), "bold": line_bold, "raw": line_text})

# Parse questions from lines
questions = []
current = None
option_re = re.compile(r"^([A-D])\.\s*(.*)$")
cau_re = re.compile(r"^Câu\s+(\d+)\s*:\s*(.*)$", re.IGNORECASE)

def flush():
    global current
    if current and current.get("options"):
        # Determine correct from bold option letters collected
        if current.get("correct"):
            questions.append(current)
        else:
            # try infer from first bold option if stored as candidates
            if current.get("_bold_opts"):
                # pick last bold option letter seen (usually the correct A./B./C./D. is bold)
                current["correct"] = current["_bold_opts"][-1]
                questions.append(current)
            else:
                current["correct"] = None
                questions.append(current)
    current = None

for line in lines:
    text = line["text"].strip()
    if not text:
        continue
    # skip pure page numbers
    if re.fullmatch(r"\d{1,3}", text):
        continue

    m = cau_re.match(text)
    if m:
        flush()
        current = {
            "id": int(m.group(1)),
            "question": m.group(2).strip(),
            "options": {},
            "correct": None,
            "_bold_opts": [],
            "_current_opt": None,
        }
        # Check if "Câu N:" itself is bold - ignore
        continue

    if current is None:
        continue

    om = option_re.match(text)
    if om:
        letter = om.group(1)
        rest = om.group(2).strip()
        current["options"][letter] = rest
        current["_current_opt"] = letter
        # Detect if option letter portion is bold
        # The bold mask: look for bold "A." "B." etc in the line's bold string
        bold_part = line["bold"]
        # Check if letter + dot appears in bold spans of this line
        # Reconstruct: if any span containing the letter marker is bold
        # Simpler: if bold text stripped starts with letter or contains "X."
        bold_stripped = "".join(ch for ch in bold_part if ch.strip())
        # Also check raw spans approach via bold_part having non-space at start of "A."
        raw = line["raw"]
        # Find position of "A." pattern
        idx = raw.find(letter + ".")
        if idx >= 0 and idx < len(bold_part):
            # if the letter or the dot region has bold chars
            region = bold_part[idx : idx + 2]
            if region.strip():
                current["_bold_opts"].append(letter)
                current["correct"] = letter
        continue

    # Continuation of question or option
    if current["_current_opt"]:
        letter = current["_current_opt"]
        current["options"][letter] = (current["options"].get(letter, "") + " " + text).strip()
    else:
        current["question"] = (current["question"] + " " + text).strip()

flush()

# Clean up internal fields
clean = []
for q in questions:
    opts = q["options"]
    # Ensure A-D keys exist
    options_list = []
    for L in ["A", "B", "C", "D"]:
        options_list.append({"key": L, "text": opts.get(L, "").strip()})
    clean.append({
        "id": q["id"],
        "question": re.sub(r"\s+", " ", q["question"]).strip(),
        "options": options_list,
        "answer": q["correct"],
    })

# Stats
missing = [q for q in clean if not q["answer"]]
empty_opts = [q for q in clean if sum(1 for o in q["options"] if o["text"]) < 2]
print("Total questions:", len(clean))
print("Missing answer:", len(missing), [q["id"] for q in missing[:30]])
print("Few options:", len(empty_opts), [q["id"] for q in empty_opts[:30]])
print("ID range:", clean[0]["id"] if clean else None, "-", clean[-1]["id"] if clean else None)
ids = [q["id"] for q in clean]
missing_ids = [i for i in range(1, max(ids)+1) if i not in ids]
print("Missing IDs count:", len(missing_ids), missing_ids[:40])

# Write JS
with open(OUT, "w", encoding="utf-8") as f:
    f.write("// Auto-extracted from PDF – answer = correct option letter (bold in source)\n")
    f.write("const QUESTIONS = ")
    json.dump(clean, f, ensure_ascii=False, indent=2)
    f.write(";\n")
    f.write(f"\n// total: {len(clean)}\n")

print("Wrote", OUT)

# Dump a few samples
for q in clean[:3]:
    print(q["id"], q["answer"], q["question"][:60], "...")
    for o in q["options"]:
        mark = "*" if o["key"] == q["answer"] else " "
        print(f"  {mark}{o['key']}. {o['text'][:70]}")
