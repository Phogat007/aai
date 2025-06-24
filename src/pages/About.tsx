
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "About - aai";
  }, []);

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "👩‍💼",
      description: "Former AI researcher at Stanford with 10+ years in machine learning."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      description: "Ex-Google engineer specializing in natural language processing."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Ethics",
      image: "👩‍🔬",
      description: "PhD in AI Ethics from MIT, ensuring responsible AI development."
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image: "👨‍🎨",
      description: "Former product lead at tech unicorns, focused on user experience."
    }
  ];

  const values = [
    {
      title: "Transparency",
      description: "We believe AI should be explainable and trustworthy. Every response includes sources and confidence levels."
    },
    {
      title: "Accuracy",
      description: "Our AI experts are trained on authoritative sources to provide reliable, fact-based information."
    },
    {
      title: "Accessibility",
      description: "Expert knowledge should be available to everyone, not just those who can afford traditional consultants."
    },
    {
      title: "Privacy",
      description: "Your conversations are private and secure. We never sell your data or use it for unauthorized purposes."
    }
  ];

  return (
    <PageLayout title="About">
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About aai
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize access to expert knowledge through transparent, 
              reliable AI assistants that you can trust.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
                Traditional expert consultation is expensive, time-consuming, and often inaccessible. 
                We're changing that by creating AI assistants that provide expert-level guidance backed by 
                authoritative sources, making professional knowledge accessible to everyone.
              </p>
              <div className="bg-muted/30 rounded-lg p-8">
                <p className="text-lg font-medium text-center">
                  "We envision a world where anyone can access expert knowledge instantly, 
                  with full transparency about sources and confidence levels."
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{member.image}</div>
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2023, aai emerged from a simple observation: while AI was becoming 
                  incredibly powerful, most AI assistants lacked the specialized knowledge and 
                  transparency needed for professional use cases.
                </p>
                <p>
                  Our founders, having worked at leading tech companies and research institutions, 
                  saw an opportunity to create AI assistants that could provide expert-level guidance 
                  while maintaining full transparency about their sources and limitations.
                </p>
                <p>
                  Today, we're proud to serve thousands of professionals, students, and curious minds 
                  who rely on our AI experts for authoritative information across multiple domains.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to experience expert AI assistance with full transparency?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/signup")}>
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
