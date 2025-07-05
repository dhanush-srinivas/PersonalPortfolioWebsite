import { Play, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Video and Pitch Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Embed */}
          <div className="relative">
            <div className="aspect-video bg-slate-200 rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-slate-500 mb-4 mx-auto" />
                  <p className="text-slate-600 font-medium">Video Pitch Placeholder</p>
                  <p className="text-sm text-slate-500 mt-2">YouTube or MP4 embed goes here</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Watch Pitch CTA */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--portfolio-secondary))] mb-4">
                  Watch my Pitch Video
                </h2>
                <p className="text-slate-600 mb-6">
                  Get to know me in 90 seconds. I share my passion for technology, my journey, and what drives me to create exceptional digital experiences.
                </p>
                <Button className="bg-[hsl(var(--portfolio-primary))] hover:bg-[hsl(var(--portfolio-primary))]/90 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Play Video
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Introduction */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--portfolio-secondary))] mb-4">
            Hello, I'm Alex Johnson
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Full-Stack Developer & Digital Innovation Specialist
          </p>
        </div>
        
        {/* About Me and Education */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Me */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--portfolio-secondary))] mb-4">
                About Me
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. 
                My journey began with a curiosity about how things work and evolved into a career dedicated to building innovative, 
                user-centered applications. I thrive on solving complex problems and turning ideas into reality through clean, 
                efficient code and thoughtful design.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-[hsl(var(--portfolio-primary))] hover:text-[hsl(var(--portfolio-primary))]/80">
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-[hsl(var(--portfolio-primary))] hover:text-[hsl(var(--portfolio-primary))]/80">
                  <Github className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-[hsl(var(--portfolio-primary))] hover:text-[hsl(var(--portfolio-primary))]/80">
                  <Mail className="w-6 h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Education */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--portfolio-secondary))] mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[hsl(var(--portfolio-primary))] pl-6">
                  <h4 className="font-semibold text-lg text-[hsl(var(--portfolio-secondary))]">
                    Master of Science in Computer Science
                  </h4>
                  <p className="text-slate-600 font-medium">Stanford University</p>
                  <p className="text-slate-500 text-sm">2018 - 2020</p>
                  <p className="text-slate-600 mt-2 text-sm">
                    Specialized in Machine Learning and Software Engineering
                  </p>
                </div>
                
                <div className="border-l-4 border-[hsl(var(--portfolio-accent))] pl-6">
                  <h4 className="font-semibold text-lg text-[hsl(var(--portfolio-secondary))]">
                    Bachelor of Science in Information Technology
                  </h4>
                  <p className="text-slate-600 font-medium">University of California, Berkeley</p>
                  <p className="text-slate-500 text-sm">2014 - 2018</p>
                  <p className="text-slate-600 mt-2 text-sm">
                    Magna Cum Laude, Dean's List
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
