
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatInputBox } from "@/components/chat/ChatInputBox";
import { useAgentData } from "@/hooks/useAgentData";
import { Message } from "@/types/chat";
import { toast } from "sonner";
import { ChatMessageList } from "./ChatMessageList";
import { useChat } from "./useChat";

const ChatPage = () => {
  const { agentId = "teacher" } = useParams<{ agentId: string }>();
  const navigate = useNavigate();
  
  // Use our custom hooks
  const { currentAgent, agentsData, suggestions } = useAgentData(agentId);
  const { 
    messages, 
    isLoading, 
    responseLength,
    technicalLevel,
    setResponseLength,
    setTechnicalLevel,
    handleSendMessage,
    handleClearChat,
    handleVoiceStart,
    handleVoiceStop
  } = useChat(currentAgent);

  const handleSwitchAgent = (newAgentId: string) => {
    navigate(`/chat/${newAgentId}`);
    toast.success(`Switched to ${agentsData.find(a => a.id === newAgentId)?.name || "new agent"}`);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader 
        currentAgent={currentAgent}
        handleClearChat={handleClearChat}
        handleSwitchAgent={handleSwitchAgent}
        agentsData={agentsData}
        responseLength={responseLength}
        technicalLevel={technicalLevel}
        setResponseLength={setResponseLength}
        setTechnicalLevel={setTechnicalLevel}
      />
      
      <ChatMessageList 
        messages={messages} 
        currentAgent={currentAgent}
        isLoading={isLoading}
      />
      
      <ChatInputBox 
        onSendMessage={handleSendMessage} 
        agentId={agentId}
        isLoading={isLoading}
        suggestions={suggestions}
        onStartVoice={handleVoiceStart}
        onStopVoice={handleVoiceStop}
      />
    </div>
  );
};

export default ChatPage;
