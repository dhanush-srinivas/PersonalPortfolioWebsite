import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#leadership", label: "Leadership" },
    { href: "#skills", label: "Skills" },
    { href: "#recommendations", label: "Recommendations" },
    { href: "#experience", label: "Experience" },
    { href: "#storytelling", label: "⭐" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-[#FEFEFE] border-b border-slate-200 shadow-sm font-montserrat"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <button
            onClick={() => handleNavClick("#hero")}
            className="font-semibold text-xl text-slate-700 hover:text-[#8E72EB] transition-colors duration-200"
          >
            Dhanush Gowda S
          </button>
          
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-700 hover:text-[#8E72EB] transition-colors duration-200 font-medium text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>
        
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                className="text-slate-700 hover:text-[#8E72EB] transition-colors duration-200 font-medium text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
