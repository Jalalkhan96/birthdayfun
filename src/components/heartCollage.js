// Enhanced Heart Collage Engine — 5 styles with canvas download

export const COLLAGE_STYLES = [
    { id: 'classic', name: 'Classic Heart Grid', emoji: '💝' },
    { id: 'floating', name: 'Floating Particles', emoji: '✨' },
    { id: 'mosaic', name: 'Photo Mosaic', emoji: '🧩' },
    { id: 'animated', name: 'Animated Collage', emoji: '💫' },
    { id: 'rotating', name: '3D Rotating Heart', emoji: '🔄' },
];

export class HeartCollage {
    constructor(container, photos, options = {}) {
        this.container = container;
        this.photos = photos || [];
        this.style = options.style || 'classic';
        this.cellSize = options.cellSize || 55;
        this.animated = options.animated !== false;
        this.loadedImages = [];
    }

    // Parametric heart curve
    heartPoint(t) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        return { x, y };
    }

    isInsideHeart(x, y) {
        const x2 = (x / 16) * (x / 16);
        const y2 = ((y + 2) / 16) * ((y + 2) / 16);
        const val = Math.pow(x2 + y2 - 1, 3) - x2 * y2 * ((y + 2) / 16);
        return val <= 0;
    }

    generateHeartCells() {
        const containerSize = Math.min(this.container.offsetWidth, this.container.offsetHeight) || 400;
        const scale = containerSize / 40;
        const centerX = containerSize / 2;
        const centerY = containerSize / 2;
        const gridSize = this.cellSize + 4;
        const cols = Math.floor(containerSize / gridSize);
        const rows = Math.floor(containerSize / gridSize);
        const cells = [];

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const px = (col + 0.5) * gridSize;
                const py = (row + 0.5) * gridSize;
                const nx = (px - centerX) / scale;
                const ny = (py - centerY) / scale;
                if (this.isInsideHeart(nx, ny)) {
                    cells.push({ x: px - gridSize / 2, y: py - gridSize / 2, size: gridSize - 4, row, col });
                }
            }
        }
        return { cells, containerSize, centerX, centerY, scale };
    }

    async preloadImages() {
        this.loadedImages = [];
        for (const src of this.photos) {
            const img = await this.loadImage(src);
            this.loadedImages.push(img);
        }
    }

    loadImage(src) {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
            img.src = src;
        });
    }

    async render() {
        this.container.innerHTML = '';
        this.container.style.position = 'relative';
        if (this.photos.length === 0) return;

        switch (this.style) {
            case 'floating': this.renderFloating(); break;
            case 'mosaic': this.renderMosaic(); break;
            case 'animated': this.renderAnimated(); break;
            case 'rotating': this.renderRotating(); break;
            default: this.renderClassic(); break;
        }
    }

    // ═══════════════════════════════════════
    // Heart SVG Clip Path Injection
    // ═══════════════════════════════════════
    injectSVGClipPath() {
        if (document.getElementById('heart-clip-path')) return;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.position = 'absolute';
        svg.style.width = '0';
        svg.style.height = '0';
        svg.innerHTML = `
      <defs>
        <clipPath id="heart-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.95 C0.5,0.95 0,0.55 0,0.3 C0,0.1 0.15,0 0.3,0 C0.4,0 0.5,0.1 0.5,0.1 C0.5,0.1 0.6,0 0.7,0 C0.85,0 1,0.1 1,0.3 C1,0.55 0.5,0.95 0.5,0.95 Z"></path>
        </clipPath>
      </defs>
    `;
        document.body.appendChild(svg);
    }

    // ═══════════════════════════════════════
    // STYLE 1: Classic Heart Grid
    // ═══════════════════════════════════════
    renderClassic() {
        this.injectSVGClipPath();
        this.addBlurBackground();

        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
            position: absolute; inset: 5%;
            clip-path: url(#heart-clip-path);
            -webkit-clip-path: url(#heart-clip-path);
            display: flex; flex-wrap: wrap; align-content: flex-start;
            background: rgba(255,255,255,0.05);
            overflow: hidden;
        `;

        // Create a tight grid of photos
        const numPhotos = this.photos.length;
        // Determine grid sizing based on photo count to fill the area roughly
        const cols = Math.max(3, Math.ceil(Math.sqrt(numPhotos * 1.5)));
        const cellWidth = 100 / cols;

        this.photos.forEach((src, i) => {
            const el = document.createElement('div');
            el.style.cssText = `
                width: ${cellWidth}%; 
                height: ${cellWidth}%;
                position: relative;
                overflow: hidden;
            `;

            if (this.animated) {
                el.style.opacity = '0';
                el.style.transform = 'scale(0.5)';
                el.style.transition = `all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.05}s`;
            }

            const img = document.createElement('img');
            img.src = src;
            img.style.cssText = `
                width: 100%; height: 100%; object-fit: cover;
                transition: transform 0.4s ease;
            `;

            el.appendChild(img);
            wrapper.appendChild(el);

            // Hover zoom
            el.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.2)'; el.style.zIndex = '10'; });
            el.addEventListener('mouseleave', () => { img.style.transform = 'scale(1)'; el.style.zIndex = '1'; });

            if (this.animated) {
                requestAnimationFrame(() => setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'scale(1)';
                }, 50));
            }
        });

        // Fill remaining space if not enough photos
        const totalCells = cols * Math.ceil(numPhotos / cols);
        if (numPhotos < totalCells) {
            for (let i = numPhotos; i < totalCells; i++) {
                const el = document.createElement('div');
                el.style.cssText = `width: ${cellWidth}%; height: ${cellWidth}%;`;
                const img = document.createElement('img');
                img.src = this.photos[i % numPhotos];
                img.style.cssText = 'width:100%;height:100%;object-fit:cover; opacity: 0.5; filter: grayscale(50%);';
                el.appendChild(img);
                wrapper.appendChild(el);
            }
        }

        this.container.appendChild(wrapper);
        this.addGlowOutline();
        this.addPulseAnimation();
    }

    // ═══════════════════════════════════════
    // STYLE 2: Floating Heart Particles
    // ═══════════════════════════════════════
    renderFloating() {
        const containerSize = Math.min(this.container.offsetWidth, this.container.offsetHeight) || 400;
        this.addBlurBackground();

        // Generate heart outline points
        const points = [];
        const numParticles = Math.min(this.photos.length * 4, 80);
        for (let i = 0; i < numParticles; i++) {
            const t = (i / numParticles) * Math.PI * 2;
            const { x, y } = this.heartPoint(t);
            const px = (x / 34 + 0.5) * containerSize;
            const py = (y / 34 + 0.5) * containerSize;
            points.push({ x: px, y: py });
        }

        // Add some interior points
        const { cells } = this.generateHeartCells();
        const interiorSample = cells.filter((_, i) => i % 4 === 0);
        interiorSample.forEach(c => points.push({ x: c.x + c.size / 2, y: c.y + c.size / 2 }));

        const allPoints = points.slice(0, Math.max(this.photos.length * 3, 40));

        allPoints.forEach((pt, i) => {
            const photoIdx = i % this.photos.length;
            const size = 25 + Math.random() * 40;
            const el = document.createElement('div');
            el.style.cssText = `
        position: absolute;
        left: ${pt.x - size / 2}px; top: ${pt.y - size / 2}px;
        width: ${size}px; height: ${size}px;
        border-radius: 50%; overflow: hidden;
        border: 2px solid rgba(255,255,255,0.4);
        box-shadow: 0 4px 15px rgba(255,45,117,0.3);
        animation: floatParticle${i % 3} ${3 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s;
        opacity: 0; transform: scale(0.5);
        transition: all 0.6s break-out ${i * 0.05}s;
      `;
            const img = document.createElement('img');
            img.src = this.photos[photoIdx];
            img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
            el.appendChild(img);
            this.container.appendChild(el);

            requestAnimationFrame(() => setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
            }, 50));
        });

        this.injectFloatStyles();
        this.addGlowOutline();
    }

    // ═══════════════════════════════════════
    // STYLE 3: Photo Mosaic Heart
    // ═══════════════════════════════════════
    renderMosaic() {
        this.injectSVGClipPath();
        this.addBlurBackground();

        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
            position: absolute; inset: 5%;
            clip-path: url(#heart-clip-path);
            -webkit-clip-path: url(#heart-clip-path);
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
            grid-auto-rows: 40px;
            gap: 2px;
            background: transparent;
        `;

        const numCells = 100; // Generate a dense grid
        for (let i = 0; i < numCells; i++) {
            const photoIdx = i % this.photos.length;
            const isLarge = Math.random() > 0.8;

            const el = document.createElement('div');
            el.style.cssText = `
        position:relative; overflow:hidden; border-radius: 4px;
        grid-column: span ${isLarge ? 2 : 1};
        grid-row: span ${isLarge ? 2 : 1};
        opacity: 0; transform: translateY(20px);
        transition: all 0.5s ease ${Math.random() * 1}s;
      `;
            const img = document.createElement('img');
            img.src = this.photos[photoIdx];
            img.style.cssText = 'width:100%;height:100%;object-fit:cover; transition: transform 0.3s ease;';
            el.appendChild(img);

            el.addEventListener('mouseenter', () => img.style.transform = 'scale(1.15)');
            el.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');

            wrapper.appendChild(el);
            requestAnimationFrame(() => setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 50));
        }

        this.container.appendChild(wrapper);
        this.addGlowOutline();
    }

    // ═══════════════════════════════════════
    // STYLE 4: Animated Heart Collage
    // ═══════════════════════════════════════
    renderAnimated() {
        const { cells, containerSize } = this.generateHeartCells();
        if (cells.length === 0) return;
        this.addBlurBackground();

        // Sort cells from center outward for ripple effect
        const cx = containerSize / 2;
        const cy = containerSize / 2;
        const sorted = cells.map(c => ({
            ...c,
            dist: Math.sqrt(Math.pow(c.x + c.size / 2 - cx, 2) + Math.pow(c.y + c.size / 2 - cy, 2))
        })).sort((a, b) => a.dist - b.dist);

        sorted.forEach((pos, i) => {
            const photoIdx = i % this.photos.length;
            const el = document.createElement('div');
            el.style.cssText = `
        position:absolute;
        left:${pos.x}px; top:${pos.y}px;
        width:${pos.size}px; height:${pos.size}px;
        border-radius: 8px; overflow:hidden;
        border: 2px solid rgba(255,255,255,0.15);
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        opacity: 0;
        transform: scale(0) rotate(${-30 + Math.random() * 60}deg);
        transition: all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.05}s;
      `;
            const img = document.createElement('img');
            img.src = this.photos[photoIdx];
            img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
            el.appendChild(img);

            // Continuous subtle animation
            el.addEventListener('mouseenter', () => {
                el.style.transform = 'scale(1.2) rotate(0deg)';
                el.style.zIndex = '10';
                el.style.boxShadow = '0 8px 30px rgba(255,45,117,0.4)';
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'scale(1) rotate(0deg)';
                el.style.zIndex = '';
                el.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            });

            this.container.appendChild(el);
            requestAnimationFrame(() => setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'scale(1) rotate(0deg)';
            }, 50));
        });

        this.addGlowOutline();
        this.addPulseAnimation();
        this.addSparkles();
    }

    // ═══════════════════════════════════════
    // STYLE 5: 3D Rotating Heart
    // ═══════════════════════════════════════
    renderRotating() {
        const containerSize = Math.min(this.container.offsetWidth, this.container.offsetHeight) || 400;
        this.addBlurBackground();

        const wrapper = document.createElement('div');
        wrapper.className = 'heart-3d-wrapper';
        wrapper.style.cssText = `
      width: 100%; height: 100%;
      perspective: 800px;
      display: flex; align-items: center; justify-content: center;
    `;

        const rotator = document.createElement('div');
        rotator.className = 'heart-3d-rotator';
        rotator.style.cssText = `
      width: 90%; height: 90%;
      position: relative;
      transform-style: preserve-3d;
      animation: heartRotate3D 12s ease-in-out infinite;
    `;

        const { cells } = this.generateHeartCells();
        const scaledCells = cells.map(c => ({
            x: c.x * 0.9 + containerSize * 0.05,
            y: c.y * 0.9 + containerSize * 0.05,
            size: c.size * 0.9
        }));

        scaledCells.forEach((pos, i) => {
            const photoIdx = i % this.photos.length;
            const depth = -20 + Math.random() * 40;
            const el = document.createElement('div');
            el.style.cssText = `
        position:absolute;
        left:${pos.x}px; top:${pos.y}px;
        width:${pos.size}px; height:${pos.size}px;
        border-radius: 6px; overflow:hidden;
        border: 2px solid rgba(255,255,255,0.2);
        transform: translateZ(${depth}px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        opacity: 0;
        transition: opacity 0.5s ease ${i * 0.04}s;
      `;
            const img = document.createElement('img');
            img.src = this.photos[photoIdx];
            img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
            el.appendChild(img);
            rotator.appendChild(el);
            requestAnimationFrame(() => el.style.opacity = '1');
        });

        wrapper.appendChild(rotator);
        this.container.appendChild(wrapper);
        this.inject3DStyles();
        this.addGlowOutline();
    }

    // ═══════════════════════════════════════
    // Shared Effects
    // ═══════════════════════════════════════

    addBlurBackground() {
        const bg = document.createElement('div');
        bg.style.cssText = `
      position:absolute; inset:0; z-index:-2;
      background: radial-gradient(circle at center, 
        rgba(255,45,117,0.08) 0%, 
        rgba(123,47,247,0.05) 40%, 
        transparent 70%);
      filter: blur(30px);
      border-radius: 50%;
    `;
        this.container.appendChild(bg);
    }

    addGlowOutline() {
        const glow = document.createElement('div');
        glow.style.cssText = `
      position:absolute; top:50%; left:50%;
      transform:translate(-50%,-50%);
      width:95%; height:95%;
      border-radius:50%;
      background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
      opacity:0.25; pointer-events:none;
      animation: pulse-glow 3s ease-in-out infinite;
      z-index:-1;
    `;
        this.container.appendChild(glow);
    }

    addPulseAnimation() {
        const pulse = document.createElement('div');
        pulse.style.cssText = `
      position:absolute; top:50%; left:50%;
      transform:translate(-50%,-50%);
      width:80%; height:80%;
      border: 2px solid var(--accent-1);
      border-radius: 50%;
      opacity: 0;
      animation: pulseRing 2s ease-out infinite;
      pointer-events: none; z-index: -1;
    `;
        this.container.appendChild(pulse);
        this.injectPulseStyle();
    }

    addSparkles() {
        for (let i = 0; i < 8; i++) {
            const s = document.createElement('div');
            s.textContent = '✦';
            s.style.cssText = `
        position:absolute;
        left:${10 + Math.random() * 80}%;
        top:${10 + Math.random() * 80}%;
        font-size:${8 + Math.random() * 12}px;
        color: var(--accent-1);
        opacity:0;
        pointer-events:none;
        animation: sparkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite;
      `;
            this.container.appendChild(s);
        }
    }

    injectFloatStyles() {
        if (document.getElementById('float-particle-styles')) return;
        const s = document.createElement('style');
        s.id = 'float-particle-styles';
        s.textContent = `
      @keyframes floatParticle0 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(5deg)} }
      @keyframes floatParticle1 { 0%,100%{transform:translateX(0) rotate(0deg)} 50%{transform:translateX(10px) rotate(-3deg)} }
      @keyframes floatParticle2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(8px,-8px)} }
    `;
        document.head.appendChild(s);
    }

    inject3DStyles() {
        if (document.getElementById('heart-3d-styles')) return;
        const s = document.createElement('style');
        s.id = 'heart-3d-styles';
        s.textContent = `
      @keyframes heartRotate3D {
        0% { transform: rotateY(0deg) rotateX(0deg); }
        25% { transform: rotateY(15deg) rotateX(5deg); }
        50% { transform: rotateY(0deg) rotateX(0deg); }
        75% { transform: rotateY(-15deg) rotateX(-5deg); }
        100% { transform: rotateY(0deg) rotateX(0deg); }
      }
    `;
        document.head.appendChild(s);
    }

    injectPulseStyle() {
        if (document.getElementById('pulse-ring-style')) return;
        const s = document.createElement('style');
        s.id = 'pulse-ring-style';
        s.textContent = `
      @keyframes pulseRing {
        0% { opacity:0.4; transform:translate(-50%,-50%) scale(0.8); }
        100% { opacity:0; transform:translate(-50%,-50%) scale(1.2); }
      }
    `;
        document.head.appendChild(s);
    }

    // ═══════════════════════════════════════
    // Canvas Download
    // ═══════════════════════════════════════
    async downloadAsImage(filename = 'heart-collage.png') {
        const containerSize = Math.min(this.container.offsetWidth, this.container.offsetHeight) || 400;
        const scale = 2; // 2x for high-res
        const canvas = document.createElement('canvas');
        canvas.width = containerSize * scale;
        canvas.height = containerSize * scale;
        const ctx = canvas.getContext('2d');
        ctx.scale(scale, scale);

        // Draw background
        const gradient = ctx.createRadialGradient(
            containerSize / 2, containerSize / 2, 0,
            containerSize / 2, containerSize / 2, containerSize / 2
        );
        gradient.addColorStop(0, 'rgba(255,45,117,0.15)');
        gradient.addColorStop(0.5, 'rgba(123,47,247,0.08)');
        gradient.addColorStop(1, 'rgba(10,10,15,1)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, containerSize, containerSize);

        // Load and draw images in heart positions
        const { cells } = this.generateHeartCells();
        await this.preloadImages();

        for (let i = 0; i < cells.length; i++) {
            const pos = cells[i];
            const imgIdx = i % this.loadedImages.length;
            const img = this.loadedImages[imgIdx];
            if (!img) continue;

            ctx.save();
            ctx.beginPath();
            ctx.roundRect(pos.x, pos.y, pos.size, pos.size, 4);
            ctx.clip();

            // Draw image cover-fit
            const aspect = img.width / img.height;
            let sw = pos.size, sh = pos.size;
            if (aspect > 1) { sw = pos.size * aspect; }
            else { sh = pos.size / aspect; }
            const sx = pos.x - (sw - pos.size) / 2;
            const sy = pos.y - (sh - pos.size) / 2;
            ctx.drawImage(img, sx, sy, sw, sh);

            // Border
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
        }

        // Download
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
}
