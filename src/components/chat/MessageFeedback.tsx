
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, ThumbsDown, ThumbsUp } from "lucide-react";

interface MessageFeedbackProps {
  content: string;
}

export function MessageFeedback({ content }: MessageFeedbackProps) {
  const [copied, setCopied] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<"positive" | "negative" | null>(null);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleFeedback = (type: "positive" | "negative") => {
    setFeedbackGiven(type);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant="ghost" 
        size="sm" 
        className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
        {copied ? "Copied" : "Copy"}
      </Button>
      
      <div className="flex items-center border rounded-full">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`h-7 px-2 rounded-l-full ${feedbackGiven === "positive" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : ""}`}
          onClick={() => handleFeedback("positive")}
          disabled={feedbackGiven !== null}
        >
          <ThumbsUp className="h-3 w-3" />
        </Button>
        <div className="h-5 border-r border-border"></div>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`h-7 px-2 rounded-r-full ${feedbackGiven === "negative" ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" : ""}`}
          onClick={() => handleFeedback("negative")}
          disabled={feedbackGiven !== null}
        >
          <ThumbsDown className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
