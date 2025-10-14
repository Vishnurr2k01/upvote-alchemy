import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowUp, Users, Calendar, MessageSquare, Lightbulb, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ContentModalProps {
  subreddit: string;
  onClose: () => void;
}

const ContentModal = ({ subreddit, onClose }: ContentModalProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyIdea = (idea: string, index: number) => {
    navigator.clipboard.writeText(idea);
    setCopiedIndex(index);
    toast({
      title: "Copied to clipboard!",
      description: "Content idea has been copied.",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const contentIdeas = [
    {
      type: "Discussion",
      title: "What's your biggest challenge with payment processing?",
      description: "Start a discussion asking about pain points your product solves. Show genuine interest in responses and subtly mention how your solution addresses these issues.",
      authenticity: 85,
      fullText: "Hey r/" + subreddit + "! I've been working in fintech and I'm curious - what's your biggest challenge with payment processing? Whether it's fees, integration complexity, or something else, I'd love to hear your experiences.",
    },
    {
      type: "Guide",
      title: "A developer's guide to choosing the right payment gateway",
      description: "Create an educational post comparing different payment solutions. Be objective and mention your product as one option among others, focusing on technical insights.",
      authenticity: 92,
      fullText: "I've integrated 10+ payment gateways over the years. Here's what I learned about choosing the right one for your project...\n\n1. API Design & Documentation\n2. Fee Structure\n3. Supported Payment Methods\n4. Regional Coverage\n\n[Include your product in comparison]",
    },
    {
      type: "Case Study",
      title: "How we reduced payment processing fees by 40%",
      description: "Share a specific success story or case study. Focus on the problem, solution, and results. Make it educational rather than promotional.",
      authenticity: 88,
      fullText: "Last year our startup was burning cash on payment fees. Here's the exact strategy we used to cut costs by 40%:\n\n- Analyzed our transaction patterns\n- Negotiated better rates\n- Switched to a volume-based pricing model\n\nHappy to share the full breakdown if anyone's interested.",
    },
  ];

  const topPosts = [
    { title: "How I scaled from $0 to $10k MRR", upvotes: "2.4K", highlights: ["pricing strategy", "customer acquisition"] },
    { title: "Payment gateway comparison 2024", upvotes: "1.8K", highlights: ["API quality", "fees breakdown"] },
    { title: "Best tools for SaaS founders", upvotes: "1.5K", highlights: ["essential tools", "tech stack"] },
  ];

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto animate-slide-in-right">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary flex items-center gap-2">
            <ArrowUp className="w-6 h-6" />
            r/{subreddit} - Content Ideas
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="top-posts">Top Posts</TabsTrigger>
            <TabsTrigger value="content">Content Ideas</TabsTrigger>
          </TabsList>

          {/* Community Insights Tab */}
          <TabsContent value="insights" className="space-y-6 pt-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted rounded-lg p-4 text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">142K</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <MessageSquare className="w-6 h-6 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold text-foreground">340</div>
                <div className="text-sm text-muted-foreground">Posts/Day</div>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">Mon-Wed</div>
                <div className="text-sm text-muted-foreground">Best Days</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground">Community Vibe</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional community focused on SaaS business growth. Members appreciate detailed case studies,
                technical insights, and honest discussions about challenges. Self-promotion is frowned upon unless
                you're providing genuine value.
              </p>

              <h3 className="font-semibold text-lg text-foreground">Common Post Types</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Revenue milestones and growth strategies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Technical tutorials and integration guides
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Ask Me Anything (AMA) sessions
                </li>
              </ul>
            </div>
          </TabsContent>

          {/* Top Posts Tab */}
          <TabsContent value="top-posts" className="space-y-4 pt-6">
            {topPosts.map((post, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{post.title}</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ArrowUp className="w-4 h-4 text-primary" />
                    {post.upvotes}
                  </div>
                </div>
                <div className="flex gap-2">
                  {post.highlights.map((highlight, i) => (
                    <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Content Ideas Tab */}
          <TabsContent value="content" className="space-y-6 pt-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">3 Content Ideas Tailored for This Community</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                These ideas are based on top-performing posts and community preferences
              </p>
            </div>

            {contentIdeas.map((idea, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      {idea.type}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-muted-foreground">Authenticity Score:</div>
                      <div className="text-sm font-semibold text-accent">{idea.authenticity}%</div>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-foreground">{idea.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{idea.description}</p>

                <div className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-2">Example post:</div>
                  <p className="text-sm text-foreground whitespace-pre-line">{idea.fullText}</p>
                </div>

                <Button
                  onClick={() => handleCopyIdea(idea.fullText, index)}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {copiedIndex === index ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy to Clipboard
                    </>
                  )}
                </Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
