import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PBIIcon from "@/resources/skills/pbi.svg";
import ExcelIcon from "@/resources/skills/excel.svg";
import JiraIcon from "@/resources/skills/jira.svg";
import ServiceNowIcon from "@/resources/skills/servicenow.svg";
import WrikeIcon from "@/resources/skills/wrike.svg";
import SQLIcon from "@/resources/skills/sql.svg";
import TableauIcon from "@/resources/skills/tableau.svg";
import HTML5Icon from "@/resources/skills/html5.svg";
import SAPIcon from "@/resources/skills/sap.svg";
import AsanaIcon from "@/resources/skills/asana.svg";
import GoogleAnalIcon from "@/resources/skills/googleanal.svg";
import FigmaIcon from "@/resources/skills/figma.svg";
import Wrike2Icon from "@/resources/skills/wrike2.svg";
import PProIcon from "@/resources/skills/ppro.svg";
import PShopIcon from "@/resources/skills/pshop.svg";
import AEffectsIcon from "@/resources/skills/aeffects.svg";
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
    Wrike2Icon,
    PProIcon,
    PShopIcon,
    AEffectsIcon,
  ];

  const certifications = [
    { title: "Certified Scrum Master", organization: "Scrum Alliance", image: CSMImage },
    { title: "Power BI Data Analyst", organization: "Microsoft", image: PowerBIImage },
    { title: "Project Management Professional (v2)", organization: "Google", image: GooglePMImage },
    { title: "Marketing Automation", organization: "How to Build a Successful Campaign", image: MarketingImage },
    { title: "Project Management Job Simulation", organization: "Forage (CBRE)", image: CBREPMImage },
    { title: "Market Research Externship", organization: "National Research Group (NRG)", image: ExternshipImage },
    { title: "Supply Chain Modelling & Analytics", organization: "NPTEL" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Skills & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-wrap justify-center max-w-md mx-auto">
            {skillIcons.map((icon, idx) => (
              <div
                key={idx}
                className={`w-20 h-20 m-2 ${idx % 2 ? "mt-6" : ""}`}
              >
                <img src={icon} alt="skill" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {certifications.map((cert) =>
              cert.image ? (
                <Dialog key={cert.title}>
                  <DialogTrigger asChild>
                    <Card className="bg-slate-50 shadow flex items-center cursor-pointer hover:shadow-xl transition-shadow">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <img src={cert.image} alt={cert.title} className="w-12 h-12 object-contain" />
                        <div>
                          <h3 className="text-sm font-semibold text-[hsl(var(--portfolio-secondary))]">
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
                <Card key={cert.title} className="bg-slate-50 shadow flex items-center">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-semibold text-[hsl(var(--portfolio-secondary))]">
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
    </section>
  );
}
