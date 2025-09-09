
import { useMemo } from "react";
import { getAgentColors } from "@/utils/agentUtils";

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
    const colors = getAgentColors(id || "default");
    return {
      bg: colors.light,
      textColor: colors.textColor || colors.text,
      avatarBg: colors.avatarBg || colors.bg
    };
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
