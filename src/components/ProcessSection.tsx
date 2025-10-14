import { Globe, Radar, Lightbulb, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Enter Your Company Website",
      description: "Paste your website URL and tell us what your company does",
      icon: Globe,
      color: "bg-accent",
    },
    {
      number: "2",
      title: "Smart Community Matching",
      description: "Our algorithm finds the perfect subreddits where your audience already hangs out",
      icon: Radar,
      color: "bg-primary",
    },
    {
      number: "3",
      title: "AI-Generated Content Ideas",
      description: "Receive authentic, community-approved content based on trending posts",
      icon: Lightbulb,
      color: "bg-accent",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to Reddit marketing success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-2 duration-300 border border-border h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 group-hover:rotate-[360deg] transition-transform duration-700`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow - Desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
