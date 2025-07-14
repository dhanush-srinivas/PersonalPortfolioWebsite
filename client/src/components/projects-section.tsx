import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AnimatedSection from "@/components/animated-section";
import PrinterImage from "@/resources/3dprinter2.jpg";
import NRGImage from "@/resources/targetaudience.jpg";
import ClothingImage from "@/resources/Clothing.jpg";
import SAPImage from "@/resources/SAPproject.jpg";
import BottleImage from "@/resources/bottle.jpg";
import WireframeImage from "@/resources/wireframingproject.jpg";
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
        "Built a B2B leasing-as-a-service platform for industrial 3D printers, enabling small manufacturers to adopt advanced tech without upfront costs. Designed the full product strategy, system architecture, and pricing model, earning investor interest and top incubator recognition.",
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
      title: "AquaFlex (Product Innovation and GTM Strategy for Smart Water Bottles)",
      description:
        "Led product and GTM strategy for AquaFlex, a smart water bottle with hydration alerts and UV self-cleaning. Built feature roadmap, market sizing, and launch plan targeting health-conscious, tech-savvy users.",
      image: BottleImage,
      role: "Product Manager",
      tools:
        "Qualtrics, Excel, Canva, Google Trends, SWOT & Persona Frameworks, TAM-SAM-SOM Modeling, Figma, Google Slides",
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            <strong>📍 Situation:</strong> In an age of health awareness and sustainable living, hydration remains a poorly addressed problem despite being critical to wellness. Our team identified a growing consumer need for a tech-enabled, eco-friendly hydration solution that could integrate seamlessly into modern lifestyles.
          </p>
          <p>
            <strong>🎯 Task:</strong> As the Product Manager of a seven-member cross-functional team, my goal was to lead the conceptualization, feature design, and market strategy for AquaFlex, a smart water bottle that blends technology, health monitoring, and sustainability.
          </p>
          <p>
            <strong>⚙️ Action:</strong>
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <strong>User Research &amp; Market Sizing:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Launched consumer surveys targeting 18–35-year-old health-conscious, tech-savvy adults to identify pain points around hydration and portability.</li>
                <li>Estimated a TAM of 76M U.S. users with an addressable market of 38M based on tech-health overlap.</li>
                <li>Defined six primary user personas including gym-goers, corporate wellness users, and eco-conscious families.</li>
              </ul>
            </li>
            <li>
              <strong>Product Strategy &amp; Feature Roadmap:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed core differentiators like smart hydration reminders, UV self-cleaning, infuser compatibility, temperature control, and ruggedized design.</li>
                <li>Built a comparative feature matrix against leading competitors to identify clear competitive gaps.</li>
              </ul>
            </li>
            <li>
              <strong>Competitive Analysis &amp; Positioning:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mapped relative product advantage by scoring each feature on innovation, eco-friendliness, usability, and tech depth.</li>
                <li>Positioned AquaFlex as the “Apple Watch of water bottles” — a personalized, interactive hydration device.</li>
              </ul>
            </li>
            <li>
              <strong>Marketing, Pricing, and GTM Strategy:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed a three-tiered distribution plan spanning D2C, Amazon, and retail health stores.</li>
                <li>Set premium pricing using value-based logic and crafted a launch campaign leveraging TikTok influencers and Instagram ads.</li>
              </ul>
            </li>
            <li>
              <strong>Financial Modeling &amp; Risk Assessment:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Modeled cost structure by component and forecasted first-year revenue of $750K across two SKUs.</li>
                <li>Outlined risk mitigation strategies for market competition, IP infringement, and consumer adoption dips.</li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>📈 Result:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed a complete end-to-end product and go-to-market strategy integrating consumer insight, sustainability, health tech, and digital innovation.</li>
            <li>Created a market-ready investment pitch deck validated by course faculty and alumni entrepreneurs.</li>
            <li>Received top project recognition for strategic clarity, product innovation, and execution depth.</li>
          </ul>
          <p>
            <strong>🧠 Skills &amp; Tools Used:</strong> Product Strategy · Market Research · TAM/SAM/SOM Estimation · Competitive Benchmarking · Pricing Models · Consumer Persona Design · Feature Prioritization · GTM Planning · Financial Forecasting · Risk Assessment · Canva · Figma · Excel · Qualtrics · Presentation Design
          </p>
        </div>
      ),
    },
    {
      title: "Inventory Optimization & Forecasting for an Urban Apparel Retailer",
      description:
        "Implemented a data-driven inventory optimization system for a Bangalore-based apparel retailer to reduce stockouts and carrying costs. Used forecasting models and supplier collaboration to boost availability of high-demand SKUs and improve procurement efficiency.",
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
      title: "Supply Chain Simulation & Forecasting Optimization Using SAP IBP/APO",
      description:
        "Simulated and optimized end-to-end supply chain planning for a global manufacturer using SAP IBP and APO, improving forecast accuracy and procurement efficiency. Developed a reusable planning framework covering demand forecasting, MRP, and S&OP integration across multiple plants and distribution centers.",
      image: SAPImage,
      role: "Supply Chain Data Analyst",
      tools:
        "SAP IBP, SAP APO, ECC (MD01/MD02/MD04), MMBE, Excel, Demand Planning Algorithms (Statistical Forecasting), S&OP Frameworks",
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            <strong>📍 Situation:</strong> Global manufacturing organizations rely on integrated planning tools to align supply with demand, especially across distributed networks. In this simulated environment, we were tasked with optimizing the planning pipeline for Global Bike Inc. by leveraging SAP Integrated Business Planning (IBP) and Advanced Planning &amp; Optimization (APO) modules.
          </p>
          <p>
            <strong>🎯 Task:</strong> The goal was to simulate and improve an end-to-end supply chain process covering demand forecasting, supply network planning, and material requirements planning (MRP) across multiple plants and distribution centers. KPIs included forecast accuracy, procurement lead time, and inventory availability.
          </p>
          <p>
            <strong>⚙️ Action:</strong>
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <strong>End-to-End Supply Chain Simulation:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Designed and configured a virtual multi-plant supply chain scenario in the GBI sandbox, including three distribution centers and manufacturing hubs.
                </li>
                <li>
                  Mapped the planning flow across demand planning → supply planning → capacity alignment, ensuring master data accuracy (BOMs, routings, work centers, transportation lanes).
                </li>
              </ul>
            </li>
            <li>
              <strong>Demand Forecasting (12-month window):</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Used SAP IBP to simulate statistical demand forecasting using historical sales and seasonal factors.</li>
                <li>Applied moving average and exponential smoothing models to test forecast variability across product lines.</li>
                <li>Adjusted forecast models to align with customer service levels and realignment cycles.</li>
              </ul>
            </li>
            <li>
              <strong>Supply Network &amp; MRP Execution:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Executed MRP runs via MD01 and MD02 to generate procurement and production proposals.</li>
                <li>Monitored live inventory using MD04 and storage location analysis via MMBE, adjusting reorder points and safety stock settings.</li>
                <li>Validated sourcing logic, lot-sizing procedures, and procurement type settings.</li>
              </ul>
            </li>
            <li>
              <strong>S&amp;OP Integration &amp; KPI Tracking:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Applied S&amp;OP frameworks to balance supply and demand, align capacity constraints, and ensure feasibility of the supply plan.</li>
                <li>Tracked key metrics such as Forecast Accuracy, Procurement Lead Time, and Inventory Turnover.</li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>📈 Result:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Achieved a 5% improvement in forecast accuracy, measured via pre/post-MAPE comparisons on seasonal product lines.</li>
            <li>Reduced simulated procurement lead times by refining sourcing logic and aligning vendor lead times with plant capacity.</li>
            <li>Strengthened understanding of real-world MRP execution and IBP-driven decision-making, bridging the gap between planning theory and SAP implementation.</li>
            <li>Produced a reusable planning simulation framework now used as a reference model for new learners in the program.</li>
          </ul>
          <p>
            <strong>🧠 Skills &amp; Tools Used:</strong> SAP IBP · SAP APO · SAP ECC (MD01, MD02, MD04, MMBE) · Statistical Forecasting · Demand Planning · Supply Network Design · Capacity Alignment · Material Requirements Planning (MRP) · Inventory Optimization · S&amp;OP Principles · Excel · Planning Analytics
          </p>
        </div>
      ),
    },
    {
      title:
        "Market Research & Strategic Engagement Framework – National Research Group",
      description:
        "Led a market research initiative for the National Research Group to map the policy influencer landscape and uncover community impact trends. Delivered insights that improved cross-department strategic alignment by 25% and shaped future policy engagement strategies.",
      image: NRGImage,
      role: "Market Research Lead (Externship)",
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
      title: "Wireframing - Learn mobile App",
      description:
        '"Learn" is a web and mobile app designed to provide free, curated educational resources across diverse subjects, making quality learning accessible to all. I led the wireframing and UX design to create an intuitive, distraction-free experience that empowers self-paced discovery and growth.',
      image: WireframeImage,
      role: "UX Designer & Wireframing Lead | Personal Project",
      tools: "Adobe XD",
      links: {
        demo: "#",
        github: "#",
      },
      details: (
        <div className="space-y-4 text-sm text-left">
          <p>
            "Learn" is a web and mobile application designed to provide free,
            curated educational resources to students across domains like
            science, math, geography, politics, and more. Born during the
            COVID-19 pandemic, the project aimed to break down financial and
            accessibility barriers by simplifying how learners discover and
            engage with quality content.
          </p>
          <p>
            I led the wireframing and UX design for the application, crafting
            intuitive layouts for modules like authentication, dashboards,
            catalogues, and personalized learning profiles. Our focus was on
            creating a clean, distraction-free interface that felt welcoming to
            learners of all backgrounds. Key features included resource ratings,
            prerequisites, dark mode, and animated interactions to keep users
            motivated.
          </p>
          <p>
            Backed by Firebase for real-time updates, and built using Node.js,
            Bootstrap, Android (Java), and HTML/CSS/JavaScript, the platform was
            a collaborative effort with a clear mission: to make education
            accessible, relevant, and learner-first. "Learn" continues to serve
            as a prototype for a broader vision—a global learning hub built for
            impact.
          </p>
        </div>
      ),
    },
  ];

  return (
    <AnimatedSection
      id="projects"
      className="py-10"
      duration={1.2}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) =>
            project.details ? (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer bg-[#FEFEFE]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                      {project.role || project.tools ? (
                        <div className="flex flex-col gap-2 mb-3">
                          {project.role && (
                            <Badge variant="outline" className="w-fit text-xs">Role: {project.role}</Badge>
                          )}
                          {project.tools && (
                            <Badge variant="outline" className="w-fit text-xs">Tools: {project.tools}</Badge>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies?.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <Button variant="outline" size="sm" className="text-[#6B7280]">Read more</Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-4xl h-[95vh] overflow-y-auto p-0 flex flex-col">
                  <div
                    className="w-full h-40 bg-cover bg-center flex items-end"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] bg-white/80 w-full text-center py-2">
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
                className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden bg-[#FEFEFE]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-[hsl(var(--portfolio-secondary))] mb-2">
                    {project.title}
                  </h3>
                      <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                  {project.role || project.tools ? (
                    <div className="flex flex-col gap-2 mb-3">
                      {project.role && (
                            <Badge variant="outline" className="w-fit text-xs">Role: {project.role}</Badge>
                      )}
                      {project.tools && (
                            <Badge variant="outline" className="w-fit text-xs">Tools: {project.tools}</Badge>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 mb-3">
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
    </AnimatedSection>
  );
}
