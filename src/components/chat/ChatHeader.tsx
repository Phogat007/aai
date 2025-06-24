
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronLeft, RefreshCw, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Agent } from "@/types/chat";
import { toast } from "sonner";

interface ChatHeaderProps {
  currentAgent: Agent;
  handleClearChat: () => void;
  handleSwitchAgent: (newAgentId: string) => void;
  agentsData: Agent[];
  responseLength: string;
  technicalLevel: string;
  setResponseLength: (value: string) => void;
  setTechnicalLevel: (value: string) => void;
}

export function ChatHeader({ 
  currentAgent, 
  handleClearChat, 
  handleSwitchAgent, 
  agentsData,
  responseLength,
  technicalLevel,
  setResponseLength,
  setTechnicalLevel
}: ChatHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-10">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2" 
            onClick={() => navigate("/agents")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className={`w-8 h-8 rounded-full bg-${currentAgent.color} text-white flex items-center justify-center text-lg mr-3`}>
            <span>{currentAgent.emoji}</span>
          </div>
          <div>
            <h1 className="text-lg font-medium">{currentAgent.name}</h1>
            <p className="text-xs text-muted-foreground">{currentAgent.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Select value={currentAgent.id} onValueChange={handleSwitchAgent}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Switch Agent" />
            </SelectTrigger>
            <SelectContent>
              {agentsData.map(agent => (
                <SelectItem key={agent.id} value={agent.id}>
                  <div className="flex items-center">
                    <span className="mr-2">{agent.emoji}</span>
                    {agent.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleClearChat}
            title="Clear chat"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" title="Preferences">
                <Settings className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="space-y-6 py-6">
                <div>
                  <h3 className="text-lg font-medium">Preferences</h3>
                  <p className="text-sm text-muted-foreground">
                    Customize your chat experience
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Response Length</label>
                    <Select value={responseLength} onValueChange={setResponseLength}>
                      <SelectTrigger>
                        <SelectValue placeholder="Response Length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="concise">Concise</SelectItem>
                        <SelectItem value="balanced">Balanced</SelectItem>
                        <SelectItem value="detailed">Detailed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Technical Level</label>
                    <Select value={technicalLevel} onValueChange={setTechnicalLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Technical Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="medium">Intermediate</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
