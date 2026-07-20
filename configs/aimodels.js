import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
})

export const chatSession = async (prompt) => {
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return Response.json({
      text: result.text,
    });
  } catch (error) {
    console.log("error", error);
  }
};

console.log(response.text);
