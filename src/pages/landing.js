// Landing page — overhauled with confetti, AI tools, and new hero

import confetti from 'canvas-confetti';
import { Particles } from '../components/particles.js';
import { renderGiftFinder } from '../components/giftFinder.js';
import { renderCardWriter } from '../components/cardWriter.js';
import { renderBirthdayFact } from '../components/birthdayFacts.js';

export function renderLanding(container) {
  container.innerHTML = `
    <div class="landing-page">
      <div class="bg-particles" id="landing-particles"></div>

      <!-- Hero Section -->
      <section class="landing-hero">
        <div class="landing-badge">
          <span class="dot"></span>
          <span>AI-Powered Birthday Hub</span>
        </div>

        <h1 class="landing-title">
          It's <span class="text-gradient">Celebration</span> Time!
        </h1>
        <h2 class="landing-title-sub">
          Make Every Birthday <span class="text-gradient">Unforgettable</span>.
        </h2>

        <p class="landing-subtitle">
          The ultimate AI-powered hub for planning, gifting, and celebrating 
          the people you love.
        </p>

        <div class="landing-cta-group">
          <button class="btn btn-primary" id="cta-create" style="font-size:1.0625rem; padding: 16px 40px;">
            ✨ Start Planning
          </button>
          <button class="btn btn-secondary btn-celebrate" id="cta-celebrate">
            🎉 Celebrate Now
          </button>
        </div>

        <!-- Floating decorations -->
        <div class="floating-heart" style="top:15%; left:10%; animation-delay:0s; font-size:1.5rem;">💖</div>
        <div class="floating-heart" style="top:20%; right:12%; animation-delay:1s; font-size:1.2rem;">✨</div>
        <div class="floating-heart" style="top:60%; left:8%;  animation-delay:2s; font-size:1.8rem;">🎂</div>
        <div class="floating-heart" style="top:70%; right:10%; animation-delay:0.5s; font-size:1.4rem;">🎈</div>
        <div class="floating-heart" style="top:40%; left:5%;  animation-delay:1.5s; font-size:1rem;">🎉</div>
        <div class="floating-heart" style="top:35%; right:6%; animation-delay:2.5s; font-size:1.3rem;">🎁</div>
      </section>

      <!-- Features Section -->
      <section class="landing-features">
        <div class="container">
          <h2 class="landing-features-title">
            Everything You Need to <span class="text-gradient">Celebrate</span>
          </h2>

          <div class="features-grid">
            <div class="glass-card feature-card page-enter" style="animation-delay: 0.1s;">
              <div class="feature-icon">💝</div>
              <h3 class="feature-title">Heart Photo Collage</h3>
              <p class="feature-desc">Upload photos and watch them arrange into a beautiful heart shape with 5 unique styles.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.2s;">
              <div class="feature-icon">🎆</div>
              <h3 class="feature-title">Interactive Fireworks</h3>
              <p class="feature-desc">5 firework styles — tap anywhere to launch explosions with heart, star, and rainbow effects.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.3s;">
              <div class="feature-icon">🌌</div>
              <h3 class="feature-title">3D Memory Galaxy</h3>
              <p class="feature-desc">Explore your memories as planets in a Three.js 3D space universe with WASD flight controls.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.4s;">
              <div class="feature-icon">🎁</div>
              <h3 class="feature-title">Gift Finder AI</h3>
              <p class="feature-desc">Enter age and interests — AI finds 5 perfect, creative gift ideas instantly.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.5s;">
              <div class="feature-icon">✍️</div>
              <h3 class="feature-title">Card Writer AI</h3>
              <p class="feature-desc">Generate heartwarming, funny, or poetic birthday card messages with AI.</p>
            </div>

            <div class="glass-card feature-card page-enter" style="animation-delay: 0.6s;">
              <div class="feature-icon">📱</div>
              <h3 class="feature-title">QR & Telegram Bot</h3>
              <p class="feature-desc">Share via QR codes, Telegram bot, or WhatsApp — create birthdays right from chat.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- AI Tools Section -->
      <section class="landing-ai-tools">
        <div class="container">
          <h2 class="landing-features-title">
            AI-Powered <span class="text-gradient">Birthday Tools</span> 🤖
          </h2>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto var(--space-xl); text-align:center;">
            Powered by Google Gemini AI — find gifts, write cards, and discover fun birthday facts.
          </p>

          <div class="ai-tools-grid">
            <div id="gift-finder-mount"></div>
            <div id="card-writer-mount"></div>
          </div>

          <div id="birthday-fact-mount" style="max-width: 600px; margin: var(--space-xl) auto 0;"></div>
        </div>
      </section>

      <!-- Preview Section -->
      <section class="landing-preview">
        <div class="container">
          <h2 class="landing-features-title">
            See the <span class="text-gradient">Magic</span> ✨
          </h2>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto var(--space-xl);">
            Every birthday page is a unique, animated experience.
          </p>

          <div class="preview-mockup glass-card-strong" id="preview-mockup">
            <div style="text-align:center; padding: 40px 20px;">
              <div style="font-size: 4rem; margin-bottom: 16px; animation: heartbeat 1.5s ease infinite;">🎂</div>
              <h3 class="text-gradient font-script" style="font-size: 2rem; margin-bottom: 12px;">Happy Birthday!</h3>
              <p style="color: var(--text-secondary); font-size: 0.9375rem;">
                A stunning celebration awaits...<br/>
                with fireworks, photos & love 💕
              </p>
              <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: center;">
                <div class="glass-card" style="padding: 12px 16px; font-size: 1.5rem; font-weight: 700;">00</div>
                <div style="font-size: 1.5rem; color: var(--text-muted); padding-top: 12px;">:</div>
                <div class="glass-card" style="padding: 12px 16px; font-size: 1.5rem; font-weight: 700;">30</div>
                <div style="font-size: 1.5rem; color: var(--text-muted); padding-top: 12px;">:</div>
                <div class="glass-card" style="padding: 12px 16px; font-size: 1.5rem; font-weight: 700;">00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Footer -->
      <section style="padding: var(--space-3xl) 0; text-align: center; position: relative; z-index: 1;">
        <div class="container">
          <h2 style="font-size: clamp(1.5rem, 4vw, 2.25rem); margin-bottom: var(--space-lg);">
            Ready to Create <span class="text-gradient">Something Special</span>?
          </h2>
          <button class="btn btn-primary" id="cta-create-bottom" style="font-size: 1.0625rem; padding: 16px 40px;">
            ✨ Start Creating Now
          </button>
        </div>
      </section>

      <!-- Footer -->
      <footer class="landing-footer">
        <div class="container">
          <p>Made with 💖 — AI Birthday Wish Generator</p>
        </div>
      </footer>
    </div>
  `;

  // === EVENT LISTENERS ===
  document.getElementById('cta-create').addEventListener('click', () => {
    window.location.hash = '#/create';
  });

  document.getElementById('cta-create-bottom').addEventListener('click', () => {
    window.location.hash = '#/create';
  });

  // Celebrate Now → confetti burst
  document.getElementById('cta-celebrate').addEventListener('click', () => {
    triggerConfetti();
  });

  // === CONFETTI ON LOAD (3-second firework burst) ===
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const confettiInterval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(confettiInterval);

    const particleCount = 50 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);

  // === PARTICLES ===
  Particles.injectStyles();
  const particleContainer = document.getElementById('landing-particles');
  const particles = new Particles(particleContainer, {
    count: 20,
    types: ['heart', 'sparkle', 'circle'],
  });
  particles.start();

  // === MOUNT AI TOOLS ===
  renderGiftFinder(document.getElementById('gift-finder-mount'));
  renderCardWriter(document.getElementById('card-writer-mount'));
  const factWidget = renderBirthdayFact(document.getElementById('birthday-fact-mount'));

  return {
    destroy: () => {
      particles.stop();
      clearInterval(confettiInterval);
      if (factWidget?.destroy) factWidget.destroy();
    }
  };
}

function triggerConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FF69B4', '#FFD700', '#00CED1', '#9370DB', '#FF2D75', '#7B2FF7']
  });
}
