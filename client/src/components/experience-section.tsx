import { Briefcase, Code, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: Briefcase,
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      color: "bg-[hsl(var(--portfolio-primary))]",
      achievements: [
        "Lead development of microservices architecture serving 1M+ users",
        "Mentored 5 junior developers and established coding standards",
        "Improved application performance by 40% through optimization",
      ],
      technologies: ["React", "Node.js", "AWS"],
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      company: "InnovateLabs",
      period: "2019 - 2021",
      color: "bg-[hsl(var(--portfolio-accent))]",
      achievements: [
        "Developed and maintained 15+ web applications using React and Python",
        "Collaborated with design team to implement responsive UI/UX",
        "Integrated third-party APIs and payment gateways",
      ],
      technologies: ["Vue.js", "Python", "Django"],
    },
    {
      icon: Laptop,
      title: "Junior Developer",
      company: "StartupHub",
      period: "2018 - 2019",
      color: "bg-orange-500",
      achievements: [
        "Built responsive web applications using HTML, CSS, and JavaScript",
        "Participated in code reviews and agile development processes",
        "Contributed to open-source projects and internal tools",
      ],
      technologies: ["JavaScript", "HTML/CSS", "jQuery"],
    },
  ];

  return (
    <AnimatedSection id="experience" className="py-20 bg-[hsl(var(--portfolio-slate-50))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  <div className={`w-16 h-16 ${exp.color} rounded-full flex items-center justify-center flex-shrink-0 relative z-10`}>
                    <exp.icon className="text-white w-8 h-8" />
                  </div>
                  <Card className="shadow-lg flex-1">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))]">
                            {exp.title}
                          </h3>
                          <p className="font-medium" style={{ color: exp.color.replace('bg-', '').replace('[hsl(var(--portfolio-', 'hsl(var(--portfolio-').replace('))]', '))') }}>
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-slate-500 text-sm">{exp.period}</span>
                      </div>
                      <ul className="text-slate-600 space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
