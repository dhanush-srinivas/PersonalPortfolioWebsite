import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RecommendationsSection() {
  const recommendations = [
    {
      name: "Sarah Chen",
      title: "Senior Product Manager, TechCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Alex consistently delivered exceptional results on our most challenging projects. His technical expertise and collaborative approach made him an invaluable team member.",
    },
    {
      name: "Marcus Thompson",
      title: "CTO, InnovateLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Working with Alex was a game-changer. His ability to architect complex systems while maintaining clean, maintainable code is truly impressive.",
    },
    {
      name: "Dr. Amanda Rodriguez",
      title: "Research Director, AI Institute",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Alex's dedication to excellence and innovative problem-solving approach made our research platform a tremendous success. Highly recommended.",
    },
  ];

  return (
    <section id="recommendations" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-16">
          Recommendations
        </h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4 carousel-container" style={{ width: "max-content" }}>
            {recommendations.map((rec, index) => (
              <Card key={index} className="carousel-item w-96 flex-shrink-0 shadow-lg">
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
                  <p className="text-slate-600 italic mb-4">"{rec.quote}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
