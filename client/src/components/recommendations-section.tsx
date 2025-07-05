import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import AndyImage from "@/resources/andy.jpg";

export default function RecommendationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations = [
    {
      name: "Sarah Chen",
      title: "Senior Product Manager, TechCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Dhanush consistently delivered exceptional results on our most challenging projects. His technical expertise and collaborative approach made him an invaluable team member.",
    },
    {
      name: "Marcus Thompson",
      title: "CTO, InnovateLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Working with Dhanush was a game-changer. His ability to architect complex systems while maintaining clean, maintainable code is truly impressive.",
    },
    {
      name: "Dr. Amanda Rodriguez",
      title: "Research Director, AI Institute",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Dhanush's dedication to excellence and innovative problem-solving approach made our research platform a tremendous success. Highly recommended.",
    },
    {
      name: "Andy Helgeson",
      title: "Engineering Director, DataFlow Systems",
      image: AndyImage,
      quote: "Dhanush's ability to solve complex technical challenges while maintaining excellent code quality is remarkable. He consistently delivers beyond expectations.",
    },
    {
      name: "Jennifer Liu",
      title: "VP of Engineering, CloudScale",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "I've rarely seen someone with Dhanush's combination of technical depth and leadership skills. He's an asset to any team and drives innovation wherever he goes.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + recommendations.length) % recommendations.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [recommendations.length]);

  return (
    <section id="recommendations" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Recommendations
        </h2>
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Left Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Right Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            
            {/* Carousel Container */}
            <div className="overflow-hidden px-16">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(calc(50% - 160px - ${currentIndex * 336}px))`,
                }}
              >
                {recommendations.map((rec, index) => (
                  <div key={index} className="w-80 flex-shrink-0 mx-4">
                    <Card className={`shadow-lg transition-all duration-300 ${
                      index === currentIndex 
                        ? 'scale-105 shadow-xl' 
                        : 'scale-95 opacity-60'
                    }`}>
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <img
                            src={rec.image}
                            alt={`${rec.name} headshot`}
                            className="w-16 h-16 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-[hsl(var(--portfolio-secondary))]">
                              {rec.name}
                            </h4>
                            <p className="text-slate-600 text-sm">{rec.title}</p>
                          </div>
                        </div>
                        <p className="text-slate-600 italic mb-4 text-center">"{rec.quote}"</p>
                        <div className="flex justify-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex 
                    ? 'bg-[hsl(var(--portfolio-primary))]' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}