// Confetti animation

export class Confetti {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.running = false;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    start(duration = 10000) {
        this.running = true;
        this.spawnBurst(200);

        const interval = setInterval(() => {
            if (this.running) this.spawnBurst(30);
        }, 600);

        this.animate();

        setTimeout(() => {
            this.running = false;
            clearInterval(interval);
        }, duration);
    }

    spawnBurst(count) {
        const colors = [
            '#ff2d75', '#7b2ff7', '#00d4ff', '#ffd700', '#ff6b9d',
            '#00ff88', '#ff8fab', '#c44dff', '#ffe066', '#ff4444',
            '#44ff44', '#4444ff', '#ff44ff', '#44ffff', '#ffff44'
        ];

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: -20 - Math.random() * 100,
                w: 6 + Math.random() * 6,
                h: 4 + Math.random() * 8,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 8,
                vx: (Math.random() - 0.5) * 3,
                vy: 1 + Math.random() * 3,
                gravity: 0.04 + Math.random() * 0.02,
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: 0.02 + Math.random() * 0.04,
                alpha: 1,
                shape: Math.random() > 0.5 ? 'rect' : 'circle',
            });
        }
    }

    animate() {
        if (!this.running && this.particles.length === 0) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            p.wobble += p.wobbleSpeed;
            p.x += p.vx + Math.sin(p.wobble) * 0.5;
            p.y += p.vy;
            p.vy += p.gravity;
            p.rotation += p.rotationSpeed;

            if (p.y > this.canvas.height + 20) {
                p.alpha -= 0.05;
            }

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.globalAlpha = Math.max(0, p.alpha);
            this.ctx.fillStyle = p.color;

            if (p.shape === 'rect') {
                this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            } else {
                this.ctx.beginPath();
                this.ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
                this.ctx.fill();
            }

            this.ctx.restore();

            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
            }
        }

        requestAnimationFrame(() => this.animate());
    }

    destroy() {
        this.running = false;
        this.particles = [];
    }
}
