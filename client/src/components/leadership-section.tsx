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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import SGLogo from "@/resources/SG_logo.png";
import SGImage from "@/resources/Sg.jpg";

export default function LeadershipSection() {
  const leadership = [
    {
      icon: Users,
      title: "At-Large Senator, UTD Student Government",
      description:
        "Represented graduate and international students in university-wide policy discussions and programming initiatives.",
      badges: ["Advocacy", "Event Management", "Public Speaking"],
      color: "bg-[hsl(var(--portfolio-primary))]",
      logo: SGLogo,
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            Elected by the student body, I served as an At-Large Senator within
            UTD’s Student Government, representing the broader graduate and
            international student community in university-wide decision-making.
            In this role, I actively contributed to discussions on campus-wide
            policies, budget allocations, and strategic initiatives aimed at
            improving the student experience.
          </p>
          <p>
            One of my most meaningful contributions was organizing the
            “Understanding Health Insurance for International Students” event,
            in collaboration with the Graduate and International Affairs
            Committee. Recognizing the confusion many international students
            face when navigating the U.S. healthcare system, I led the planning
            and execution of this educational event, partnering with
            Intercultural Programs, the Student Health Center, Campus Emergency
            Medical Response, and the Academic Health Plan. The session
            successfully demystified complex insurance concepts and empowered
            students to make informed health decisions during their time in the
            U.S.
          </p>
          <p>
            As a senator, I also learned how to confidently pitch ideas,
            present suggestions, and advocate for student concerns in front of
            the full senate. Through frequent speaking opportunities and
            committee meetings, I developed the ability to communicate clearly,
            think strategically under pressure, and influence positive outcomes
            through collaboration.
          </p>
          <p>
            This experience not only strengthened my leadership and event
            management skills but also deepened my understanding of student
            governance, policy-making, and effective public speaking in formal
            environments.
          </p>
          <img src={SGImage} alt="Student Government" className="w-24 mx-auto rounded-md" />
        </div>
      ),
    },
    {
      icon: GraduationCap,
      title: "Mentorship Program Coordinator",
      description: "Established and coordinated a company-wide mentorship program that paired senior developers with junior team members, improving retention rates by 35% and accelerating skill development.",
      badges: ["Mentoring", "Program Development", "Talent Development"],
      color: "bg-[hsl(var(--portfolio-accent))]",
      details: "Created onboarding resources and ran monthly check-ins, pairing 20+ juniors with mentors across departments.",
    },
    {
      icon: Rocket,
      title: "Innovation Committee Chair",
      description: "Chaired the innovation committee responsible for evaluating and implementing emerging technologies, leading to the adoption of three key technologies that improved development efficiency by 50%.",
      badges: ["Innovation", "Technology Assessment", "Change Management"],
      color: "bg-orange-500",
      details: "Facilitated quarterly hackathons and curated a tech radar that guided adoption of cloud tooling and CI/CD pipelines.",
    },
    {
      icon: Briefcase,
      title: "Project Management Lead",
      description:
        "Oversaw simultaneous delivery of multiple client projects valued over $5M, ensuring on-time completion and 15% cost savings.",
      badges: ["Risk Mitigation", "Stakeholder Alignment", "Budget Control"],
      color: "bg-purple-500",
      details: "Implemented risk dashboards and weekly stakeholder syncs to keep five concurrent projects on track and under budget.",
    },
    {
      icon: Lightbulb,
      title: "Strategic Initiatives Advisor",
      description:
        "Guided cross-departmental teams to identify growth opportunities and launch initiatives that increased market reach by 20%.",
      badges: ["Strategy", "Cross-Functional", "Data-Driven"],
      color: "bg-teal-500",
      details: "Analyzed market trends and presented quarterly reports that shaped product expansion into two new verticals.",
    },
    {
      icon: Handshake,
      title: "Community Outreach Liaison",
      description:
        "Built partnerships with local organizations to host quarterly tech workshops, attracting over 300 participants annually.",
      badges: ["Partnerships", "Event Planning", "Public Relations"],
      color: "bg-indigo-500",
      details: "Negotiated sponsorships and coordinated volunteers to deliver hands-on sessions for students and professionals.",
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Leadership Experience
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((item, index) =>
            index === 0 ? (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="relative bg-slate-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 h-full cursor-pointer">
                    {"logo" in item && (
                      <img
                        src={(item as any).logo}
                        alt="SG logo"
                        className="absolute left-0 top-0 h-full w-1/2 object-contain pointer-events-none opacity-90"
                        style={{
                          WebkitMaskImage:
                            "linear-gradient(to right, black 0%, black 70%, transparent 100%)",
                          maskImage:
                            "linear-gradient(to right, black 0%, black 70%, transparent 100%)",
                        }}
                      />
                    )}
                    <CardContent className="relative p-6">
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
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-4xl h-[95vh] overflow-y-auto p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  {item.details}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="bg-slate-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 h-full cursor-pointer">
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
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-md p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{item.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )
          )}
        </div>
      </div>
    </section>
  );
}
