// Emoji Reaction System with animated effects and counter

const REACTIONS_STORAGE_PREFIX = 'reactions_';

export const REACTION_EMOJIS = [
    { id: 'hearts', emoji: '❤️', label: 'Hearts' },
    { id: 'balloons', emoji: '🎈', label: 'Balloons' },
    { id: 'cake', emoji: '🎂', label: 'Cake' },
    { id: 'confetti', emoji: '🎉', label: 'Confetti' },
    { id: 'stars', emoji: '⭐', label: 'Stars' },
    { id: 'fire', emoji: '🔥', label: 'Fire' },
];

function getReactions(birthdayId) {
    try {
        return JSON.parse(localStorage.getItem(REACTIONS_STORAGE_PREFIX + birthdayId) || '{}');
    } catch { return {}; }
}

function incrementReaction(birthdayId, reactionId) {
    const reactions = getReactions(birthdayId);
    reactions[reactionId] = (reactions[reactionId] || 0) + 1;
    localStorage.setItem(REACTIONS_STORAGE_PREFIX + birthdayId, JSON.stringify(reactions));
    return reactions[reactionId];
}

function formatCount(n) {
    if (!n) return '0';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
    return n.toString();
}

// Particle burst effect at position
function emojiParticleBurst(container, emoji, x, y) {
    const count = 12 + Math.floor(Math.random() * 8);
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.textContent = emoji;
        particle.className = 'emoji-particle';

        const angle = (i / count) * Math.PI * 2;
        const distance = 60 + Math.random() * 80;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 40; // bias upward
        const duration = 0.8 + Math.random() * 0.6;
        const size = 16 + Math.random() * 16;

        particle.style.cssText = `
      position: fixed; left: ${x}px; top: ${y}px;
      font-size: ${size}px; pointer-events: none; z-index: 9999;
      opacity: 1; transform: scale(0);
      transition: all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;

        container.appendChild(particle);

        requestAnimationFrame(() => {
            particle.style.transform = `translate(${tx}px, ${ty}px) scale(1) rotate(${Math.random() * 360}deg)`;
            particle.style.opacity = '0';
        });

        setTimeout(() => particle.remove(), duration * 1000 + 100);
    }
}

// Emoji rain effect
export function startEmojiRain(container, emoji, duration = 3000) {
    const endTime = Date.now() + duration;

    function spawn() {
        if (Date.now() >= endTime) return;

        const drop = document.createElement('div');
        drop.textContent = emoji;
        drop.className = 'emoji-rain-drop';
        drop.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: -30px;
      font-size: ${20 + Math.random() * 20}px;
      pointer-events: none;
      z-index: 9998;
      opacity: 0.8;
      animation: emojiRainFall ${2 + Math.random() * 2}s linear forwards;
    `;
        container.appendChild(drop);
        setTimeout(() => drop.remove(), 4500);
        setTimeout(spawn, 80 + Math.random() * 120);
    }

    spawn();
}

// Full reaction bar UI
export function renderReactionBar(container, birthdayId) {
    const reactions = getReactions(birthdayId);

    const bar = document.createElement('div');
    bar.className = 'reaction-bar';

    bar.innerHTML = `
    <div class="reaction-bar-inner">
      ${REACTION_EMOJIS.map(r => `
        <button class="reaction-btn" data-reaction="${r.id}" title="${r.label}">
          <span class="reaction-emoji">${r.emoji}</span>
          <span class="reaction-count" id="count-${r.id}">${formatCount(reactions[r.id])}</span>
        </button>
      `).join('')}
    </div>
  `;

    // Inject styles
    injectReactionStyles();

    // Event handlers
    bar.querySelectorAll('.reaction-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const reactionId = btn.dataset.reaction;
            const reactionData = REACTION_EMOJIS.find(r => r.id === reactionId);

            // Increment counter
            const newCount = incrementReaction(birthdayId, reactionId);
            const countEl = document.getElementById(`count-${reactionId}`);
            if (countEl) countEl.textContent = formatCount(newCount);

            // Button bounce animation
            btn.classList.add('reaction-bounce');
            setTimeout(() => btn.classList.remove('reaction-bounce'), 400);

            // Particle burst at button position
            const rect = btn.getBoundingClientRect();
            emojiParticleBurst(document.body, reactionData.emoji,
                rect.left + rect.width / 2, rect.top);

            // Emoji rain
            startEmojiRain(document.body, reactionData.emoji, 2000);
        });
    });

    container.appendChild(bar);
    return bar;
}

function injectReactionStyles() {
    if (document.getElementById('reaction-styles')) return;
    const style = document.createElement('style');
    style.id = 'reaction-styles';
    style.textContent = `
    .reaction-bar {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      pointer-events: auto;
    }
    .reaction-bar-inner {
      display: flex;
      gap: 6px;
      padding: 10px 16px;
      background: rgba(15, 15, 25, 0.85);
      backdrop-filter: blur(20px);
      border-radius: 50px;
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }
    .reaction-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px 10px;
      border-radius: 12px;
      transition: all 0.2s ease;
      color: #fff;
    }
    .reaction-btn:hover {
      background: rgba(255,255,255,0.1);
      transform: scale(1.1);
    }
    .reaction-btn:active { transform: scale(0.9); }
    .reaction-bounce {
      animation: reactionBounce 0.4s cubic-bezier(0.34,1.56,0.64,1);
    }
    .reaction-emoji { font-size: 1.5rem; }
    .reaction-count {
      font-size: 0.625rem;
      color: rgba(255,255,255,0.6);
      font-weight: 600;
    }
    @keyframes reactionBounce {
      0% { transform: scale(1); }
      40% { transform: scale(1.4); }
      100% { transform: scale(1); }
    }
    @keyframes emojiRainFall {
      0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
      100% { transform: translateY(105vh) rotate(360deg); opacity: 0; }
    }
    @media (max-width: 480px) {
      .reaction-bar-inner { gap: 2px; padding: 8px 10px; }
      .reaction-btn { padding: 4px 6px; }
      .reaction-emoji { font-size: 1.25rem; }
    }
  `;
    document.head.appendChild(style);
}
