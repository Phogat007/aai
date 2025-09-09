
import { useState, useEffect, useCallback } from "react";
import { getAgentResponse, sampleSources } from "@/utils/messageUtils";
import { Message, Agent } from "@/types/chat";
import useSpeechRecognition from "@/hooks/useSpeechRecognition";

export function useChat(currentAgent: Agent) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseLength, setResponseLength] = useState("balanced");
  const [technicalLevel, setTechnicalLevel] = useState("medium");
  
  const { isListening, transcription, startListening, stopListening, resetTranscription } = useSpeechRecognition();
  
  useEffect(() => {
    document.title = `Chat with ${currentAgent.name} - aai`;
    
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: `welcome-${Date.now()}`,
        role: "agent",
        content: `Hello! I'm your ${currentAgent.name} assistant. I can provide information based on authoritative sources in the field of ${currentAgent.specialty}. How can I assist you today?`,
        timestamp: new Date(),
        agentId: currentAgent.id,
        agentEmoji: currentAgent.emoji,
        specialty: currentAgent.specialty,
        confidence: 0.95
      };
      setMessages([welcomeMessage]);
    }
  }, [currentAgent, messages.length]);
  
  const handleSendMessage = useCallback((content: string, attachment?: { type: "image"; url: string }) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date(),
      attachment
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    setTimeout(() => {
      let responseContent = getAgentResponse(content, currentAgent.id);
      
      if (attachment?.type === "image") {
        responseContent = `I see you've shared an image. ${responseContent}`;
      }
      const agentMessage: Message = {
        id: `agent-${Date.now()}`,
        role: "agent",
        content: responseContent,
        timestamp: new Date(),
        agentId: currentAgent.id,
        agentEmoji: currentAgent.emoji,
        specialty: currentAgent.specialty,
        confidence: Math.random() * 0.3 + 0.7, // Random confidence between 0.7 and 1.0
        sources: sampleSources
      };
      
      setMessages(prev => [...prev, agentMessage]);
      setIsLoading(false);
    }, 1500);
  }, [currentAgent.id, currentAgent.emoji, currentAgent.specialty]);

  useEffect(() => {
    if (isListening && transcription) {
      const timer = setTimeout(() => {
        if (transcription.trim() && isListening) {
          handleSendMessage(transcription);
          resetTranscription();
          stopListening();
        }
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [transcription, isListening, handleSendMessage, resetTranscription, stopListening]);

  const handleClearChat = () => {
    setMessages([]);
  };
  
  const handleVoiceStart = () => {
    startListening();
  };
  
  const handleVoiceStop = () => {
    stopListening();
  };

  return {
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
  };
}
