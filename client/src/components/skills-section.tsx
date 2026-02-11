import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import AnimatedSection, { staggerItemVariants, fadeInScale } from "@/components/animated-section";
import PBIIcon from "@/resources/pbi.png";
import ExcelIcon from "@/resources/excel1.png";
import JiraIcon from "@/resources/jira.png";
import ServiceNowIcon from "@/resources/servicenow2.png";
import WrikeIcon from "@/resources/wrike.png";
import SQLIcon from "@/resources/sql1.png";
import TableauIcon from "@/resources/tableau1.png";
import HTML5Icon from "@/resources/html5.png";
import SAPIcon from "@/resources/sap1.png";
import AsanaIcon from "@/resources/asana.png";
import GoogleAnalIcon from "@/resources/googleanal.png";
import FigmaIcon from "@/resources/figma1.png";
import PProIcon from "@/resources/ppro.png";
import PShopIcon from "@/resources/pshop.png";
import AEffectsIcon from "@/resources/aeffects.png";
import CSMImage from "@/resources/csm.jpg";
import PowerBIImage from "@/resources/powerbi.jpg";
import GooglePMImage from "@/resources/googlepm.jpg";
import MarketingImage from "@/resources/marketingc.jpg";
import CBREPMImage from "@/resources/cbrepm.jpg";
import ExternshipImage from "@/resources/externc.jpg";
export default function SkillsSection() {
  const skillIcons = [
    PBIIcon,
    ExcelIcon,
    JiraIcon,
    ServiceNowIcon,
    WrikeIcon,
    SQLIcon,
    TableauIcon,
    HTML5Icon,
    SAPIcon,
    AsanaIcon,
    GoogleAnalIcon,
    FigmaIcon,
    PProIcon,
    PShopIcon,
    AEffectsIcon,
  ];

  const certifications = [
    {
      title: "Certified Scrum Master",
      organization: "Scrum Alliance",
      image: CSMImage,
    },
    {
      title: "Power BI Data Analyst",
      organization: "Microsoft",
      image: PowerBIImage,
    },
    {
      title: "Project Management Professional (v2)",
      organization: "Google",
      image: GooglePMImage,
    },
    { title: "Supply Chain Modelling & Analytics", organization: "NPTEL" },
    {
      title: "Project Management Job Simulation",
      organization: "Forage (CBRE)",
      image: CBREPMImage,
    },
    {
      title: "Market Research Externship",
      organization: "National Research Group (NRG)",
      image: ExternshipImage,
    },
    {
      title: "Marketing Automation",
      organization: "How to Build a Successful Campaign",
      image: MarketingImage,
    },
    {
      title: (
        <span>
          CSPO & PMP <em>(in progress)</em>
        </span>
      ),
      organization: "",
    },
  ];

  return (
    <AnimatedSection id="skills" className="py-10" duration={1.2} staggerChildren={0.05}>
      <div className="container mx-auto px-4">
        <motion.h2
          variants={staggerItemVariants}
          className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-8"
        >
          Skills & Certifications
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <motion.div
            variants={fadeInScale}
            className="grid grid-cols-3 gap-6 place-items-center max-w-lg mx-auto border rounded-lg p-6 h-full bg-[#FEFEFE] md:col-span-1"
          >
            {skillIcons.map((icon, idx) => (
              <motion.img
                key={idx}
                variants={fadeInScale}
                custom={idx}
                src={icon}
                alt="skill"
                className="w-24 h-24 object-contain"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              />
            ))}
          </motion.div>
          <div className="grid grid-flow-col grid-rows-4 gap-4 w-full border rounded-lg p-6 h-full md:auto-cols-fr bg-[#FEFEFE] md:col-span-2">
            {certifications.map((cert, idx) =>
              cert.image ? (
                <motion.div key={idx} variants={staggerItemVariants} custom={idx}>
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                    <Card
                      className={
                        "w-full md:w-96 bg-gradient-to-br from-white to-[hsl(var(--portfolio-slate-100))] shadow flex items-center cursor-pointer"
                      }
                    >
                      <CardContent className="px-2 py-0.5 flex items-center space-x-4">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-24 h-24 object-contain"
                        />
                        <div>
                          <h3 className="text-sm font-semibold whitespace-nowrap text-[hsl(var(--portfolio-secondary))]">
                            {cert.title}
                          </h3>
                          <p className="text-slate-600 text-xs">
                            {cert.organization}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-xl p-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto object-contain"
                    />
                  </DialogContent>
                </Dialog>
                </motion.div>
              ) : (
                <motion.div key={idx} variants={staggerItemVariants} custom={idx}>
                <Card
                  className="w-full md:w-96 min-h-[7rem] bg-gradient-to-br from-white to-[hsl(var(--portfolio-slate-100))] shadow flex items-center"
                >
                  <CardContent className="px-4 py-4 flex items-center space-x-4 w-full">
                    <div className="min-w-[6rem] h-24 flex items-center justify-center rounded bg-slate-100/80 shrink-0">
                      <span className="text-2xl text-slate-400" aria-hidden>📜</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-[hsl(var(--portfolio-secondary))]">
                        {cert.title}
                      </h3>
                      <p className="text-slate-600 text-xs mt-0.5">
                        {cert.organization}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
