import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, FileText, Loader2, Shield, CreditCard, Lock } from "lucide-react";

const DemoSection = ({ onAnalyze }: { onAnalyze: (website: string, description: string) => void }) => {
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (website && description) {
      setIsLoading(true);
      setTimeout(() => {
        onAnalyze(website, description);
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleTryExample = () => {
    setWebsite("https://stripe.com");
    setDescription("Payment processing platform for internet businesses");
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Try It Now
          </h2>
          <p className="text-xl text-muted-foreground">
            Enter your company details and discover your Reddit communities
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Website Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                Your Company Website
              </label>
              <Input
                type="url"
                placeholder="https://yourcompany.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="h-12 text-base border-2 focus:border-primary focus:ring-primary transition-colors"
                required
              />
            </div>

            {/* Description Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                What Do You Do?
              </label>
              <Input
                type="text"
                placeholder="e.g., SaaS for project management..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="h-12 text-base border-2 focus:border-primary focus:ring-primary transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:shadow-[0_0_30px_hsl(16_100%_50%/0.4)] transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Find My Subreddits"
              )}
            </Button>

            {/* Try Example Link */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleTryExample}
                className="text-sm text-primary hover:underline font-medium"
              >
                Try an Example
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-border text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent" />
                <span>Free to Try</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-accent" />
                <span>No Credit Card</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
