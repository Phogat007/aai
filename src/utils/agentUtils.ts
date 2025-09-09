export interface AgentColorScheme {
  bg: string;
  text: string;
  light: string;
  hoverBg?: string;
  textColor?: string;
  avatarBg?: string;
}

export const AGENT_COLORS: Record<string, AgentColorScheme> = {
  "teacher": { 
    bg: "bg-teacher", 
    text: "text-teacher", 
    light: "bg-teacher-light",
    hoverBg: "hover:bg-teacher-dark",
    textColor: "text-teacher",
    avatarBg: "bg-teacher-light"
  },
  "lawyer": { 
    bg: "bg-lawyer", 
    text: "text-lawyer", 
    light: "bg-lawyer-light",
    hoverBg: "hover:bg-lawyer-dark",
    textColor: "text-lawyer",
    avatarBg: "bg-lawyer-light"
  },
  "doctor": { 
    bg: "bg-doctor", 
    text: "text-doctor", 
    light: "bg-doctor-light",
    hoverBg: "hover:bg-doctor-dark",
    textColor: "text-doctor",
    avatarBg: "bg-doctor-light"
  },
  "financial": { 
    bg: "bg-finance", 
    text: "text-finance", 
    light: "bg-finance-light",
    hoverBg: "hover:bg-finance-dark",
    textColor: "text-finance",
    avatarBg: "bg-finance-light"
  },
  "chef": { 
    bg: "bg-chef", 
    text: "text-chef", 
    light: "bg-chef-light",
    hoverBg: "hover:bg-chef-dark",
    textColor: "text-chef",
    avatarBg: "bg-chef-light"
  },
  "default": { 
    bg: "bg-primary", 
    text: "text-primary", 
    light: "bg-primary/10",
    hoverBg: "hover:bg-primary/90",
    textColor: "text-primary",
    avatarBg: "bg-primary/10"
  }
};

export function getAgentColors(agentId: string): AgentColorScheme {
  return AGENT_COLORS[agentId] || AGENT_COLORS.default;
}
