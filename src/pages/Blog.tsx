
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - aai";
  }, []);

  const blogPosts = [
    {
      title: "The Future of AI-Powered Education",
      excerpt: "How AI tutors are transforming the way we learn and teach.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      category: "Education",
      readTime: "5 min read"
    },
    {
      title: "Building Trust in AI: The Importance of Source Transparency",
      excerpt: "Why showing sources is crucial for professional AI applications.",
      author: "Dr. Emily Watson",
      date: "March 10, 2024",
      category: "AI Ethics",
      readTime: "7 min read"
    },
    {
      title: "Medical AI: Augmenting Healthcare Professionals",
      excerpt: "How AI can support medical professionals without replacing them.",
      author: "Michael Rodriguez",
      date: "March 5, 2024",
      category: "Healthcare",
      readTime: "6 min read"
    },
    {
      title: "Legal Tech Revolution: AI in Law Practice",
      excerpt: "The changing landscape of legal research and consultation.",
      author: "David Kim",
      date: "February 28, 2024",
      category: "Legal",
      readTime: "8 min read"
    }
  ];

  return (
    <PageLayout title="Blog">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              aai Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, updates, and thoughts on the future of AI-powered expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {blogPosts.map((post, index) => (
              <Card key={index} className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <Button size="lg">Subscribe to Newsletter</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
