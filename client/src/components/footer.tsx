import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer
      className="py-12 bg-[#232b2b] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Lets Get Connected</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Liked what you saw? Have a job opportunity, an idea to build, or just stuck and need a fresh perspective to move things forward? I’m always up for a great conversation. 🙌🏻
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/dhanushsrinivas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white"
              asChild
            >
              <a href="mailto:dhanush.srinivas1998@gmail.com">
                <Mail className="w-8 h-8" />
              </a>
            </Button>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Dhanush Gowda S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
