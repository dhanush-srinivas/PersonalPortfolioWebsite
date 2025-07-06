import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="pt-10 pb-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Video and Pitch Section */}
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Video Embed */}
          <div className="relative lg:col-span-2">
            <div className="aspect-video bg-slate-200 rounded-xl shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/MNKRUlD76x0"
                title="Who am I"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Watch Pitch CTA */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--portfolio-secondary))] mb-4">
                  Who am I?
                </h2>
                <p className="text-slate-600 mb-6">
                  Watch this 80-second video🎥to learn about my passion for technology 💻, creative thinking 🎨, and what inspires me to create meaningful digital experiences 🌐
                </p>
                <Button className="bg-[hsl(var(--portfolio-primary))] hover:bg-[hsl(var(--portfolio-primary))]/90 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Play Video
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* About Me and Education */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Me */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--portfolio-secondary))] mb-4">
                About Me
              </h3>
              <div className="text-slate-600 leading-relaxed mb-6 space-y-4 font-serif">
                <p>Hey! I'm Dhanush 😊. I recently completed my Master's in Systems Engineering and Management from UT Dallas, with a background in Industrial Engineering and a strong curiosity for how things work and how they can work better.</p>
                <p>I've been involved in everything from analyzing data 📊 and building dashboards to managing projects and working with teams across different functions. I enjoy simplifying complex problems and turning scattered data into something useful. I’ve worked with tools like Power BI, SQL, and SAP, but what I really enjoy is the process of collaborating with people and figuring things out together 🤝.</p>
                <p>I'm creative, practical, and always up for a good challenge 💡. I like to bring energy into the room, share ideas, and keep the work fun without losing focus. Whether I’m designing a solution, solving a problem, or just helping the team stay on track, I believe the best work happens when people feel connected, motivated, and slightly over-caffeinated ☕.</p>
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
