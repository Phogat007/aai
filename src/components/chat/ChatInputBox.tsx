
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Paperclip, Plus, Send, Image } from "lucide-react";
import { toast } from "sonner";
import { getAgentColors } from "@/utils/agentUtils";

interface ChatInputBoxProps {
  onSendMessage: (message: string, attachment?: { type: "image", url: string }) => void;
  agentId: string;
  isLoading?: boolean;
  suggestions?: string[];
  onStartVoice?: () => void;
  onStopVoice?: () => void;
}

export function ChatInputBox({ 
  onSendMessage, 
  agentId,
  isLoading = false,
  suggestions = [],
  onStartVoice,
  onStopVoice
}: ChatInputBoxProps) {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const agentStyles = getAgentColors(agentId);
  
  const handleSubmit = () => {
    if ((message.trim() || uploadedImage) && !isLoading) {
      if (uploadedImage) {
        onSendMessage(message.trim(), { type: "image", url: uploadedImage });
        setUploadedImage(null);
      } else {
        onSendMessage(message.trim());
      }
      setMessage("");
      
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  
  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      if (onStartVoice) onStartVoice();
      toast.info("Voice recording started");
    } else {
      setIsRecording(false);
      if (onStopVoice) onStopVoice();
      toast.info("Voice recording stopped");
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    // Auto-focus the textarea
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    
    // Check file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }
    
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5MB");
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setUploadedImage(event.target.result as string);
        toast.success("Image uploaded successfully");
      }
    };
    reader.readAsDataURL(file);
  };
  
  const triggerImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const removeUploadedImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="border-t bg-background/80 backdrop-blur-md sticky bottom-0 px-4 py-4">
      <div className="max-w-4xl mx-auto">
        {suggestions.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        )}
        
        {uploadedImage && (
          <div className="mb-3 relative">
            <div className="relative inline-block">
              <img 
                src={uploadedImage} 
                alt="Uploaded" 
                className="h-24 rounded-md object-cover" 
              />
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-1 right-1 h-6 w-6 p-0 rounded-full"
                onClick={removeUploadedImage}
              >
                ✕
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex items-end gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
                <Plus className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent side="top" align="start" className="w-60">
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-sm"
                  onClick={triggerImageUpload}
                >
                  <Image className="h-4 w-4 mr-2" />
                  Upload image
                </Button>
                <Input 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </PopoverContent>
          </Popover>
          
          <div className="relative flex-1">
            <Textarea
              ref={textareaRef}
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="min-h-10 resize-none py-3 pr-12"
              rows={1}
              autoComplete="off"
              disabled={isLoading}
            />
            <Button
              variant="ghost"
              size="icon"
              className={`absolute right-1 bottom-1 h-8 w-8 ${isRecording ? 'text-red-500' : ''}`}
              onClick={toggleRecording}
            >
              {isRecording ? (
                <MicOff className="h-4 w-4" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          <Button 
            onClick={handleSubmit} 
            disabled={(message.trim() === "" && !uploadedImage) || isLoading} 
            className={`h-10 px-4 ${agentStyles.bg} ${agentStyles.hoverBg}`}
          >
            {isLoading ? (
              <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        <div className="mt-2 text-center text-xs text-muted-foreground">
          aai is an AI assistant providing information based on authoritative sources.
        </div>
      </div>
    </div>
  );
}
