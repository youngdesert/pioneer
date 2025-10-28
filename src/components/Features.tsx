import { Rocket, Users2, BookOpen, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Innovation Lab",
      description: "Access state-of-the-art facilities and tools to prototype and develop your next breakthrough product."
    },
    {
      icon: Users2,
      title: "Expert Mentorship",
      description: "Connect with seasoned tech leaders and industry veterans who guide you through every stage of your journey."
    },
    {
      icon: BookOpen,
      title: "Learning Programs",
      description: "Comprehensive training courses and workshops covering the latest technologies, frameworks, and best practices."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and community support to keep your projects moving forward."
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to succeed in the modern tech ecosystem, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
