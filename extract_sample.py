import pymupdf

doc = pymupdf.open(r"c:\Users\Admin\Downloads\tracnghiem\2024 on tap xlmt trong cntp 01.pdf")
print("pages", doc.page_count)
for pi in range(min(3, doc.page_count)):
    page = doc[pi]
    print("=== PAGE", pi + 1, "===")
    blocks = page.get_text("dict")["blocks"]
    for b in blocks:
        if b.get("type") != 0:
            continue
        for line in b.get("lines", []):
            parts = []
            for s in line.get("spans", []):
                font = s.get("font", "")
                flags = s.get("flags", 0)
                bold = bool(flags & 2**4) or "Bold" in font or "bold" in font.lower()
                mark = "B" if bold else "N"
                parts.append(f"[{mark}|{font}|{s['text']}]")
            print("".join(parts))
