import React, { useRef, useEffect, useState } from "react";
import ChatBubble from "./ChatBubble";

interface Message {
  role: "user" | "bot";
  text: string;
}

interface Props {
  messages: Message[];
  loading: boolean;
}

const ChatWindow: React.FC<Props> = ({ messages, loading }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [displayMessages, setDisplayMessages] = useState<Message[]>([]);

  // Typewriter effect for bot messages
  useEffect(() => {
    if (!messages.length) return;

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || !lastMessage.text) return; // guard

    if (lastMessage.role === "bot") {
      let index = 0;
      const text = lastMessage.text;

      // Append placeholder only if it’s a new bot message
      setDisplayMessages((prev) => [
        ...prev,
        { role: "bot", text: "" },
      ]);

      const interval = setInterval(() => {
        setDisplayMessages((prev) => {
          const newMessages = [...prev];
          const lastIdx = newMessages.length - 1;

          if (!newMessages[lastIdx]) return prev; // guard

          newMessages[lastIdx] = {
            role: "bot",
            text: text.slice(0, index + 1),
          };
          return newMessages;
        });

        index++;
        if (index >= text.length) {
          clearInterval(interval);
        }
      }, 20); // typing speed

      return () => clearInterval(interval); // cleanup
    } else {
      // User messages added immediately
      setDisplayMessages(messages);
    }
  }, [messages]);

  // Check scroll position to show/hide "Scroll to Bottom" button
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    setShowScrollBtn(
      container.scrollHeight - container.scrollTop - container.clientHeight > 150
    );
  };

  // Auto-scroll to bottom on new message
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [displayMessages]);

  return (
    <div className="relative flex-1 w-full max-w-3xl mx-auto mt-5">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[#111827] rounded-2xl"
        style={{
          scrollBehavior: "smooth",
          maxHeight: "80vh",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {/* Hide scrollbar for Webkit browsers */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {displayMessages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} text={msg.text} />
        ))}

        {loading && (
          <div className="text-gray-400 italic animate-pulse">
            Analyzing your question...
          </div>
        )}
      </div>

      {/* Scroll to bottom button */}
      {showScrollBtn && (
        <button
          onClick={() => {
            containerRef.current?.scrollTo({
              top: containerRef.current.scrollHeight,
              behavior: "smooth",
            });
          }}
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
        >
          ↓ Scroll to bottom
        </button>
      )}
    </div>
  );
};

export default ChatWindow;
