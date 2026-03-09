"""
QR Code Generator with multiple heart/love styles.
Each call picks a random style — different design every time.
"""

import random
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont
import io


# ─── Style definitions ────────────────────────────────────────────────────────

STYLES = [
    {
        "name": "heart_pink",
        "fill": (255, 45, 117),
        "back": (255, 255, 255),
        "center_fill": (255, 45, 117),
        "center_bg": (255, 255, 255),
    },
    {
        "name": "heart_purple",
        "fill": (123, 47, 247),
        "back": (255, 255, 255),
        "center_fill": (123, 47, 247),
        "center_bg": (255, 255, 255),
    },
    {
        "name": "heart_gradient_dark",
        "fill": (180, 0, 90),
        "back": (20, 10, 30),
        "center_fill": (255, 45, 117),
        "center_bg": (30, 10, 40),
    },
    {
        "name": "heart_gold",
        "fill": (218, 165, 32),
        "back": (255, 255, 255),
        "center_fill": (255, 215, 0),
        "center_bg": (255, 255, 255),
    },
    {
        "name": "heart_teal",
        "fill": (0, 180, 180),
        "back": (255, 255, 255),
        "center_fill": (0, 212, 255),
        "center_bg": (255, 255, 255),
    },
]


def _draw_heart(draw, cx, cy, size, color):
    """Draw a heart shape centered at (cx, cy) with given size."""
    # Sample heart using parametric equations
    pts = []
    steps = 60
    for i in range(steps):
        t = (i / steps) * 2 * math.pi
        x = 16 * (math.sin(t) ** 3)
        y = -(13 * math.cos(t) - 5 * math.cos(2*t) - 2 * math.cos(3*t) - math.cos(4*t))
        # Normalize to [-1, 1] and scale
        nx = x / 16.0
        ny = y / 13.0
        pts.append((
            int(cx + nx * size * 0.5),
            int(cy + ny * size * 0.5),
        ))
    if len(pts) >= 3:
        draw.polygon(pts, fill=color)


def generate_qr(link: str, name: str = "") -> bytes:
    """
    Generate a styled QR code with a heart center.
    Picks a random style each time.
    Returns PNG image bytes.
    """
    style = random.choice(STYLES)

    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=3,
    )
    qr.add_data(link)
    qr.make(fit=True)

    # Try styled gradient first, fall back to simple colored QR
    try:
        from qrcode.image.styledpil import StyledPilImage
        from qrcode.image.styles.colormasks import RadialGradiantColorMask

        fill = style["fill"]
        back = style["back"]
        # Make a lighter edge color by blending with white
        edge = tuple(min(255, int(c * 0.5 + 127)) for c in fill)

        img = qr.make_image(
            image_factory=StyledPilImage,
            color_mask=RadialGradiantColorMask(
                center_color=fill,
                edge_color=edge,
                back_color=back,
            ),
        )
    except Exception:
        fill_hex = "#{:02X}{:02X}{:02X}".format(*style["fill"])
        back_hex = "#{:02X}{:02X}{:02X}".format(*style["back"])
        img = qr.make_image(fill_color=fill_hex, back_color=back_hex)

    img = img.convert("RGBA")
    qr_size = img.size[0]

    # ─── Heart overlay in center ────────────────────────────────────────────
    center_size = qr_size // 5
    overlay = Image.new("RGBA", (center_size, center_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # White/dark circle background
    bg = style["center_bg"] + (255,) if len(style["center_bg"]) == 3 else style["center_bg"]
    draw.ellipse(
        [2, 2, center_size - 3, center_size - 3],
        fill=bg,
    )

    # Heart
    hcx = center_size // 2
    hcy = center_size // 2
    heart_color = style["center_fill"] + (255,) if len(style["center_fill"]) == 3 else style["center_fill"]
    _draw_heart(draw, hcx, hcy, center_size - 10, heart_color)

    pos = ((qr_size - center_size) // 2, (qr_size - center_size) // 2)
    img.paste(overlay, pos, overlay)

    # ─── Name caption ────────────────────────────────────────────────────────
    if name:
        caption_height = 56
        base_bg = style["back"] + (255,)
        new_img = Image.new("RGBA", (qr_size, qr_size + caption_height), base_bg)
        new_img.paste(img, (0, 0))
        draw2 = ImageDraw.Draw(new_img)

        try:
            font = ImageFont.truetype("arial.ttf", 20)
        except OSError:
            font = ImageFont.load_default()

        caption = f"🎂 {name}'s Birthday Surprise"
        try:
            bbox = draw2.textbbox((0, 0), caption, font=font)
            tw = bbox[2] - bbox[0]
        except Exception:
            tw = len(caption) * 10  # rough fallback

        text_color = (80, 80, 80, 255)
        draw2.text(
            ((qr_size - tw) // 2, qr_size + 14),
            caption,
            fill=text_color,
            font=font,
        )
        img = new_img

    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return buf.getvalue()


def generate_qr_simple(link: str) -> bytes:
    """Generate a simple colored QR code. Returns PNG bytes."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=3,
    )
    qr.add_data(link)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#FF2D75", back_color="white")

    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return buf.getvalue()
