import { Play, ChevronDown } from "lucide-react";
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
// Replaced Arrow.jpg with Arrow2.png for the hero section arrow graphic
import Arrow from "@/resources/Arrow2.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-10 pb-20"
    >
      <div className="container mx-auto px-4">
        {/* Video and Pitch Section - full viewport so only this is visible initially on all screen sizes */}
        <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            className="relative lg:col-span-2"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="aspect-video bg-slate-200 rounded-xl shadow-lg overflow-hidden"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 4px hsl(var(--portfolio-primary) / 0.4)",
                y: -4,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/MNKRUlD76x0"
                title="Who am I"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Watch Pitch CTA */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.35 }}
            className="space-y-6 lg:col-span-1"
          >
            <motion.img
              src={Arrow}
              alt="Arrow pointing to the video"
              className="hidden lg:block w-32 h-auto -mb-4 lg:-ml-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, type: "spring", stiffness: 100 }}
            />
            <motion.div
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <Card className="shadow-2xl font-montserrat">
                <CardContent className="p-8 font-montserrat">
                  <h2 className="text-2xl font-bold text-[hsl(var(--portfolio-secondary))] mb-4">
                    Who am I?
                  </h2>
                  <p className="text-slate-600 mb-6 text-lg">
                    Watch this 80-second video to learn about my passion for technology, creative thinking, and what inspires me to create meaningful digital experiences
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 1.5 }}
                  >
                    <Button className="bg-[hsl(var(--portfolio-primary))] hover:bg-[hsl(var(--portfolio-primary))]/90 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Play Video
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          </div>

          {/* Scroll down indicator */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Scroll for more
            </span>
            <motion.button
              type="button"
              onClick={() => {
                document.getElementById("about-education")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="p-2 rounded-full border-2 border-slate-300 text-slate-600 hover:border-[hsl(var(--portfolio-primary))] hover:text-[hsl(var(--portfolio-primary))] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--portfolio-primary))]/50"
              aria-label="Scroll to content below"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* About Me and Education */}
        <div id="about-education" className="grid lg:grid-cols-3 gap-12 items-center">
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
                  <HoverCardContent className="w-[40rem] p-6" side="right">
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
                        <FaCogs className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Systems Engineering</span>
                      </li>
                      <li className="flex items-start">
                        <FaChartLine className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>Data Analytics</span>
                      </li>
                      <li className="flex items-start">
                        <FaProjectDiagram className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Operations Research</span>
                      </li>
                      <li className="flex items-start">
                        <FaIndustry className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Lean Manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <FaTasks className="w-4 h-4 text-pink-500 mr-2 mt-0.5" />
                        <span>Project Management (planning, budgeting, scheduling)</span>
                      </li>
                      <li className="flex items-start">
                        <FaUsers className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                        <span>Cross-functional team leadership</span>
                      </li>
                      <li className="flex items-start">
                        <FaComments className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                        <span>Stakeholder Communication</span>
                      </li>
                      <li className="flex items-start">
                        <FaDatabase className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
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
                  <HoverCardContent className="w-[40rem] p-6" side="right">
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
                        <FaTruck className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Supply Chain Management</span>
                      </li>
                      <li className="flex items-start">
                        <FaDraftingCompass className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>Facility Layout and Design</span>
                      </li>
                      <li className="flex items-start">
                        <FaUserCog className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Work Study and Ergonomics</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>Total Quality Management</span>
                      </li>
                      <li className="flex items-start">
                        <FaLaptopCode className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>CAD/CAM</span>
                      </li>
                      <li className="flex items-start">
                        <FaClipboardList className="w-4 h-4 text-pink-500 mr-2 mt-0.5" />
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
              <div className="text-slate-600 leading-relaxed mb-6 space-y-4 font-serif text-base font-medium">
                <p>Hey! I'm Dhanush. I recently completed my Master’s in Systems Engineering and Management from UT Dallas, with a background in Industrial Engineering and a strong curiosity about how things work and how they can work better.</p>
                <p>My journey so far has included building dashboards, identifying market opportunities, planning product roadmaps, managing cross-functional projects, and collaborating with teams to bring ideas to life. I love turning messy data into meaningful insights and simplifying complex problems into practical solutions.</p>
                <p>I’ve worked with tools like Power BI, SQL, and SAP, but what excites me most is the problem-solving process. Whether I’m designing a solution, tackling a challenge, or helping the team stay on track, I believe the best work happens when people feel connected, motivated, and slightly over-caffeinated. <span className="not-italic">☕️</span></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
