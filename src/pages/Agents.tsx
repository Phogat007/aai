
import { useState, useEffect } from "react";
import { AgentCard } from "@/components/agents/AgentCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal } from "lucide-react";

const agentsData = [
  {
    id: "teacher",
    name: "Teacher",
    emoji: "👨‍🏫",
    description: "Educational guidance across subjects at various levels, from elementary concepts to advanced topics.",
    color: "teacher",
    tags: ["Math", "Science", "Languages", "History", "Arts"],
    sourceQuality: 5,
    totalUsage: 24563,
  },
  {
    id: "lawyer",
    name: "Lawyer",
    emoji: "⚖️",
    description: "Legal information based on authoritative legal texts, covering various aspects of law and legal processes.",
    color: "lawyer",
    tags: ["Constitutional Law", "Contract Law", "Criminal Law", "Family Law"],
    sourceQuality: 5,
    totalUsage: 18921,
  },
  {
    id: "doctor",
    name: "Doctor",
    emoji: "🩺",
    description: "Medical information sourced from peer-reviewed medical literature to help understand health topics.",
    color: "doctor",
    tags: ["General Health", "Pediatrics", "Cardiology", "Nutrition", "Mental Health"],
    sourceQuality: 5,
    totalUsage: 31254,
  },
  {
    id: "financial",
    name: "Financial Advisor",
    emoji: "💰",
    description: "Economic insights from financial textbooks to help understand personal finance, investing, and economic concepts.",
    color: "finance",
    tags: ["Investing", "Budgeting", "Retirement", "Taxation", "Markets"],
    sourceQuality: 4,
    totalUsage: 15782,
  },
  {
    id: "chef",
    name: "Chef",
    emoji: "👩‍🍳",
    description: "Culinary expertise from professional cooking resources to help with recipes, techniques, and food science.",
    color: "chef",
    tags: ["Recipes", "Techniques", "Ingredients", "Diets", "Food Science"],
    sourceQuality: 4,
    totalUsage: 22109,
  },
];

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filteredAgents, setFilteredAgents] = useState(agentsData);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  useEffect(() => {
    document.title = "Choose your Agent - aai";
  }, []);
  
  useEffect(() => {
    let result = [...agentsData];
    
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(
        agent => 
          agent.name.toLowerCase().includes(lowercasedSearch) ||
          agent.description.toLowerCase().includes(lowercasedSearch) ||
          agent.tags.some(tag => tag.toLowerCase().includes(lowercasedSearch))
      );
    }
    
    if (selectedCategory !== "all") {
      result = result.filter(agent => agent.id === selectedCategory);
    }
    
    if (sortBy === "popular") {
      result.sort((a, b) => (b.totalUsage || 0) - (a.totalUsage || 0));
    } else if (sortBy === "quality") {
      result.sort((a, b) => b.sourceQuality - a.sourceQuality);
    }
    
    setFilteredAgents(result);
  }, [searchTerm, sortBy, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 z-10 bg-background/80 backdrop-blur-md">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mr-4">
              aai
            </div>
            <h1 className="text-2xl font-bold hidden md:block">Choose your AI Assistant</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.location.href = "/login"}>
              Sign Out
            </Button>
          </div>
        </div>
        
        {/* Search and filters */}
        <div className="container pb-4">
          <div className="relative w-full max-w-2xl mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search agents by name, description, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {showFilters && (
            <div className="mt-4 flex flex-col sm:flex-row gap-4 animate-fade-in">
              <div className="w-full sm:w-1/2">
                <p className="text-sm font-medium mb-2">Agent Category</p>
                <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                    <TabsTrigger value="teacher" className="flex-1">Teacher</TabsTrigger>
                    <TabsTrigger value="lawyer" className="flex-1">Lawyer</TabsTrigger>
                    <TabsTrigger value="doctor" className="flex-1">Doctor</TabsTrigger>
                    <TabsTrigger value="financial" className="flex-1">Finance</TabsTrigger>
                    <TabsTrigger value="chef" className="flex-1">Chef</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="w-full sm:w-1/2">
                <p className="text-sm font-medium mb-2">Sort By</p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="quality">Source Quality</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <main className="container py-8">
        {filteredAgents.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-2">No agents found</h2>
            <p className="text-muted-foreground mb-4">
              We couldn't find any agents matching your search criteria.
            </p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              setSortBy("featured");
            }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Agents;
