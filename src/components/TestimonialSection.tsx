import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "RedditBoost helped us find 12 highly engaged communities we never knew existed. Our organic traffic from Reddit increased by 40% in just 2 months.",
      author: "Sarah Chen",
      company: "Founder @ TaskFlow",
      metric: "Found 12 communities | 40% engagement boost",
      avatar: "SC",
    },
    {
      quote: "The content ideas are gold. Instead of guessing what to post, I now have AI-generated content that actually resonates with each subreddit's culture.",
      author: "Michael Rodriguez",
      company: "Marketing Lead @ DevTools Inc",
      metric: "Generated 50+ content ideas | 3x upvotes",
      avatar: "MR",
    },
    {
      quote: "Finally, a tool that helps you market on Reddit without being spammy. The authenticity scores ensure we're always adding value to the community.",
      author: "Emily Johnson",
      company: "CEO @ CloudSync",
      metric: "8 subreddits | 25% conversion rate",
      avatar: "EJ",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Loved by Reddit Marketers
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of companies building authentic Reddit presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>

              {/* Metric */}
              <div className="text-sm text-accent font-medium bg-accent/10 rounded-lg px-3 py-2">
                {testimonial.metric}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
