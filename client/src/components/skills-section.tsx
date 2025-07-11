import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
import AnimatedSection from "@/components/animated-section";

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
    { title: "Certified Scrum Master", organization: "Scrum Alliance", image: CSMImage },
    { title: "Power BI Data Analyst", organization: "Microsoft", image: PowerBIImage },
    { title: "Project Management Professional (v2)", organization: "Google", image: GooglePMImage },
    { title: "Supply Chain Modelling & Analytics", organization: "NPTEL" },
    { title: "Project Management Job Simulation", organization: "Forage (CBRE)", image: CBREPMImage },
    { title: "Market Research Externship", organization: "National Research Group (NRG)", image: ExternshipImage },
    { title: "Marketing Automation", organization: "How to Build a Successful Campaign", image: MarketingImage },
  ];

  return (
    <AnimatedSection
      id="skills"
      className="py-20 bg-gradient-to-br from-[hsl(var(--portfolio-slate-50))] via-[hsl(var(--portfolio-primary)/0.05)] to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-8">
          Skills & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="grid grid-cols-3 gap-6 place-items-center max-w-lg mx-auto border rounded-lg p-6 h-full bg-white">
            {skillIcons.map((icon, idx) => (
              <img
                key={idx}
                src={icon}
                alt="skill"
                className="w-24 h-24 object-contain"
              />
            ))}
          </div>
          <div className="grid grid-flow-col grid-rows-4 gap-4 w-full border rounded-lg p-6 h-full md:auto-cols-fr">
            {certifications.map((cert) =>
              cert.image ? (
                <Dialog key={cert.title}>
                  <DialogTrigger asChild>
                    <Card
                      className="w-full md:w-80 bg-gradient-to-br from-white to-[hsl(var(--portfolio-slate-100))] shadow flex items-center cursor-pointer hover:shadow-xl transition-shadow"
                    >
                      <CardContent className="px-2 py-1 flex items-center space-x-4">
                        <img src={cert.image} alt={cert.title} className="w-12 h-12 object-contain" />
                        <div>
                          <h3 className="text-sm font-semibold whitespace-nowrap text-[hsl(var(--portfolio-secondary))]">
                            {cert.title}
                          </h3>
                          <p className="text-slate-600 text-xs">{cert.organization}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-xl p-0">
                    <img src={cert.image} alt={cert.title} className="w-full h-auto object-contain" />
                  </DialogContent>
                </Dialog>
              ) : (
                <Card
                  key={cert.title}
                  className="w-full md:w-80 bg-gradient-to-br from-white to-[hsl(var(--portfolio-slate-100))] shadow flex items-center"
                >
                  <CardContent className="px-2 py-1">
                    <h3 className="text-sm font-semibold whitespace-nowrap text-[hsl(var(--portfolio-secondary))]">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 text-xs">{cert.organization}</p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
