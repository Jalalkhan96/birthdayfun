// AI Birthday Song Generator using Gemini API

import { GoogleGenAI } from '@google/genai';

const GEMINI_KEY_STORAGE = 'gemini_api_key';

export function getApiKey() {
    return localStorage.getItem(GEMINI_KEY_STORAGE) || '';
}

export function setApiKey(key) {
    localStorage.setItem(GEMINI_KEY_STORAGE, key);
}

export async function generateBirthdaySong(data) {
    const apiKey = getApiKey();
    if (!apiKey) {
        throw new Error('Gemini API key not set. Please enter your API key in settings.');
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `Write a short, fun, and emotional 30-second birthday song.

Details:
- Name: ${data.name}
- Age: ${data.age || 'not specified'}
- Relationship: ${data.relationship || 'friend'}
- Personality Style: ${data.personalityStyle || 'fun'}
- Favorite Hobby: ${data.hobby || 'not specified'}

Song requirements:
- Must be singable in about 30 seconds
- Include the person's name in the chorus
- Make it feel personal and special
- Structure: Short Intro → Verse → Chorus
- Style: ${data.personalityStyle === 'romantic' ? 'sweet and romantic' :
            data.personalityStyle === 'funny' ? 'funny and playful' :
                data.personalityStyle === 'royal' ? 'grand and majestic' :
                    'fun, catchy, and celebratory'}
- Add emoji decorations between sections
- End with a sweet closing line

Format the output as lyrics only. Use 🎵 at the start and end.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text || response.candidates?.[0]?.content?.parts?.[0]?.text || 'Could not generate song.';
    } catch (err) {
        console.error('Gemini API error:', err);
        if (err.message?.includes('API_KEY') || err.message?.includes('401')) {
            throw new Error('Invalid API key. Please check your Gemini API key.');
        }
        throw new Error('Failed to generate song. Please try again.');
    }
}

// Render the song generator UI
export function renderSongSection(container, birthdayData) {
    const apiKey = getApiKey();

    container.innerHTML = `
    <div class="glass-card-strong" style="margin-top: var(--space-xl);">
      <h3 style="font-size: 1.25rem; margin-bottom: var(--space-lg);">
        <span class="text-gradient">🎵 AI Birthday Song Generator</span>
      </h3>

      ${!apiKey ? `
        <div class="form-group">
          <label class="form-label">Enter your Gemini API Key</label>
          <div style="display:flex; gap: 8px;">
            <input class="form-input" type="password" id="gemini-key-input" 
              placeholder="Your Gemini API key..." style="flex:1;" />
            <button class="btn btn-secondary" id="save-key-btn" type="button">Save</button>
          </div>
          <p style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
            Get a free key at <a href="https://aistudio.google.com/apikey" target="_blank" 
            style="color:var(--accent-1);">aistudio.google.com</a>. Stored locally only.
          </p>
        </div>
      ` : `
        <div style="display:flex; align-items:center; gap: 8px; margin-bottom: var(--space-md);">
          <span style="color: #00ff88; font-size: 0.875rem;">✓ API Key saved</span>
          <button class="btn btn-secondary" id="change-key-btn" type="button" 
            style="padding: 6px 12px; font-size: 0.75rem;">Change</button>
        </div>
      `}

      <div id="song-extra-fields" style="display:${apiKey ? 'block' : 'none'};">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin-bottom: var(--space-md);">
          <div class="form-group" style="margin:0;">
            <label class="form-label">Age (optional)</label>
            <input class="form-input" type="number" id="song-age" placeholder="e.g. 25" min="1" max="120" />
          </div>
          <div class="form-group" style="margin:0;">
            <label class="form-label">Favorite Hobby</label>
            <input class="form-input" type="text" id="song-hobby" placeholder="e.g. painting" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Song Style</label>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="theme-option active" data-song-style="fun">🎉 Fun</button>
            <button type="button" class="theme-option" data-song-style="romantic">💕 Romantic</button>
            <button type="button" class="theme-option" data-song-style="funny">😂 Funny</button>
            <button type="button" class="theme-option" data-song-style="royal">👑 Royal</button>
          </div>
        </div>
        <button class="btn btn-primary" id="generate-song-btn" type="button" style="width:100%;">
          🎵 Generate Birthday Song
        </button>
      </div>

      <div id="song-output" style="display:none; margin-top: var(--space-lg);">
        <div class="glass-card" style="background: rgba(255,45,117,0.05); border-color: rgba(255,45,117,0.2);">
          <pre id="song-lyrics" style="white-space:pre-wrap; font-family:var(--font-primary); 
            line-height:1.8; color:var(--text-secondary); font-size:0.9375rem;"></pre>
        </div>
        <div style="display:flex; gap:8px; margin-top:var(--space-md); flex-wrap:wrap;">
          <button class="btn btn-secondary" id="copy-song-btn" type="button">📋 Copy Lyrics</button>
          <button class="btn btn-secondary" id="share-song-tg-btn" type="button">✈️ Share on Telegram</button>
          <button class="btn btn-secondary" id="regenerate-song-btn" type="button">🔄 Regenerate</button>
        </div>
      </div>

      <div id="song-loading" style="display:none; text-align:center; padding: var(--space-xl) 0;">
        <div style="font-size:2rem; animation: heartbeat 1.5s ease infinite;">🎵</div>
        <p style="color:var(--text-secondary); margin-top: var(--space-sm);">Composing your birthday song...</p>
      </div>

      <div id="song-error" style="display:none; color:#ff6b6b; padding:var(--space-md) 0; font-size:0.875rem;"></div>
    </div>
  `;

    let selectedSongStyle = 'fun';
    let generatedLyrics = '';

    // Save API key
    const saveKeyBtn = document.getElementById('save-key-btn');
    if (saveKeyBtn) {
        saveKeyBtn.addEventListener('click', () => {
            const key = document.getElementById('gemini-key-input').value.trim();
            if (key) {
                setApiKey(key);
                renderSongSection(container, birthdayData);
            }
        });
    }

    // Change key
    const changeKeyBtn = document.getElementById('change-key-btn');
    if (changeKeyBtn) {
        changeKeyBtn.addEventListener('click', () => {
            localStorage.removeItem(GEMINI_KEY_STORAGE);
            renderSongSection(container, birthdayData);
        });
    }

    // Song style selection
    container.querySelectorAll('[data-song-style]').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('[data-song-style]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSongStyle = btn.dataset.songStyle;
        });
    });

    // Generate song
    const generateBtn = document.getElementById('generate-song-btn');
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            const loading = document.getElementById('song-loading');
            const output = document.getElementById('song-output');
            const error = document.getElementById('song-error');

            loading.style.display = 'block';
            output.style.display = 'none';
            error.style.display = 'none';
            generateBtn.disabled = true;

            try {
                generatedLyrics = await generateBirthdaySong({
                    name: birthdayData.name,
                    age: document.getElementById('song-age')?.value || '',
                    relationship: birthdayData.relationship,
                    personalityStyle: selectedSongStyle,
                    hobby: document.getElementById('song-hobby')?.value || '',
                });

                document.getElementById('song-lyrics').textContent = generatedLyrics;
                output.style.display = 'block';
                loading.style.display = 'none';
            } catch (err) {
                error.textContent = err.message;
                error.style.display = 'block';
                loading.style.display = 'none';
            }
            generateBtn.disabled = false;
        });
    }

    // Copy lyrics
    const copyBtn = document.getElementById('copy-song-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(generatedLyrics);
                copyBtn.textContent = '✓ Copied!';
                setTimeout(() => { copyBtn.textContent = '📋 Copy Lyrics'; }, 2000);
            } catch { /* fallback */ }
        });
    }

    // Share on Telegram
    const shareTgBtn = document.getElementById('share-song-tg-btn');
    if (shareTgBtn) {
        shareTgBtn.addEventListener('click', () => {
            const text = encodeURIComponent(`🎵 Birthday Song for ${birthdayData.name}!\n\n${generatedLyrics}`);
            window.open(`https://t.me/share/url?url=&text=${text}`, '_blank');
        });
    }

    // Regenerate
    const regenBtn = document.getElementById('regenerate-song-btn');
    if (regenBtn) {
        regenBtn.addEventListener('click', () => {
            generateBtn?.click();
        });
    }
}
