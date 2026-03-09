"""
🎂 Birthday Generator Telegram Bot

Multi-step conversation bot that collects birthday data,
generates celebration page URLs with QR codes, and sends
them back to users.

Commands:
  /start   - Welcome message + Mini App button
  /create  - Start birthday creation flow
  /qr      - Generate QR from any link
  /help    - Show all commands
"""

import os
import json
import base64
import logging
import traceback
from io import BytesIO

import google.generativeai as genai
from dotenv import load_dotenv
from telegram import (
    Update,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    WebAppInfo,
    ReplyKeyboardRemove,
)
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    MessageHandler,
    CallbackQueryHandler,
    ConversationHandler,
    filters,
    ContextTypes,
)

# ─── Config ───────────────────────────────────────────
load_dotenv()
TOKEN = os.getenv("BOT_TOKEN", "")
WEBSITE_URL = os.getenv("WEBSITE_URL", "http://localhost:3000")
BASE_URL = os.getenv("BASE_URL", "")
PROXY_URL = os.getenv("PROXY_URL", "")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

# Configure Gemini if key is available
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

# ─── Clear broken system proxy so httpx doesn't use it ───
if not PROXY_URL:
    for key in ["HTTP_PROXY", "HTTPS_PROXY", "http_proxy", "https_proxy",
                "ALL_PROXY", "all_proxy", "NO_PROXY", "no_proxy"]:
        os.environ.pop(key, None)

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)

# ─── Conversation States ──────────────────────────────
(
    STATE_NAME,
    STATE_AGE,
    STATE_RELATIONSHIP,
    STATE_MOOD,
    STATE_THEME,
    STATE_PHOTOS,
    STATE_MESSAGE,
    STATE_TIMER,
) = range(8)

# ─── Theme / Mood Data ───────────────────────────────
THEMES = {
    "romantic": {"name": "Romantic", "emoji": "💕"},
    "friends": {"name": "Friends Party", "emoji": "🎉"},
    "royal": {"name": "Royal Gold", "emoji": "👑"},
    "cute": {"name": "Cute Hearts", "emoji": "💖"},
    "minimal": {"name": "Minimal Elegant", "emoji": "✨"},
}

RELATIONSHIPS = [
    ("friend", "👫 Friend"),
    ("brother", "👦 Brother"),
    ("sister", "👧 Sister"),
    ("girlfriend", "💕 Girlfriend"),
    ("boyfriend", "💙 Boyfriend"),
    ("default", "🤗 Other"),
]

MOODS = [
    ("emotional", "🥺 Emotional"),
    ("funny", "😂 Funny"),
    ("romantic", "💕 Romantic"),
    ("royal", "👑 Royal"),
]

TIMERS = [
    ("30", "⚡ 30 seconds (Quick Demo)"),
    ("60", "⏰ 1 minute"),
    ("300", "⏰ 5 minutes"),
    ("midnight", "🌙 Midnight on birthday"),
]


# ═══════════════════════════════════════════════════════
# COMMANDS
# ═══════════════════════════════════════════════════════


async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Welcome message with Mini App button."""
    # Check for deep link params
    args = context.args
    if args and args[0] == "create":
        return await create_command(update, context)

    keyboard = [
        [InlineKeyboardButton("🎂 Create Birthday Page", callback_data="start_create")],
        [InlineKeyboardButton(
            "🌐 Open Birthday Generator",
            web_app=WebAppInfo(url=WEBSITE_URL),
        )],
        [InlineKeyboardButton("✨ AI Wish", callback_data="ai_wish"),
         InlineKeyboardButton("🎵 AI Song", callback_data="ai_song")],
        [InlineKeyboardButton("🎁 Gift Ideas", callback_data="ai_gift"),
         InlineKeyboardButton("📱 QR Code", callback_data="start_qr")],
        [InlineKeyboardButton("❓ Help & Commands", callback_data="show_help")],
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        "🎉 *Welcome to Birthday Generator Bot!*\n\n"
        "I can create a stunning birthday celebration page "
        "with photos, countdown timer, fireworks, and a shareable QR code!\n\n"
        "It's perfect for surprising friends, family, or your special someone!\n\n"
        "Tap the button below to get started! 👇",
        parse_mode="Markdown",
        reply_markup=reply_markup,
    )


HELP_TEXT = (
    "📋 *Birthday Generator Bot — Commands*\n\n"
    "🎂 /create — Create a birthday surprise page\n"
    "📱 /qr `<link>` — Generate a QR code\n"
    "✨ /wish `<name>` — AI birthday wish\n"
    "🎵 /song `<name>` — AI birthday song\n"
    "🎁 /gift `<who>` — AI gift ideas\n"
    "❓ /help — Show this help message\n\n"
    "🌐 *Mini App:* Use the button from /start!\n\n"
    "🔗 *Deep Link:*\n"
    "`https://t.me/BirthdayCreatorBot?start=create`"
)

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Show all available commands (works from slash command)."""
    await update.message.reply_text(HELP_TEXT, parse_mode="Markdown")

