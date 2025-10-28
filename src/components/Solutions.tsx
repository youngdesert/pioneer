import { Shield, Zap, TrendingUp, Code } from "lucide-react";

const Solutions = () => {
  const problems = [
    {
      icon: Shield,
      problem: "Technology Overwhelm",
      solution: "We simplify complex tech decisions with expert guidance and proven frameworks, helping you choose the right solutions for your specific needs."
    },
    {
      icon: Zap,
      problem: "Slow Innovation",
      solution: "Accelerate your development cycles with our cutting-edge tools, methodologies, and collaborative environment designed for rapid prototyping."
    },
    {
      icon: TrendingUp,
      problem: "Scaling Challenges",
      solution: "Scale confidently with our infrastructure expertise and best practices that have helped hundreds of companies grow from startup to enterprise."
    },
    {
      icon: Code,
      problem: "Skills Gap",
      solution: "Bridge the talent divide through our training programs, mentorship network, and access to a community of skilled tech professionals."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Problems We Solve
          </h2>
          <p className="text-xl text-muted-foreground">
            We understand the challenges you face in today's fast-paced tech landscape. Here's how we help you overcome them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((item, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-destructive">
                    {item.problem}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
