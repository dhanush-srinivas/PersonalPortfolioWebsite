import { Cloud, Shield, Database, Brain, Layers, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CertificationsSection() {
  const certifications = [
    {
      icon: Cloud,
      title: "AWS Solutions Architect",
      organization: "Amazon Web Services",
      validUntil: "Dec 2024",
      color: "bg-blue-500",
    },
    {
      icon: Cloud,
      title: "Google Cloud Professional",
      organization: "Google Cloud Platform",
      validUntil: "Aug 2024",
      color: "bg-orange-500",
    },
    {
      icon: Shield,
      title: "Certified Ethical Hacker",
      organization: "EC-Council",
      validUntil: "Mar 2025",
      color: "bg-green-500",
    },
    {
      icon: Layers,
      title: "Scrum Master Certified",
      organization: "Scrum Alliance",
      validUntil: "Jun 2024",
      color: "bg-purple-500",
    },
    {
      icon: Database,
      title: "MongoDB Developer",
      organization: "MongoDB University",
      validUntil: "Nov 2024",
      color: "bg-red-500",
    },
    {
      icon: Brain,
      title: "Machine Learning Engineer",
      organization: "Coursera & DeepLearning.AI",
      validUntil: "Sep 2024",
      color: "bg-teal-500",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <cert.icon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                  {cert.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{cert.organization}</p>
                <p className="text-xs text-slate-500">Valid until: {cert.validUntil}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
