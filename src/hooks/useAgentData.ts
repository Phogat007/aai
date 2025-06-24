
import { useMemo } from "react";

// Sample agent data (in a real app, this would come from an API)
const agentsData = [
  {
    id: "teacher",
    name: "Teacher",
    emoji: "👨‍🏫",
    specialty: "Education",
    description: "Educational guidance across subjects at various levels.",
    color: "teacher",
  },
  {
    id: "lawyer",
    name: "Lawyer",
    emoji: "⚖️",
    specialty: "Legal",
    description: "Legal information based on authoritative legal texts.",
    color: "lawyer",
  },
  {
    id: "doctor",
    name: "Doctor",
    emoji: "🩺",
    specialty: "Medical",
    description: "Medical information sourced from peer-reviewed medical literature.",
    color: "doctor",
  },
  {
    id: "financial",
    name: "Financial Advisor",
    emoji: "💰",
    specialty: "Finance",
    description: "Economic insights from financial textbooks.",
    color: "finance",
  },
  {
    id: "chef",
    name: "Chef",
    emoji: "👩‍🍳",
    specialty: "Culinary",
    description: "Culinary expertise from professional cooking resources.",
    color: "chef",
  },
];

export function useAgentData(agentId: string) {
  const currentAgent = useMemo(() => {
    return agentsData.find(a => a.id === agentId) || agentsData[0];
  }, [agentId]);

  const getAgentStyles = (id: string | undefined) => {
    const colorMap: Record<string, { bg: string, textColor: string, avatarBg: string }> = {
      "teacher": { 
        bg: "bg-teacher-light", 
        textColor: "text-teacher-dark", 
        avatarBg: "bg-teacher" 
      },
      "lawyer": { 
        bg: "bg-lawyer-light", 
        textColor: "text-lawyer-dark", 
        avatarBg: "bg-lawyer" 
      },
      "doctor": { 
        bg: "bg-doctor-light", 
        textColor: "text-doctor-dark", 
        avatarBg: "bg-doctor" 
      },
      "financial": { 
        bg: "bg-finance-light", 
        textColor: "text-finance-dark", 
        avatarBg: "bg-finance" 
      },
      "chef": { 
        bg: "bg-chef-light", 
        textColor: "text-chef-dark", 
        avatarBg: "bg-chef" 
      },
      "default": { 
        bg: "bg-secondary", 
        textColor: "text-secondary-foreground", 
        avatarBg: "bg-primary" 
      }
    };
    
    return id && colorMap[id] 
      ? colorMap[id] 
      : colorMap.default;
  };

  const suggestions = useMemo(() => {
    return getSuggestions(currentAgent.id);
  }, [currentAgent.id]);

  return {
    agentsData,
    currentAgent,
    getAgentStyles,
    suggestions
  };
}

// Sample suggestions based on agent type
function getSuggestions(agentId: string): string[] {
  switch (agentId) {
    case "teacher":
      return [
        "How do I explain photosynthesis to a 7-year-old?",
        "What are effective teaching methods for algebra?",
        "Can you suggest some educational activities for middle schoolers?"
      ];
    case "lawyer":
      return [
        "What are the key elements of a valid contract?",
        "Can you explain copyright law in simple terms?",
        "What are my rights as a tenant?"
      ];
    case "doctor":
      return [
        "What are common symptoms of seasonal allergies?",
        "How can I improve my sleep habits?",
        "What lifestyle changes help manage high blood pressure?"
      ];
    case "financial":
      return [
        "How should I prioritize debt repayment?",
        "What's the difference between stocks and bonds?",
        "How do I create a basic budget?"
      ];
    case "chef":
      return [
        "What's a quick substitute for buttermilk?",
        "How do I properly sear a steak?",
        "What are basic knife skills every home cook should know?"
      ];
    default:
      return [
        "What can you help me with?",
        "Tell me about your capabilities",
        "How do you ensure your information is accurate?"
      ];
  }
};
