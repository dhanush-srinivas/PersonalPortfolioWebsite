import { Briefcase, Code, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";
import CognizantLogo from "@/resources/cognizant.jpg";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: Briefcase,
      logo: CognizantLogo,
      title: (
        <span>
          Associate Project Manager (<em>Product-focused</em>)
        </span>
      ),
      company: "Cognizant",
      period: "Sep 2021 - Jul 2023",
      color: "bg-[hsl(var(--portfolio-primary))]",
      splitAchievements: true,
      achievements: [
        "SAP",
        "ServiceNow",
        "Data Analytics",
        "Excel",
        "Power BI",
        "Make-to-Order",
        "Demand forecasting",
        "Material flow",
        "Warehouse capacity",
      ],
      technologies: [],
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
    <AnimatedSection
      id="experience"
      className="py-10"
      duration={1.2}
    >
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
                  <Card className="shadow-lg flex-1 bg-[#FEFEFE]">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start space-x-4">
                          {"logo" in exp && (
                            <img
                              src={(exp as any).logo}
                              alt={`${exp.company} logo`}
                              className="w-12 h-12 object-contain rounded-md"
                            />
                          )}
                          <div>
                            <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))]">
                              {exp.title}
                            </h3>
                            <p className="font-medium" style={{ color: exp.color.replace('bg-', '').replace('[hsl(var(--portfolio-', 'hsl(var(--portfolio-').replace('))]', '))') }}>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <span className="text-slate-500 text-sm">{exp.period}</span>
                      </div>
                      {exp.splitAchievements ? (
                        <div className="grid grid-cols-3 gap-x-8 mb-4">
                          {[0, 1, 2].map((col) => (
                            <ul key={col} className="text-slate-600 space-y-2">
                              {exp.achievements
                                .slice(col * 3, col * 3 + 3)
                                .map((achievement, achIndex) => (
                                  <li key={achIndex} className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    {achievement}
                                  </li>
                                ))}
                            </ul>
                          ))}
                        </div>
                      ) : (
                        <ul className="text-slate-600 space-y-2 mb-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
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
