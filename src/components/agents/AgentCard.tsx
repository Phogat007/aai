
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    emoji: string;
    description: string;
    color: string;
    tags: string[];
    sourceQuality: number;
    totalUsage?: number;
  };
}

export function AgentCard({ agent }: AgentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  // Map color string to Tailwind classes
  const colorMap: Record<string, { bg: string, text: string, light: string }> = {
    "teacher": { 
      bg: "bg-teacher", 
      text: "text-teacher", 
      light: "bg-teacher-light" 
    },
    "lawyer": { 
      bg: "bg-lawyer", 
      text: "text-lawyer", 
      light: "bg-lawyer-light" 
    },
    "doctor": { 
      bg: "bg-doctor", 
      text: "text-doctor", 
      light: "bg-doctor-light" 
    },
    "finance": { 
      bg: "bg-finance", 
      text: "text-finance", 
      light: "bg-finance-light" 
    },
    "chef": { 
      bg: "bg-chef", 
      text: "text-chef", 
      light: "bg-chef-light" 
    },
  };
  
  const colorClasses = colorMap[agent.color] || { bg: "bg-primary", text: "text-primary", light: "bg-primary/10" };

  const handleChatClick = () => {
    navigate(`/chat/${agent.id}`);
  };

  return (
    <Card 
      className={`h-full flex flex-col overflow-hidden transition-all duration-300 agent-card-shadow border-2 ${isHovered ? `border-${agent.color}` : 'border-transparent'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className={`${colorClasses.bg} text-white p-6`}>
        <div className="flex justify-between items-start">
          <div className="text-4xl mb-2" aria-hidden="true">
            {agent.emoji}
          </div>
          {agent.sourceQuality > 0 && (
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
              <span className="mr-1">Source Quality</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-3 h-3 ${star <= agent.sourceQuality ? 'text-yellow-300' : 'text-gray-400'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          )}
        </div>
        <CardTitle className="text-2xl font-bold">{agent.name}</CardTitle>
        <CardDescription className="text-white/90 mt-1">
          {agent.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.tags.map((tag) => (
            <Badge key={tag} variant="outline" className={`${colorClasses.text} ${colorClasses.light} border-0`}>
              {tag}
            </Badge>
          ))}
        </div>
        
        {agent.totalUsage && (
          <div className="text-sm text-muted-foreground mt-4">
            Used by {agent.totalUsage.toLocaleString()} people
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className={`w-full ${colorClasses.bg}`}
          onClick={handleChatClick}
        >
          Chat Now
        </Button>
      </CardFooter>
    </Card>
  );
}
