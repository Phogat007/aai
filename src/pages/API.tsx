
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Key, Zap, Shield } from "lucide-react";

const API = () => {
  useEffect(() => {
    document.title = "API - aai";
  }, []);

  return (
    <PageLayout title="API">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Integrate AI Experts into Your Applications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build powerful applications with our REST API. Access all our AI experts programmatically with enterprise-grade reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardHeader className="text-center">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>RESTful API</CardTitle>
                <CardDescription>Simple, intuitive REST endpoints</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Key className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>API Keys</CardTitle>
                <CardDescription>Secure authentication system</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Low Latency</CardTitle>
                <CardDescription>Sub-second response times</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>99.9% Uptime</CardTitle>
                <CardDescription>Enterprise-grade reliability</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>API Overview</CardTitle>
                  <CardDescription>Everything you need to know about our API</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Base URL</h3>
                    <code className="bg-muted p-2 rounded text-sm block">https://api.aai.com/v1</code>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Authentication</h3>
                    <p className="text-sm text-muted-foreground">All API requests require an API key in the Authorization header.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Rate Limits</h3>
                    <p className="text-sm text-muted-foreground">Free tier: 100 requests/hour. Pro tier: 10,000 requests/hour. Enterprise: Custom limits.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="quickstart" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Start Guide</CardTitle>
                  <CardDescription>Get up and running in minutes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Get Your API Key</h3>
                    <p className="text-sm text-muted-foreground mb-2">Sign up for an account and generate your API key from the dashboard.</p>
                    <Button size="sm">Get API Key</Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Make Your First Request</h3>
                    <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`curl -X POST https://api.aai.com/v1/chat \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent": "teacher",
    "message": "Explain quantum physics simply"
  }'`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="examples" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>JavaScript Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`const response = await fetch('https://api.aai.com/v1/chat', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    agent: 'doctor',
    message: 'What are the symptoms of flu?'
  })
});

const data = await response.json();
console.log(data.response);`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Python Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`import requests

response = requests.post(
    'https://api.aai.com/v1/chat',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'agent': 'lawyer',
        'message': 'What is intellectual property?'
    }
)

print(response.json()['response'])`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>API Pricing</CardTitle>
                  <CardDescription>Simple, transparent pricing for developers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded p-4">
                      <h3 className="font-semibold">Free Tier</h3>
                      <p className="text-2xl font-bold">$0<span className="text-sm font-normal">/month</span></p>
                      <p className="text-sm text-muted-foreground">100 API calls per hour</p>
                    </div>
                    <div className="border rounded p-4">
                      <h3 className="font-semibold">Pro Tier</h3>
                      <p className="text-2xl font-bold">$49<span className="text-sm font-normal">/month</span></p>
                      <p className="text-sm text-muted-foreground">10,000 API calls per hour</p>
                    </div>
                    <div className="border rounded p-4">
                      <h3 className="font-semibold">Enterprise</h3>
                      <p className="text-2xl font-bold">Custom</p>
                      <p className="text-sm text-muted-foreground">Custom limits and SLA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get your API key and start integrating AI experts into your applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get API Key</Button>
              <Button size="lg" variant="outline">View Documentation</Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default API;
