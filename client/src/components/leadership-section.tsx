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
import KSImage from "@/resources/KS.jpg";

export default function LeadershipSection() {
  const leadership = [
    {
      icon: Users,
      title: "At-Large Senator, UTD Student Government",
      description:
        "Elected by the student body, I served as an At-Large Senator within UTD’s Student Government, representing the broader graduate and international student community in university-wide decision-making...",
      badges: ["Advocacy", "Event Management", "Public Speaking"],
      color: "bg-[hsl(var(--portfolio-primary))]",
      logo: SGLogo,
      details: (
        <div className="space-y-4 text-sm text-left">
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
          <img src={SGImage} alt="Student Government" className="w-40 mx-auto rounded-md" />
        </div>
      ),
    },
    {
      icon: GraduationCap,
      title: "President, Cultural Club at UT Dallas",
      description:
        "Led the Cultural Club representing over 200 international students and organized community outreach and cultural events.",
      badges: ["Leadership", "Community Building", "Event Planning"],
      color: "bg-[hsl(var(--portfolio-accent))]",
      logo: KSImage,
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            I was elected President of the Cultural Club in recognition of my
            contributions to community engagement and outreach. The club
            represented over 200 students from my home country and served as a
            cultural and support hub for international students on campus. As
            President, I led a wide range of impactful initiatives, both
            operational and community-focused:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Led a diverse team of undergraduate and graduate student
              volunteers in organizing cultural, nonprofit, and social events,
              fostering teamwork and accountability across multiple committees.
            </li>
            <li>
              Acted as a key liaison between international students and local
              communities, helping students integrate, access resources, and
              find a sense of belonging in a multicultural campus environment.
            </li>
            <li>
              Planned and executed community-driven nonprofit initiatives,
              including a campus-wide blood donation drive and fundraising
              campaigns for charitable organizations beyond UTD.
            </li>
            <li>
              Organized an immigration-focused Q&A session featuring a top
              Indian immigration attorney, where students received clarity on
              F-1 visa rules, OPT/CPT, and long-term immigration concerns.
            </li>
            <li>
              Drove digital engagement by creating social media content that
              went viral within the South Asian student community, positively
              boosting the visibility of both the club and UTD. Many incoming
              students cited our content as a deciding factor in choosing UTD.
            </li>
            <li>
              Provided direct guidance to dozens of prospective students
              navigating the application and admissions process, often serving
              as their first point of contact and ongoing mentor.
            </li>
            <li>
              Led the club’s signature on-campus food initiatives, distributing
              high-quality Indian meals for free at cultural festivals—an effort
              that became widely recognized and eagerly anticipated by students
              across campus.
            </li>
            <li>
              Promoted cultural unity by organizing large-scale cultural events
              and celebrations, ensuring that international students felt
              welcomed, valued, and represented in the campus community.
            </li>
            <li>
              Coordinated logistics for a major community event in Richmond,
              VA, hosting over 10,000 attendees over three days. I led a team of
              volunteers from UTD to manage event flow, guest coordination, and
              operational support.
            </li>
          </ul>
          <img src={KSImage} alt="Cultural Club" className="w-40 mx-auto rounded-md" />
        </div>
      ),
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
            typeof item.details !== "string" ? (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="relative bg-slate-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 h-full cursor-pointer">
                    {"logo" in item && (
                      <img
                        src={(item as any).logo}
                        alt={`${item.title} image`}
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
                      <div className="inline-flex items-start space-x-4 bg-white/80 rounded p-2 w-fit">
                        <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="text-white w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 mb-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute right-4 bottom-4 flex flex-wrap gap-2">
                        {item.badges.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-4xl h-[95vh] overflow-y-auto p-6">
                  <div className="flex items-start space-x-4 mb-2">
                    <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                        {item.title}
                      </h3>
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
                          <p className="text-slate-600 mb-2 text-sm">{item.description}</p>
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
                  <div className="flex items-start space-x-4 mb-2">
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
                  <p className="text-slate-600 text-sm mb-2">{item.details}</p>
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
