// /app/chat/page.tsx
"use client";

import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setIsSending(true);

    try {
      console.log(`Sending message: ${input}`);

      const res = await fetch("/api/whatsapp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "923147466939", // replace with your test number
          message: input,
        }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (data?.messages) {
        alert("✅ Message sent successfully!");
      } else {
        alert("⚠️ Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("❌ Error sending message.");
    }

    setInput("");
    setIsSending(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold text-center mb-4 text-gray-800">
          WhatsApp Message Sender
        </h1>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={sendMessage}
          disabled={isSending}
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </div>
  );
}
