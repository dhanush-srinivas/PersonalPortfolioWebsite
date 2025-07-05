import { Code, Settings, Database, Leaf, Cloud, Shield, Layers, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const languages = [
    { name: "JavaScript", level: 5 },
    { name: "Python", level: 4 },
    { name: "TypeScript", level: 5 },
    { name: "Java", level: 3 },
  ];

  const frameworks = [
    "React", "Node.js", "Express", "Vue.js", "Django", "Docker",
    "Kubernetes", "Redis", "GraphQL", "Git"
  ];

  const databases = [
    { name: "MongoDB", icon: Leaf, color: "bg-green-500" },
    { name: "PostgreSQL", icon: Database, color: "bg-blue-500" },
    { name: "AWS", icon: Cloud, color: "bg-orange-500" },
    { name: "Google Cloud", icon: Cloud, color: "bg-blue-600" },
    { name: "Redis", icon: Database, color: "bg-red-500" },
  ];

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i < level ? "bg-[hsl(var(--portfolio-primary))]" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Skills
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="bg-slate-50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))] mb-6 flex items-center">
                <Code className="text-[hsl(var(--portfolio-primary))] mr-3" />
                Programming Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-700">{lang.name}</span>
                    {renderSkillLevel(lang.level)}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks & Tools */}
          <Card className="bg-slate-50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))] mb-6 flex items-center">
                <Settings className="text-[hsl(var(--portfolio-accent))] mr-3" />
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Databases & Cloud */}
          <Card className="bg-slate-50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))] mb-6 flex items-center">
                <Database className="text-orange-500 mr-3" />
                Databases & Cloud
              </h3>
              <div className="space-y-4">
                {databases.map((db, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${db.color} rounded-full flex items-center justify-center`}>
                      <db.icon className="text-white w-4 h-4" />
                    </div>
                    <span className="text-slate-700">{db.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
