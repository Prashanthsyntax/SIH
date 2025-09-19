"use client";
import { useState } from "react";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";

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
      <Sidebar />
      <Main />
    </div>
  );
}