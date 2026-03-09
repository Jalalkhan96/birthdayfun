// Interactive Fireworks — tap/click/spacebar to launch at position
// 5 styles: Classic, Heart, Star, Rainbow, Golden

export class InteractiveFireworks {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.rockets = [];
        this.particles = [];
        this.running = false;
        this.autoMode = false;
        this.autoInterval = null;
        this.style = 'classic'; // classic, heart, star, rainbow, golden
        this.resizeHandler = () => this.resize();
        this.clickHandler = (e) => this.handleClick(e);
        this.touchHandler = (e) => this.handleTouch(e);
        this.keyHandler = (e) => this.handleKey(e);

        this.STYLES = {
            classic: { colors: ['#ff2d75', '#7b2ff7', '#00d4ff', '#ff6b35', '#ffd700', '#ff1493'], shape: 'circle' },
            heart: { colors: ['#ff2d75', '#ff69b4', '#ff1493', '#dc143c', '#ff6b81', '#e91e63'], shape: 'heart' },
            star: { colors: ['#ffd700', '#ffdf00', '#f0e68c', '#fff8dc', '#ffa500', '#ff8c00'], shape: 'star' },
            rainbow: { colors: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'], shape: 'circle' },
            golden: { colors: ['#ffd700', '#daa520', '#b8860b', '#cd853f', '#f0e68c', '#ffdf00'], shape: 'circle' },
        };
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    start() {
        this.resize();
        window.addEventListener('resize', this.resizeHandler);
        this.canvas.addEventListener('click', this.clickHandler);
        this.canvas.addEventListener('touchstart', this.touchHandler, { passive: true });
        document.addEventListener('keydown', this.keyHandler);
        this.running = true;
        this.animate();
    }

    destroy() {
        this.running = false;
        this.stopAutoMode();
        window.removeEventListener('resize', this.resizeHandler);
        this.canvas.removeEventListener('click', this.clickHandler);
        this.canvas.removeEventListener('touchstart', this.touchHandler);
        document.removeEventListener('keydown', this.keyHandler);
    }

    setStyle(style) {
        this.style = style;
    }

    startAutoMode(interval = 2000) {
        this.autoMode = true;
        this.autoInterval = setInterval(() => {
            const x = Math.random() * this.canvas.width;
            const targetY = this.canvas.height * (0.15 + Math.random() * 0.35);
            this.launchRocket(x, targetY);
        }, interval);
    }

    stopAutoMode() {
        this.autoMode = false;
        if (this.autoInterval) clearInterval(this.autoInterval);
        this.autoInterval = null;
    }

    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const targetY = e.clientY - rect.top;
        this.launchRocket(x, Math.min(targetY, this.canvas.height * 0.7));
    }

    handleTouch(e) {
        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const targetY = touch.clientY - rect.top;
        this.launchRocket(x, Math.min(targetY, this.canvas.height * 0.7));
    }

    handleKey(e) {
        if (e.code === 'Space' && !e.repeat) {
            e.preventDefault();
            const x = this.canvas.width * (0.2 + Math.random() * 0.6);
            const targetY = this.canvas.height * (0.15 + Math.random() * 0.3);
            this.launchRocket(x, targetY);
        }
    }

    launchRocket(x, targetY) {
        const styleConfig = this.STYLES[this.style] || this.STYLES.classic;
        this.rockets.push({
            x, y: this.canvas.height,
            targetY,
            speed: 4 + Math.random() * 3,
            trail: [],
            color: styleConfig.colors[Math.floor(Math.random() * styleConfig.colors.length)],
            style: this.style,
            styleConfig,
        });
    }

