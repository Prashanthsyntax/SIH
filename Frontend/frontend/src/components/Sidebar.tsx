// Sidebar.tsx
import React from "react";
import {
  Settings,
  Plus,
  Grid,
  Github,
  BookOpen,
  Bot,
  MoreHorizontal,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-80 bg-[#0d1117] flex flex-col justify-between border-r border-gray-800">
      {/* Top Section */}
      <div className="p-4">
        {/* Logo + Settings */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            SentenaraLLM
          </h1>
          <button className="p-2 rounded-lg hover:bg-[#1a1f29] transition-colors">
            <Settings className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* New Workspace */}
        <button
          className="w-full flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-medium text-white shadow-md hover:from-cyan-500 hover:to-blue-500 transition-all mb-6"
        >
          <Plus className="w-4 h-4" /> New Workspace
        </button>

        {/* Workspaces / Teams */}
        <div className="space-y-2">
          {["Design Team", "Research Group", "DevOps"].map((team, i) => (
            <button
              key={i}
              className="flex items-center gap-3 w-full px-3 py-2 text-gray-300 hover:bg-[#1a1f29] rounded-lg transition-colors group"
            >
              <Grid className="w-4 h-4 text-gray-500 group-hover:text-cyan-400" />
              <span className="truncate">{team}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center justify-between">
          <button className="p-2 rounded-lg hover:bg-[#1a1f29] transition-colors">
            <Github className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          <button className="p-2 rounded-lg hover:bg-[#1a1f29] transition-colors">
            <BookOpen className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          <button className="p-2 rounded-lg hover:bg-[#1a1f29] transition-colors">
            <Bot className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          <button className="p-2 rounded-lg hover:bg-[#1a1f29] transition-colors">
            <MoreHorizontal className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
