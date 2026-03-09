// Celebration page — countdown + celebration + interactive fireworks + emoji reactions + party mode

import { getBirthday } from '../utils/storage.js';
import { applyTheme, getTheme } from '../utils/themes.js';
import { generateMessage } from '../utils/messages.js';
import { Countdown, calculateTargetTime } from '../components/countdown.js';
import { InteractiveFireworks, renderFireworkStyleSelector } from '../components/fireworks.js';
import { Confetti } from '../components/confetti.js';
import { Particles } from '../components/particles.js';
import { HeartCollage } from '../components/heartCollage.js';
import { Slideshow } from '../components/slideshow.js';
import { renderInlineShareButtons } from '../components/shareButtons.js';
import { renderReactionBar } from '../components/emojiReactions.js';
import { PartyMode } from '../components/partyMode.js';

let cleanupFns = [];

export function renderCelebration(container, id, isSurpriseDirect = false) {
  cleanupFns.forEach(fn => { if (typeof fn === 'function') fn(); else if (fn?.destroy) fn.destroy(); });
  cleanupFns = [];

  const data = getBirthday(id);
  if (!data) {
    container.innerHTML = `
      <div class="celebration-page" style="display:flex;align-items:center;justify-content:center;min-height:100vh;">
        <div class="glass-card text-center" style="max-width:400px;">
          <h2 style="margin-bottom:16px;">Birthday Not Found 😢</h2>
          <p style="color:var(--text-secondary);margin-bottom:24px;">This birthday page doesn't exist or has expired.</p>
          <button class="btn btn-primary" onclick="window.location.hash='#/create'">Create New One</button>
        </div>
      </div>`;
    return;
  }

  const theme = applyTheme(data.theme);
  const themeData = getTheme(data.theme);
  const targetTime = calculateTargetTime(data);
  const isAlreadyPast = targetTime <= Date.now();

  if (isSurpriseDirect || isAlreadyPast) {
    showCelebration(container, data, themeData);
  } else {
    showCountdown(container, data, themeData, targetTime);
  }
}

function showCountdown(container, data, themeData, targetTime) {
  container.innerHTML = `
    <div class="celebration-page">
      <div class="bg-particles" id="countdown-particles"></div>
      <canvas class="confetti-canvas" id="countdown-stars-canvas"></canvas>
      <div class="countdown-container">
        <div style="font-size:3rem; margin-bottom:var(--space-lg); animation: heartbeat 1.5s ease infinite;">🎂</div>
        <div class="countdown-teaser">"Something magical is coming..."</div>
        <div id="countdown-area"></div>
        <div class="countdown-for" style="margin-top: var(--space-xl);">A birthday surprise for</div>
        <div class="countdown-name">${data.name}</div>
        <p style="color:var(--text-muted); font-size:0.8125rem; margin-top:var(--space-xl); max-width:300px; text-align:center;">
          ✨ Stay on this page — the celebration will unlock automatically!
        </p>
      </div>
      <div id="countdown-balloons"></div>
    </div>`;

  Particles.injectStyles();
  const particlesContainer = document.getElementById('countdown-particles');
  const particles = new Particles(particlesContainer, {
    count: 20, types: ['heart', 'sparkle', 'circle'], colors: themeData.particleColors,
  });
  particles.start();
  cleanupFns.push(() => particles.stop());

  startFallingStars(document.getElementById('countdown-stars-canvas'), themeData);
  launchBalloons(themeData, 'countdown-balloons', 8, true);

  const countdown = new Countdown(document.getElementById('countdown-area'), targetTime, () => {
    container.style.transition = 'all 0.8s ease';
    container.style.filter = 'brightness(3)';
    setTimeout(() => {
      container.style.filter = '';
      particles.stop();
      showCelebration(container, data, themeData);
    }, 800);
  });
  countdown.start();
  cleanupFns.push(() => countdown.destroy());
}

