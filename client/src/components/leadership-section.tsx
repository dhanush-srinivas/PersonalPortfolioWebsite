import {
  Users,
  GraduationCap,
  Rocket,
  Briefcase,
  Lightbulb,
  Handshake,
} from "lucide-react";
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
    {
      icon: Briefcase,
      title: "Project Management Lead",
      description:
        "Oversaw simultaneous delivery of multiple client projects valued over $5M, ensuring on-time completion and 15% cost savings.",
      badges: ["Risk Mitigation", "Stakeholder Alignment", "Budget Control"],
      color: "bg-purple-500",
    },
    {
      icon: Lightbulb,
      title: "Strategic Initiatives Advisor",
      description:
        "Guided cross-departmental teams to identify growth opportunities and launch initiatives that increased market reach by 20%.",
      badges: ["Strategy", "Cross-Functional", "Data-Driven"],
      color: "bg-teal-500",
    },
    {
      icon: Handshake,
      title: "Community Outreach Liaison",
      description:
        "Built partnerships with local organizations to host quarterly tech workshops, attracting over 300 participants annually.",
      badges: ["Partnerships", "Event Planning", "Public Relations"],
      color: "bg-indigo-500",
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Leadership Experience
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((item, index) => (
            <Card key={index} className="bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="text-white w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm">{item.description}</p>
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
