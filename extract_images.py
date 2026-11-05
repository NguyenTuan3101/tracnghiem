# -*- coding: utf-8 -*-
"""Extract question images from 2-column PDF using precise 'Câu N:' positions."""
import json
import re
from pathlib import Path
import pymupdf

PDF = Path(r"c:\Users\Admin\Downloads\tracnghiem\2024 on tap xlmt trong cntp 01.pdf")
ROOT = Path(r"c:\Users\Admin\Downloads\tracnghiem")
IMG_DIR = ROOT / "images"
IMG_DIR.mkdir(exist_ok=True)

for p in IMG_DIR.glob("*.png"):
    p.unlink()

doc = pymupdf.open(PDF)
PAGE_MID = 300
# Strong visual need (borrow + keep)
NEED_IMG_RE = re.compile(
    r"hình|bảng kết quả|đồ thị|dưới đây|quan sát|trong hình|hình vẽ|"
    r"công trình này|thành phần\s*(\(|số)|sơ đồ|hoàn thành quy trình|hoàn thành sơ đồ|"
    r"pha\s*\(|thiết bị này|thiết bị\s*\?|\?\?\?\?",
    re.I,
)
# Softer: keep if image was directly assigned under this question
SOFT_KEEP_RE = re.compile(
    r"hình|bảng|đồ thị|dưới đây|sau đây|quan sát|mô tả|trong hình|thiết bị|"
    r"đồ họa|công trình|thành phần|sơ đồ|quy trình|hoàn thành|pha\s*\(",
    re.I,
)
CAU_RE = re.compile(r"Câu\s+(\d+)\s*:", re.I)


def col_of(x0, x1):
    return "L" if (x0 + x1) / 2 < PAGE_MID else "R"


print("Scanning anchors…")
anchors = []
for pi, page in enumerate(doc):
    # One pass: words with positions
    words = page.get_text("words")  # x0,y0,x1,y1,word,block,line,wordno
    i = 0
    while i < len(words):
        w = words[i][4]
        if w.lower() in ("câu", "cau"):
            # next token number, then :
            num = None
            y0 = words[i][1]
            x0 = words[i][0]
            x1 = words[i][2]
            if i + 1 < len(words):
                m = re.match(r"^(\d+):?$", words[i + 1][4])
                if m:
                    num = int(m.group(1))
                    x1 = words[i + 1][2]
                    # consume optional standalone ":"
                    if not words[i + 1][4].endswith(":") and i + 2 < len(words) and words[i + 2][4] == ":":
                        x1 = words[i + 2][2]
            if num is not None:
                anchors.append({
                    "page": pi,
                    "qid": num,
                    "y": y0,
                    "x0": x0,
                    "x1": x1,
                    "col": col_of(x0, x1),
                })
        i += 1
    # Fallback search_for for any missed (rare)
    for m in CAU_RE.finditer(page.get_text()):
        qid = int(m.group(1))
        if any(a["page"] == pi and a["qid"] == qid for a in anchors):
            continue
        hits = page.search_for(m.group(0))
        for rect in hits[:1]:
            anchors.append({
                "page": pi,
                "qid": qid,
                "y": rect.y0,
                "x0": rect.x0,
                "x1": rect.x1,
                "col": col_of(rect.x0, rect.x1),
            })

print(f"Anchors: {len(anchors)}")

images = []
for pi, page in enumerate(doc):
    uniq = []
    for b in page.get_text("dict")["blocks"]:
        if b.get("type") != 1:
            continue
        box = list(b["bbox"])
        x0, y0, x1, y1 = box
        if (x1 - x0) < 40 or (y1 - y0) < 25 or (x1 - x0) * (y1 - y0) < 1200:
            continue
        if any(abs((u[0] + u[2]) / 2 - (x0 + x1) / 2) < 12 and abs((u[1] + u[3]) / 2 - (y0 + y1) / 2) < 12 for u in uniq):
            continue
        uniq.append(box)
    for box in uniq:
        images.append({"page": pi, "bbox": box, "col": col_of(box[0], box[2])})

print(f"Image regions: {len(images)}")


