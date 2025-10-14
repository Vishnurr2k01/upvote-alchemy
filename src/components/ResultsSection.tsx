import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, MessageSquare, ArrowRight } from "lucide-react";
import ContentModal from "./ContentModal";

interface SubredditResult {
  name: string;
  subscribers: string;
  activeUsers: string;
  engagementRate: string;
  tone: string;
  relevanceScore: number;
}

const ResultsSection = ({ isVisible }: { isVisible: boolean }) => {
  const [selectedSubreddit, setSelectedSubreddit] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "engagement" | "relevant">("all");

  const results: SubredditResult[] = [
    {
      name: "SaaS",
      subscribers: "142K",
      activeUsers: "45K",
      engagementRate: "8.3%",
      tone: "Professional",
      relevanceScore: 95,
    },
    {
      name: "Entrepreneur",
      subscribers: "2.1M",
      activeUsers: "120K",
      engagementRate: "6.7%",
      tone: "Casual",
      relevanceScore: 87,
    },
    {
      name: "startups",
      subscribers: "1.8M",
      activeUsers: "89K",
      engagementRate: "7.2%",
      tone: "Professional",
      relevanceScore: 92,
    },
    {
      name: "smallbusiness",
      subscribers: "892K",
      activeUsers: "34K",
      engagementRate: "5.8%",
      tone: "Casual",
      relevanceScore: 78,
    },
    {
      name: "marketing",
      subscribers: "567K",
      activeUsers: "28K",
      engagementRate: "6.1%",
      tone: "Professional",
      relevanceScore: 82,
    },
    {
      name: "digitalnomad",
      subscribers: "743K",
      activeUsers: "41K",
      engagementRate: "7.8%",
      tone: "Casual",
      relevanceScore: 74,
    },
    {
      name: "business",
      subscribers: "3.2M",
      activeUsers: "156K",
      engagementRate: "5.4%",
      tone: "Professional",
      relevanceScore: 85,
    },
    {
      name: "productivity",
      subscribers: "421K",
      activeUsers: "19K",
      engagementRate: "8.9%",
      tone: "Casual",
      relevanceScore: 88,
    },
  ];

  if (!isVisible) return null;

  return (
    <section className="py-20 px-6 bg-background animate-slide-up">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Top 8 Subreddits for Your Business
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Results based on audience match & engagement potential
          </p>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-3">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary" : ""}
            >
              All
            </Button>
            <Button
              variant={filter === "engagement" ? "default" : "outline"}
              onClick={() => setFilter("engagement")}
              className={filter === "engagement" ? "bg-primary" : ""}
            >
              High Engagement
            </Button>
            <Button
              variant={filter === "relevant" ? "default" : "outline"}
              onClick={() => setFilter("relevant")}
              className={filter === "relevant" ? "bg-primary" : ""}
            >
              Most Relevant
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <div
              key={result.name}
              className="group bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border hover:border-primary p-6 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary">
                  r/{result.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{result.subscribers}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Active Users</div>
                  <div className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    {result.activeUsers}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Engagement</div>
                  <div className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    {result.engagementRate}
                  </div>
                </div>
              </div>

              {/* Tone Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                  {result.tone}
                </span>
              </div>

              {/* Relevance Score */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Relevance Score</span>
                  <span className="font-semibold text-accent">{result.relevanceScore}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-1000"
                    style={{ width: `${result.relevanceScore}%` }}
                  ></div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => setSelectedSubreddit(result.name)}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                See Content Ideas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Content Modal */}
      {selectedSubreddit && (
        <ContentModal
          subreddit={selectedSubreddit}
          onClose={() => setSelectedSubreddit(null)}
        />
      )}
    </section>
  );
};

export default ResultsSection;
