// Photo slideshow with transitions

export class Slideshow {
    constructor(container, photos, options = {}) {
        this.container = container;
        this.photos = photos;
        this.currentIndex = 0;
        this.interval = null;
        this.duration = options.duration || 3000;
        this.transition = options.transition || 'fade';
        this.onComplete = options.onComplete || null;
        this.loops = options.loops || 1;
        this.currentLoop = 0;
    }

    render() {
        this.container.innerHTML = `
      <div class="slideshow-overlay" id="slideshow-overlay">
        <button class="slideshow-close" id="slideshow-close">✕</button>
        <div class="slideshow-content" style="position:relative; width:80%; max-width:600px;">
          <img class="slideshow-image" id="slideshow-img" src="${this.photos[0]}" alt="Memory" />
          <div style="text-align:center; margin-top: 16px; color: rgba(255,255,255,0.5); font-size: 0.875rem;">
            <span id="slideshow-counter">1 / ${this.photos.length}</span>
          </div>
        </div>
      </div>
    `;

        document.getElementById('slideshow-close').addEventListener('click', () => this.stop());
    }

    start() {
        if (this.photos.length === 0) return;
        this.render();
        this.currentIndex = 0;
        this.showCurrent();
        this.interval = setInterval(() => this.next(), this.duration);
    }

    next() {
        this.currentIndex++;
        if (this.currentIndex >= this.photos.length) {
            this.currentLoop++;
            if (this.currentLoop >= this.loops) {
                this.stop();
                return;
            }
            this.currentIndex = 0;
        }
        this.showCurrent();
    }

    showCurrent() {
        const img = document.getElementById('slideshow-img');
        const counter = document.getElementById('slideshow-counter');
        if (!img) return;

        // Apply transition
        const transitions = {
            fade: () => {
                img.style.transition = 'opacity 0.6s ease';
                img.style.opacity = '0';
                setTimeout(() => {
                    img.src = this.photos[this.currentIndex];
                    img.style.opacity = '1';
                }, 300);
            },
            zoom: () => {
                img.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
                img.style.transform = 'scale(0.8)';
                img.style.opacity = '0';
                setTimeout(() => {
                    img.src = this.photos[this.currentIndex];
                    img.style.transform = 'scale(1)';
                    img.style.opacity = '1';
                }, 300);
            },
            flip: () => {
                img.style.transition = 'transform 0.4s ease';
                img.style.transform = 'rotateY(90deg)';
                setTimeout(() => {
                    img.src = this.photos[this.currentIndex];
                    img.style.transform = 'rotateY(0deg)';
                }, 400);
            }
        };

        const transitionFn = transitions[this.transition] || transitions.fade;
        transitionFn();

        if (counter) {
            counter.textContent = `${this.currentIndex + 1} / ${this.photos.length}`;
        }
    }

    stop() {
        clearInterval(this.interval);
        const overlay = document.getElementById('slideshow-overlay');
        if (overlay) {
            overlay.style.transition = 'opacity 0.3s ease';
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        }
        if (this.onComplete) this.onComplete();
    }
}
