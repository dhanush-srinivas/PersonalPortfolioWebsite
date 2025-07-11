import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PBIIcon from "@/resources/pbi.png";
import ExcelIcon from "@/resources/excel.png";
import JiraIcon from "@/resources/jira.png";
import ServiceNowIcon from "@/resources/servicenow1.png";
import WrikeIcon from "@/resources/wrike.png";
import SQLIcon from "@/resources/sql.png";
import TableauIcon from "@/resources/tableau.png";
import HTML5Icon from "@/resources/html5.png";
import SAPIcon from "@/resources/sap.png";
import AsanaIcon from "@/resources/asana.png";
import GoogleAnalIcon from "@/resources/googleanal.png";
import FigmaIcon from "@/resources/figma.png";
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
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="grid grid-cols-3 gap-4 place-items-center max-w-md mx-auto border rounded-lg p-4 h-full">
            {skillIcons.map((icon, idx) => (
              <img
                key={idx}
                src={icon}
                alt="skill"
                className="w-20 h-20 object-contain"
              />
            ))}
          </div>
          <div className="grid grid-flow-col grid-rows-4 gap-4 max-w-md mx-auto border rounded-lg p-4 h-full">
            {certifications.map((cert) =>
              cert.image ? (
                <Dialog key={cert.title}>
                  <DialogTrigger asChild>
                    <Card className="bg-slate-50 shadow flex items-center cursor-pointer hover:shadow-xl transition-shadow">
                      <CardContent className="p-2 flex items-center space-x-2">
                        <img src={cert.image} alt={cert.title} className="w-10 h-10 object-contain" />
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
                  <CardContent className="p-2">
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
