// Preview page — shows generated design, QR code, song generator, and share options

import { getBirthday } from '../utils/storage.js';
import { applyTheme, getTheme } from '../utils/themes.js';
import { generateMessage, generatePoem } from '../utils/messages.js';
import { HeartCollage } from '../components/heartCollage.js';
import { generateQR, downloadQR } from '../components/qrGenerator.js';
import { renderShareButtons } from '../components/shareButtons.js';
import { renderSongSection } from '../components/songGenerator.js';

export function renderPreview(container, id) {
  const data = getBirthday(id);

  if (!data) {
    container.innerHTML = `
      <div class="form-page" style="display:flex;align-items:center;justify-content:center;min-height:100vh;">
        <div class="glass-card text-center" style="max-width:400px;">
          <h2 style="margin-bottom: 16px;">Birthday Not Found 😢</h2>
          <p style="color:var(--text-secondary); margin-bottom: 24px;">This birthday page doesn't exist or has been removed.</p>
          <button class="btn btn-primary" onclick="window.location.hash='#/create'">Create New Birthday</button>
        </div>
      </div>
    `;
    return;
  }

  // Apply theme
  const theme = applyTheme(data.theme);

  // Generate message
  const autoMessage = data.customMessage || generateMessage(data.name, data.relationship, data.mood);
  const poem = generatePoem(data.name);

  // Build page URLs
  const baseUrl = window.location.origin + window.location.pathname;
  const birthdayUrl = `${baseUrl}#/birthday/${id}`;
  const surpriseUrl = `${baseUrl}#/birthday/${id}/surprise`;

  container.innerHTML = `
    <div class="preview-page">
      <div class="container">
        <button class="form-back" id="preview-back">← Back to Form</button>

        <div class="preview-header">
          <h1 class="text-gradient">Your Birthday Surprise is Ready! 🎉</h1>
          <p style="color: var(--text-secondary);">Preview the design, then share the magic</p>
        </div>

        <div class="preview-layout">
          <!-- Left: Birthday Card -->
          <div>
            <div class="glass-card-strong birthday-card-preview" id="birthday-card">
              <div style="position:relative; z-index:2; padding: 24px;">
                <div style="text-align:center; margin-bottom: 20px; font-size: 3rem;">
                  ${theme.balloonColors.slice(0, 3).join(' ')}
                </div>
                <h2 class="birthday-card-name text-gradient">Happy Birthday</h2>
                <h2 class="birthday-card-name" style="font-size: clamp(2rem, 5vw, 3rem);">${data.name}!</h2>
                
                <div id="heart-collage-area" class="heart-collage-container" style="width:100%; max-width:350px; margin: 20px auto; aspect-ratio:1;"></div>
                
                <p class="birthday-card-message">${autoMessage}</p>
              </div>
            </div>

            ${data.photos && data.photos.length > 0 ? `
            <div style="text-align:center; margin-top: var(--space-md);">
              <button class="btn btn-secondary download-collage-btn" id="download-collage">
                📥 Download Heart Collage
              </button>
            </div>
            ` : ''}

            <!-- Poem -->
            <div class="glass-card" style="margin-top: var(--space-lg); text-align: center;">
              <p class="font-script" style="font-size: 1.125rem; color: var(--text-secondary); line-height: 2; white-space: pre-line;">${poem}</p>
            </div>

            <!-- Song Generator -->
            <div id="song-section"></div>
          </div>

          <!-- Right: QR & Share -->
          <div>
            <div class="qr-section">
              <h3 style="font-size: 1.25rem; margin-bottom: var(--space-lg);">📱 QR Code</h3>
              <div id="qr-container"></div>

              <div class="qr-actions" style="margin-top: var(--space-lg);">
                <button class="btn btn-primary" id="download-qr">📥 Download QR</button>
                <button class="btn btn-secondary" id="view-celebration">🎆 View Celebration</button>
              </div>
            </div>

            <div id="share-container" style="margin-top: var(--space-xl);"></div>

            <!-- Secret Surprise Link -->
            <div class="glass-card" style="margin-top: var(--space-lg);">
              <h4 style="font-size: 0.9375rem; margin-bottom: var(--space-sm); color: var(--accent-1);">
                🔐 Viral Surprise Mode
              </h4>
              <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: var(--space-sm);">
                Share the countdown link — celebration unlocks automatically!
              </p>
              <div style="display:flex; flex-direction:column; gap: 8px;">
                <div class="link-preview" style="margin:0;">
                  <span>⏱</span>
                  <code style="color:var(--accent-1); font-size:0.75rem; word-break:break-all;">${birthdayUrl}</code>
                </div>
                <div class="link-preview" style="margin:0;">
                  <span>🔓</span>
                  <code style="color:var(--accent-3); font-size:0.75rem; word-break:break-all;">${surpriseUrl}</code>
                </div>
              </div>
              <div style="display:flex; gap:8px; margin-top: var(--space-md);">
                <button class="btn btn-secondary" id="share-countdown-invite" style="flex:1; font-size:0.8125rem; padding:10px;">
                  ✈️ Send Countdown Invite
                </button>
                <button class="btn btn-secondary" id="copy-surprise-link" style="flex:1; font-size:0.8125rem; padding:10px;">
                  🔗 Copy Secret Link
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="preview-footer">
          <div class="preview-footer-buttons">
            <button class="btn btn-secondary" onclick="window.location.hash='#/create'">🔄 Create Another</button>
            <button class="btn btn-primary" id="open-celebration">🎉 Open Celebration Page</button>
          </div>
          ${data.photos && data.photos.length > 0 ? `
          <div style="text-align:center; margin-top: var(--space-md);">
            <button class="btn btn-secondary" id="explore-galaxy-preview"
              style="background:linear-gradient(135deg,#1a0533,#0f0f2e); border:1px solid rgba(123,47,247,0.4);">
              🚀 Explore Memory Galaxy
            </button>
          </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  // Back button
  document.getElementById('preview-back').addEventListener('click', () => {
    window.location.hash = '#/create';
  });

  // Render heart collage with selected style
  let collageInstance = null;
  if (data.photos && data.photos.length > 0) {
    setTimeout(() => {
      const collageArea = document.getElementById('heart-collage-area');
      if (collageArea) {
        collageInstance = new HeartCollage(collageArea, data.photos, {
          cellSize: 45,
          style: data.collageStyle || 'classic'
        });
        collageInstance.render();
      }
    }, 300);
  }

  // Download heart collage
  const downloadCollageBtn = document.getElementById('download-collage');
  if (downloadCollageBtn) {
    downloadCollageBtn.addEventListener('click', () => {
      if (collageInstance) {
        collageInstance.downloadAsImage(`${data.name}-birthday-collage.png`);
      }
    });
  }

  // Generate QR code
  setTimeout(() => {
    generateQR(document.getElementById('qr-container'), birthdayUrl);
  }, 200);

  // Render share buttons
  renderShareButtons(document.getElementById('share-container'), birthdayUrl,
    `🎂 A special birthday surprise for ${data.name} is waiting!`
  );

  // Render song generator
  renderSongSection(document.getElementById('song-section'), data);

  // Download QR
  document.getElementById('download-qr').addEventListener('click', downloadQR);

  // View celebration
  document.getElementById('view-celebration').addEventListener('click', () => {
    window.location.hash = `#/birthday/${id}`;
  });

  document.getElementById('open-celebration').addEventListener('click', () => {
    window.location.hash = `#/birthday/${id}`;
  });

  // Explore Galaxy
  const galaxyPreviewBtn = document.getElementById('explore-galaxy-preview');
  if (galaxyPreviewBtn) {
    galaxyPreviewBtn.addEventListener('click', () => {
      window.location.hash = `#/galaxy/${id}`;
    });
  }

  // Send countdown invite
  document.getElementById('share-countdown-invite').addEventListener('click', () => {
    const text = encodeURIComponent(`🎂 You're invited to a birthday countdown!\n\nThe celebration for ${data.name} starts soon.\n\nJoin here:\n${birthdayUrl}`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(birthdayUrl)}&text=${text}`, '_blank');
  });

  // Copy surprise link
  document.getElementById('copy-surprise-link').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(surpriseUrl);
      const btn = document.getElementById('copy-surprise-link');
      btn.textContent = '✓ Copied!';
      setTimeout(() => { btn.textContent = '🔗 Copy Secret Link'; }, 2000);
    } catch { /* fallback */ }
  });
}
