import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Analytics Platform",
      description: "A comprehensive analytics dashboard for e-commerce businesses, featuring real-time data visualization, predictive analytics, and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "D3.js"],
      links: {
        demo: "#",
        github: "#",
      },
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
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
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
          ))}
        </div>
      </div>
    </section>
  );
}
