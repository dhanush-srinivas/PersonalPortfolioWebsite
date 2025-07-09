import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PrinterImage from "@/resources/new3DPrinter.jpg";
import NRGImage from "@/resources/NRG.jpg";
import ClothingImage from "@/resources/Clothing.jpg";
import type { ReactNode } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  role?: string;
  tools?: string;
  technologies?: string[];
  links?: {
    demo: string;
    github: string;
  };
  details?: ReactNode;
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "System Architecture & Product Strategy for a 3D Printer Leasing Platform",
      description:
        "Built a B2B leasing-as-a-service platform for industrial 3D printers, enabling small manufacturers to adopt advanced tech without upfront costs.",
      image: PrinterImage,
      role: "Product Manager",
      tools:
        "Figma, Lucidchart, Excel, Python, SQL, Miro, Notion, Google Slides",
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
      title:
        "Market Research & Strategic Engagement Framework – National Research Group",
      description:
        "Led a market research initiative for the National Research Group to map the policy influencer landscape and uncover community impact trends.",
      image: NRGImage,
      role: "Product & Market Research Lead (Externship)",
      tools:
        "Excel, Qualtrics, PowerPoint, Google Trends, Miro, Figma (infographics), LinkedIn Sales Navigator",
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            <strong>📍 Situation:</strong> The National Research Group (NRG)
            sought to understand how community-focused policies are shaped and
            influenced in real-world decision-making. With shifting public
            narratives and increased focus on social impact, there was a
            critical need to map the policy influence landscape and identify key
            voices shaping perception and adoption.
          </p>
          <p>
            <strong>🎯 Task:</strong> As an extern and team lead, I was
            responsible for leading a strategic market research initiative that
            analyzed the influence ecosystem around policy-driven community
            initiatives. My objectives were to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Identify and profile key policy influencers using both qualitative
              and quantitative research.
            </li>
            <li>
              Analyze content trends, community sentiment, and engagement
              patterns to recommend targeted outreach strategies.
            </li>
            <li>
              Translate research findings into actionable insights for senior
              stakeholders to inform product-aligned policy engagement.
            </li>
          </ul>
          <p>
            <strong>⚙️ Action</strong>
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <strong>Research Strategy Design & Team Management:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Led a team of 4 analysts, delegating research streams (quant,
                  qual, and competitive) and synchronizing weekly check-ins via
                  agile boards.
                </li>
                <li>
                  Defined key research pillars: policy influence mapping, trend
                  forecasting, community sentiment, and strategic alignment.
                </li>
              </ul>
            </li>
            <li>
              <strong>Qualitative & Quantitative Research Execution:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Used LinkedIn Sales Navigator, government databases, and
                  academic sources to shortlist and profile 15 key policy
                  influencers, evaluating their reach, affiliations, and public
                  stances.
                </li>
                <li>
                  Conducted semi-structured interviews and scraped public
                  statements, social media activity, and publications for
                  sentiment analysis.
                </li>
                <li>
                  Used NVivo to code qualitative data and surface common themes
                  around community equity, economic impact, and regional focus.
                </li>
              </ul>
            </li>
            <li>
              <strong>Trend & Market Analysis:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Leveraged Google Trends and policy reports to forecast shifts
                  in narrative interest and influence timing.
                </li>
                <li>
                  Created an engagement matrix ranking influencers by advocacy
                  strength, alignment potential, and responsiveness.
                </li>
                <li>
                  Identified underserved regional segments with high policy need
                  but low current engagement, suggesting product strategy
                  expansion points.
                </li>
              </ul>
            </li>
            <li>
              <strong>Product/Strategy Alignment:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Created personas and journey maps representing key policy
                  influencers and their typical interaction with research data.
                </li>
                <li>
                  Recommended a phased engagement strategy aligned with product
                  planning cycles (awareness → influence → feedback loop).
                </li>
                <li>
                  Developed a dashboard prototype in Excel to track engagement
                  metrics over time (reach, resonance, and policy impact score).
                </li>
              </ul>
            </li>
            <li>
              <strong>Stakeholder Presentation & Buy-In:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Presented findings and strategy recommendations to senior
                  leadership using data-backed visualizations and influencer
                  heatmaps.
                </li>
                <li>
                  Linked research directly to product strategy by illustrating
                  how improved policy alignment could accelerate adoption and
                  improve community trust in pilot programs.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>📈 Result:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Enabled 25% increase in strategic alignment across departments by
              identifying the most impactful voices for future collaboration.
            </li>
            <li>
              Enhanced decision-making accuracy by improving understanding of
              external policy levers and community pulse.
            </li>
            <li>
              Research outputs were adopted into the organization's planning
              framework and later used as a baseline for policy engagement
              roadmaps.
            </li>
          </ul>
          <p>
            <strong>🧠 Skills & Tools Used:</strong> Market Research · Strategic
            Analysis · Qualitative Coding (NVivo) · Persona Development · Policy
            Mapping · Influencer Profiling · Google Trends · Competitive
            Intelligence · Stakeholder Presentation · Community Engagement
            Strategy · Excel Dashboards · Team Leadership
          </p>
        </div>
      ),
    },
    {
      title: "Inventory Optimization & Forecasting for an Urban Apparel Retailer",
      description:
        "Implemented a data-driven inventory planning system to reduce stockouts and carrying costs for a Bangalore-based retailer.",
      image: ClothingImage,
      role: "Supply Chain Product Analyst",
      tools:
        "Excel, Python, Power BI, Google Sheets, Retail Analytics Frameworks",
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            <strong>📍 Situation:</strong> A local apparel retailer in Bangalore
            was struggling with frequent stockouts of fast-moving items and
            overstocking of low-demand inventory, leading to increased carrying
            costs, missed sales opportunities, and a strained relationship with
            suppliers.
          </p>
          <p>
            <strong>🎯 Task:</strong> My role was to analyze existing inventory
            trends, implement a data-driven inventory planning system, and
            collaborate with suppliers to improve lead time predictability —
            with the primary objectives to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reduce stockouts of high-demand SKUs</li>
            <li>Lower inventory holding costs</li>
            <li>
              Enable the retailer to transition from reactive restocking to
              proactive demand planning
            </li>
          </ul>
          <p>
            <strong>⚙️ Action:</strong>
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <strong>Inventory Segmentation & Data Audit:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Conducted a 12-month analysis of historical sales, returns,
                  and delivery logs using Excel and Google Sheets.
                </li>
                <li>
                  Applied ABC classification to categorize SKUs based on
                  revenue contribution and velocity.
                </li>
                <li>
                  Identified that 70% of revenue came from just 20% of SKUs,
                  which were inconsistently replenished due to supplier
                  lead-time variability.
                </li>
              </ul>
            </li>
            <li>
              <strong>Demand Forecasting & Stock Replenishment Modeling:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Implemented time-series forecasting models (moving average and
                  exponential smoothing) in Excel to predict demand for key
                  SKUs.
                </li>
                <li>
                  Designed a reorder point model factoring in lead time, safety
                  stock, and average daily sales, using Python scripts for
                  simulation runs.
                </li>
                <li>
                  Used inventory turnover ratios and historical service levels
                  to adjust stock levels dynamically by product type.
                </li>
              </ul>
            </li>
            <li>
              <strong>Supplier Collaboration & Lead Time Optimization:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Met with local suppliers to share reorder schedules and
                  negotiated minimum order quantities (MOQs) and improved
                  delivery cycle consistency.
                </li>
                <li>
                  Integrated a lead time buffer strategy for high-risk SKUs and
                  flagged inconsistent vendors in the reporting dashboard.
                </li>
              </ul>
            </li>
            <li>
              <strong>Visualization & Implementation:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Created an inventory control dashboard using Power BI, helping
                  store managers visualize SKU status (stockouts, overstock,
                  reorder) and trends across product lines (e.g., formalwear,
                  casualwear, seasonal).
                </li>
                <li>
                  Designed a simple weekly reporting system that alerted the
                  procurement team on low-stock items and flagged forecast
                  deviations over 10%.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>📈 Result:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Reduced stockouts by 20%, especially for high-frequency fashion
              SKUs, improving customer satisfaction and walk-in conversion
              rates.
            </li>
            <li>
              Achieved a 15% reduction in inventory carrying costs by trimming
              overstock and improving procurement precision.
            </li>
            <li>
              Improved supplier delivery reliability by aligning purchase
              frequency with predicted demand, reducing last-minute order rushes
              by 40%.
            </li>
            <li>
              Retailer adopted the solution as part of their monthly store
              planning cadence, with staff trained to maintain and update the
              models post-engagement.
            </li>
          </ul>
          <p>
            <strong>🧠 Skills & Tools Used:</strong> Inventory Optimization ·
            Demand Forecasting · ABC Classification · Stock Replenishment Models
            · Supplier Relationship Management · Python · Excel (Solver, Forecast
            Sheet) · Power BI · Retail Analytics · KPI Tracking · Visual
            Dashboards · Stakeholder Communication
          </p>
        </div>
      ),
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
                      {project.role || project.tools ? (
                        <div className="flex flex-col gap-2 mb-6">
                          {project.role && (
                            <Badge variant="secondary" className="w-fit">Role: {project.role}</Badge>
                          )}
                          {project.tools && (
                            <Badge variant="secondary" className="w-fit">Tools: {project.tools}</Badge>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies?.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <Button variant="outline" size="sm">Read more</Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-4xl h-[95vh] overflow-y-auto p-0 flex flex-col">
                  <div
                    className="w-full h-48 bg-cover bg-center flex items-end"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <h3 className="text-xl font-semibold text-[hsl(var(--portfolio-secondary))] bg-white/80 w-full text-center py-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="overflow-y-auto w-full p-6">
                    {project.details}
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
                  {project.role || project.tools ? (
                    <div className="flex flex-col gap-2 mb-6">
                      {project.role && (
                        <Badge variant="secondary" className="w-fit">Role: {project.role}</Badge>
                      )}
                      {project.tools && (
                        <Badge variant="secondary" className="w-fit">Tools: {project.tools}</Badge>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies?.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links?.demo} className="flex items-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links?.github} className="flex items-center">
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
