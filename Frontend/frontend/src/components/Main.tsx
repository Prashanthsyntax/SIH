
import React from "react";
import InputBar from "./input";

export default function MainUI() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-[#0b0e11] text-white overflow-hidden">
      {/* Gradient Overlay ON TOP of bg-[#0b0e11] */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Main radial gradient glow */}
        <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 opacity-20 blur-[120px] rounded-full animate-pulse" />

        {/* Secondary glow for depth */}
        <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 opacity-15 blur-[100px] rounded-full animate-spin-slow" />
      </div>

      {/* Logo / Title */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-6xl font-extrabold tracking-tight">
          <span className="relative text-white">Sentenara</span>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text-glow px-2">
            Pro
          </span>
        </h1>

        {/* Local glow behind title */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-[240px] h-[100px] bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 opacity-20 blur-2xl rounded-full animate-pulse" />
        </div>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-3xl z-10">
        <InputBar />
=======
import React, { useState } from "react";
import InputBar from "./input";
import ChatWindow from "./ChatWindow";

export default function MainUI() {
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (msg: string) => {
    setMessages([...messages, { role: "user", text: msg }]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: msg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.answer }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error: Could not fetch answer." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Determine if the chat has started
  const chatStarted = messages.length > 0;

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-[#0b0e11] text-white overflow-hidden">
      {/* Chat Container */}
      <div className="relative flex-1 w-full max-w-3xl mx-auto z-10">
        {!chatStarted ? (
          <>
            {/* Gradient Overlay ON TOP of bg-[#0b0e11] */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Main radial gradient glow */}
              <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 opacity-20 blur-[120px] rounded-full animate-pulse" />

              {/* Secondary glow for depth */}
              <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 opacity-15 blur-[100px] rounded-full animate-spin-slow" />
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {/* Title / Logo */}
              <div className="text-center">
                <h1 className="text-6xl font-extrabold tracking-tight">
                  <span className="text-white">Sentenara</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text-glow px-2">
                    Pro
                  </span>
                </h1>
              </div>

              {/* Input Bar in center */}
              <div className="w-full px-4">
                <InputBar onSend={sendMessage} />
              </div>
            </div>
          </>
        ) : (
          // ---------- Chat Stage ----------
          <div className="flex flex-col h-full justify-end">
            {/* Chat messages above input */}
            <div className="flex-1 overflow-y-auto mb-4 px-2">
              <ChatWindow messages={messages} loading={loading} />
            </div>

            {/* Input bar fixed at bottom */}
            <div className="w-full px-2 pb-4">
              <InputBar onSend={sendMessage} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
