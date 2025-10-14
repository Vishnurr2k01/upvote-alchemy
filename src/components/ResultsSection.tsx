import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ContentModal from "./ContentModal";

interface ResultsSectionProps {
  data: {
    draft_content: Record<string, string>;
    status: string;
  };
}

const ResultsSection = ({ data }: ResultsSectionProps) => {
  const [selectedSubreddit, setSelectedSubreddit] = useState<string | null>(null);

  const subreddits = Object.keys(data.draft_content || {});

  const extractTitle = (content: string) => {
    const titleMatch = content.match(/POST TITLE:\s*(.+?)(?:\n|$)/);
    return titleMatch ? titleMatch[1].trim() : "View Content";
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Top Subreddits for Your Business
          </h2>
          <p className="text-xl text-muted-foreground">
            Results based on audience match & engagement potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {subreddits.map((subreddit, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:border-primary transition-all duration-300 hover:shadow-elegant hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedSubreddit(subreddit)}
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  r/{subreddit}
                </h3>
                <p className="text-lg text-foreground font-medium">
                  {extractTitle(data.draft_content[subreddit])}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedSubreddit && (
        <ContentModal
          subreddit={selectedSubreddit}
          content={data.draft_content[selectedSubreddit]}
          onClose={() => setSelectedSubreddit(null)}
        />
      )}
    </section>
  );
};

export default ResultsSection;
