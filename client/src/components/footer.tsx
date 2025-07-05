import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-12 bg-[hsl(var(--portfolio-secondary))] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and challenging projects. Let's discuss how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button className="bg-[hsl(var(--portfolio-primary))] hover:bg-[hsl(var(--portfolio-primary))]/90">
              Get In Touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(var(--portfolio-secondary))]">
              Download CV
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Twitter className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
