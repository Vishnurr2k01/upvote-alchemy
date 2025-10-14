import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, Loader2, ListChecks } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-secondary via-secondary/95 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Side - Copy & CTA */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Find Your Reddit Community & Promote Like You{" "}
              <span className="text-accent">Belong There</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover where your audience hangs out and generate authentic, community-approved content ideas in seconds
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-semibold hover:shadow-[0_0_30px_hsl(16_100%_50%/0.4)] transition-all"
              >
                Analyze My Company
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="h-12 px-8 text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
              >
                See How It Works
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/80 pt-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-xs">✓</span>
              </div>
              <span>No Reddit account needed initially</span>
            </div>
          </div>

          {/* Right Side - Animated Mockup */}
          <div className="relative animate-float">
            <div className="bg-card rounded-2xl shadow-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <Globe className="w-6 h-6 text-primary" />
                <div className="flex-1">
                  <div className="h-10 bg-muted rounded-lg flex items-center px-4 text-sm text-muted-foreground">
                    https://yourcompany.com
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center py-8">
                <div className="relative">
                  <Loader2 className="w-12 h-12 text-primary animate-spin" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-ping"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ListChecks className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">r/SaaS</span>
                    </div>
                    <div className="text-sm font-medium text-accent">95% Match</div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 opacity-70">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 opacity-40">
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
