// Share buttons component

export function renderShareButtons(container, url, message = '') {
    const encodedUrl = encodeURIComponent(url);
    const encodedMessage = encodeURIComponent(message || '🎉 A special birthday surprise is waiting!');
    const fullMessage = encodeURIComponent(`${message || '🎉 A special birthday surprise is waiting!'}\n\nOpen the celebration here:\n${url}`);

    container.innerHTML = `
    <div class="share-section">
      <h3 class="text-gradient">Share the Surprise ✨</h3>
      <div class="share-buttons">
        <button class="share-btn share-btn-telegram" id="share-telegram" title="Share on Telegram">
          <span class="share-btn-icon">✈️</span>
          <span>Share on Telegram</span>
        </button>
        <button class="share-btn share-btn-whatsapp" id="share-whatsapp" title="Share on WhatsApp">
          <span class="share-btn-icon">💬</span>
          <span>Share on WhatsApp</span>
        </button>
        <button class="share-btn share-btn-copy" id="share-copy" title="Copy link">
          <span class="share-btn-icon">🔗</span>
          <span>Copy Link</span>
        </button>
      </div>

      <div class="link-preview" style="margin-top: var(--space-lg);">
        <span>🔗</span>
        <code id="share-link-text">${url}</code>
      </div>
    </div>
  `;

    // Telegram share
    document.getElementById('share-telegram').addEventListener('click', () => {
        window.open(
            `https://t.me/share/url?url=${encodedUrl}&text=${encodedMessage}`,
            '_blank'
        );
    });

    // WhatsApp share
    document.getElementById('share-whatsapp').addEventListener('click', () => {
        window.open(
            `https://wa.me/?text=${fullMessage}`,
            '_blank'
        );
    });

    // Copy link
    document.getElementById('share-copy').addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(url);
            const btn = document.getElementById('share-copy');
            const originalText = btn.querySelector('span:last-child').textContent;
            btn.querySelector('span:last-child').textContent = 'Copied! ✓';
            btn.style.borderColor = '#00ff88';
            setTimeout(() => {
                btn.querySelector('span:last-child').textContent = originalText;
                btn.style.borderColor = '';
            }, 2000);
        } catch {
            // Fallback
            const input = document.createElement('input');
            input.value = url;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
        }
    });
}

export function renderInlineShareButtons(container, url) {
    container.innerHTML = `
    <div class="celebration-share-buttons">
      <button class="btn btn-primary" onclick="window.open('https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent('🎉 A birthday surprise just unlocked!')}', '_blank')">
        ✈️ Share on Telegram
      </button>
      <button class="btn btn-secondary" onclick="window.open('https://wa.me/?text=${encodeURIComponent('🎉 A birthday surprise just unlocked!\n\n' + url)}', '_blank')">
        💬 Share on WhatsApp
      </button>
      <button class="btn btn-secondary" id="inline-copy-btn">
        🔗 Copy Link
      </button>
    </div>
  `;

    setTimeout(() => {
        const copyBtn = document.getElementById('inline-copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(url);
                    copyBtn.textContent = '✓ Copied!';
                    setTimeout(() => { copyBtn.textContent = '🔗 Copy Link'; }, 2000);
                } catch {
                    /* fallback silently */
                }
            });
        }
    }, 100);
}