async def show_help_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Show help when Help button is tapped."""
    await update.callback_query.answer()
    await update.callback_query.message.reply_text(HELP_TEXT, parse_mode="Markdown")

async def start_qr_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Prompt for a link when QR button is tapped."""
    await update.callback_query.answer()
    await update.callback_query.message.reply_text(
        "📱 *QR Code Generator*\n\nSend me a link using:\n`/qr https://example.com`",
        parse_mode="Markdown",
    )


async def qr_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Generate QR code from a link."""
    if not context.args:
        await update.message.reply_text("Please provide a link to generate a QR code.")
        await update.message.reply_text(
            "📱 *QR Code Generator*\n\n"
            "Usage: `/qr https://example.com`\n\n"
            "I'll generate a styled QR code for you!",
            parse_mode="Markdown",
        )
        return

    link = context.args[0]
    await update.message.reply_text("⏳ Generating QR code...")

    try:
        qr_bytes = generate_qr_simple(link)
        await update.message.reply_photo(
            photo=BytesIO(qr_bytes),
            caption=f"📱 *Scan this QR code*\n\n🔗 {link}",
            parse_mode="Markdown",
        )
    except Exception as e:
        logger.error(f"QR generation error: {e}")
        await update.message.reply_text("❌ Failed to generate QR code. Please try again.")


# ═══════════════════════════════════════════════════════
# GEMINI AI COMMANDS
# ═══════════════════════════════════════════════════════


def _get_gemini_model():
    """Get configured Gemini model or None."""
    if not GEMINI_API_KEY:
        return None
    return genai.GenerativeModel("gemini-2.0-flash")


async def wish_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Generate an AI birthday wish."""
    if not GEMINI_API_KEY:
        await update.message.reply_text(
            "❌ Gemini API key not configured.\n\n"
            "Ask the admin to add `GEMINI_API_KEY` to the bot's environment variables."
        )
        return

    name = " ".join(context.args) if context.args else "my friend"
    await update.message.reply_text("✨ *Generating a birthday wish...*", parse_mode="Markdown")

    try:
        model = _get_gemini_model()
        prompt = (
            f"Write a warm, heartfelt, and personalized birthday wish for someone named {name}. "
            "Make it emotional, celebratory, and end with a blessing. "
            "Use 2-3 relevant emojis. Keep it under 100 words."
        )
        response = model.generate_content(prompt)
        wish_text = response.text.strip()

        await update.message.reply_text(
            f"🎂 *Birthday Wish for {name}:*\n\n{wish_text}",
            parse_mode="Markdown",
        )
    except Exception as e:
        logger.error(f"Gemini wish error: {e}")
        await update.message.reply_text("❌ Failed to generate wish. Please try again.")


