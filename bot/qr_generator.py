"""
Thematic QR Code Generator for Birthday Celebration Bot
Supports: Heart ❤️, Cake 🎂, Balloon 🎈, and Crown 👑
"""

import math
import qrcode
from PIL import Image, ImageDraw, ImageFont
import io
import random

# ==========================================
# VECTOR DRAWING HELPERS FOR CENTER ICONS
# ==========================================

def _draw_heart(draw, cx, cy, size, color):
    pts = []
    steps = 60
    for i in range(steps):
        t = (i / steps) * 2 * math.pi
        x = 16 * (math.sin(t) ** 3)
        y = -(13 * math.cos(t) - 5 * math.cos(2*t) - 2 * math.cos(3*t) - math.cos(4*t))
        nx = x / 16.0
        ny = y / 13.0
        pts.append((int(cx + nx * size * 0.5), int(cy + ny * size * 0.5)))
    if len(pts) >= 3:
        draw.polygon(pts, fill=color)

def _draw_cake(draw, cx, cy, size, color):
    # Base tier
    w1, h1 = size * 0.7, size * 0.3
    draw.rounded_rectangle([cx - w1/2, cy, cx + w1/2, cy + h1], radius=4, fill=color)
    # Top tier
    w2, h2 = size * 0.5, size * 0.25
    draw.rounded_rectangle([cx - w2/2, cy - h2, cx + w2/2, cy], radius=3, fill=color)
    # Candle
    cw, ch = size * 0.06, size * 0.25
    draw.rectangle([cx - cw/2, cy - h2 - ch, cx + cw/2, cy - h2], fill=(255, 200, 100))
    # Flame
    fw, fh = size * 0.1, size * 0.15
    draw.ellipse([cx - fw/2, cy - h2 - ch - fh, cx + fw/2, cy - h2 - ch], fill=(255, 100, 0))

def _draw_balloon(draw, cx, cy, size, color):
    # Balloon body
    bw, bh = size * 0.6, size * 0.7
    draw.ellipse([cx - bw/2, cy - size/2, cx + bw/2, cy - size/2 + bh], fill=color)
    # Knot
    kw, kh = size * 0.15, size * 0.15
    draw.polygon([
        (cx, cy - size/2 + bh),
        (cx - kw/2, cy - size/2 + bh + kh),
        (cx + kw/2, cy - size/2 + bh + kh)
    ], fill=color)
    # String
    draw.line([(cx, cy - size/2 + bh + kh), (cx, cy + size/2)], fill=(200, 200, 200), width=2)

def _draw_crown(draw, cx, cy, size, color):
    w, h = size * 0.8, size * 0.5
    y_base = cy + h/2
    y_top = cy - h/2
    
    # Base rectangle
    draw.rectangle([cx - w/2, y_base - h*0.2, cx + w/2, y_base], fill=color)
    
    # Points
    pts = [
        (cx - w/2, y_base - h*0.2), # left base
        (cx - w/2 - w*0.1, y_top + h*0.2), # left tip
        (cx - w*0.25, y_base - h*0.2), # mid left base
        (cx, y_top - h*0.1), # center top tip
        (cx + w*0.25, y_base - h*0.2), # mid right base
        (cx + w/2 + w*0.1, y_top + h*0.2), # right tip
        (cx + w/2, y_base - h*0.2) # right base
    ]
    draw.polygon(pts, fill=color)
    
    # Jewels
    draw.ellipse([cx - w/2 - w*0.15, y_top + h*0.1, cx - w/2 - w*0.05, y_top + h*0.3], fill=(255,255,255))
    draw.ellipse([cx - w*0.05, y_top - h*0.2, cx + w*0.05, y_top], fill=(255,255,255))
    draw.ellipse([cx + w/2 + w*0.05, y_top + h*0.1, cx + w/2 + w*0.15, y_top + h*0.3], fill=(255,255,255))

# ==========================================
# THEME DEFINITIONS
# ==========================================

THEMES = {
    "heart": {
        "fill": (255, 45, 117),    # Pink
        "edge": (180, 0, 255),     # Purple
        "back": (255, 255, 255),
        "center_shape": "heart",
        "center_fill": (255, 45, 117),
        "center_bg": (255, 240, 245), # Light pink background behind heart
        "mod": "circle"
    },
    "cake": {
        "fill": (0, 212, 255),     # Cyan
        "edge": (255, 45, 117),    # Pink
        "back": (255, 255, 255),
        "center_shape": "cake",
        "center_fill": (123, 47, 247), # Purple cake
        "center_bg": (240, 250, 255),
        "mod": "rounded"
    },
    "balloon": {
        "fill": (255, 100, 0),     # Orange
        "edge": (255, 200, 0),     # Yellow
        "back": (255, 255, 255),
        "center_shape": "balloon",
        "center_fill": (255, 90, 90),  # Reddish balloon
        "center_bg": (255, 250, 240),
        "mod": "circle"
    },
    "crown": {
        "fill": (255, 215, 0),     # Gold
        "edge": (218, 165, 32),    # Dark Gold
        "back": (20, 15, 25),      # Charcoal Black Luxury background
        "center_shape": "crown",
        "center_fill": (255, 215, 0), # Gold Crown
        "center_bg": (0, 0, 0),    # Black circle behind crown
        "mod": "square"
    }
}

