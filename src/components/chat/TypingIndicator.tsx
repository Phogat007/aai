
import { useEffect, useState } from "react";

interface TypingIndicatorProps {
  agentEmoji: string;
  agentColor: string;
}

export function TypingIndicator({ agentEmoji, agentColor }: TypingIndicatorProps) {
  const [dots, setDots] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 400);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex justify-start mb-4">
      <div className="flex">
        <div className={`w-8 h-8 rounded-full bg-${agentColor} text-white flex items-center justify-center text-lg mr-3`}>
          <span>{agentEmoji}</span>
        </div>
        <div className={`bg-secondary rounded-2xl rounded-tl-sm py-3 px-4 max-w-[80%]`}>
          <div className="typing-indicator">
            <span className="typing-bubble"></span>
            <span className="typing-bubble"></span>
            <span className="typing-bubble"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
