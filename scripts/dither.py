#!/usr/bin/env python3
"""Duotone ordered-dither for Clever Signal product mascots.

Takes realistic engraving-style animal illustrations (black ink on white paper)
from public/mascots/src/media-generation-<slug>-*.webp and renders each as a
two-tone ordered-dither (Bayer 8x8): near-black ink on the product's solid
brand color — engraved icon tiles, Adobe-style one color per product.

Usage: python3 scripts/dither.py [slug ...]   (no args = all known slugs)
"""
import glob
import os
import sys

from PIL import Image

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(REPO, "public", "mascots", "src")
OUT_DIR = os.path.join(REPO, "public", "mascots")

INK = "#1B1B1B"

# Adobe-style: one distinct brand color per product.
COLORS = {
    "materialist": "#CE8900",  # oklch amber (L.68 C.17 h80)
    "stockroom": "#985531",  # oklch chocolate brown (L.52 C.11 h55)
    "stagepoint": "#C90042",  # oklch crimson red (L.52 C.22 h22)
    "orderly": "#42997B",  # oklch sea green (L.60 C.17 h145)
    "elixer": "#8B61E3",  # oklch purple (L.60 C.19 h295)
    "cutline": "#00ABAD",  # oklch cyan (L.65 C.16 h195)
    "sublium": "#076BE3",  # oklch true blue (L.55 C.20 h258)
    "threadcount": "#D655BE",  # oklch magenta (L.65 C.20 h335)
    "wardrobe": "#BF4215",  # oklch terracotta (L.55 C.17 h38)
    "thrivepoint": "#A2B000",  # oklch lime (L.72 C.17 h115)
}

BAYER8 = [
    0, 32, 8, 40, 2, 34, 10, 42,
    48, 16, 56, 24, 50, 18, 58, 26,
    12, 44, 4, 36, 14, 46, 6, 38,
    60, 28, 52, 20, 62, 30, 54, 22,
    3, 35, 11, 43, 1, 33, 9, 41,
    51, 19, 59, 27, 49, 17, 57, 25,
    15, 47, 7, 39, 13, 45, 5, 37,
    63, 31, 55, 23, 61, 29, 53, 21,
]

SIZE = 880


def hex_to_rgb(h: str):
    h = h.lstrip("#")
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def dither_slug(slug: str) -> str:
    if slug not in COLORS:
        raise SystemExit(f"unknown slug: {slug}")
    matches = sorted(glob.glob(os.path.join(SRC_DIR, f"media-generation-{slug}-*")))
    if not matches:
        raise SystemExit(f"no source art for slug: {slug}")
    src = matches[0]
    img = Image.open(src).convert("L")
    # Square crop, then resize — keeps every mascot a uniform tile.
    side = min(img.size)
    left = (img.size[0] - side) // 2
    top = (img.size[1] - side) // 2
    img = img.crop((left, top, left + side, top + side)).resize(
        (SIZE, SIZE), Image.LANCZOS
    )

    ink = hex_to_rgb(INK)
    paper = hex_to_rgb(COLORS[slug])
    src_px = img.load()
    out = Image.new("RGB", (SIZE, SIZE))
    out_px = out.load()
    for y in range(SIZE):
        row = (y & 7) * 8
        for x in range(SIZE):
            threshold = (BAYER8[row + (x & 7)] + 0.5) / 64.0 * 255.0
            out_px[x, y] = ink if src_px[x, y] < threshold else paper

    os.makedirs(OUT_DIR, exist_ok=True)
    dst = os.path.join(OUT_DIR, f"{slug}.png")
    out.save(dst, optimize=True)
    return dst


def main() -> None:
    slugs = sys.argv[1:] or sorted(COLORS)
    for slug in slugs:
        dst = dither_slug(slug)
        print(f"{slug}: {dst} ({INK} on {COLORS[slug]})")


if __name__ == "__main__":
    main()
