// /app/api/whatsapp/send/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log('backend is running')
    const { to, message } = await req.json();

    const res = await fetch(`https://graph.facebook.com/v22.0/${process.env.PHONE_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: message },
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
