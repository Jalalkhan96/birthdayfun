"""
QR Code Generator with styled heart logo overlay.
Generates QR codes for birthday celebration links.
"""

import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.colormasks import RadialGradiantColorMask
from PIL import Image, ImageDraw, ImageFont
import io


def generate_qr(link: str, name: str = "") -> bytes:
    """
    Generate a styled QR code with a heart center overlay.
    Returns PNG image bytes.
    """
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=3,
    )
    qr.add_data(link)
    qr.make(fit=True)

    # Create QR with gradient colors
    try:
        img = qr.make_image(
            image_factory=StyledPilImage,
            color_mask=RadialGradiantColorMask(
                center_color=(255, 45, 117),
                edge_color=(123, 47, 247),
                back_color=(255, 255, 255),
            ),
        )
    except Exception:
        # Fallback to simple QR
        img = qr.make_image(fill_color="#FF2D75", back_color="white")

    img = img.convert("RGBA")
    qr_size = img.size[0]

    # Draw heart emoji in center
    center_size = qr_size // 5
    overlay = Image.new("RGBA", (center_size, center_size), (255, 255, 255, 255))
    draw = ImageDraw.Draw(overlay)

    # White circle background
    draw.ellipse([0, 0, center_size - 1, center_size - 1], fill=(255, 255, 255, 255))

    # Draw heart shape
    heart_margin = center_size // 5
    heart_size = center_size - heart_margin * 2
    cx, cy = center_size // 2, center_size // 2

    # Simple heart using two circles and a triangle
    r = heart_size // 4
    draw.ellipse(
        [cx - heart_size // 3, cy - r - heart_margin // 2,
         cx, cy + r // 2 - heart_margin // 2],
        fill=(255, 45, 117, 255)
    )
    draw.ellipse(
        [cx, cy - r - heart_margin // 2,
         cx + heart_size // 3, cy + r // 2 - heart_margin // 2],
        fill=(255, 45, 117, 255)
    )
    draw.polygon(
        [
            (cx - heart_size // 3, cy - heart_margin // 4),
            (cx + heart_size // 3, cy - heart_margin // 4),
            (cx, cy + heart_size // 2),
        ],
        fill=(255, 45, 117, 255)
    )

    # Paste overlay in center
    pos = ((qr_size - center_size) // 2, (qr_size - center_size) // 2)
    img.paste(overlay, pos, overlay)

    # Add name caption below QR if provided
    if name:
        # Expand canvas for caption
        caption_height = 50
        new_img = Image.new("RGBA", (qr_size, qr_size + caption_height), (255, 255, 255, 255))
        new_img.paste(img, (0, 0))
        draw2 = ImageDraw.Draw(new_img)

        try:
            font = ImageFont.truetype("arial.ttf", 20)
        except OSError:
            font = ImageFont.load_default()

        caption = f"🎂 {name}'s Birthday Surprise"
        bbox = draw2.textbbox((0, 0), caption, font=font)
        tw = bbox[2] - bbox[0]
        draw2.text(
            ((qr_size - tw) // 2, qr_size + 10),
            caption,
            fill=(100, 100, 100, 255),
            font=font,
        )
        img = new_img

    # Convert to bytes
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return buf.getvalue()


def generate_qr_simple(link: str) -> bytes:
    """Generate a simple QR code. Returns PNG bytes."""
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
