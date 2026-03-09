// Shared Gemini API configuration
// The API key is configured once here — no input fields needed in the UI.

// Using import.meta.env for Vite (set VITE_GEMINI_API_KEY in your .env / Vercel env vars)
export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export function getGeminiKey() {
    return GEMINI_API_KEY;
}
