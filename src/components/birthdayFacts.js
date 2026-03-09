// Birthday Facts — rotating fun birthday facts

const BIRTHDAY_FACTS = [
    "The most common birthday in the world is September 9th. Statistically, more people are born in September than any other month!",
    "The tradition of birthday candles started in Ancient Greece. People lit candles on cakes to make them glow like the moon as an offering to Artemis.",
    "The \"Happy Birthday\" song was originally titled \"Good Morning to All\" and was written by two sisters in 1893.",
    "The world's largest birthday cake weighed 128,238 pounds — about the weight of 8 school buses!",
    "In some cultures, pulling earlobes on birthdays brings good luck. One pull for each year of life!",
    "Shakespeare was born and died on the same date: April 23rd.",
    "The odds of being born on February 29th (Leap Day) are about 1 in 1,461.",
    "Queen Elizabeth II had two birthdays — her actual birthday on April 21st and an official celebration in June.",
    "In Germany, it's considered bad luck to wish someone happy birthday before the actual date.",
    "The most expensive birthday party ever cost $27.2 million — thrown by the Sultan of Brunei.",
    "Babies born on holidays like Christmas or New Year's are statistically rarer due to fewer scheduled deliveries.",
    "The Aztecs didn't celebrate birthdays at all — age was based on the calendar cycle rather than individual birth dates.",
    "In South Korea, everyone turns one year older on New Year's Day, not their actual birthday!",
    "The first known birthday card was sent in 1842 — a hand-painted design for a child's birthday.",
    "On average, about 385,000 babies are born every single day worldwide — that's about 4.5 births per second!",
];

export function renderBirthdayFact(container) {
    let currentIndex = Math.floor(Math.random() * BIRTHDAY_FACTS.length);

    const el = document.createElement('div');
    el.className = 'glass-card birthday-fact-card';
    el.innerHTML = `
    <div class="fact-icon">💡</div>
    <div class="fact-label">Birthday Fact</div>
    <div class="fact-text" id="fact-text">
      Did you know? ${BIRTHDAY_FACTS[currentIndex]}
    </div>
    <button class="fact-next" id="fact-next" title="Next fact">→</button>
  `;

    container.appendChild(el);

    // Next fact
    const nextBtn = el.querySelector('#fact-next');
    const factText = el.querySelector('#fact-text');

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % BIRTHDAY_FACTS.length;
        factText.style.opacity = '0';
        factText.style.transform = 'translateY(10px)';
        setTimeout(() => {
            factText.textContent = `Did you know? ${BIRTHDAY_FACTS[currentIndex]}`;
            factText.style.opacity = '1';
            factText.style.transform = 'translateY(0)';
        }, 200);
    });

    // Auto-rotate every 15s
    const interval = setInterval(() => {
        if (document.contains(el)) {
            nextBtn.click();
        } else {
            clearInterval(interval);
        }
    }, 15000);

    return { destroy: () => clearInterval(interval) };
}
