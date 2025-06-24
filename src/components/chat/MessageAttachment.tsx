
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface MessageAttachmentProps {
  url: string;
}

export function MessageAttachment({ url }: MessageAttachmentProps) {
  const [imageViewOpen, setImageViewOpen] = useState(false);

  return (
    <div className="mb-3">
      <Dialog open={imageViewOpen} onOpenChange={setImageViewOpen}>
        <DialogTrigger asChild>
          <img 
            src={url} 
            alt="Attachment" 
            className="max-h-48 rounded-md object-contain cursor-pointer hover:opacity-90 transition-opacity" 
          />
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Uploaded Image</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center">
            <img 
              src={url} 
              alt="Uploaded" 
              className="max-w-full max-h-[70vh] object-contain" 
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
