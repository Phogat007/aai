
import { Suspense, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAgentData } from "@/hooks/useAgentData";
import { toast } from "sonner";
import { useChat } from "./useChat";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Lazy load chat components
const ChatHeader = lazy(() => import("@/components/chat/ChatHeader").then(module => ({ default: module.ChatHeader })));
const ChatInputBox = lazy(() => import("@/components/chat/ChatInputBox").then(module => ({ default: module.ChatInputBox })));
const ChatMessageList = lazy(() => import("./ChatMessageList").then(module => ({ default: module.ChatMessageList })));

const ChatPage = () => {
  const { agentId = "teacher" } = useParams<{ agentId: string }>();
  const navigate = useNavigate();
  
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
      <Suspense fallback={<LoadingSpinner className="h-16 bg-background border-b" size="sm" showText={false} />}>
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
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner className="flex-1" />}>
        <ChatMessageList 
          messages={messages} 
          currentAgent={currentAgent}
          isLoading={isLoading}
        />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner className="h-20 bg-background border-t" size="sm" showText={false} />}>
        <ChatInputBox 
          onSendMessage={handleSendMessage} 
          agentId={agentId}
          isLoading={isLoading}
          suggestions={suggestions}
          onStartVoice={handleVoiceStart}
          onStopVoice={handleVoiceStop}
        />
      </Suspense>
    </div>
  );
};

export default ChatPage;
