# Birthday Wish Generator

Create magical birthday surprise pages — photo collages, countdowns, fireworks and shareable QR codes — from a web app or a Telegram bot.

## What it is

Two halves of one project:

- **Web app** — a Vite single-page app (hash routing, no framework) where you fill in a form (name, age, relationship, mood, photos, message) and get a celebration page with animations, a countdown to the birthday, a photo heart-collage, a slideshow, generated birthday songs/facts, emoji reactions, share buttons and a QR code for the page link. There is also a full-screen 3D "galaxy" celebration page (Three.js) and a dark/light theme toggle. Birthday messages can be generated with Google Gemini.
- **Telegram bot** (`bot/`) — a multi-step conversation bot that collects the same birthday data inside Telegram, builds the celebration page URL, and sends it back with a themed QR code image.

## Contents

```
index.html          App shell (title: "Birthday Wish Generator")
vite.config.js      Vite config — dev server on port 3000, build output to dist/
src/
  main.js           Hash router + page mounting + theme toggle
  pages/            landing, form, preview, celebration, galaxy (Three.js scene)
  components/       confetti, fireworks, countdown, heartCollage, slideshow,
                    songGenerator, giftFinder, birthdayFacts, cardWriter,
                    emojiReactions, partyMode, particles, qrGenerator, shareButtons
  utils/            messages, storage (localStorage), themes, geminiConfig
  styles/           index, landing, form, preview, celebration, collage CSS
bot/
  bot.py            Telegram bot (python-telegram-bot) — /start, /create, /qr, /help
  qr_generator.py   Themed QR codes (heart, cake, balloon, crown) drawn with Pillow
  requirements.txt  python-telegram-bot, qrcode[pil], Pillow, python-dotenv, google-generativeai
  Procfile          web: python bot.py
  railway.toml      Railway deploy config (nixpacks, start: python bot.py)
  .env.example      BOT_TOKEN, WEBSITE_URL, optional BASE_URL / PROXY_URL
dist/               Built web app output
```

## Run it

Web app:

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build into dist/
npm run preview
```

For AI-generated messages, set `VITE_GEMINI_API_KEY` in a `.env` file (read by `src/utils/geminiConfig.js`).

Telegram bot:

```bash
cd bot
pip install -r requirements.txt
cp .env.example .env   # fill in BOT_TOKEN and WEBSITE_URL
python bot.py
```

The bot is deploy-ready on Railway/Heroku-style platforms via `bot/railway.toml` and `bot/Procfile`.

## Tech

- **Frontend:** Vite 6, vanilla JavaScript (ES modules), Three.js, GSAP, canvas-confetti, qrcode, Google Fonts
- **AI:** Google Gemini (`@google/genai` in the app, `google-generativeai` in the bot)
- **Bot:** Python, python-telegram-bot 21, Pillow, qrcode

## License

MIT — see [LICENSE](LICENSE).
