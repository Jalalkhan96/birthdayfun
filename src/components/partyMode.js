// Party Mode — toggle for extreme celebration effects

import { startEmojiRain, REACTION_EMOJIS } from './emojiReactions.js';

export class PartyMode {
  constructor(fireworks) {
    this.fireworks = fireworks;
    this.active = false;
    this.glowEl = null;
    this.rainInterval = null;
  }

  toggle() {
    this.active = !this.active;
    if (this.active) this.activate();
    else this.deactivate();
    return this.active;
  }

  activate() {
    this.active = true;
    document.body.classList.add('party-mix-active');

    // Auto fireworks mixed random styles
    if (this.fireworks) {
      this.fireworks.startAutoMode(1200);
    }

    // Continuous emoji rain
    this.rainInterval = setInterval(() => {
      const emoji = REACTION_EMOJIS[Math.floor(Math.random() * REACTION_EMOJIS.length)];
      startEmojiRain(document.body, emoji.emoji, 1500);
    }, 1500);

    // Screen glow pulse & mix overlay
    this.glowEl = document.createElement('div');
    this.glowEl.className = 'party-mode-glow';
    this.glowEl.style.cssText = `
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background: radial-gradient(circle at 50% 50%, 
        rgba(255,45,117,0.1) 0%, transparent 60%);
      mix-blend-mode: screen;
      animation: partyMix 3s infinite steps(10);
    `;
    document.body.appendChild(this.glowEl);

    // Inject animation
    this.injectStyles();
  }

  deactivate() {
    this.active = false;
    document.body.classList.remove('party-mix-active');

    if (this.fireworks) {
      this.fireworks.stopAutoMode();
    }

    if (this.rainInterval) {
      clearInterval(this.rainInterval);
      this.rainInterval = null;
    }

    if (this.glowEl) {
      this.glowEl.remove();
      this.glowEl = null;
    }
  }

  destroy() {
    this.deactivate();
  }

  injectStyles() {
    if (document.getElementById('party-mode-styles')) return;
    const s = document.createElement('style');
    s.id = 'party-mode-styles';
    s.textContent = `
      @keyframes partyMix {
        0%, 100% { filter: hue-rotate(0deg) contrast(1.1); transform: scale(1); }
        25% { filter: hue-rotate(90deg) contrast(1.2); transform: scale(1.02); }
        50% { filter: hue-rotate(180deg) contrast(1.1); transform: scale(1); }
        75% { filter: hue-rotate(270deg) contrast(1.2); transform: scale(1.02); }
      }
      body.party-mix-active {
        animation: partyBackgroundCycle 8s linear infinite;
      }
      @keyframes partyBackgroundCycle {
        0% { background-color: #0f101f; }
        33% { background-color: #1a0a10; }
        66% { background-color: #0d0121; }
        100% { background-color: #0f101f; }
      }
      .party-toggle {
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 1001;
        padding: 10px 18px;
        border-radius: 50px;
        border: 2px solid rgba(255,255,255,0.2);
        background: rgba(15,15,25,0.8);
        backdrop-filter: blur(10px);
        color: #fff;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex; align-items: center; gap: 8px;
      }
      .party-toggle:hover {
        border-color: var(--accent-1);
        background: rgba(255,45,117,0.15);
      }
      .party-toggle.active {
        border-color: #ffd700;
        background: linear-gradient(135deg, rgba(255,45,117,0.4), rgba(255,215,0,0.4));
        box-shadow: 0 0 30px rgba(255,215,0,0.5);
        animation: partyBtnPulse 1s ease-in-out infinite, partyColorMix 2s linear infinite;
      }
      @keyframes partyBtnPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes partyColorMix {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(s);
  }

  // Render toggle button
  renderButton(container) {
    this.injectStyles();
    const btn = document.createElement('button');
    btn.className = 'party-toggle';
    btn.innerHTML = '🎊 Party Mode';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = this.toggle();
      btn.classList.toggle('active', isActive);
      btn.innerHTML = isActive ? '🔥 Party Mix ON' : '🎊 Party Mode';
    });
    container.appendChild(btn);
    return btn;
  }
}
