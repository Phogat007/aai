import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, UserPlus, ChevronDown, PlayCircle } from "lucide-react";
import * as React from "react";

export function HeroSection() {
  const navigate = useNavigate();

  // Smooth scroll to demo section
  const handleSeeHowItWorks = () => {
    const el = document.getElementById("demo-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 min-h-[80vh] flex items-center">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute left-0 top-0 opacity-30 dark:opacity-20" aria-hidden>
          <circle cx="20%" cy="30%" r="180" fill="url(#grad1)" />
          <circle cx="80%" cy="70%" r="120" fill="url(#grad2)" />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-28 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text & CTA */}
        <div className="flex-1 max-w-xl text-center md:text-left z-10">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6 select-none">
            <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl shadow-lg">aai</div>
            <span className="font-semibold text-2xl tracking-tight text-foreground">aai</span>
          </div>
          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/60 backdrop-blur-sm mb-6 shadow-sm">
            <span className="text-sm font-medium text-primary flex items-center gap-1">
              <UserPlus className="h-4 w-4" />
              Your AI, Trained by Experts
            </span>
          </div>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent drop-shadow-lg">
            Unlock Reliable AI Expertise
          </h1>
          {/* Description */}
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Connect with specialized AI assistants trained on trusted, authoritative sources. Get expert-level guidance, instantly and securely.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full group shadow-md hover:scale-105 transition-transform"
              onClick={() => navigate("/signup")}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-2 flex items-center gap-2"
              onClick={handleSeeHowItWorks}
              type="button"
            >
              <PlayCircle className="h-5 w-5" />
              See How It Works
            </Button>
          </div>
          {/* Trusted by bar */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-muted-foreground opacity-80">
            <span>Trusted by:</span>
            <span className="font-semibold text-primary">Educators</span>
            <span className="font-semibold text-blue-600">Lawyers</span>
            <span className="font-semibold text-cyan-600">Doctors</span>
            <span className="font-semibold text-emerald-600">Finance Experts</span>
            <span className="font-semibold text-amber-600">Chefs</span>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center z-10 w-full md:w-auto">
          {/* Simple SVG illustration: AI avatars in a circle */}
          <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
            <svg viewBox="0 0 380 380" fill="none" className="w-full h-full">
              <circle cx="190" cy="190" r="180" fill="url(#circleGrad)" opacity="0.12" />
              <defs>
                <radialGradient id="circleGrad" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#06b6d4" />
                </radialGradient>
              </defs>
            </svg>
            {/* Avatars positioned in a circle */}
            {[
              { color: "bg-blue-500", label: "Teacher" },
              { color: "bg-indigo-600", label: "Lawyer" },
              { color: "bg-cyan-500", label: "Doctor" },
              { color: "bg-emerald-500", label: "Finance" },
              { color: "bg-amber-500", label: "Chef" },
            ].map((a, i) => {
              const angle = (i / 5) * 2 * Math.PI;
              const r = 140;
              const cx = 160 + r * Math.cos(angle);
              const cy = 160 + r * Math.sin(angle);
              return (
                <div
                  key={a.label}
                  className={`absolute flex flex-col items-center`} 
                  style={{ left: cx, top: cy }}
                >
                  <div className={`w-14 h-14 rounded-full border-4 border-background shadow-lg ${a.color} flex items-center justify-center text-white font-bold text-lg`}>{a.label[0]}</div>
                  <span className="mt-1 text-xs font-medium text-muted-foreground bg-background/80 px-2 py-0.5 rounded shadow-sm">{a.label}</span>
                </div>
              );
            })}
            {/* Center avatar */}
            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-4 border-primary shadow-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">AI</div>
              <span className="mt-2 text-sm font-semibold text-primary">Expert</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll down indicator */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <ChevronDown className="h-7 w-7 text-primary/70" />
        <span className="text-xs text-muted-foreground mt-1">Scroll down</span>
      </div>
    </section>
  );
}
