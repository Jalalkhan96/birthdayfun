// Birthday input form page

import { themes } from '../utils/themes.js';
import { moods } from '../utils/messages.js';
import { saveBirthday, processPhotos } from '../utils/storage.js';
import { COLLAGE_STYLES } from '../components/heartCollage.js';

export function renderForm(container) {
  const themeOptions = Object.values(themes).map(t => `
    <button type="button" class="theme-option ${t.id === 'romantic' ? 'active' : ''}" data-theme="${t.id}">
      <div class="theme-swatch" style="background: ${t.swatch}"></div>
      <span>${t.emoji} ${t.name}</span>
    </button>
  `).join('');

  const moodOptions = moods.map(m => `<option value="${m.id}">${m.emoji} ${m.name}</option>`).join('');

  const collageOptions = COLLAGE_STYLES.map(s => `
    <button type="button" class="collage-style-option ${s.id === 'classic' ? 'active' : ''}" data-collage="${s.id}">
      <span class="collage-style-emoji">${s.emoji}</span>
      <span>${s.name}</span>
    </button>
  `).join('');

  container.innerHTML = `
    <div class="form-page">
      <div class="container container-sm">
        <button class="form-back" id="form-back">← Back to Home</button>

        <div class="form-header">
          <h1 class="text-gradient">Create Birthday Surprise ✨</h1>
          <p>Fill in the details to generate a magical birthday experience</p>
        </div>

        <form class="glass-card-strong form-card" id="birthday-form">
          <!-- Basic Info -->
          <div class="form-section">
            <div class="form-section-title">🎂 Birthday Details</div>

            <div class="form-group">
              <label class="form-label" for="bd-name">Name of Birthday Person *</label>
              <input class="form-input" type="text" id="bd-name" placeholder="e.g. Sarah" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="bd-date">Birthday Date *</label>
                <input class="form-input" type="date" id="bd-date" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="bd-time">Birthday Time (optional)</label>
                <input class="form-input" type="time" id="bd-time" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="bd-relationship">Relationship</label>
                <select class="form-input" id="bd-relationship">
                  <option value="friend">👫 Friend</option>
                  <option value="brother">👦 Brother</option>
                  <option value="sister">👧 Sister</option>
                  <option value="girlfriend">💕 Girlfriend</option>
                  <option value="boyfriend">💙 Boyfriend</option>
                  <option value="default">🤗 Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="bd-mood">Message Mood</label>
                <select class="form-input" id="bd-mood">
                  ${moodOptions}
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="bd-message">Custom Message (optional)</label>
              <textarea class="form-input" id="bd-message" placeholder="Write a personal birthday message..." rows="3"></textarea>
            </div>
          </div>

          <!-- Theme Selection -->
          <div class="form-section">
            <div class="form-section-title">🎨 Choose Theme</div>
            <div class="theme-selector" id="theme-selector">
              ${themeOptions}
            </div>
          </div>

          <!-- Collage Style -->
          <div class="form-section">
            <div class="form-section-title">💝 Heart Collage Style</div>
            <div class="collage-style-selector" id="collage-selector">
              ${collageOptions}
            </div>
          </div>

          <!-- Photo Upload -->
          <div class="form-section">
            <div class="form-section-title">📸 Upload Photos</div>

            <div class="photo-upload-area" id="photo-upload-area">
              <div class="photo-upload-icon">📷</div>
              <div class="photo-upload-text">
                <strong>Click to upload</strong> or drag & drop photos
              </div>
              <div class="photo-upload-hint">Upload 1-20 photos (JPG, PNG, WebP)</div>
              <input type="file" class="photo-upload-input" id="photo-input" multiple accept="image/*" />
            </div>

            <div class="photo-preview-grid" id="photo-preview-grid"></div>
          </div>

          <!-- Timer Settings -->
          <div class="form-section">
            <div class="form-section-title">⏱ Countdown Timer</div>

            <div class="timer-options" id="timer-options">
              <button type="button" class="timer-option active" data-mode="delay" data-value="30">
                <div class="timer-radio"></div>
                <span>⚡ Start in 30 seconds (Quick Demo)</span>
              </button>
              <button type="button" class="timer-option" data-mode="delay" data-value="60">
                <div class="timer-radio"></div>
                <span>⏰ Start in 1 minute</span>
              </button>
              <button type="button" class="timer-option" data-mode="delay" data-value="300">
                <div class="timer-radio"></div>
                <span>⏰ Start in 5 minutes</span>
              </button>
              <button type="button" class="timer-option" data-mode="midnight">
                <div class="timer-radio"></div>
                <span>🌙 Start at midnight on birthday</span>
              </button>
              <button type="button" class="timer-option" data-mode="specific">
                <div class="timer-radio"></div>
                <span>🕐 Start at specific time</span>
              </button>
            </div>
          </div>

          <!-- Submit -->
          <div class="form-submit">
            <button type="submit" class="btn btn-primary" id="form-submit-btn">
              🎉 Generate Birthday Surprise
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  // === Event Handlers ===

  let selectedTheme = 'romantic';
  let selectedCollageStyle = 'classic';
  let selectedTimerMode = 'delay';
  let selectedTimerValue = 30;
  let uploadedFiles = [];

  // Collage style selection
  document.getElementById('collage-selector').addEventListener('click', (e) => {
    const option = e.target.closest('.collage-style-option');
    if (!option) return;
    document.querySelectorAll('.collage-style-option').forEach(el => el.classList.remove('active'));
    option.classList.add('active');
    selectedCollageStyle = option.dataset.collage;
  });

  // Back button
  document.getElementById('form-back').addEventListener('click', () => {
    window.location.hash = '#/';
  });

  // Theme selection
  document.getElementById('theme-selector').addEventListener('click', (e) => {
    const option = e.target.closest('.theme-option');
    if (!option) return;
    document.querySelectorAll('.theme-option').forEach(el => el.classList.remove('active'));
    option.classList.add('active');
    selectedTheme = option.dataset.theme;
  });

  // Timer selection
  document.getElementById('timer-options').addEventListener('click', (e) => {
    const option = e.target.closest('.timer-option');
    if (!option) return;
    document.querySelectorAll('.timer-option').forEach(el => el.classList.remove('active'));
    option.classList.add('active');
    selectedTimerMode = option.dataset.mode;
    selectedTimerValue = parseInt(option.dataset.value) || 0;
  });

  // Photo upload
  const photoInput = document.getElementById('photo-input');
  const uploadArea = document.getElementById('photo-upload-area');
  const previewGrid = document.getElementById('photo-preview-grid');

  uploadArea.addEventListener('click', () => photoInput.click());

  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
  });

  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    addFiles(files);
  });

  photoInput.addEventListener('change', () => {
    addFiles(Array.from(photoInput.files));
  });

  function addFiles(files) {
    const remaining = 20 - uploadedFiles.length;
    const newFiles = files.slice(0, remaining);
    uploadedFiles = [...uploadedFiles, ...newFiles];
    renderPreviews();
  }

  function renderPreviews() {
    previewGrid.innerHTML = '';
    uploadedFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const item = document.createElement('div');
        item.className = 'photo-preview-item';
        item.innerHTML = `
          <img src="${e.target.result}" alt="Photo ${index + 1}" />
          <button class="photo-preview-remove" data-index="${index}" type="button">✕</button>
        `;
        previewGrid.appendChild(item);

        item.querySelector('.photo-preview-remove').addEventListener('click', () => {
          uploadedFiles.splice(index, 1);
          renderPreviews();
        });
      };
      reader.readAsDataURL(file);
    });
  }

  // Form submission
  document.getElementById('birthday-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('form-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Generating...';

    try {
      // Process photos
      const photos = await processPhotos(uploadedFiles);

      // Collect form data
      const birthdayData = {
        name: document.getElementById('bd-name').value.trim(),
        date: document.getElementById('bd-date').value,
        time: document.getElementById('bd-time').value || null,
        relationship: document.getElementById('bd-relationship').value,
        mood: document.getElementById('bd-mood').value,
        customMessage: document.getElementById('bd-message').value.trim(),
        theme: selectedTheme,
        collageStyle: selectedCollageStyle,
        timerMode: selectedTimerMode,
        timerValue: selectedTimerValue,
        photos: photos,
      };

      // Save to localStorage
      const id = saveBirthday(birthdayData);

      // Navigate to preview
      window.location.hash = `#/preview/${id}`;
    } catch (err) {
      console.error('Form submission error:', err);
      submitBtn.disabled = false;
      submitBtn.textContent = '🎉 Generate Birthday Surprise';
      alert('Something went wrong. Please try again.');
    }
  });

  // Set default date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('bd-date').value = today;
}
