import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CSMImage from "@/resources/csm.jpg";
import PowerBIImage from "@/resources/powerbi.jpg";
import GooglePMImage from "@/resources/googlepm.jpg";
import MarketingImage from "@/resources/marketingc.jpg";
import CBREPMImage from "@/resources/cbrepm.jpg";
import ExternshipImage from "@/resources/externc.jpg";

export default function CertificationsSection() {
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
    {
      title: "Marketing Automation",
      organization: "How to Build a Successful Campaign",
      image: MarketingImage,
    },
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
      title: "Supply Chain Modelling & Analytics",
      organization: "NPTEL",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Certifications
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) =>
            cert.image ? (
              <Dialog key={cert.title}>
                <DialogTrigger asChild>
                  <Card className="relative bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <CardContent className="relative p-8 text-center flex flex-col items-center justify-center h-full">
                      <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{cert.organization}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-md p-0">
                  <img src={cert.image} alt={cert.title} className="w-full h-auto object-contain" />
                </DialogContent>
              </Dialog>
            ) : (
              <Card key={cert.title} className="bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{cert.organization}</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
