
import { Source } from "@/types/chat";

// Sample sources
export const sampleSources: Source[] = [
  {
    title: "Principles of Learning and Teaching",
    authors: ["John B. Anderson", "Mary L. Smith"],
    year: 2019,
    publisher: "Academic Press",
    pages: "156-158",
    url: "https://example.com/learning-principles"
  },
  {
    title: "Handbook of Educational Psychology",
    authors: ["David H. Jonassen", "Michael J. Spector"],
    year: 2015,
    publisher: "Routledge",
    pages: "83-97",
    url: "https://example.com/educational-psychology"
  }
];

// Sample agent responses based on agent type
export function getAgentResponse(message: string, agentId: string): string {
  // In a real app, this would call an API to get responses from the AI
  const responses: Record<string, string[]> = {
    "teacher": [
      "Based on educational research, there are several effective approaches to explaining this concept. Let me break it down in age-appropriate terms...",
      "The learning science suggests that students at this age respond well to visual examples and metaphors. Here's how I would approach teaching this...",
      "According to developmental learning theory, this concept can be introduced through a scaffolded approach. Let's start with the fundamentals..."
    ],
    "lawyer": [
      "From a legal perspective, this situation involves several considerations. The relevant statutes indicate that...",
      "Legal precedent in this area has been established through several key cases. Most notably in Smith v. Jones (2018), the court ruled that...",
      "The legal framework surrounding this issue involves both statutory and case law. Let me explain how these would likely apply to your situation..."
    ],
    "doctor": [
      "From a medical standpoint, these symptoms could indicate several possibilities. According to clinical guidelines, the most common causes include...",
      "The peer-reviewed literature on this health topic suggests that there are several evidence-based approaches. The current recommendations are...",
      "Based on recent medical research published in the Journal of Medicine (2023), the consensus among healthcare professionals is that..."
    ],
    "financial": [
      "From a financial planning perspective, this approach has several implications. The fundamental principle to consider is time value of money, which means...",
      "When analyzing this investment strategy, it's important to consider the risk-return profile. Based on modern portfolio theory...",
      "This financial decision involves tradeoffs between short-term liquidity and long-term growth. According to standard financial planning models..."
    ],
    "chef": [
      "This cooking technique has deep roots in classic culinary tradition. The key principles for success involve managing heat transfer and understanding how proteins react to...",
      "From a food science perspective, this reaction occurs because of the Maillard process, which creates hundreds of flavor compounds when...",
      "The traditional approach to this dish varies by region, but the unifying technique involves balancing these five flavor profiles. Let me explain how to achieve this balance..."
    ]
  };
  
  // Default response if agent type not found
  const defaultResponses = [
    "Based on authoritative sources, I can provide the following information about your question...",
    "According to verified references, the most accurate answer to your question involves...",
    "After consulting high-quality sources on this topic, I can explain that..."
  ];
  
  const agentResponses = responses[agentId] || defaultResponses;
  
  // Select a random response
  return agentResponses[Math.floor(Math.random() * agentResponses.length)];
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function getConfidenceLabel(score?: number): string {
  if (!score) return "Unknown";
  if (score >= 0.9) return "Very High";
  if (score >= 0.7) return "High";
  if (score >= 0.5) return "Moderate";
  if (score >= 0.3) return "Low";
  return "Very Low";
}

export function getConfidenceColor(score?: number): string {
  if (!score) return "bg-gray-400";
  if (score >= 0.9) return "bg-green-500";
  if (score >= 0.7) return "bg-green-400";
  if (score >= 0.5) return "bg-yellow-400";
  if (score >= 0.3) return "bg-orange-400";
  return "bg-red-400";
}