def generate_qr(link: str, name: str = "") -> bytes:
    """ Generate a premium shaped QR code. Randomly picks one of 4 rich themes. """
    theme_key = random.choice(list(THEMES.keys()))
    t = THEMES[theme_key]

    qr = qrcode.QRCode(
        version=5, # Slightly denser to accommodate 30% error correction cleanly
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=3,
    )
    qr.add_data(link)
    qr.make(fit=True)

    try:
        from qrcode.image.styledpil import StyledPilImage
        from qrcode.image.styles.colormasks import RadialGradiantColorMask
        from qrcode.image.styles.moduledrawers import CircleModuleDrawer, RoundedModuleDrawer, SquareModuleDrawer

        if t["mod"] == "circle":
            drawer = CircleModuleDrawer()
        elif t["mod"] == "rounded":
            drawer = RoundedModuleDrawer(radius_ratio=0.5)
        else:
            drawer = SquareModuleDrawer()

        img = qr.make_image(
            image_factory=StyledPilImage,
            module_drawer=drawer,
            color_mask=RadialGradiantColorMask(
                center_color=t["fill"],
                edge_color=t["edge"],
                back_color=t["back"]
            )
        )
    except Exception as e:
        # Fallback if styling fails
        print(f"QR styling failed: {e}")
        fill_hex = "#{:02X}{:02X}{:02X}".format(*t["fill"])
        back_hex = "#{:02X}{:02X}{:02X}".format(*t["back"])
        img = qr.make_image(fill_color=fill_hex, back_color=back_hex)

    img = img.convert("RGBA")
    qr_size = img.size[0]

    # --- Draw Center Icon ---
    # Center bounds (25% of width)
    center_size = qr_size // 4
    overlay = Image.new("RGBA", (center_size, center_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Background circle for icon to stand out
    bg_color = t["center_bg"] + (255,) if len(t["center_bg"]) == 3 else t["center_bg"]
    draw.ellipse([2, 2, center_size - 3, center_size - 3], fill=bg_color)
    
    # Outer ring
    ring_color = t["center_fill"] + (255,) if len(t["center_fill"]) == 3 else t["center_fill"]
    draw.ellipse([2, 2, center_size - 3, center_size - 3], outline=ring_color, width=3)

    hcx = center_size // 2
    hcy = center_size // 2
    icon_size = center_size * 0.65

    if t["center_shape"] == "heart":
        _draw_heart(draw, hcx, hcy, icon_size, ring_color)
    elif t["center_shape"] == "cake":
        _draw_cake(draw, hcx, hcy, icon_size, ring_color)
    elif t["center_shape"] == "balloon":
        _draw_balloon(draw, hcx, hcy, icon_size, ring_color)
    elif t["center_shape"] == "crown":
        _draw_crown(draw, hcx, hcy, icon_size, ring_color)

    pos = ((qr_size - center_size) // 2, (qr_size - center_size) // 2)
    img.paste(overlay, pos, overlay)

    # --- Draw Name Caption ---
    if name:
        caption_height = 60
        base_bg = t["back"] + (255,) if len(t["back"]) == 3 else t["back"]
        new_img = Image.new("RGBA", (qr_size, qr_size + caption_height), base_bg)
        new_img.paste(img, (0, 0))
        draw2 = ImageDraw.Draw(new_img)

        try:
            # Arial is usually available on Windows. Will fallback to default on Linux.
            font = ImageFont.truetype("arial.ttf", 22)
        except OSError:
            font = ImageFont.load_default()

        # Emoji mapping for text
        emoji_map = {"heart": "❤", "cake": "🥮", "balloon": "🎈", "crown": "♛"}
        caption = f"{emoji_map.get(t['center_shape'], '')} {name}'s Birthday Surprise"
        
        try:
            bbox = draw2.textbbox((0, 0), caption, font=font)
            tw = bbox[2] - bbox[0]
        except Exception:
            tw = len(caption) * 11

        text_color = (255, 255, 255, 255) if t["back"][0] < 50 else (80, 80, 80, 255)
        draw2.text(((qr_size - tw) // 2, qr_size + 15), caption, fill=text_color, font=font)
        
        img = new_img

    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return buf.getvalue()

def generate_qr_simple(link: str) -> bytes:
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