    explode(rocket) {
        const count = 60 + Math.floor(Math.random() * 40);
        const { styleConfig } = rocket;

        for (let i = 0; i < count; i++) {
            let angle, speed;

            if (styleConfig.shape === 'heart') {
                // Heart-shaped explosion
                const t = (i / count) * Math.PI * 2;
                const hx = 16 * Math.pow(Math.sin(t), 3);
                const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
                angle = Math.atan2(hy, hx);
                speed = Math.sqrt(hx * hx + hy * hy) * 0.25;
            } else if (styleConfig.shape === 'star') {
                // Star burst with 5 points
                const arm = i % 5;
                const armAngle = (arm / 5) * Math.PI * 2 - Math.PI / 2;
                const spread = (Math.random() - 0.5) * 0.3;
                angle = armAngle + spread;
                speed = 2 + Math.random() * 5;
            } else {
                angle = Math.random() * Math.PI * 2;
                speed = 1 + Math.random() * 5;
            }

            this.particles.push({
                x: rocket.x,
                y: rocket.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                decay: 0.008 + Math.random() * 0.012,
                color: styleConfig.colors[Math.floor(Math.random() * styleConfig.colors.length)],
                size: 2 + Math.random() * 2,
                gravity: 0.03,
            });
        }

        // Spark shower
        for (let i = 0; i < 20; i++) {
            this.particles.push({
                x: rocket.x, y: rocket.y,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8,
                life: 1, decay: 0.03 + Math.random() * 0.02,
                color: '#ffffff',
                size: 1, gravity: 0.05,
            });
        }
    }

    animate() {
        if (!this.running && this.rockets.length === 0 && this.particles.length === 0) return;

        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillStyle = 'rgba(0,0,0,0.15)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalCompositeOperation = 'lighter';

        // Update rockets
        for (let i = this.rockets.length - 1; i >= 0; i--) {
            const r = this.rockets[i];
            r.trail.push({ x: r.x, y: r.y });
            if (r.trail.length > 15) r.trail.shift();
            r.y -= r.speed;

            // Draw trail
            for (let j = 0; j < r.trail.length; j++) {
                const alpha = j / r.trail.length;
                this.ctx.beginPath();
                this.ctx.arc(r.trail[j].x, r.trail[j].y, 2, 0, Math.PI * 2);
                this.ctx.fillStyle = r.color;
                this.ctx.globalAlpha = alpha * 0.6;
                this.ctx.fill();
            }

            // Draw rocket head
            this.ctx.globalAlpha = 1;
            this.ctx.beginPath();
            this.ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fill();

            if (r.y <= r.targetY) {
                this.explode(r);
                this.rockets.splice(i, 1);
            }
        }

        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.vx *= 0.99;
            p.life -= p.decay;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }

            this.ctx.globalAlpha = p.life;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();

            // Glow
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size * p.life * 3, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.life * 0.1;
            this.ctx.fill();
        }

        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation = 'source-over';

        if (this.running || this.rockets.length > 0 || this.particles.length > 0) {
            requestAnimationFrame(() => this.animate());
        }
    }
}

// Firework style selector UI
export function renderFireworkStyleSelector(container, fireworks) {
    const styles = [
        { id: 'classic', emoji: '🎆', name: 'Classic' },
        { id: 'heart', emoji: '❤️', name: 'Heart' },
        { id: 'star', emoji: '⭐', name: 'Star' },
        { id: 'rainbow', emoji: '🌈', name: 'Rainbow' },
        { id: 'golden', emoji: '👑', name: 'Golden' },
    ];

    const el = document.createElement('div');
    el.className = 'firework-style-selector';
    el.innerHTML = `
    <div class="firework-styles-bar">
      ${styles.map(s => `
        <button class="firework-style-btn ${s.id === 'classic' ? 'active' : ''}" 
          data-style="${s.id}" title="${s.name}">
          ${s.emoji}
        </button>
      `).join('')}
    </div>
    <div class="firework-hint">Tap anywhere to launch fireworks! 🎆</div>
  `;

    el.querySelectorAll('.firework-style-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            el.querySelectorAll('.firework-style-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            fireworks.setStyle(btn.dataset.style);
        });
    });

    container.appendChild(el);
}
