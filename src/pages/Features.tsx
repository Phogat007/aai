
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Check, Brain, Shield, Zap, Users, BarChart, Globe } from "lucide-react";

const Features = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Features - aai";
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Specialized AI Experts",
      description: "Access domain-specific AI assistants trained on authoritative sources in education, law, medicine, finance, and culinary arts.",
      benefits: ["Expert knowledge", "Domain-specific training", "Authoritative sources"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Source Transparency",
      description: "Every response includes citations and confidence indicators, so you can verify the information and understand its reliability.",
      benefits: ["Full source citations", "Confidence scores", "Verifiable information"]
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast Responses",
      description: "Get expert-level answers in seconds, not hours. Our optimized AI models deliver quick, accurate responses.",
      benefits: ["Sub-second responses", "Optimized performance", "Real-time assistance"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Share conversations, collaborate on projects, and build institutional knowledge with your team members.",
      benefits: ["Shared workspaces", "Team insights", "Knowledge building"]
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Usage Analytics",
      description: "Track your usage patterns, most helpful responses, and optimize your AI interactions with detailed analytics.",
      benefits: ["Usage tracking", "Performance metrics", "Optimization insights"]
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "API Access",
      description: "Integrate our AI experts into your applications with our comprehensive REST API and SDKs.",
      benefits: ["REST API", "Multiple SDKs", "Custom integrations"]
    }
  ];

  return (
    <PageLayout title="Features">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Better Decisions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our AI experts can transform the way you work, learn, and make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your free trial today and see how our AI experts can help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/signup")}>
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/agents")}>
                Explore AI Agents
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Features;
