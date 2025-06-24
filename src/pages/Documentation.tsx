
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Book, Zap, Shield } from "lucide-react";

const Documentation = () => {
  useEffect(() => {
    document.title = "Documentation - aai";
  }, []);

  return (
    <PageLayout title="Documentation">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about using aai, from basic concepts to advanced integrations.
            </p>
          </div>

          {/* Quick Start Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Book className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Getting Started</CardTitle>
                <CardDescription>Learn the basics</CardDescription>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">API Reference</CardTitle>
                <CardDescription>Technical documentation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Tutorials</CardTitle>
                <CardDescription>Step-by-step guides</CardDescription>
              </CardHeader>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Best Practices</CardTitle>
                <CardDescription>Tips and guidelines</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="agents">AI Agents</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>What is aai?</CardTitle>
                    <CardDescription>Understanding our AI expert platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      aai is a platform that provides access to specialized AI assistants trained on authoritative sources. 
                      Unlike general-purpose AI, our experts are domain-specific and provide citations for every response.
                    </p>
                    <h3 className="font-semibold">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Domain-specific AI experts (Teacher, Lawyer, Doctor, Financial Advisor, Chef)</li>
                      <li>Source citations and confidence scores for every response</li>
                      <li>Professional-grade accuracy and reliability</li>
                      <li>API access for custom integrations</li>
                      <li>Team collaboration features</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Your first steps with aai</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">1. Create Your Account</h3>
                      <p className="text-muted-foreground">Sign up for a free account to get started with 5 conversations per month.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">2. Choose an AI Expert</h3>
                      <p className="text-muted-foreground">Select the expert that matches your needs from our available agents.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">3. Start Conversing</h3>
                      <p className="text-muted-foreground">Ask questions and receive expert-level responses with full transparency.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="agents" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Available AI Experts</CardTitle>
                    <CardDescription>Learn about our specialized AI assistants</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { name: "Teacher", emoji: "👨‍🏫", expertise: "Education across all subjects and levels" },
                      { name: "Lawyer", emoji: "⚖️", expertise: "Legal information and processes" },
                      { name: "Doctor", emoji: "🩺", expertise: "Medical information and health topics" },
                      { name: "Financial Advisor", emoji: "💰", expertise: "Finance, investing, and economics" },
                      { name: "Chef", emoji: "👩‍🍳", expertise: "Culinary arts and food science" }
                    ].map((agent, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{agent.emoji}</span>
                          <h3 className="font-semibold">{agent.name}</h3>
                        </div>
                        <p className="text-muted-foreground">{agent.expertise}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>API Documentation</CardTitle>
                    <CardDescription>Integrate aai into your applications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Authentication</h3>
                      <p className="text-muted-foreground mb-2">All API requests require an API key:</p>
                      <pre className="bg-muted p-3 rounded text-sm">
                        Authorization: Bearer YOUR_API_KEY
                      </pre>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Base URL</h3>
                      <code className="bg-muted p-2 rounded text-sm">https://api.aai.com/v1</code>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Rate Limits</h3>
                      <ul className="text-muted-foreground text-sm">
                        <li>Free: 100 requests/hour</li>
                        <li>Pro: 10,000 requests/hour</li>
                        <li>Enterprise: Custom limits</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="integrations" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Integrations</CardTitle>
                    <CardDescription>Connect aai with your favorite tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Slack Bot Integration",
                        "Microsoft Teams App",
                        "Zapier Connector",
                        "WordPress Plugin",
                        "Chrome Extension",
                        "Custom API Integration"
                      ].map((integration, index) => (
                        <div key={index} className="border rounded p-4">
                          <h3 className="font-medium">{integration}</h3>
                          <Button size="sm" variant="outline" className="mt-2">
                            Learn More
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="troubleshooting" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Common Issues</CardTitle>
                    <CardDescription>Solutions to frequently encountered problems</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        issue: "API key not working",
                        solution: "Ensure your API key is valid and included in the Authorization header with 'Bearer ' prefix."
                      },
                      {
                        issue: "Rate limit exceeded",
                        solution: "Check your current plan limits and consider upgrading if you need higher limits."
                      },
                      {
                        issue: "Low confidence scores",
                        solution: "Try rephrasing your question or providing more context for better results."
                      },
                      {
                        issue: "Agent not responding",
                        solution: "Check the agent status page and ensure your request format is correct."
                      }
                    ].map((item, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold mb-1">{item.issue}</h3>
                        <p className="text-muted-foreground text-sm">{item.solution}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for in our documentation?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Support</Button>
              <Button size="lg" variant="outline">Join Community</Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Documentation;
