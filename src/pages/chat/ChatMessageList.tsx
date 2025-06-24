
import { useRef, useEffect } from "react";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import { Message, Agent } from "@/types/chat";

interface ChatMessageListProps {
  messages: Message[];
  currentAgent: Agent;
  isLoading: boolean;
}

export function ChatMessageList({ messages, currentAgent, isLoading }: ChatMessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  return (
    <main className="flex-1 overflow-y-auto px-4 py-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {messages.map((message) => (
          <ChatMessage 
            key={message.id}
            role={message.role}
            content={message.content}
            agentId={message.agentId}
            specialty={message.specialty}
            timestamp={message.timestamp}
            agentEmoji={message.agentEmoji}
            confidence={message.confidence}
            sources={message.sources}
            attachment={message.attachment}
          />
        ))}
        
        {isLoading && (
          <TypingIndicator 
            agentEmoji={currentAgent.emoji} 
            agentColor={currentAgent.color} 
          />
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </main>
  );
}
