
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const agents = [
  { emoji: "👨‍🏫", name: "Teacher", field: "Education", color: "bg-teacher", rating: 4.9 },
  { emoji: "⚖️", name: "Lawyer", field: "Legal", color: "bg-lawyer", rating: 4.8 },
  { emoji: "🩺", name: "Doctor", field: "Medical", color: "bg-doctor", rating: 4.9 },
  { emoji: "💰", name: "Financial Advisor", field: "Finance", color: "bg-finance", rating: 4.7 },
  { emoji: "👩‍🍳", name: "Chef", field: "Culinary", color: "bg-chef", rating: 4.8 },
];

export function AgentShowcase() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Your AI Specialists
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each agent is trained on authoritative sources from their respective fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {agents.map((agent) => (
            <Card key={agent.name} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className={`w-16 h-16 ${agent.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {agent.emoji}
              </div>
              <h3 className="font-semibold mb-1">{agent.name}</h3>
              <Badge variant="outline" className="mb-3">{agent.field}</Badge>
              <div className="flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">{agent.rating}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="group"
            onClick={() => navigate("/agents")}
          >
            View All Agents
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
