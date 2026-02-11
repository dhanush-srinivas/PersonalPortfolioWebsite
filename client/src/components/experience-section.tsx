import { Briefcase, Code, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection, { staggerItemVariants } from "@/components/animated-section";
import { motion } from "framer-motion";
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
      logo: CognizantLogo,
      title: "Summer Intern",
      company: "Cognizant",
      period: "May 2021 - Aug 2021",
      color: "bg-[hsl(var(--portfolio-accent))]",
      splitAchievements: true,
      achievementsColumns: 2,
      achievements: [
        "Service delivery roadmap",
        "Dashboards",
        "Product tracking",
        "Stakeholder interaction",
        "Defining KPIs",
        "SAP Analytics Cloud (SAC)",
      ],
      technologies: [],
    },
    {
      icon: Laptop,
      title: "Project Intern",
      company: "Aviyana Ventures LTD.",
      period: "Jul 2020 - Aug 2020",
      color: "bg-orange-500",
      inlineAchievements: true,
      achievements: [
        "CRM trend analysis",
        "Campaign optimization",
        "Structured data capturing",
      ],
      technologies: [],
    },
  ];

  return (
    <AnimatedSection
      id="experience"
      className="py-10"
      duration={1.2}
      staggerChildren={0.12}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={staggerItemVariants}
          className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={staggerItemVariants}
                  custom={index}
                  className="relative flex items-start space-x-8"
                >
                  <motion.div
                    className={`w-16 h-16 ${exp.color} rounded-full flex items-center justify-center flex-shrink-0 relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <exp.icon className="text-white w-8 h-8" />
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="flex-1"
                  >
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
                        <div
                          className={`grid ${
                            exp.achievementsColumns === 2 ? "grid-cols-2" : "grid-cols-3"
                          } gap-x-8 mb-4`}
                        >
                          {[...Array(exp.achievementsColumns || 3)].map((_, col) => (
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
                      ) : exp.inlineAchievements ? (
                        <ul className="text-slate-600 flex flex-wrap gap-x-8 mb-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
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
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
