
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { MessageAttachment } from "./MessageAttachment";
import { MessageSources } from "./MessageSources";
import { MessageFeedback } from "./MessageFeedback";
import { useAgentData } from "@/hooks/useAgentData";
import { formatTime, getConfidenceLabel, getConfidenceColor } from "@/utils/messageUtils";
import { Source } from "@/types/chat";

interface ChatMessageProps {
  role: "user" | "agent";
  content: string;
  agentId?: string;
  specialty?: string;
  timestamp: Date;
  agentEmoji?: string;
  confidence?: number;
  sources?: Source[];
  attachment?: {
    type: "image";
    url: string;
  };
}

export function ChatMessage({ 
  role, 
  content, 
  agentId, 
  specialty, 
  timestamp, 
  agentEmoji, 
  confidence,
  sources,
  attachment
}: ChatMessageProps) {
  const { getAgentStyles } = useAgentData(agentId || "default");
  const agentStyles = getAgentStyles(agentId);

  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`flex max-w-[85%] ${role === "user" ? "flex-row-reverse" : "flex-row"}`}>
        {role === "agent" && (
          <div className="flex flex-col items-center mr-3">
            <Avatar className={`h-10 w-10 ${agentStyles.avatarBg} text-white flex items-center justify-center text-lg`}>
              <span>{agentEmoji}</span>
            </Avatar>
          </div>
        )}
        
        <div className={`space-y-2 ${role === "user" ? "mr-3" : ""}`}>
          <div className="flex items-center space-x-2">
            {role === "agent" && specialty && (
              <div className="flex items-center">
                <p className="text-sm font-medium">{role === "agent" ? "AI Assistant" : "You"}</p>
                <span className="mx-1.5 text-muted-foreground">·</span>
                <Badge variant="outline" className={`${agentStyles.textColor} text-xs`}>
                  {specialty}
                </Badge>
                
                {confidence !== undefined && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center ml-2">
                          <div className={`w-2 h-2 rounded-full ${getConfidenceColor(confidence)} mr-1`}></div>
                          <span className="text-xs text-muted-foreground">{getConfidenceLabel(confidence)}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Confidence level based on source reliability</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            )}
            
            {role === "user" && (
              <p className="text-sm font-medium">You</p>
            )}
            
            <span className="text-xs text-muted-foreground">
              {formatTime(timestamp)}
            </span>
          </div>
          
          <div className={`${role === "user" ? "chat-message-user" : `${agentStyles.bg} rounded-2xl rounded-tl-sm py-3 px-4`}`}>
            {/* Display uploaded image if present */}
            {attachment?.type === "image" && (
              <MessageAttachment url={attachment.url} />
            )}
          
            <div className="whitespace-pre-wrap text-sm">{content}</div>
            
            {role === "agent" && sources && sources.length > 0 && (
              <MessageSources sources={sources} />
            )}
          </div>
          
          {role === "agent" && (
            <MessageFeedback content={content} />
          )}
        </div>
      </div>
    </div>
  );
}
