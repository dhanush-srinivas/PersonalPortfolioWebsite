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
import SGImage from "@/resources/Sg.jpg";
import SG1Image from "@/resources/Sg1.jpg";
import KSImage from "@/resources/KS.jpg";
import SU2Image from "@/resources/SU2.jpeg";
import IIELCImage from "@/resources/iielc.jpg";
import UandIImage from "@/resources/U&i.jpg";
import AnimatedSection from "@/components/animated-section";

export default function LeadershipSection() {
  const leadership = [
    {
      icon: Users,
      title: "At-Large Senator, UTD Student Government",
      description:
        "Elected by the student body, I served as an At-Large Senator within UTD’s Student Government, representing the broader graduate and international student community in university-wide decision-making...",
      badges: ["Advocacy", "Event Management", "Public Speaking"],
      color: "bg-[hsl(var(--portfolio-primary))]",
  // Use the alternate SG image for the card thumbnail
  logo: SG1Image,
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
      icon: Briefcase,
      title: "Team Manager, Student Union at UT Dallas",
      description:
        "Managed daily operations and event logistics for the Student Union while leading a team of student employees.",
      badges: ["Operations", "Team Leadership", "Event Coordination"],
      color: "bg-orange-500",
      logo: SU2Image,
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            Led the operational team at the UT Dallas Student Union for two years, ensuring smooth day-to-day functioning and high-quality service delivery across a range of student-focused activities.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Managed all logistical operations within the Student Union, including coordinating complex event hall setups, overseeing large-scale campus events, and supervising front-desk operations for hundreds of daily visitors.
            </li>
            <li>
              Led and coached a team of student employees across multiple shifts, ensuring real-time problem-solving, clear task delegation during peak hours, and consistent adherence to service and safety standards.
            </li>
            <li>
              Served as the escalation point for urgent issues, resolving conflicts and operational bottlenecks quickly and efficiently.
            </li>
            <li>
              Trained and onboarded new team members, reinforcing best practices for customer service, emergency preparedness, and building management procedures.
            </li>
            <li>
              Collaborated with professional staff to enhance internal workflows, streamline communication, and identify areas for continuous improvement in day-to-day operations.
            </li>
            <li>
              Maintained a high-performance team culture, emphasizing accountability, collaboration, and service excellence across all operational touchpoints.
            </li>
            <li>
              Contributed to the Student Union’s reputation as a reliable, inclusive, and well-managed campus hub for students, faculty, and visiting guests.
            </li>
          </ul>
          <img src={SU2Image} alt="Student Union operations" className="w-40 mx-auto rounded-md" />
        </div>
      ),
    },
    {
      icon: Lightbulb,
      title: "Officer, Innovation & Entrepreneurship Council",
      description:
        "Organized startup-focused programs and connected students with founders and industry mentors.",
      badges: ["Event Planning", "Startup Outreach", "Networking"],
      color: "bg-purple-500",
      logo: IIELCImage,
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            As an Officer in the Innovation & Entrepreneurship Leadership Council, I played an active role in fostering a startup-centric culture on campus by organizing events, creating opportunities for student-founders, and bridging the gap between industry and academia.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              I was part of the organizing team behind our first-ever Startup Internship Fair, which brought together 15 startups from various industries and over 100 students in a high-impact networking event. From reaching out to founders and coordinating logistics to managing day-of operations, I helped ensure a seamless, high-energy environment where students could connect directly with CEOs and startup teams.
            </li>
            <li>
              I also contributed to The Big Idea Competition (BIC), one of North Texas's most celebrated entrepreneurship events hosted by the Institute for Innovation and Entrepreneurship. I supported backstage operations, co-managed our IIE booth, and represented the council to prospective founders and attendees. I even had the opportunity to interact with several student and alumni founders and demo one of the finalist products on the spot.
            </li>
            <li>
              Beyond flagship events, I helped organize industry visits to startup offices across the Dallas area, giving students a firsthand look into the inner workings of fast-growing companies and exposing them to real-world entrepreneurial journeys.
            </li>
          </ul>
          <p>
            These experiences allowed me to collaborate with mentors, industry professionals, and fellow council members, while strengthening my ability to plan large-scale events, engage with founders, and represent the council's mission to support innovation on campus. Being at the heart of these initiatives reinforced my passion for building ecosystems that support student entrepreneurship and I hope to return one day as a founder myself.
          </p>
          <img
            src={IIELCImage}
            alt="Innovation & Entrepreneurship Council"
            className="w-40 mx-auto rounded-md"
          />
        </div>
      ),
    },
    {
      icon: Users,
      title: "Board Member, Student Leadership Council",
      description:
        "Advanced professional development and community engagement initiatives within the Student Union.",
      badges: ["Community Building", "Strategic Planning", "Mentorship"],
      color: "bg-teal-500",
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            As a Board Member of the Student Leadership Council, I contributed to fostering a values-driven, inclusive, and service-oriented culture within the UT Dallas Student Union. The Council’s mission centered on building a strong internal community while providing student staff with opportunities for leadership, communication, and personal growth.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Collaborated with fellow board members to design and implement initiatives that promoted professional development and community engagement among Student Union staff.
            </li>
            <li>
              Supported strategic planning efforts aligned with the Student Union’s mission of inclusivity, service excellence, and purposeful student employment.
            </li>
            <li>
              Helped shape programming that encouraged team-building, continuous learning, and cross-functional collaboration across various student-led departments within the Union.
            </li>
            <li>
              Served as a mentor and peer leader, encouraging a positive work environment grounded in respect, innovation, and accountability.
            </li>
          </ul>
          <p>
            This experience deepened my leadership skills and taught me how to foster community and drive impact within a diverse, mission-driven organization.
          </p>
        </div>
      ),
    },
    {
      icon: Handshake,
      title: "City Leader, U&I (non-profit) Bangalore",
      description:
        "Coordinated city-wide volunteer efforts and educational programs for underprivileged children.",
      badges: ["Non-Profit Leadership", "Volunteer Coordination", "Fundraising"],
      color: "bg-indigo-500",
      logo: UandIImage,
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            As a City Leader for U&I, a non-profit dedicated to providing education to underprivileged children, I led critical initiatives at both the center and city levels combining leadership, operational planning, and community outreach.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Supervised a team at a learning center, ensuring quality education for children through structured lessons in English and life skills, fostering both academic growth and personal confidence.
            </li>
            <li>
              Led a successful offline crowdfunding campaign, guiding my center through planning, outreach, and execution while managing attendance records and volunteer engagement to ensure transparency and smooth operations.
            </li>
            <li>
              Oversaw data operations for the entire city, coordinating volunteer schedules, tracking student progress, and improving center efficiency through streamlined planning and reporting systems.
            </li>
            <li>
              Spearheaded a city-wide volunteer recruitment campaign, leading outreach and marketing efforts that attracted passionate, qualified individuals committed to the cause. Personally supported the screening and onboarding process to ensure effective volunteer-student matches.
            </li>
            <li>
              Acted as a central liaison between the organization’s leadership, volunteers, and the communities we serve ensuring both strategic alignment and on-the-ground impact.
            </li>
          </ul>
          <p>
            This role helped me grow as a mission-driven leader, capable of balancing grassroots execution with city-level coordination, while making a tangible difference in the lives of young learners.
          </p>
          <img src={UandIImage} alt="U&I" className="w-40 mx-auto rounded-md" />
        </div>
      ),
    },
  ];

  return (
    <AnimatedSection id="leadership" className="py-20 bg-[hsl(var(--portfolio-slate-50))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Leadership Experience
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((item, index) =>
            typeof item.details !== "string" ? (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="relative bg-[hsl(var(--portfolio-slate-50))] shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 h-full cursor-pointer">
                    {"logo" in item && (
                    <img
                      src={(item as any).logo}
                      alt={`${item.title} image`}
                      className="absolute left-0 top-0 h-full w-1/2 object-cover pointer-events-none opacity-90"
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
                  <Card className="bg-[hsl(var(--portfolio-slate-50))] shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 h-full cursor-pointer">
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
    </AnimatedSection>
  );
}
