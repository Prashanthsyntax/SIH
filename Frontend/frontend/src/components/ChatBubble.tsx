import React from "react";

interface Props {
  role: "user" | "bot";
  text: string | { summary: string; important_points: string[]; ipc_sections: string[] }; // allow object
}

const ChatBubble: React.FC<Props> = ({ role, text }) => {
  // If text is object → render formatted
  if (typeof text === "object") {
    return (
      <div
        className={`p-4 rounded-2xl max-w-[70%] break-words whitespace-pre-wrap ${
          role === "user"
            ? "bg-teal-500 text-black self-end"
            : "bg-gray-800 text-white self-start"
        }`}
      >
        <h3 className="font-bold text-lg mb-2">Summary</h3>
        <p>{text.summary}</p>

        {text.important_points.length > 0 && (
          <>
            <h3 className="font-bold text-lg mt-3">Important Points</h3>
            <ul className="list-disc ml-5">
              {text.important_points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </>
        )}

        {text.ipc_sections.length > 0 && (
          <>
            <h3 className="font-bold text-lg mt-3">IPC Sections</h3>
            <ul className="list-disc ml-5">
              {text.ipc_sections.map((sec, i) => (
                <li key={i}>{sec}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }

  // Normal string text
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
