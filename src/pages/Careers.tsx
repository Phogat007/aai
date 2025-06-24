
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign } from "lucide-react";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers - aai";
  }, []);

  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$150k - $200k",
      description: "Join our AI team to develop next-generation language models and improve our AI experts."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "New York, NY / Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Design intuitive interfaces that make AI expertise accessible to everyone."
    },
    {
      title: "AI Ethics Researcher",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Ensure our AI systems are fair, transparent, and aligned with human values."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX / Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Help our enterprise customers succeed with AI-powered expertise solutions."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Flexible remote work",
    "Learning and development budget",
    "Unlimited PTO",
    "State-of-the-art equipment"
  ];

  return (
    <PageLayout title="Careers">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us democratize access to expert knowledge and build the future of AI-powered assistance.
            </p>
          </div>

          {/* Culture Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Culture</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're building a diverse, inclusive team of passionate individuals who believe in making 
                expert knowledge accessible to everyone. We value curiosity, transparency, and continuous learning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Innovation First</h3>
                    <p className="text-sm text-muted-foreground">We encourage experimentation and bold ideas.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                    <p className="text-sm text-muted-foreground">Flexible schedules and remote-friendly culture.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Growth Mindset</h3>
                    <p className="text-sm text-muted-foreground">Continuous learning and development opportunities.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                        <CardDescription>{position.description}</CardDescription>
                      </div>
                      <Button className="mt-4 md:mt-0">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume!
            </p>
            <Button size="lg">Send Resume</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
