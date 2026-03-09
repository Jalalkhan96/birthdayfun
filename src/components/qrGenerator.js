// QR Code generation with styling
import QRCode from 'qrcode';

export async function generateQR(container, url, options = {}) {
    const size = options.size || 220;
    const colorDark = options.colorDark || '#1a1a2e';
    const colorLight = options.colorLight || '#ffffff';

    container.innerHTML = `
    <div class="qr-card glass-card">
      <div class="qr-wrapper" id="qr-wrapper">
        <canvas id="qr-canvas"></canvas>
        <div class="qr-heart-overlay">💖</div>
      </div>
      <div class="qr-label">Scan to open the birthday surprise</div>
    </div>
  `;

    const canvas = document.getElementById('qr-canvas');

    try {
        await QRCode.toCanvas(canvas, url, {
            width: size,
            margin: 2,
            color: {
                dark: colorDark,
                light: colorLight,
            },
            errorCorrectionLevel: 'H', // High for logo overlay
        });

        // Add glow effect
        const wrapper = document.getElementById('qr-wrapper');
        if (wrapper) {
            wrapper.style.boxShadow = `0 0 30px rgba(255, 45, 117, 0.15)`;
        }
    } catch (err) {
        console.error('QR generation failed:', err);
        container.innerHTML = '<p style="color: var(--text-muted);">Failed to generate QR code</p>';
    }
}

export function downloadQR() {
    const canvas = document.getElementById('qr-canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'birthday-surprise-qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
