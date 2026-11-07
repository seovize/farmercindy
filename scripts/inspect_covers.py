import pypdf
import os
from PIL import Image

files = [
    r"C:\Users\Light-Tech\Downloads\cindy 1 cover.pdf",
    r"C:\Users\Light-Tech\Downloads\cindy 2 cover-1.pdf",
    r"C:\Users\Light-Tech\Downloads\lulu hard cover2.pdf"
]

output_dir = r"d:\farmer cendy\public\images\extracted_covers"
os.makedirs(output_dir, exist_ok=True)

for f in files:
    base = os.path.splitext(os.path.basename(f))[0]
    print(f"=== File: {base} ===")
    reader = pypdf.PdfReader(f)
    print("Page count:", len(reader.pages))
    for page_idx, page in enumerate(reader.pages):
        print(f"Page {page_idx}: {page.mediabox}")
        for img_idx, img in enumerate(page.images):
            img_filename = f"{base}_p{page_idx}_{img_idx}_{img.name}"
            out_path = os.path.join(output_dir, img_filename)
            try:
                with open(out_path, "wb") as fp:
                    fp.write(img.data)
                print(f"  Extracted image {img.name} -> {out_path} ({len(img.data)} bytes)")
            except Exception as e:
                print(f"  Error extracting {img.name}: {e}")
