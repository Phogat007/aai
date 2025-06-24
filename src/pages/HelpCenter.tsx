
import { useEffect, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Book, MessageSquare, Settings, CreditCard } from "lucide-react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Help Center - aai";
  }, []);

  const categories = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "Getting Started",
      description: "Learn the basics of using aai",
      articles: 12
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Using AI Agents",
      description: "How to interact with our AI experts",
      articles: 8
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Account & Settings",
      description: "Manage your account and preferences",
      articles: 6
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Billing & Plans",
      description: "Payment, subscriptions, and billing",
      articles: 5
    }
  ];

  const faqs = [
    {
      question: "How do I get started with aai?",
      answer: "Simply sign up for a free account and choose an AI expert to start chatting with. You'll get 5 free conversations per month."
    },
    {
      question: "What makes aai different from other AI assistants?",
      answer: "Our AI experts are specialized in specific domains and trained on authoritative sources. Every response includes citations and confidence scores."
    },
    {
      question: "Can I see the sources for AI responses?",
      answer: "Yes! Every response includes source citations and confidence indicators. You can click on sources to verify the information."
    },
    {
      question: "How accurate are the AI responses?",
      answer: "Our AI experts are trained on peer-reviewed and authoritative sources. Each response includes a confidence score to help you assess reliability."
    },
    {
      question: "Can I use aai for professional work?",
      answer: "Absolutely! Many professionals use aai for research, analysis, and decision support. Our Pro plan includes advanced features for professional use."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, we take privacy seriously. Your conversations are encrypted and we never sell your data or use it for unauthorized purposes."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for Pro subscriptions. Contact our support team for refund requests."
    }
  ];

  return (
    <PageLayout title="Help Center">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to common questions and learn how to get the most out of aai.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      {category.articles} articles
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                "How to choose the right AI expert for your needs",
                "Understanding confidence scores and source citations",
                "Best practices for asking questions to AI experts",
                "Setting up your profile and preferences",
                "Exporting and sharing conversations"
              ].map((article, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-medium hover:text-primary transition-colors">
                      {article}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Support</Button>
              <Button size="lg" variant="outline">Start Live Chat</Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HelpCenter;
