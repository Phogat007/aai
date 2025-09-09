
import { useEffect, Suspense, lazy } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCard } from "@/components/home/FeatureCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Lazy load components that are below the fold
const AgentShowcase = lazy(() => import("@/components/home/AgentShowcase").then(module => ({ default: module.AgentShowcase })));
const ChatPreview = lazy(() => import("@/components/home/ChatPreview").then(module => ({ default: module.ChatPreview })));
const StatsSection = lazy(() => import("@/components/home/StatsSection").then(module => ({ default: module.StatsSection })));
const PricingSection = lazy(() => import("@/components/home/PricingSection").then(module => ({ default: module.PricingSection })));
const Footer = lazy(() => import("@/components/layout/Footer").then(module => ({ default: module.Footer })));

const Index = () => {
  useEffect(() => {
    document.title = "aai - AI Assistants with Authoritative Knowledge";
  }, []);

  const features = [
    {
      icon: "🎯",
      title: "Expertise You Can Trust",
      description: "Every response is grounded in authoritative sources like academic journals, respected textbooks, and professional resources.",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
    },
    {
      icon: "🧠",
      title: "Specialized Knowledge",
      description: "Choose from agents with deep expertise in education, law, medicine, finance, and culinary arts.",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600 text-white"
    },
    {
      icon: "🔍",
      title: "Full Transparency",
      description: "View sources for every response, with confidence indicators and direct links to reference materials.",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our AI Experts?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on the foundation of trust, accuracy, and transparency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<LoadingSpinner className="py-20" />}>
        <AgentShowcase />
      </Suspense>
      <Suspense fallback={<LoadingSpinner className="py-20" />}>
        <ChatPreview />
      </Suspense>
      <Suspense fallback={<LoadingSpinner className="py-20" />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner className="py-20" />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner className="py-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