async def song_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Generate an AI birthday song."""
    if not GEMINI_API_KEY:
        await update.message.reply_text(
            "❌ Gemini API key not configured.\n\n"
            "Ask the admin to add `GEMINI_API_KEY` to the bot's environment variables."
        )
        return

    name = " ".join(context.args) if context.args else "my friend"
    await update.message.reply_text("🎵 *Composing a birthday song...*", parse_mode="Markdown")

    try:
        model = _get_gemini_model()
        prompt = (
            f"Write a short, fun birthday song for {name}. "
            "Structure: Intro → Verse → Chorus. Must be singable in 30 seconds. "
            "Include their name in the chorus. Use 🎵 at start and end. Keep it joyful."
        )
        response = model.generate_content(prompt)
        song_text = response.text.strip()

        await update.message.reply_text(
            f"🎵 *Birthday Song for {name}:*\n\n{song_text}",
            parse_mode="Markdown",
        )
    except Exception as e:
        logger.error(f"Gemini song error: {e}")
        await update.message.reply_text("❌ Failed to generate song. Please try again.")


async def gift_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Generate AI gift ideas."""
    if not GEMINI_API_KEY:
        await update.message.reply_text(
            "❌ Gemini API key not configured.\n\n"
            "Ask the admin to add `GEMINI_API_KEY` to the bot's environment variables."
        )
        return

    details = " ".join(context.args) if context.args else "a friend"
    await update.message.reply_text("🎁 *Finding gift ideas...*", parse_mode="Markdown")

    try:
        model = _get_gemini_model()
        prompt = (
            f"Suggest 5 unique and thoughtful birthday gift ideas for {details}. "
            "Include a budget range for each. Format as a numbered list with emojis. "
            "Keep each item to 1-2 sentences."
        )
        response = model.generate_content(prompt)
        gift_text = response.text.strip()

        await update.message.reply_text(
            f"🎁 *Gift Ideas for {details}:*\n\n{gift_text}",
            parse_mode="Markdown",
        )
    except Exception as e:
        logger.error(f"Gemini gift error: {e}")
        await update.message.reply_text("❌ Failed to generate gift ideas. Please try again.")


# ═══════════════════════════════════════════════════════
# CONVERSATION FLOW: /create
# ═══════════════════════════════════════════════════════


async def create_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Start the birthday creation conversation."""
    context.user_data.clear()
    context.user_data["photos"] = []

    text = (
        "🎉 *Let's create a birthday surprise!*\n\n"
        "I'll ask you a few questions to generate a magical birthday page.\n\n"
        "❓ *What is the birthday person's name?*"
    )

    if update.callback_query:
        await update.callback_query.answer()
        await update.callback_query.message.reply_text(text, parse_mode="Markdown")
    else:
        await update.message.reply_text(text, parse_mode="Markdown")

    return STATE_NAME


async def receive_name(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Receive the birthday person's name."""
    name = update.message.text.strip()
    if not name or len(name) > 50:
        await update.message.reply_text("Please enter a valid name (1-50 characters).")
        return STATE_NAME

    context.user_data["name"] = name

    await update.message.reply_text(
        f"✅ Got it! Birthday surprise for *{name}*\n\n"
        "❓ *How old is the person turning?*\n"
        "(Send a number, or type `skip` to skip)",
        parse_mode="Markdown",
    )
    return STATE_AGE