function showCelebration(container, data, themeData) {
  const message = data.customMessage || generateMessage(data.name, data.relationship, data.mood);
  const baseUrl = window.location.origin + window.location.pathname;
  const birthdayUrl = `${baseUrl}#/birthday/${data.id || 'share'}`;

  container.innerHTML = `
    <div class="celebration-page">
      <canvas class="fireworks-canvas" id="fireworks-canvas" 
        style="position:fixed;inset:0;z-index:2;pointer-events:auto;"></canvas>
      <canvas class="confetti-canvas" id="confetti-canvas"></canvas>
      <div class="bg-particles" id="celebration-particles"></div>

      <!-- Title Overlay -->
      <div class="birthday-title-overlay" id="birthday-title-overlay">
        <div style="font-size:4rem; opacity:0; transform:scale(0);" id="title-emoji">🎉</div>
        <div class="birthday-title-main text-gradient" id="title-happy" style="opacity:0; transform:scale(0.5);">
          HAPPY BIRTHDAY
        </div>
        <div class="birthday-title-name text-gradient" id="title-name" style="opacity:0; transform:translateY(30px);">
          ${data.name}! 🎂
        </div>
        <div class="birthday-title-message" id="title-message" style="opacity:0; transform:translateY(20px);">
          ${message}
        </div>
      </div>

      <!-- Main Content -->
      <div class="celebration-container" id="celebration-content" style="opacity:0;">
        <div class="celebration-content">
          <div style="text-align:center; padding-top: 100vh;">
            ${data.photos && data.photos.length > 0 ? `
              <h3 style="font-size: 1.5rem; margin-bottom: var(--space-lg);">
                <span class="text-gradient">Precious Memories</span> 💝
              </h3>
              <div id="celebration-collage" class="heart-collage-container" 
                style="max-width:450px; margin: 0 auto var(--space-2xl);"></div>
            ` : ''}

            <div class="celebration-message-card glass-card-strong">
              <p class="font-script" style="font-size: 1.5rem; color: var(--accent-1); margin-bottom: 16px;">
                Dear ${data.name},
              </p>
              <p>${message}</p>
            </div>

            ${data.photos && data.photos.length > 0 ? `
              <h3 style="font-size: 1.25rem; margin-top: var(--space-2xl); margin-bottom: var(--space-lg);">
                📸 Photo Memories
              </h3>
              <div class="celebration-photos-grid" id="photo-grid">
                ${data.photos.map((p, i) => `
                  <div class="celebration-photo" data-index="${i}">
                    <img src="${p}" alt="Memory ${i + 1}" loading="lazy" />
                  </div>
                `).join('')}
              </div>
              <div style="text-align:center; margin-top: var(--space-xl);">
                <button class="btn btn-primary" id="explore-galaxy-btn" 
                  style="background: linear-gradient(135deg, #1a0533, #0f0f2e); border: 1px solid rgba(123,47,247,0.4);">
                  🚀 Explore Memory Galaxy
                </button>
              </div>
            ` : ''}

            <div class="celebration-share">
              <h3 class="text-gradient">🎉 A birthday surprise just unlocked!</h3>
              <p style="color:var(--text-secondary); margin-bottom:var(--space-lg); font-size:0.9375rem;">
                Share the celebration with everyone!
              </p>
              <div id="celebration-share-btns"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="balloons-container"></div>
      <div id="firework-selector-container" style="position:fixed;top:70px;right:20px;z-index:1001;"></div>
      <div id="party-mode-container"></div>
      <div id="reaction-container"></div>
      <button class="music-toggle" id="music-toggle" title="Toggle Music">🎵</button>
    </div>`;

  // === INTERACTIVE FIREWORKS ===
  const fireworksCanvas = document.getElementById('fireworks-canvas');
  const fireworks = new InteractiveFireworks(fireworksCanvas);
  fireworks.start();
  cleanupFns.push(() => fireworks.destroy());

  // Firework style selector
  renderFireworkStyleSelector(
    document.getElementById('firework-selector-container'), fireworks
  );

  // Auto-launch a few fireworks initially
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const x = fireworksCanvas.width * (0.15 + Math.random() * 0.7);
      const y = fireworksCanvas.height * (0.1 + Math.random() * 0.3);
      fireworks.launchRocket(x, y);
    }, 500 + i * 800);
  }

  // === CONFETTI ===
  setTimeout(() => {
    const confettiCanvas = document.getElementById('confetti-canvas');
    const confetti = new Confetti(confettiCanvas);
    confetti.start(12000);
    cleanupFns.push(() => confetti.destroy());
  }, 500);

  // === BALLOONS ===
  setTimeout(() => launchBalloons(themeData, 'balloons-container', 20, false), 800);
  setTimeout(() => launchBalloons(themeData, 'balloons-container', 10, false), 5000);

  // === TITLE ANIMATION SEQUENCE ===
  const animateEl = (id, delay, transform) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.style.transition = `all ${transform.dur || '0.8s'} ${transform.ease || 'ease'}`;
        el.style.opacity = '1';
        el.style.transform = transform.to || 'none';
      }
    }, delay);
  };

  animateEl('title-emoji', 1000, { to: 'scale(1)', dur: '0.6s', ease: 'cubic-bezier(0.34,1.56,0.64,1)' });
  animateEl('title-happy', 1800, { to: 'scale(1)', dur: '1s', ease: 'cubic-bezier(0.34,1.56,0.64,1)' });
  animateEl('title-name', 2800, { to: 'translateY(0)' });
  animateEl('title-message', 3800, { to: 'translateY(0)' });

  // Fade overlay, show content
  setTimeout(() => {
    const overlay = document.getElementById('birthday-title-overlay');
    if (overlay) {
      overlay.style.transition = 'opacity 1.2s ease';
      overlay.style.opacity = '0';
      setTimeout(() => overlay.style.pointerEvents = 'none', 1200);
    }
    const content = document.getElementById('celebration-content');
    if (content) { content.style.transition = 'opacity 1s ease'; content.style.opacity = '1'; }
  }, 7000);

  // === PARTICLES ===
  Particles.injectStyles();
  const particlesContainer = document.getElementById('celebration-particles');
  const particles = new Particles(particlesContainer, {
    count: 30, types: ['heart', 'sparkle', 'circle'], colors: themeData.particleColors,
  });
  particles.start();
  cleanupFns.push(() => particles.stop());

  // === HEART COLLAGE ===
  if (data.photos?.length > 0) {
    setTimeout(() => {
      const collageArea = document.getElementById('celebration-collage');
      if (collageArea) {
        const collage = new HeartCollage(collageArea, data.photos, {
          cellSize: 50, style: data.collageStyle || 'animated',
        });
        collage.render();
      }
    }, 8000);
  }

  // Photo click → slideshow
  setTimeout(() => {
    document.querySelectorAll('.celebration-photo').forEach(photo => {
      photo.addEventListener('click', () => {
        const slideshow = new Slideshow(document.body, data.photos, {
          duration: 3000,
          transition: ['fade', 'zoom', 'flip'][Math.floor(Math.random() * 3)],
          loops: 1,
        });
        slideshow.start();
      });
    });
  }, 8000);

  // Galaxy button
  setTimeout(() => {
    const galaxyBtn = document.getElementById('explore-galaxy-btn');
    if (galaxyBtn) {
      galaxyBtn.addEventListener('click', () => {
        window.location.hash = `#/galaxy/${data.id || 'shared'}`;
      });
    }
  }, 100);

  // Share buttons
  const shareBtns = document.getElementById('celebration-share-btns');
  if (shareBtns) renderInlineShareButtons(shareBtns, birthdayUrl);

  // === EMOJI REACTIONS ===
  renderReactionBar(document.getElementById('reaction-container'), data.id || 'shared');

  // === PARTY MODE ===
  const partyMode = new PartyMode(fireworks);
  partyMode.renderButton(document.getElementById('party-mode-container'));
  cleanupFns.push(() => partyMode.destroy());

  // Music toggle
  const musicToggle = document.getElementById('music-toggle');
  let musicPlaying = false;
  musicToggle.addEventListener('click', () => {
    musicPlaying = !musicPlaying;
    musicToggle.classList.toggle('playing', musicPlaying);
    musicToggle.textContent = musicPlaying ? '🔇' : '🎵';
  });
}

