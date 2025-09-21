import React, { useRef, useEffect } from "react";
import ChatBubble from "./ChatBubble";

interface Props {
  messages: { role: "user" | "bot"; text: string }[];
  loading: boolean;
}

const ChatWindow: React.FC<Props> = ({ messages }) => {
  const endRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[#111827] rounded-2xl">
      {messages.map((msg, i) => (
        <ChatBubble key={i} role={msg.role} text={msg.text} />
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default ChatWindow;
