import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { portfolioKnowledge, systemPrompt } from "@/lib/ai-knowledge";

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request: messages array required" },
        { status: 400 }
      );
    }

    const openai = getOpenAIClient();
    
    if (!openai) {
      return NextResponse.json(
        {
          error: "AI service not configured. Please contact Kinza directly.",
          fallback: true,
        },
        { status: 503 }
      );
    }

    const systemMessage = {
      role: "system" as const,
      content: `${systemPrompt}\n\n${portfolioKnowledge}`,
    };

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 800,
      stream: false,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      return NextResponse.json(
        { error: "Empty response from AI" },
        { status: 500 }
      );
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);

    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        return NextResponse.json(
          { error: "Invalid API key. Please contact Kinza directly.", fallback: true },
          { status: 503 }
        );
      }
      if (error.status === 429) {
        if (error.type === "insufficient_quota") {
          return NextResponse.json(
            { error: "AI service quota exceeded. Please contact Kinza directly.", fallback: true },
            { status: 503 }
          );
        }
        return NextResponse.json(
          { error: "Too many requests. Please try again in a moment.", fallback: true },
          { status: 429 }
        );
      }
      if (error.status === 500 || error.status === 502 || error.status === 503) {
        return NextResponse.json(
          { error: "AI service temporarily unavailable. Please try again.", fallback: true },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: "Sorry, I couldn't connect right now. Please try again in a moment or use the Contact section to reach Kinza.", fallback: true },
      { status: 500 }
    );
  }
}