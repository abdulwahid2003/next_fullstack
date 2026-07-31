import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

const MODELS = ["gemini-flash-latest", "gemini-3-flash-preview"];

function isRetryable(error) {
  const message = String(error?.message || error);
  return (
    message.includes('"code":503') ||
    message.includes("UNAVAILABLE") ||
    message.includes("high demand") ||
    message.includes('"code":429')
  );
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function chatSession(prompt) {
  let lastError;

  for (const model of MODELS) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const result = await ai.models.generateContent({
          model,
          contents: prompt,
        });
        return result.text;
      } catch (error) {
        lastError = error;
        console.error(`Gemini ${model} attempt ${attempt} failed:`, error?.message || error);

        if (!isRetryable(error) || attempt === 3) break;
        await sleep(800 * attempt);
      }
    }
  }

  throw lastError;
}
