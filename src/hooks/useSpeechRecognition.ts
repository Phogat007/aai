
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

interface SpeechRecognitionResult {
  [index: number]: {
    [index: number]: {
      transcript: string;
    };
  };
  length: number;
}

interface SpeechRecognitionErrorEvent {
  error: string;
}

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult: (event: { results: SpeechRecognitionResult }) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
}

interface UseSpeechRecognitionResult {
  isListening: boolean;
  transcription: string;
  startListening: () => void;
  stopListening: () => void;
  resetTranscription: () => void;
}

export function useSpeechRecognition(): UseSpeechRecognitionResult {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState("");
  const recognition = useRef<SpeechRecognitionInstance | null>(null);

  useEffect(() => {
    
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as unknown as { SpeechRecognition?: new() => SpeechRecognitionInstance }).SpeechRecognition || 
                               (window as unknown as { webkitSpeechRecognition?: new() => SpeechRecognitionInstance }).webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        recognition.current = new SpeechRecognition();
        recognition.current.continuous = true;
        recognition.current.interimResults = true;
        
        recognition.current.onresult = (event: { results: SpeechRecognitionResult }) => {
          let transcript = '';
          for (let i = 0; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          setTranscription(transcript);
        };
        
        recognition.current.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
          toast.error("Voice recognition error: " + event.error);
        };
      }
    }

    return () => {
      if (recognition.current && isListening) {
        recognition.current.stop();
      }
    };
  }, [isListening]);

  const startListening = () => {
    if (recognition.current) {
      try {
        recognition.current.start();
        setIsListening(true);
      } catch (err) {
        console.error("Failed to start speech recognition", err);
        toast.error("Failed to start voice recording");
      }
    } else {
      toast.error("Voice recording is not supported in your browser");
    }
  };

  const stopListening = () => {
    if (recognition.current) {
      try {
        recognition.current.stop();
        setIsListening(false);
      } catch (err) {
        console.error("Failed to stop speech recognition", err);
      }
    }
  };

  const resetTranscription = () => {
    setTranscription("");
  };

  return {
    isListening,
    transcription,
    startListening,
    stopListening,
    resetTranscription
  };
}

export default useSpeechRecognition;
