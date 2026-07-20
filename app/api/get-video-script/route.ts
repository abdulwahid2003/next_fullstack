import { chatSession } from "@/configs/aimodels";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log(prompt);

    const result = await chatSession(prompt);
    return NextResponse.json({ result: JSON.parse(result?.text() as string) });
  } catch (error) {
    return NextResponse.json({ result: JSON.parse(error as string) });
  }
}
