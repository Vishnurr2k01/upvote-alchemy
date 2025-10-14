import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Find Your Reddit Communities?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Get started free. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-14 px-8 bg-white text-primary hover:bg-white/90 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse-glow"
          >
            Analyze My Company
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-14 px-8 text-white border-2 border-white/40 hover:bg-white/10 hover:border-white text-lg"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
