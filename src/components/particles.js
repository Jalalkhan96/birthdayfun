// Floating particles (hearts, sparkles, bokeh)

export class Particles {
    constructor(container, options = {}) {
        this.container = container;
        this.particles = [];
        this.running = false;
        this.count = options.count || 30;
        this.types = options.types || ['heart', 'sparkle', 'circle'];
        this.colors = options.colors || ['#ff2d75', '#7b2ff7', '#ff6b9d', '#c44dff'];
    }

    start() {
        this.running = true;
        for (let i = 0; i < this.count; i++) {
            setTimeout(() => {
                if (this.running) this.createParticle();
            }, i * 200);
        }
    }

    createParticle() {
        const type = this.types[Math.floor(Math.random() * this.types.length)];
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const size = 8 + Math.random() * 20;
        const x = Math.random() * 100;
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * 5;

        const el = document.createElement('div');
        el.className = 'bg-particle';
        el.style.cssText = `
      position: absolute;
      left: ${x}%;
      bottom: -${size}px;
      width: ${size}px;
      height: ${size}px;
      opacity: ${0.2 + Math.random() * 0.4};
      animation: particleRise ${duration}s ${delay}s ease-in infinite;
      pointer-events: none;
      z-index: 0;
    `;

        if (type === 'heart') {
            el.innerHTML = `<svg viewBox="0 0 24 24" fill="${color}" width="${size}" height="${size}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
        } else if (type === 'sparkle') {
            el.innerHTML = '✦';
            el.style.fontSize = `${size}px`;
            el.style.color = color;
            el.style.width = 'auto';
            el.style.height = 'auto';
        } else {
            el.style.borderRadius = '50%';
            el.style.background = color;
            el.style.filter = `blur(${2 + Math.random() * 4}px)`;
        }

        this.container.appendChild(el);
        this.particles.push(el);

        // Recycle particle when animation ends
        el.addEventListener('animationiteration', () => {
            el.style.left = `${Math.random() * 100}%`;
        });
    }

    stop() {
        this.running = false;
        this.particles.forEach(p => p.remove());
        this.particles = [];
    }

    static injectStyles() {
        if (document.getElementById('particle-styles')) return;
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
      @keyframes particleRise {
        0% {
          transform: translateY(0) rotate(0deg) scale(1);
          opacity: 0;
        }
        10% {
          opacity: 0.6;
        }
        90% {
          opacity: 0.3;
        }
        100% {
          transform: translateY(-110vh) rotate(${360 + Math.random() * 360}deg) scale(0.3);
          opacity: 0;
        }
      }
    `;
        document.head.appendChild(style);
    }
}
