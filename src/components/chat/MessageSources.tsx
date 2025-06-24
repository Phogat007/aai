
import { Source } from "@/types/chat";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface MessageSourcesProps {
  sources: Source[];
}

export function MessageSources({ sources }: MessageSourcesProps) {
  if (!sources || sources.length === 0) return null;
  
  return (
    <div className="mt-3 pt-3 border-t border-secondary-foreground/10">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="text-xs">
            <ExternalLink className="h-3 w-3 mr-1" />
            {sources.length} {sources.length === 1 ? "Source" : "Sources"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sources</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {sources.map((source, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-medium mb-1">{source.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {source.authors.join(", ")} ({source.year}) · {source.publisher}
                </p>
                {source.pages && (
                  <p className="text-xs text-muted-foreground">Pages: {source.pages}</p>
                )}
                {source.url && (
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary flex items-center mt-2 hover:underline"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Source
                  </a>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
