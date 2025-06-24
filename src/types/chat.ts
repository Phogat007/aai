
export interface Source {
  title: string;
  authors: string[];
  year: number;
  publisher: string;
  url?: string;
  pages?: string;
}

export interface Message {
  id: string;
  role: "user" | "agent";
  content: string;
  timestamp: Date;
  agentId?: string;
  agentEmoji?: string;
  specialty?: string;
  confidence?: number;
  sources?: Source[];
  attachment?: {
    type: "image";
    url: string;
  };
}

export interface Agent {
  id: string;
  name: string;
  emoji: string;
  specialty: string;
  description: string;
  color: string;
}
