import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border h-16">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">RedditBoost</span>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg hover:scale-105 transition-all">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
