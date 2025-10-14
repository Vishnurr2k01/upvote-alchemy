import { Target, TrendingUp, BadgeCheck } from "lucide-react";

const ValueSection = () => {
  const features = [
    {
      icon: Target,
      title: "Find Communities, Not Ads",
      description: "Discover where your real audience discusses problems your product solves",
      color: "bg-accent",
    },
    {
      icon: TrendingUp,
      title: "Content That Converts",
      description: "Our AI learns from top posts to generate ideas that actually get engagement",
      color: "bg-primary",
    },
    {
      icon: BadgeCheck,
      title: "Stay Authentic",
      description: "Build genuine community presence without breaking subreddit rules",
      color: "bg-accent",
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center space-y-4 p-6 rounded-xl hover:bg-white/5 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-white/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
