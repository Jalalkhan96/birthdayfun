// Gift Finder AI — uses shared Gemini API key, no user input needed

import { GoogleGenAI } from '@google/genai';
import { getGeminiKey } from '../utils/geminiConfig.js';

export function renderGiftFinder(container) {
  container.innerHTML = `
    <div class="glass-card-strong ai-tool-card" id="gift-finder-card">
      <div class="ai-tool-header">
        <span class="ai-tool-icon">🎁</span>
        <div>
          <h3 class="ai-tool-title">Gift Finder AI</h3>
          <p class="ai-tool-subtitle">Find the perfect present in seconds</p>
        </div>
      </div>

      <div class="ai-tool-form">
        <div class="ai-tool-row">
          <div class="ai-tool-field">
            <label>AGE</label>
            <input type="number" id="gift-age" class="form-input" placeholder="e.g. 21" min="1" max="120" />
          </div>
          <div class="ai-tool-field">
            <label>GENDER</label>
            <select id="gift-gender" class="form-input styled-select">
              <option value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="ai-tool-field">
          <label>INTERESTS</label>
          <input type="text" id="gift-interests" class="form-input" placeholder="e.g. cooking, gaming, music" />
        </div>

        <button class="btn btn-primary" id="gift-generate" style="width:100%; margin-top:8px;">
          🎁 Get Gift Ideas
        </button>
      </div>

      <div id="gift-results" style="display:none;"></div>
    </div>
  `;

  document.getElementById('gift-generate').addEventListener('click', async () => {
    const age = document.getElementById('gift-age').value;
    const gender = document.getElementById('gift-gender').value;
    const interests = document.getElementById('gift-interests').value.trim();
    const apiKey = getGeminiKey();

    if (!age || !interests) {
      alert('Please fill in age and interests!');
      return;
    }
    if (!apiKey) {
      alert('AI service is not configured yet. Please contact the admin.');
      return;
    }

    const btn = document.getElementById('gift-generate');
    const results = document.getElementById('gift-results');
    btn.disabled = true;
    btn.textContent = '⏳ Finding gifts...';
    results.style.display = 'none';

    try {
      const ai = new GoogleGenAI({ apiKey });

      const prompt = `You are a creative gift advisor. Suggest exactly 5 unique, thoughtful birthday gift ideas for a ${age}-year-old ${gender !== 'any' ? gender : 'person'} who is interested in: ${interests}.

For each gift, provide:
- A creative name (bold title)
- A 1-2 sentence description explaining why it's perfect

Format each gift as:
🎁 **Gift Name**
Description here.

Make gifts creative, specific, and memorable — not generic. Range from affordable to premium.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt,
      });

      const text = response.text || '';

      results.innerHTML = `
        <div class="ai-results-list">
          ${formatGiftResults(text)}
        </div>
        <button class="btn btn-secondary" id="gift-regenerate" style="width:100%; margin-top:12px; font-size:0.8125rem;">
          🔄 Get More Ideas
        </button>
      `;
      results.style.display = 'block';

      document.getElementById('gift-regenerate').addEventListener('click', () => {
        document.getElementById('gift-generate').click();
      });

    } catch (err) {
      results.innerHTML = `<div class="ai-error">❌ ${err.message || 'Failed to generate.'}</div>`;
      results.style.display = 'block';
    }

    btn.disabled = false;
    btn.textContent = '🎁 Get Gift Ideas';
  });
}

function formatGiftResults(text) {
  const lines = text.split('\n').filter(l => l.trim());
  let html = '';
  let currentGift = '';

  for (const line of lines) {
    if (line.includes('🎁') || line.match(/^\d+\./)) {
      if (currentGift) html += `<div class="gift-item glass-card">${currentGift}</div>`;
      currentGift = `<div class="gift-name">${line.replace(/\*\*/g, '').replace(/🎁\s*/, '🎁 ')}</div>`;
    } else if (line.trim()) {
      currentGift += `<p class="gift-desc">${line.replace(/\*\*/g, '')}</p>`;
    }
  }
  if (currentGift) html += `<div class="gift-item glass-card">${currentGift}</div>`;

  return html || `<div class="gift-item glass-card"><p>${text}</p></div>`;
}