// ═══ Falling stars for countdown ═══
function startFallingStars(canvas, themeData) {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const stars = [];
  let running = true;

  function spawnStar() {
    if (!running) return;
    stars.push({
      x: Math.random() * canvas.width, y: -10,
      size: 1 + Math.random() * 2, speed: 0.5 + Math.random() * 1.5,
      alpha: 0.3 + Math.random() * 0.7,
      color: themeData.particleColors[Math.floor(Math.random() * themeData.particleColors.length)],
    });
    setTimeout(spawnStar, 100 + Math.random() * 200);
  }

  function animate() {
    if (!running && stars.length === 0) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = stars.length - 1; i >= 0; i--) {
      const s = stars[i];
      s.y += s.speed;
      s.alpha -= 0.002;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = Math.max(0, s.alpha);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2);
      ctx.globalAlpha = Math.max(0, s.alpha * 0.15);
      ctx.fill();
      ctx.globalAlpha = 1;
      if (s.y > canvas.height + 10 || s.alpha <= 0) stars.splice(i, 1);
    }
    requestAnimationFrame(animate);
  }

  spawnStar();
  animate();
  cleanupFns.push(() => { running = false; });
}

// ═══ Balloons ═══
function launchBalloons(themeData, containerId, count = 15, gentle = false) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const balloons = themeData.balloonColors;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.textContent = balloons[Math.floor(Math.random() * balloons.length)];
      balloon.style.left = `${5 + Math.random() * 90}%`;
      balloon.style.animationDuration = `${gentle ? 8 : 4 + Math.random() * 4}s`;
      balloon.style.animationDelay = '0s';
      balloon.style.fontSize = `${2 + Math.random() * 2}rem`;
      container.appendChild(balloon);
      setTimeout(() => balloon.remove(), gentle ? 12000 : 10000);
    }, i * (gentle ? 600 : 300));
  }
}
