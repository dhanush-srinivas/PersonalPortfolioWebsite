import { Users, GraduationCap, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LeadershipSection() {
  const leadership = [
    {
      icon: Users,
      title: "Technical Team Lead",
      description: "Led a cross-functional team of 8 developers and designers to deliver a mission-critical e-commerce platform, resulting in a 40% increase in user engagement and 25% boost in conversion rates.",
      badges: ["Team Management", "Agile Methodology", "Strategic Planning"],
      color: "bg-[hsl(var(--portfolio-primary))]",
    },
    {
      icon: GraduationCap,
      title: "Mentorship Program Coordinator",
      description: "Established and coordinated a company-wide mentorship program that paired senior developers with junior team members, improving retention rates by 35% and accelerating skill development.",
      badges: ["Mentoring", "Program Development", "Talent Development"],
      color: "bg-[hsl(var(--portfolio-accent))]",
    },
    {
      icon: Rocket,
      title: "Innovation Committee Chair",
      description: "Chaired the innovation committee responsible for evaluating and implementing emerging technologies, leading to the adoption of three key technologies that improved development efficiency by 50%.",
      badges: ["Innovation", "Technology Assessment", "Change Management"],
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Leadership
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {leadership.map((item, index) => (
            <Card key={index} className="bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="text-white w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
