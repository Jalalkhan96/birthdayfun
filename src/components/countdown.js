// Countdown timer component

export class Countdown {
    constructor(container, targetTime, onComplete) {
        this.container = container;
        this.targetTime = new Date(targetTime).getTime();
        this.onComplete = onComplete;
        this.interval = null;
        this.completed = false;
    }

    render() {
        this.container.innerHTML = `
      <div class="countdown-clock" id="countdown-clock">
        <div class="countdown-unit">
          <div class="countdown-number" id="cd-days">00</div>
          <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
          <div class="countdown-number" id="cd-hours">00</div>
          <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
          <div class="countdown-number" id="cd-minutes">00</div>
          <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
          <div class="countdown-number" id="cd-seconds">00</div>
          <div class="countdown-label">Seconds</div>
        </div>
      </div>
    `;
    }

    start() {
        this.render();
        this.update();
        this.interval = setInterval(() => this.update(), 1000);
    }

    update() {
        const now = Date.now();
        const diff = this.targetTime - now;

        if (diff <= 0 && !this.completed) {
            this.completed = true;
            clearInterval(this.interval);
            this.setValues(0, 0, 0, 0);
            if (this.onComplete) this.onComplete();
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        this.setValues(days, hours, minutes, seconds);
    }

    setValues(days, hours, minutes, seconds) {
        const pad = (n) => String(n).padStart(2, '0');
        const daysEl = document.getElementById('cd-days');
        const hoursEl = document.getElementById('cd-hours');
        const minsEl = document.getElementById('cd-minutes');
        const secsEl = document.getElementById('cd-seconds');

        if (daysEl) daysEl.textContent = pad(days);
        if (hoursEl) hoursEl.textContent = pad(hours);
        if (minsEl) minsEl.textContent = pad(minutes);
        if (secsEl) {
            const oldVal = secsEl.textContent;
            const newVal = pad(seconds);
            if (oldVal !== newVal) {
                secsEl.textContent = newVal;
                secsEl.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    secsEl.style.transform = 'scale(1)';
                }, 150);
            }
        }
    }

    destroy() {
        clearInterval(this.interval);
    }
}

// Helper to calculate target time from birthday settings
export function calculateTargetTime(birthdayData) {
    const { date, timerMode, timerValue } = birthdayData;

    if (timerMode === 'midnight') {
        // Midnight of the birthday date
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        // If it's already past, use as-is to trigger immediately
        return d.getTime();
    }

    if (timerMode === 'specific' && birthdayData.time) {
        const d = new Date(date);
        const [hours, minutes] = birthdayData.time.split(':');
        d.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        return d.getTime();
    }

    if (timerMode === 'delay') {
        // Delay from now
        const delayMs = (timerValue || 30) * 1000;
        return Date.now() + delayMs;
    }

    // Default: 30 second delay for demo
    return Date.now() + 30000;
}
