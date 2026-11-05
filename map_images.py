# -*- coding: utf-8 -*-
"""Map image blocks on each PDF page to nearest preceding question number."""
import json
import re
import pymupdf

PDF = r"c:\Users\Admin\Downloads\tracnghiem\2024 on tap xlmt trong cntp 01.pdf"
doc = pymupdf.open(PDF)
cau_re = re.compile(r"Câu\s+(\d+)\s*:", re.IGNORECASE)

# For each page: find question y-positions and image blocks
mappings = []  # {qid, page, bbox}

for pi, page in enumerate(doc):
    # question anchors
    q_anchors = []  # (qid, y0)
    blocks = page.get_text("dict")["blocks"]
    for b in blocks:
        if b.get("type") != 0:
            continue
        y0 = b["bbox"][1]
        text = ""
        for line in b.get("lines", []):
            for s in line.get("spans", []):
                text += s.get("text", "")
        for m in cau_re.finditer(text):
            q_anchors.append((int(m.group(1)), y0))
    q_anchors.sort(key=lambda x: x[1])

    # image blocks (type 1) + also xref images via get_image_info
    img_boxes = []
    for b in blocks:
        if b.get("type") == 1:
            img_boxes.append(list(b["bbox"]))

    # fallback: image info
    try:
        for info in page.get_image_info(xrefs=True):
            bbox = info.get("bbox")
            if bbox:
                img_boxes.append(list(bbox))
    except Exception:
        pass

    # dedupe similar boxes
    uniq = []
    for box in img_boxes:
        x0, y0, x1, y1 = box
        w, h = x1 - x0, y1 - y0
        if w < 30 or h < 20:
            continue  # tiny icons/noise
        area = w * h
        if area < 800:
            continue
        dup = False
        for u in uniq:
            # similar center
            if abs((u[0]+u[2])/2 - (x0+x1)/2) < 15 and abs((u[1]+u[3])/2 - (y0+y1)/2) < 15:
                dup = True
                break
        if not dup:
            uniq.append(box)

    for box in uniq:
        y_mid = (box[1] + box[3]) / 2
        # assign to last question whose y0 <= image top (or mid)
        owner = None
        for qid, qy in q_anchors:
            if qy <= box[1] + 5:
                owner = qid
            else:
                break
        # if image is above first question on page, might belong to previous page's last Q
        if owner is None and q_anchors:
            # image before first cau on page - check if continuation
            owner = None  # handle later via prev page last q
        mappings.append({
            "page": pi + 1,
            "bbox": [round(v, 1) for v in box],
            "qid": owner,
            "w": round(box[2]-box[0],1),
            "h": round(box[3]-box[1],1),
        })

# Fix None owners: assign to previous page's last question if any
last_qid_by_page = {}
for pi, page in enumerate(doc):
    ids = []
    text = page.get_text()
    for m in cau_re.finditer(text):
        ids.append(int(m.group(1)))
    if ids:
        last_qid_by_page[pi+1] = max(ids)
        first = min(ids)
    else:
        first = None

# Get last qid before each page
running_last = None
page_prev_last = {}
for pi in range(1, doc.page_count+1):
    page_prev_last[pi] = running_last
    if pi in last_qid_by_page:
        running_last = last_qid_by_page[pi]

for m in mappings:
    if m["qid"] is None:
        m["qid"] = page_prev_last.get(m["page"])

# group by qid
by_q = {}
for m in mappings:
    if m["qid"] is None:
        continue
    by_q.setdefault(m["qid"], []).append(m)

print("Questions with images:", len(by_q))
print("Total image regions:", sum(len(v) for v in by_q.values()))
for qid in sorted(by_q)[:60]:
    items = by_q[qid]
    print(f"Q{qid}: {len(items)} img(s)", [(i['page'], i['w'], i['h']) for i in items])
print("...")
for qid in sorted(by_q)[-20:]:
    items = by_q[qid]
    print(f"Q{qid}: {len(items)} img(s)", [(i['page'], i['w'], i['h']) for i in items])

with open("image_map.json", "w", encoding="utf-8") as f:
    json.dump(by_q, f, ensure_ascii=False, indent=2)
print("wrote image_map.json")
