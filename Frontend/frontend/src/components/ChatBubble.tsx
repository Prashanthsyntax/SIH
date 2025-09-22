import React from "react";

interface Props {
  role: "user" | "bot";
  text: string;
}

const ChatBubble: React.FC<Props> = ({ role, text }) => {
  return (
    <div
      className={`p-4 rounded-2xl max-w-[70%] break-words whitespace-pre-wrap ${
        role === "user"
          ? "bg-teal-500 text-black self-end"
          : "bg-gray-800 text-white self-start"
      }`}
    >
      {text}
    </div>
  );
};

export default ChatBubble;
