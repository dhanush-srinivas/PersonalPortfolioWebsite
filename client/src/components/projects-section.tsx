import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PrinterImage from "@/resources/3DPrinter.jpg";

export default function ProjectsSection() {
  const projects = [
    {
      title: "System Architecture & Product Strategy for a 3D Printer Leasing Platform",
      description:
        "Built a B2B leasing-as-a-service platform for industrial 3D printers, enabling small manufacturers to adopt advanced tech without upfront costs.",
      image: PrinterImage,
      technologies: [
        "Role : Product Manager",
        "Tools: Figma, Lucidchart, Excel, Python, SQL , Miro, Notion, Google Slides",
      ],
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            <strong>📍Situation:</strong> Industrial 3D printing is
            revolutionizing manufacturing, yet most small and mid-sized
            businesses lack the capital and infrastructure to adopt this
            technology. Recognizing this gap, our team proposed a B2B
            leasing-as-a-service model for 3D printers that could reduce upfront
            costs and offer a scalable, maintenance-friendly deployment.
          </p>
          <p>
            <strong>🎯Task:</strong> As the Product Manager, I was responsible
            for driving the end-to-end product strategy. From identifying market
            needs and defining product vision to designing the system
            architecture and pitching the solution to potential investors. The
            key objectives were to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Develop a modular, scalable system that supports leasing, printer
              monitoring, and automated billing.
            </li>
            <li>
              Create a risk-adjusted pricing strategy that could adapt to usage
              tiers, machine types, and maintenance schedules.
            </li>
            <li>
              Validate business feasibility and adoption likelihood through MVP
              testing and stakeholder interviews.
            </li>
          </ul>
          <p>
            <strong>⚙️ Action:</strong>
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <strong>User & Market Research:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Conducted 10+ interviews with stakeholders including small
                  manufacturers, logistics managers, and tech leads to
                  understand pain points in adopting 3D printing.
                </li>
                <li>
                  Identified key drivers: upfront hardware cost, machine
                  downtime risk, and supply chain inflexibility.
                </li>
                <li>
                  Used findings to develop 3 core user personas (SME owner,
                  Plant Manager, Procurement Officer).
                </li>
              </ul>
            </li>
            <li>
              <strong>System Architecture Design:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Collaborated with technical leads to design a
                  microservices-based architecture, where leasing, telemetry,
                  maintenance, and billing were separate yet interlinked
                  modules.
                </li>
                <li>
                  Designed architecture in Lucidchart, mapping out APIs between
                  services like Lease Management, Telemetry, Predictive
                  Maintenance, and Billing engines.
                </li>
              </ul>
            </li>
            <li>
              <strong>Product Roadmap & MVP Planning:</strong> Used the MoSCoW
              method to prioritize features for the MVP and created a 6-month
              roadmap detailing sprints for backend infrastructure, UI
              prototyping, and testing.
            </li>
            <li>
              <strong>Pricing & Risk Simulation:</strong> Modeled various
              pricing strategies using Excel and Monte Carlo simulations and
              developed three-tier pricing with risk buffers for servicing and
              parts cost.
            </li>
            <li>
              <strong>UI/UX and Frontend Prototyping:</strong> Used Figma to
              wireframe dashboards for usage tracking, maintenance scheduling,
              and billing.
            </li>
            <li>
              <strong>Investor Pitch & Feedback Loop:</strong> Created a pitch
              deck with market sizing, architecture overview, and revenue
              projections. Presented to UTD alumni startup founders and received
              strong validation.
            </li>
          </ol>
          <p>
            <strong>📈 Result:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Delivered a fully documented architecture and MVP plan that
              improved integration efficiency by 20%.
            </li>
            <li>
              Increased platform adoption feasibility by 20%, backed by
              simulated pricing and stakeholder feedback.
            </li>
            <li>
              Received verbal investment interest and validation from business
              leaders during pitch day.
            </li>
            <li>
              Ranked among the top 3 concepts in our incubator cohort based on
              scalability and innovation.
            </li>
          </ul>
          <p>
            <strong>🧠 Skills & Tools Used:</strong> Product Strategy · System
            Architecture · B2B SaaS · MVP Design · Pricing Models · Simulation
            Modeling · Stakeholder Interviews · Agile Planning · Figma ·
            Lucidchart · Notion · SQL · Excel · Python (mock API testing)
          </p>
        </div>
      ),
    },
    {
      title: "EcoTrack Mobile App",
      description: "A sustainability tracking app that helps users monitor their carbon footprint, set environmental goals, and connect with eco-friendly communities.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "Redux", "Maps API"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "AI Customer Service Bot",
      description: "An intelligent chatbot system that uses natural language processing to provide automated customer support with 95% accuracy rate.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Blockchain Supply Chain",
      description: "A decentralized supply chain management system using blockchain technology to ensure transparency and traceability of products from origin to consumer.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) =>
            project.details ? (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))] mb-4">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm">Read more</Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="w-[95vw] h-[95vh] p-0">
                  <div className="flex flex-col md:flex-row h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover md:w-1/2 h-40 md:h-full"
                    />
                    <div className="p-6 overflow-y-auto md:w-1/2">
                      {project.details}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.demo} className="flex items-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} className="flex items-center">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
