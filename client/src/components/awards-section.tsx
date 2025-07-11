import { Trophy, Medal, Star, Award, Code, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";

export default function AwardsSection() {
  const awards = [
    {
      icon: Trophy,
      title: "Developer of the Year",
      organization: "TechCorp Excellence Awards 2023",
      description: "Recognized for outstanding technical contributions and leadership in digital transformation initiatives.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Medal,
      title: "Innovation Excellence",
      organization: "Silicon Valley Tech Awards 2022",
      description: "Awarded for developing an AI-powered solution that revolutionized customer service automation.",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: Star,
      title: "Best Mobile App",
      organization: "App Store Awards 2022",
      description: "Lead developer for \"EcoTrack\" - a sustainability app with over 100K downloads and 4.8-star rating.",
      gradient: "from-green-400 to-teal-500",
    },
    {
      icon: Award,
      title: "Outstanding Leadership",
      organization: "IEEE Computer Society 2021",
      description: "Recognized for exceptional leadership in mentoring junior developers and promoting best practices.",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Code,
      title: "Hackathon Champion",
      organization: "Global Code Challenge 2021",
      description: "First place winner in 48-hour hackathon with a team of 4, developing a healthcare accessibility platform.",
      gradient: "from-indigo-400 to-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      organization: "Stanford University 2020",
      description: "Magna Cum Laude graduate with highest honors in Computer Science thesis on distributed systems.",
      gradient: "from-purple-400 to-indigo-500",
    },
  ];

  return (
    <AnimatedSection
      id="awards"
      className="py-20 bg-gradient-to-br from-[hsl(var(--portfolio-slate-50))] via-[hsl(var(--portfolio-primary)/0.05)] to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${award.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <award.icon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                  {award.title}
                </h3>
                <p className="text-slate-600 mb-4">{award.organization}</p>
                <p className="text-sm text-slate-500">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
