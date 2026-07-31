import { chatSession } from "@/configs/aimodels";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400, headers: corsHeaders },
      );
    }

    const text = await chatSession(prompt);

    const cleaned = text
      ?.replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "")
      .trim();

    let parsed;
    try {
      parsed = JSON.parse(cleaned || "null");
    } catch {
      parsed = cleaned;
    }

    return NextResponse.json({ result: parsed }, { headers: corsHeaders });
  } catch (error) {
    console.error("get-video-script error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to generate script";
    return NextResponse.json(
      { error: message },
      { status: 500, headers: corsHeaders },
    );
  }
}
