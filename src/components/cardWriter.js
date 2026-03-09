// Card Writer AI — uses Gemini API to generate birthday card messages

import { GoogleGenAI } from '@google/genai';

const TONES = [
    { id: 'heartwarming', label: 'Heartwarming', emoji: '💖' },
    { id: 'funny', label: 'Funny', emoji: '😂' },
    { id: 'poetic', label: 'Poetic', emoji: '📝' },
    { id: 'short', label: 'Short & Sweet', emoji: '✨' },
    { id: 'formal', label: 'Formal', emoji: '🎩' },
];

export function renderCardWriter(container) {
    container.innerHTML = `
    <div class="glass-card-strong ai-tool-card" id="card-writer-card">
      <div class="ai-tool-header">
        <span class="ai-tool-icon">✍️</span>
        <div>
          <h3 class="ai-tool-title">Card Writer AI</h3>
          <p class="ai-tool-subtitle">Perfect words for every birthday</p>
        </div>
      </div>

      <div class="ai-tool-form">
        <div class="ai-tool-row">
          <div class="ai-tool-field">
            <label>Recipient Name</label>
            <input type="text" id="card-name" class="form-input" placeholder="e.g. Sarah" />
          </div>
          <div class="ai-tool-field">
            <label>Relationship</label>
            <select id="card-relationship" class="form-input">
              <option value="friend">Friend</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="girlfriend">Girlfriend</option>
              <option value="boyfriend">Boyfriend</option>
              <option value="colleague">Colleague</option>
              <option value="boss">Boss</option>
            </select>
          </div>
        </div>

        <div class="ai-tool-field">
          <label>Tone</label>
          <div class="tone-selector" id="tone-selector">
            ${TONES.map(t => `
              <button type="button" class="tone-btn ${t.id === 'heartwarming' ? 'active' : ''}" data-tone="${t.id}">
                ${t.emoji} ${t.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="ai-tool-apikey" id="card-apikey-section">
          <label>Gemini API Key</label>
          <input type="password" id="card-apikey" class="form-input" placeholder="Enter your API key"
            value="${localStorage.getItem('gemini_api_key') || ''}" />
        </div>

        <button class="btn btn-primary" id="card-generate" style="width:100%;">
          ✍️ Write Birthday Card
        </button>
      </div>

      <div id="card-results" style="display:none;"></div>
    </div>
  `;

    // Tone selection
    let selectedTone = 'heartwarming';
    document.getElementById('tone-selector').addEventListener('click', (e) => {
        const btn = e.target.closest('.tone-btn');
        if (!btn) return;
        document.querySelectorAll('.tone-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedTone = btn.dataset.tone;
    });

    // Generate
    document.getElementById('card-generate').addEventListener('click', async () => {
        const name = document.getElementById('card-name').value.trim();
        const relationship = document.getElementById('card-relationship').value;
        const apiKey = document.getElementById('card-apikey').value.trim();

        if (!name) { alert('Please enter a name!'); return; }
        if (!apiKey) { alert('Please enter your Gemini API key!'); return; }

        localStorage.setItem('gemini_api_key', apiKey);

        const btn = document.getElementById('card-generate');
        const results = document.getElementById('card-results');
        btn.disabled = true;
        btn.textContent = '⏳ Writing...';
        results.style.display = 'none';

        try {
            const ai = new GoogleGenAI({ apiKey });
            const toneLabel = TONES.find(t => t.id === selectedTone)?.label || 'Heartwarming';

            const prompt = `Write a beautiful birthday card message for someone named "${name}" who is my ${relationship}.

Tone: ${toneLabel}

Requirements:
- If heartwarming: emotional, touching, mention memories and love
- If funny: witty, include a lighthearted joke, keep it warm
- If poetic: use metaphors, rhythm, may rhyme
- If short & sweet: 2-3 sentences max, impactful
- If formal: professional but warm, respectful

Write ONLY the card message, nothing else. No quotes around it. Start with "Dear ${name}," and end with a warm closing.`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: prompt,
            });

            const text = response.text || '';

            results.innerHTML = `
        <div class="card-result glass-card">
          <div class="card-result-text">${text.replace(/\n/g, '<br>')}</div>
          <div class="card-result-actions">
            <button class="btn btn-secondary" id="card-copy" style="flex:1;">📋 Copy</button>
            <button class="btn btn-secondary" id="card-share" style="flex:1;">✈️ Share</button>
          </div>
        </div>
        <button class="btn btn-secondary" id="card-regenerate" style="width:100%; margin-top:8px; font-size:0.8125rem;">
          🔄 Write Another Version
        </button>
      `;
            results.style.display = 'block';

            document.getElementById('card-copy').addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(text);
                    document.getElementById('card-copy').textContent = '✓ Copied!';
                    setTimeout(() => document.getElementById('card-copy').textContent = '📋 Copy', 2000);
                } catch { }
            });

            document.getElementById('card-share').addEventListener('click', () => {
                const encoded = encodeURIComponent(text);
                window.open(`https://t.me/share/url?url=&text=${encoded}`, '_blank');
            });

            document.getElementById('card-regenerate').addEventListener('click', () => {
                document.getElementById('card-generate').click();
            });

        } catch (err) {
            results.innerHTML = `<div class="ai-error">❌ ${err.message || 'Failed to generate.'}</div>`;
            results.style.display = 'block';
        }

        btn.disabled = false;
        btn.textContent = '✍️ Write Birthday Card';
    });
}
