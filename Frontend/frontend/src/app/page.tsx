"use client";
import MainUI from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Main from "@/pages/Main";
import { useState } from "react";
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
    <div className="h-screen w-screen flex">
      {/* <Main /> */}
      <Sidebar />
      <MainUI />
    </div>
  );
}



