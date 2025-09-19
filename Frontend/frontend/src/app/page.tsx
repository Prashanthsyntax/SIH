"use client";
import { useState } from "react";
import { Plus, Settings, Grid, Send, Github, BookOpen, Bot, MoreHorizontal } from "lucide-react";
import React from "react";

export default function ChatLayout() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="h-screen w-screen bg-[#1a1a1a] flex text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111] flex flex-col justify-between p-4">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-semibold">AnythingLLM</h1>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>

          {/* New Workspace */}
          <button
            suppressHydrationWarning
            className="w-full flex items-center gap-2 bg-[#2d3748] px-3 py-2 rounded-md mb-3 hover:bg-[#3a4458]"
          >
            <Plus className="w-4 h-4" /> New Workspace
          </button>

          {/* Team list */}
          <div className="flex flex-col gap-2">
            <button
              suppressHydrationWarning
              className="flex items-center gap-2 px-3 py-2 bg-[#2d3748] rounded-md hover:bg-[#3a4458]"
            >
              <Grid className="w-4 h-4" /> My team
            </button>
            <button
              suppressHydrationWarning
              className="flex items-center gap-2 px-3 py-2 bg-[#2d3748] rounded-md hover:bg-[#3a4458]"
            >
              <Grid className="w-4 h-4" /> My team
            </button>
            <button
              suppressHydrationWarning
              className="flex items-center gap-2 px-3 py-2 bg-[#2d3748] rounded-md hover:bg-[#3a4458]"
            >
              <Grid className="w-4 h-4" /> My team
            </button>
          </div>
        </div>

        {/* Footer Icons */}
        <div className="flex items-center justify-between px-2">
          <Github className="w-5 h-5 text-gray-400 hover:text-white" />
          <BookOpen className="w-5 h-5 text-gray-400 hover:text-white" />
          <Bot className="w-5 h-5 text-gray-400 hover:text-white" />
          <MoreHorizontal className="w-5 h-5 text-gray-400 hover:text-white" />
        </div>
      </aside>

      {/* Main Chat */}
      <main className="flex-1 flex flex-col bg-[#2d3748] m-6 rounded-xl border border-blue-500 overflow-hidden">
        {/* Chat messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-400">No messages yet...</p>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className="mb-2 p-2 bg-[#1f2937] rounded-md w-fit">
                {msg}
              </div>
            ))
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-[#1f2937] flex items-center gap-2">
          <input
            suppressHydrationWarning
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message"
            className="flex-1 p-3 rounded-xl bg-white text-black outline-none"
          />
          <button
            suppressHydrationWarning
            onClick={handleSend}
            className="bg-white text-black p-3 rounded-xl hover:bg-gray-200"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}
