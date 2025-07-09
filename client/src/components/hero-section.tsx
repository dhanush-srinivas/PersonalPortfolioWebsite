import { Play } from "lucide-react";
import {
  FaCogs,
  FaChartLine,
  FaProjectDiagram,
  FaIndustry,
  FaTasks,
  FaUsers,
  FaComments,
  FaDatabase,
  FaTruck,
  FaDraftingCompass,
  FaUserCog,
  FaCheckCircle,
  FaLaptopCode,
  FaClipboardList,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import UTDLogo from "@/resources/UTD.png";
import VTULogo from "@/resources/VTU.png";

export default function HeroSection() {
  return (
    <section className="pt-10 pb-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Video and Pitch Section */}
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Video Embed */}
          <div className="relative lg:col-span-2">
            <div className="aspect-video bg-slate-200 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-[hsl(var(--portfolio-primary))]/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/MNKRUlD76x0"
                title="Who am I"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Watch Pitch CTA */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="shadow-lg font-montserrat">
              <CardContent className="p-8" style={{ fontFamily: "Georgia, serif" }}>
                <h2 className="text-2xl font-bold text-[hsl(var(--portfolio-secondary))] mb-4">
                  Who am I?
                </h2>
                <p className="text-slate-600 mb-6 text-lg">
                  Watch this 80-second video to learn about my passion for technology, creative thinking, and what inspires me to create meaningful digital experiences
                </p>
                <Button className="bg-[hsl(var(--portfolio-primary))] hover:bg-[hsl(var(--portfolio-primary))]/90 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Play Video
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* About Me and Education */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Education */}
          <Card className="shadow-lg lg:col-span-1 justify-self-center self-center font-montserrat lg:max-w-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--portfolio-secondary))] mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="border-l-4 border-[hsl(var(--portfolio-primary))] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                      <CardContent className="pl-6 py-4 flex items-start">
                        <img src={UTDLogo} alt="UT Dallas" className="w-10 h-10 mr-3 object-contain" />
                        <div>
                          <h4 className="font-semibold text-lg text-[hsl(var(--portfolio-secondary))]">
                            MS in Systems Engineering &amp; Management
                          </h4>
                          <p className="text-slate-600 font-medium">University of Texas at Dallas</p>
                          <p className="text-slate-500 text-sm">2023 - 2025</p>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[32rem]" side="right">
                    <div className="flex items-start mb-2">
                      <img src={UTDLogo} alt="UT Dallas" className="w-10 h-10 mr-3 object-contain" />
                      <div>
                        <h4 className="font-semibold text-xl text-[hsl(var(--portfolio-secondary))]">
                          MS in Systems Engineering &amp; Management
                        </h4>
                        <p className="text-slate-600 font-medium text-lg">University of Texas at Dallas</p>
                        <p className="text-slate-500 text-base">2023 - 2025</p>
                      </div>
                    </div>
                    <h5 className="font-semibold mb-1 text-[hsl(var(--portfolio-secondary))]">Coursework and Skills</h5>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-600">
                      <li className="flex items-start">
                        <FaCogs className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Systems Engineering</span>
                      </li>
                      <li className="flex items-start">
                        <FaChartLine className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Data Analytics</span>
                      </li>
                      <li className="flex items-start">
                        <FaProjectDiagram className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Operations Research</span>
                      </li>
                      <li className="flex items-start">
                        <FaIndustry className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Lean Manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <FaTasks className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Project Management (planning, budgeting, scheduling)</span>
                      </li>
                      <li className="flex items-start">
                        <FaUsers className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Cross-functional team leadership</span>
                      </li>
                      <li className="flex items-start">
                        <FaComments className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Stakeholder Communication</span>
                      </li>
                      <li className="flex items-start">
                        <FaDatabase className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>SAP</span>
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="border-l-4 border-[hsl(var(--portfolio-accent))] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                      <CardContent className="pl-6 py-4 flex items-start">
                        <img src={VTULogo} alt="VTU" className="w-10 h-10 mr-3 object-contain" />
                        <div>
                          <h4 className="font-semibold text-lg text-[hsl(var(--portfolio-secondary))]">
                            BE in Industrial Engineering &amp; Management
                          </h4>
                          <p className="text-slate-600 font-medium">Visvesvaraya Technological University (VTU)</p>
                          <p className="text-slate-500 text-sm">2017 - 2021</p>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[32rem]" side="right">
                    <div className="flex items-start mb-2">
                      <img src={VTULogo} alt="VTU" className="w-10 h-10 mr-3 object-contain" />
                      <div>
                        <h4 className="font-semibold text-xl text-[hsl(var(--portfolio-secondary))]">
                          BE in Industrial Engineering &amp; Management
                        </h4>
                        <p className="text-slate-600 font-medium text-lg">Visvesvaraya Technological University (VTU)</p>
                        <p className="text-slate-500 text-base">2017 - 2021</p>
                      </div>
                    </div>
                    <h5 className="font-semibold mb-1 text-[hsl(var(--portfolio-secondary))]">Coursework and Skills</h5>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-600">
                      <li className="flex items-start">
                        <FaTruck className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Supply Chain Management</span>
                      </li>
                      <li className="flex items-start">
                        <FaDraftingCompass className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Facility Layout and Design</span>
                      </li>
                      <li className="flex items-start">
                        <FaUserCog className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Work Study and Ergonomics</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Total Quality Management</span>
                      </li>
                      <li className="flex items-start">
                        <FaLaptopCode className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>CAD/CAM</span>
                      </li>
                      <li className="flex items-start">
                        <FaClipboardList className="w-4 h-4 text-[hsl(var(--portfolio-primary))] mr-2 mt-0.5" />
                        <span>Production Planning and Control</span>
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </CardContent>
          </Card>

          {/* About Me */}
          <Card className="shadow-lg lg:col-span-2 order-2 font-montserrat w-full lg:max-w-none mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-[hsl(var(--portfolio-secondary))] mb-4">
                About Me
              </h3>
              <div className="text-slate-600 leading-relaxed mb-6 space-y-4 font-serif text-base italic font-medium">
                <p>Hey! I'm Dhanush. I recently completed my Master’s in Systems Engineering and Management from UT Dallas, with a background in Industrial Engineering and a strong curiosity about how things work and how they can work better.</p>
                <p>My journey so far has included building dashboards, identifying market opportunities, planning product roadmaps, managing cross-functional projects, and collaborating with teams to bring ideas to life. I love turning messy data into meaningful insights and simplifying complex problems into practical solutions.</p>
                <p>I’ve worked with tools like Power BI, SQL, and SAP, but what excites me most is the problem-solving process. Whether I’m designing a solution, tackling a challenge, or helping the team stay on track, I believe the best work happens when people feel connected, motivated, and slightly over-caffeinated.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
