import { Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're dedicated to making cutting-edge technology accessible and transformative for every organization."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a vibrant ecosystem where innovators, developers, and visionaries collaborate and thrive."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Creating the environment where breakthrough ideas become reality through technology and partnership."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground">
            PioneerPath is more than a tech hub—we're a catalyst for innovation. We bring together expertise, resources, and vision to help individuals and organizations navigate the complex technology landscape with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <value.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