async def receive_age(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Receive the age."""
    text = update.message.text.strip().lower()

    if text == "skip":
        context.user_data["age"] = None
    else:
        try:
            age = int(text)
            if age < 1 or age > 150:
                raise ValueError
            context.user_data["age"] = age
        except ValueError:
            await update.message.reply_text("Please send a valid age (1-150) or `skip`.", parse_mode="Markdown")
            return STATE_AGE

    # Show relationship keyboard
    keyboard = []
    row = []
    for rel_id, rel_label in RELATIONSHIPS:
        row.append(InlineKeyboardButton(rel_label, callback_data=f"rel_{rel_id}"))
        if len(row) == 2:
            keyboard.append(row)
            row = []
    if row:
        keyboard.append(row)

    await update.message.reply_text(
        "❓ *What is your relationship?*\n\nChoose below 👇",
        parse_mode="Markdown",
        reply_markup=InlineKeyboardMarkup(keyboard),
    )
    return STATE_RELATIONSHIP


async def receive_relationship(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Receive relationship from inline button."""
    query = update.callback_query
    await query.answer()

    rel_id = query.data.replace("rel_", "")
    context.user_data["relationship"] = rel_id
    rel_name = next((label for rid, label in RELATIONSHIPS if rid == rel_id), rel_id)

    # Show mood keyboard
    keyboard = []
    for mood_id, mood_label in MOODS:
        keyboard.append([InlineKeyboardButton(mood_label, callback_data=f"mood_{mood_id}")])

    await query.message.reply_text(
        f"✅ Relationship: *{rel_name}*\n\n"
        "❓ *What mood should the birthday message have?*",
        parse_mode="Markdown",
        reply_markup=InlineKeyboardMarkup(keyboard),
    )
    return STATE_MOOD


async def receive_mood(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Receive mood from inline button."""
    query = update.callback_query
    await query.answer()

    mood_id = query.data.replace("mood_", "")
    context.user_data["mood"] = mood_id
    mood_name = next((label for mid, label in MOODS if mid == mood_id), mood_id)

    # Show theme keyboard
    keyboard = []
    for theme_id, theme_info in THEMES.items():
        keyboard.append([
            InlineKeyboardButton(
                f"{theme_info['emoji']} {theme_info['name']}",
                callback_data=f"theme_{theme_id}",
            )
        ])

    await query.message.reply_text(
        f"✅ Mood: *{mood_name}*\n\n"
        "❓ *Choose a theme for the celebration page:*",
        parse_mode="Markdown",
        reply_markup=InlineKeyboardMarkup(keyboard),
    )
    return STATE_THEME


async def receive_theme(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Receive theme from inline button."""
    query = update.callback_query
    await query.answer()

    theme_id = query.data.replace("theme_", "")
    context.user_data["theme"] = theme_id
    theme_info = THEMES.get(theme_id, {"name": theme_id, "emoji": "🎂"})

    await query.message.reply_text(
        f"✅ Theme: *{theme_info['emoji']} {theme_info['name']}*\n\n"
        "📸 *Now send me photos!* (1-10 photos)\n\n"
        "Send photos one by one, or multiple at once.\n"
        "When done, type /done\n\n"
        "Or type `skip` to skip photos.",
        parse_mode="Markdown",
    )
    return STATE_PHOTOS


async def receive_photo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Receive uploaded photos."""
    if update.message.text and update.message.text.strip().lower() == "skip":
        context.user_data["photos"] = []
        return await ask_custom_message(update, context)

    if not update.message.photo:
        await update.message.reply_text(
            "Please send a photo 📷 or type `skip` to skip, or /done when finished.",
            parse_mode="Markdown",
        )
        return STATE_PHOTOS

    # Get largest photo version
    photo = update.message.photo[-1]
    file = await photo.get_file()
    photo_url = file.file_path  # Telegram CDN URL

    context.user_data["photos"].append(photo_url)
    count = len(context.user_data["photos"])

    if count >= 10:
        await update.message.reply_text(f"📸 Got {count} photos (maximum reached)!")
        return await ask_custom_message(update, context)

    await update.message.reply_text(
        f"📸 Photo {count} received! ✅\n\n"
        f"Send more photos or type /done ({10 - count} remaining)",
    )
    return STATE_PHOTOS


async def photos_done(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """User finished uploading photos."""
    count = len(context.user_data.get("photos", []))
    if count == 0:
        await update.message.reply_text("No photos uploaded. Continuing without photos...")
    else:
        await update.message.reply_text(f"✅ {count} photo(s) saved!")

    return await ask_custom_message(update, context)


async def ask_custom_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Ask for custom birthday message."""
    msg = update.message or update.callback_query.message
    await msg.reply_text(
        "💌 *Write a custom birthday message*\n\n"
        "Or type `skip` to auto-generate one!",
        parse_mode="Markdown",
    )
    return STATE_MESSAGE


async def receive_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Receive custom message."""
    text = update.message.text.strip()

    if text.lower() == "skip":
        context.user_data["customMessage"] = ""
    else:
        context.user_data["customMessage"] = text

    # Show timer options
    keyboard = []
    for timer_val, timer_label in TIMERS:
        keyboard.append([InlineKeyboardButton(timer_label, callback_data=f"timer_{timer_val}")])

    await update.message.reply_text(
        "⏱ *Choose countdown timer:*\n\n"
        "The celebration unlocks after this countdown!",
        parse_mode="Markdown",
        reply_markup=InlineKeyboardMarkup(keyboard),
    )
    return STATE_TIMER


async def receive_timer(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Receive timer selection and generate the birthday page."""
    query = update.callback_query
    await query.answer()

    timer_val = query.data.replace("timer_", "")
    if timer_val == "midnight":
        context.user_data["timerMode"] = "midnight"
        context.user_data["timerValue"] = 0
    else:
        context.user_data["timerMode"] = "delay"
        context.user_data["timerValue"] = int(timer_val)

    await query.message.reply_text("⏳ Generating your birthday surprise...")

    # Generate the birthday page URL
    try:
        url = generate_birthday_url(context.user_data)
        surprise_url = url.replace("#/birthday/", "#/birthday/") + "/surprise"
        name = context.user_data.get("name", "")

        # Generate QR code
        qr_bytes = generate_qr(url, name)

        # Send celebration link
        await query.message.reply_text(
            f"🎉 *Birthday surprise for {name} is ready!*\n\n"
            f"🔗 *Countdown Page:*\n`{url}`\n\n"
            f"🔓 *Secret Surprise Page:*\n`{surprise_url}`\n\n"
            "Share the countdown link with friends — the celebration "
            "unlocks automatically when the timer finishes! 🎆",
            parse_mode="Markdown",
        )

        # Send QR code
        await query.message.reply_photo(
            photo=BytesIO(qr_bytes),
            caption=(
                f"📱 *Scan to open {name}'s birthday surprise!*\n\n"
                "Share this QR code at the party 🎂"
            ),
            parse_mode="Markdown",
        )

        # Share buttons
        share_text = f"🎂 A birthday surprise for {name} is waiting!"
        import urllib.parse
        encoded_text = urllib.parse.quote(f"{share_text}\n\n{url}")
        encoded_url = urllib.parse.quote(url)
        keyboard = [
            [InlineKeyboardButton(
                "📤 Share on Telegram",
                url=f"https://t.me/share/url?url={encoded_url}&text={urllib.parse.quote(share_text)}",
            )],
            [InlineKeyboardButton(
                "📤 Share on WhatsApp",
                url=f"https://wa.me/?text={encoded_text}",
            )],
            [InlineKeyboardButton("🎂 Create Another", callback_data="start_create")],
        ]
        await query.message.reply_text(
            "📤 *Share the celebration:*",
            parse_mode="Markdown",
            reply_markup=InlineKeyboardMarkup(keyboard),
        )

    except Exception as e:
        tb = traceback.format_exc()
        logger.error(f"Birthday generation error: {e}\n{tb}")
        await query.message.reply_text(
            f"❌ Something went wrong: {str(e)[:200]}\n\nPlease try again with /create"
        )

    return ConversationHandler.END


async def cancel(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Cancel the conversation."""
    context.user_data.clear()
    await update.message.reply_text(
        "❌ Birthday creation cancelled.\n\nUse /create to start again!",
        reply_markup=ReplyKeyboardRemove(),
    )
    return ConversationHandler.END


# ═══════════════════════════════════════════════════════
# URL GENERATION
# ═══════════════════════════════════════════════════════


def generate_birthday_url(data: dict) -> str:
    """
    Generate a celebration page URL with birthday data
    encoded as base64 in the query string.
    """
    # Build the birthday data payload
    payload = {
        "name": data.get("name", ""),
        "age": data.get("age"),
        "relationship": data.get("relationship", "friend"),
        "mood": data.get("mood", "emotional"),
        "theme": data.get("theme", "romantic"),
        "customMessage": data.get("customMessage", ""),
        "timerMode": data.get("timerMode", "delay"),
        "timerValue": data.get("timerValue", 30),
        "photos": data.get("photos", []),
        "collageStyle": "animated",
    }

    # Encode as base64
    json_str = json.dumps(payload, separators=(",", ":"))
    b64 = base64.urlsafe_b64encode(json_str.encode()).decode()

    # Generate a short ID from the data
    import hashlib
    short_id = hashlib.md5(json_str.encode()).hexdigest()[:12]

    return f"{WEBSITE_URL}#/birthday/{short_id}?data={b64}"


# ═══════════════════════════════════════════════════════
# CALLBACK HANDLER (for inline buttons outside conversation)
# ═══════════════════════════════════════════════════════


async def button_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handle inline button callbacks outside the conversation."""
    query = update.callback_query

    if query.data == "start_create":
        await query.answer()
        context.user_data.clear()
        context.user_data["photos"] = []

        await query.message.reply_text(
            "🎉 *Let's create a birthday surprise!*\n\n"
            "❓ *What is the birthday person's name?*",
            parse_mode="Markdown",
        )
        # We need to return the state for the conversation handler
        # but this callback is outside it, so we start a manual flow
        return


# ═══════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════


def main():
    """Start the bot."""
    if not TOKEN:
        print("❌ BOT_TOKEN not set!")
        print("1. Copy .env.example to .env")
        print("2. Get a token from @BotFather on Telegram")
        print("3. Paste it in .env as BOT_TOKEN=your_token_here")
        return

    print(f"🤖 Starting Birthday Generator Bot...")
    print(f"🌐 Website URL: {WEBSITE_URL}")

    # Configure Proxy / API Mirror
    builder = ApplicationBuilder().token(TOKEN)
    if BASE_URL:
        builder = builder.base_url(BASE_URL)
        print(f"🔄 Using Custom API Base URL: {BASE_URL}")
    if PROXY_URL:
        builder = builder.proxy_url(PROXY_URL).get_updates_proxy_url(PROXY_URL)
        print(f"🛡️ Using Proxy: {PROXY_URL}")
        
    app = builder.build()

    create_handler = ConversationHandler(
        entry_points=[
            CommandHandler("create", create_command),
            CallbackQueryHandler(create_command, pattern="^start_create$"),
        ],
        states={
            STATE_NAME: [
                MessageHandler(filters.TEXT & ~filters.COMMAND, receive_name),
            ],
            STATE_AGE: [
                MessageHandler(filters.TEXT & ~filters.COMMAND, receive_age),
            ],
            STATE_RELATIONSHIP: [
                CallbackQueryHandler(receive_relationship, pattern="^rel_"),
            ],
            STATE_MOOD: [
                CallbackQueryHandler(receive_mood, pattern="^mood_"),
            ],
            STATE_THEME: [
                CallbackQueryHandler(receive_theme, pattern="^theme_"),
            ],
            STATE_PHOTOS: [
                MessageHandler(filters.PHOTO, receive_photo),
                MessageHandler(filters.TEXT & ~filters.COMMAND, receive_photo),
                CommandHandler("done", photos_done),
            ],
            STATE_MESSAGE: [
                MessageHandler(filters.TEXT & ~filters.COMMAND, receive_message),
            ],
            STATE_TIMER: [
                CallbackQueryHandler(receive_timer, pattern="^timer_"),
            ],
        },
        fallbacks=[
            CommandHandler("cancel", cancel),
        ],
        allow_reentry=True,
    )

    # Register handlers
    app.add_handler(CommandHandler("start", start_command))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("qr", qr_command))
    app.add_handler(CommandHandler("wish", wish_command))
    app.add_handler(CommandHandler("song", song_command))
    app.add_handler(CommandHandler("gift", gift_command))
    app.add_handler(create_handler)
    app.add_handler(CallbackQueryHandler(show_help_callback, pattern="^show_help$"))
    app.add_handler(CallbackQueryHandler(start_qr_callback, pattern="^start_qr$"))
    app.add_handler(CallbackQueryHandler(
        lambda u, c: (u.callback_query.answer() or True) and \
            u.callback_query.message.reply_text(
                "✨ Use: `/wish <name>` to generate a wish!\nExample: `/wish Sarah`",
                parse_mode="Markdown"
            ),
        pattern="^ai_wish$"
    ))
    app.add_handler(CallbackQueryHandler(
        lambda u, c: (u.callback_query.answer() or True) and \
            u.callback_query.message.reply_text(
                "🎵 Use: `/song <name>` to generate a song!\nExample: `/song Sarah`",
                parse_mode="Markdown"
            ),
        pattern="^ai_song$"
    ))
    app.add_handler(CallbackQueryHandler(
        lambda u, c: (u.callback_query.answer() or True) and \
            u.callback_query.message.reply_text(
                "🎁 Use: `/gift <who>` to get gift ideas!\nExample: `/gift my sister who likes art`",
                parse_mode="Markdown"
            ),
        pattern="^ai_gift$"
    ))

    print("✅ Bot is running! Press Ctrl+C to stop.")
    app.run_polling(drop_pending_updates=True)


if __name__ == "__main__":
    main()
