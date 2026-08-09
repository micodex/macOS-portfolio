import { useState } from "react";
import { BouncyText } from "../ui/BouncyText";
import { customScrollbar } from "@/lib/scrollbar";

const TerminalApp = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    'Welcome to MacOS Portfolio. Type "help".',
  ]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const newHistory = [...history, `➜ ~ ${input}`];
      if (input === "help")
        newHistory.push(
          "Available commands: about, skills, contact, version, clear",
        );
      else if (input === "skills")
        newHistory.push(
          "React, TypeScript, MongoDB, Tailwind CSS, Next.js, Express",
        );
      else if (input === "clear") return setHistory([]);
      else if (input === "version")
        newHistory.push("MacOS Portfolio. Version 1.6.0");
      else newHistory.push(`command not found: ${input}`);

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div
      className={`h-full overflow-auto text-green-300 font-mono text-sm p-4 flex flex-col bg-slate-950/80 window-backdrop ${customScrollbar}`}
      onClick={() => document.getElementById("term-input")?.focus()}
    >
      <BouncyText text="MacOS Portfolio Terminal" style="text-white mb-2" />
      {history.map((line, i) => (
        <div key={i} className="mb-1">
          {line}
        </div>
      ))}
      <div className="flex">
        <span className="mr-2 text-green-300">➜ ~</span>
        <input
          id="term-input"
          className="bg-transparent outline-none flex-1 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
};

export default TerminalApp;
