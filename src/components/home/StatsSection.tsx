
import { Card } from "@/components/ui/card";

const stats = [
  { number: "10,000+", label: "Active Users", description: "Trust our AI experts" },
  { number: "1M+", label: "Questions Answered", description: "With source-backed responses" },
  { number: "99.2%", label: "Accuracy Rate", description: "Based on expert validation" },
  { number: "24/7", label: "Availability", description: "Always here when you need us" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the growing community of professionals and learners who rely on our AI experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg font-medium mb-1">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
