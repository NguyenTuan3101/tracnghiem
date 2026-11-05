# -*- coding: utf-8 -*-
import pymupdf
import re
from pathlib import Path

PDF = r"c:\Users\Admin\Downloads\tracnghiem\2024 on tap xlmt trong cntp 01.pdf"
out = Path(r"c:\Users\Admin\Downloads\tracnghiem\_preview")
out.mkdir(exist_ok=True)
doc = pymupdf.open(PDF)
cau_re = re.compile(r"Câu\s+(\d+)\s*:", re.I)

# Preview a few image-heavy pages
for pi in [1, 2, 24, 25, 28, 41]:  # 0-based: pages 2,3,25,26,29,42
    page = doc[pi]
    pix = page.get_pixmap(matrix=pymupdf.Matrix(1.2, 1.2))
    pix.save(str(out / f"page_{pi+1}.png"))
    # list questions and image bboxes
    print(f"\n=== PAGE {pi+1} ===")
    text = page.get_text()
    qs = cau_re.findall(text)
    print("questions:", qs)
    blocks = page.get_text("dict")["blocks"]
    for b in blocks:
        if b.get("type") == 1:
            print("  IMG", [round(x,1) for x in b["bbox"]])
    # also print question y positions
    for b in blocks:
        if b.get("type") != 0:
            continue
        t = "".join(s["text"] for line in b["lines"] for s in line["spans"])
        m = cau_re.search(t)
        if m:
            print(f"  Q{m.group(1)} y={b['bbox'][1]:.1f} text={t[:80]!r}")

print("previews in", out)