def find_owner(img):
    pi, col = img["page"], img["col"]
    top = img["bbox"][1]
    same = [a for a in anchors if a["page"] == pi and a["col"] == col and a["y"] <= top + 10]
    if same:
        return max(same, key=lambda a: a["y"])["qid"]
    for p in range(pi - 1, -1, -1):
        prev = [a for a in anchors if a["page"] == p and a["col"] == col]
        if prev:
            return max(prev, key=lambda a: a["y"])["qid"]
    return None


qs_path = ROOT / "questions.js"
raw = qs_path.read_text(encoding="utf-8")
m = re.search(r"const QUESTIONS = (\[.*\]);", raw, re.S)
qs = json.loads(m.group(1))
qtext = {q["id"]: q.get("question", "") for q in qs}

by_q = {}
mat = pymupdf.Matrix(2.0, 2.0)

for img in images:
    qid = find_owner(img)
    if qid is None:
        continue
    page = doc[img["page"]]
    x0, y0, x1, y1 = img["bbox"]
    clip = pymupdf.Rect(x0 - 2, y0 - 2, x1 + 2, y1 + 2) & page.rect
    pix = page.get_pixmap(matrix=mat, clip=clip, alpha=False)
    idx = len(by_q.get(qid, [])) + 1
    name = f"q{qid}_{idx}.png"
    pix.save(str(IMG_DIR / name))
    by_q.setdefault(qid, []).append({
        "file": f"images/{name}",
        "page": img["page"] + 1,
        "bbox": [round(v, 1) for v in img["bbox"]],
        "direct": True,
    })

# Borrow shared figures only for questions that strongly need an image
anchor_by_q = {}
for a in anchors:
    anchor_by_q.setdefault(a["qid"], a)

def borrow_for_missing():
    need_ids = [qid for qid, t in qtext.items() if NEED_IMG_RE.search(t)]
    for qid in need_ids:
        if by_q.get(qid):
            continue
        a = anchor_by_q.get(qid)
        if not a:
            continue
        cands = []
        for oid, items in by_q.items():
            oa = anchor_by_q.get(oid)
            if not oa or oa["page"] > a["page"]:
                continue
            if oa["col"] != a["col"]:
                continue
            if oa["page"] == a["page"] and oa["y"] >= a["y"]:
                continue
            cands.append((oa["page"], oa["y"], oid, items))
        if not cands:
            continue
        cands.sort()
        _, _, oid, items = cands[-1]
        if a["page"] - anchor_by_q[oid]["page"] <= 1:
            by_q[qid] = [{
                "file": it["file"],
                "page": it["page"],
                "bbox": it.get("bbox"),
                "borrowed_from": oid,
            } for it in items]

borrow_for_missing()

# Drop direct assignments on questions that don't look figure-related
pruned = []
for qid in list(by_q.keys()):
    t = qtext.get(qid, "")
    items = by_q[qid]
    only_direct = all(it.get("direct") for it in items)
    if only_direct and not SOFT_KEEP_RE.search(t) and not NEED_IMG_RE.search(t):
        for item in items:
            used_elsewhere = any(
                item["file"] == other["file"]
                for oqid, oitems in by_q.items() if oqid != qid
                for other in oitems
            )
            if not used_elsewhere:
                Path(ROOT / item["file"]).unlink(missing_ok=True)
        pruned.append(qid)
        del by_q[qid]

with open(ROOT / "image_map.json", "w", encoding="utf-8") as f:
    json.dump({str(k): v for k, v in sorted(by_q.items())}, f, ensure_ascii=False, indent=2)

for q in qs:
    # unique preserve order
    files = []
    for i in by_q.get(q["id"], []):
        if i["file"] not in files:
            files.append(i["file"])
    q["images"] = files

with open(qs_path, "w", encoding="utf-8") as f:
    f.write("// Ngan hang cau hoi XLMT trong CNTP - dap an theo chu in dam trong PDF\n")
    f.write("const QUESTIONS = ")
    json.dump(qs, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"With images: {len(by_q)} questions, files on disk: {len(list(IMG_DIR.glob('*.png')))}")
print(f"Pruned: {pruned}")
for qid in [17, 18, 19, 20, 21, 311, 324, 325, 326, 327, 447, 463]:
    print(qid, [i["file"] for i in by_q.get(qid, [])])
