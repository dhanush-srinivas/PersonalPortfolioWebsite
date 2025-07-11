import { Code, Palette, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";

export default function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Development",
      description: "Crafting scalable web applications using modern technologies and best practices.",
      color: "bg-[hsl(var(--portfolio-primary))]",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating intuitive user interfaces that balance aesthetics with functionality.",
      color: "bg-[hsl(var(--portfolio-accent))]",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Exploring emerging technologies to solve complex business challenges.",
      color: "bg-orange-500",
    },
  ];

  return (
    <AnimatedSection
      id="about"
      className="py-20 font-montserrat"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
            About
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-[hsl(var(--portfolio-slate-100))] hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6`}>
                    <feature.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
