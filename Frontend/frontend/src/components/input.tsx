// InputBar.tsx
import React, { useState } from "react";
import {
  Globe,
  Paperclip,
  Mic,
  Search,
  Link,
  Lightbulb,
  Cpu,
  Send,
} from "lucide-react";

interface Props {
  onSend: (msg: string) => void;
}

const InputBar: React.FC<Props> = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="w-full bg-[#1f2937] rounded-2xl p-2 flex items-center border border-gray-700 shadow-lg">
      {/* Left Icon Group */}
      <div className="flex items-center gap-2 bg-[#111827] px-3 py-2 rounded-xl mr-2">
        <button className="p-1 hover:bg-[#0d2538] rounded-lg transition">
          <Search className="w-5 h-5 text-teal-400" />
        </button>
        <button className="p-1 hover:bg-[#0d2538] rounded-lg transition">
          <Link className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>
        <div className="w-px h-5 bg-gray-600" />
        <button className="p-1 hover:bg-[#0d2538] rounded-lg transition">
          <Lightbulb className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask Research Engine..."
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm px-2"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      {/* Right Icons */}
      <div className="flex items-center gap-4 mr-2">
        <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <Cpu className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <Paperclip className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <Mic className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
      </div>

      {/* Send / Voice Button */}
      <button
        onClick={handleSend}
        className="ml-2 bg-teal-500 hover:bg-teal-400 p-2 rounded-xl transition"
      >
        <Send className="w-5 h-5 text-black" />
      </button>
    </div>
  );
};

export default InputBar;