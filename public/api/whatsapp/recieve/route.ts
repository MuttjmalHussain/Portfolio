// /app/api/whatsapp/receive/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  // Verify token (must match the one you set in Meta dashboard)
  if (mode === "subscribe" && token === process.env.WB_VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }

  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Incoming WhatsApp message:", JSON.stringify(body, null, 2));

  return NextResponse.json({ received: true });
}
