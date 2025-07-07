import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import CarolImage from "@/resources/carol.jpg";
import MichelleImage from "@/resources/michelle.jpeg";
import AndyImage from "@/resources/andy.jpg";
import AshleyImage from "@/resources/ashley.jpg";
import DebopreetaImage from "@/resources/debopreeta.jpeg";
import SteveImage from "@/resources/steve.jpg";

export default function RecommendationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations = [
    {
      name: "Michelle Rook Jones",
      title: "Program Director- Innovation and Entrepreneurship, UT Dallas",
      image: MichelleImage,
      quote: `There are just some people that you immediately know will make your business and life better, and that's Dhanush. He's a naturally positive person who is highly motivated by action, is the first to volunteer for the smallest to the largest projects, adapts well to uncertainty, desires to contribute, and genuinely stays curious. Dhanush prefers to coordinate multiple, cross-functional resources to align project teams solving problems and designing innovative solutions. His fresh perspective and his clear communication style are a welcome addition to any company. Dhanush is a difference maker. Hire him!`,
    },
    {
      name: "Carol Marcus-Rehtmeyer",
      title: "Executive Director at UT Dallas | MBA",
      image: CarolImage,
      quote: `I’ve had the pleasure of working with Dhanush Gowda during his time at the university, and I continue to be impressed by his leadership and initiative. Dhanush is someone who not only seeks out opportunities to lead but does so with a rare blend of focus, dedication, and humility. His willingness to step into multiple leadership roles reflects both his ambition and his deep commitment to making a meaningful impact in his community.

Beyond his accomplishments, it’s Dhanush’s kind and collaborative nature that sets him apart. He leads with empathy, inspires trust in his peers, and approaches challenges with resolve and grace. Any team would be fortunate to have him.`,
    },
    {
      name: "Andy Helgeson",
      title: "Assistant Director of the Student Union at UT Dallas",
      image: AndyImage,
      quote: `Dhanush is a terrific team player who displays all the qualities that one would want from a true leader. He gets the work done promptly and precisely while also creating a fun atmosphere for himself and his peers. He is a great decision-maker, with tremendous work ethic, as well as the fact that he mentors his coworkers in the process of completing tasks. Dhanush is kind, funny, easy to work with, and an extremely hard worker who prioritizes his duties when at work. He is eager to learn and to find new ways to contribute to his team. I would whole-heartedly recommend Dhanush to any employer looking for a high-quality employee who is going to give it their all.`,
    },
    {
      name: "Ashley Shoemake",
      title: "Assistant Director of the Student Union at UT Dallas",
      image: AshleyImage,
      quote: `Dhanush has been a great addition to our team at the Student Union at the University of Texas at Dallas. As a student employee, he worked hard to make sure our facilities operated smoothly, customers were taken care of, and his coworkers had someone they could depend on. Dhanush worked to make sure issues were handled without complaint and worked to the best of his ability to address any concerns. Additionally, Dhanush served as a member of the Student Union Student Leadership Council where he stood out as a leader amongst his peers, going above and beyond to make meaningful contributions to our department. I fully recommend Dhanush for any company and know that he will be a great addition to any workplace he joins.`,
    },
    {
      name: "Debopreeta Bhattacharya",
      title: "Vice-President, Student Government at UT Dallas",
      image: DebopreetaImage,
      quote: `Dhanush was an exceptional senator in UTD Student Government during the 2024-2025 term. As the former vice president, I have had the pleasure of seeing all that he has accomplished through the Graduate and International Affairs Committee. Dhanush, along with the rest of the senators, worked very hard this past term to improve outreach to graduate and international students and helped bolster many great events and initiatives. Through exploring new opportunities, Dhanush has contributed to Student Government's success and is always open to learning and growing. Dhanush has been very diligent in his work and has always been there to lend a helping hand to ensure that projects are seen through to completion. I am confident that he will thrive in the workplace and will be excellent in any role!`,
    },
    {
      name: "Stephen Dietemann",
      title: "Student Union Coordinator at UT Dallas",
      image: SteveImage,
      quote: `I had the pleasure of supervising Dhanush during his time as a Student Manager at the University of Texas at Dallas Student Union. I can confidently say he was one of the most dependable and well-rounded student employees on our team.

Dhanush consistently demonstrated a strong work ethic and a high level of accountability, always taking pride in his responsibilities and following through with excellence. What truly stood out was his leadership and interpersonal skills. He naturally stepped into a managerial role, acting as a mentor to the team and serving as a go-to leader for training and onboarding new student employees. His calm, friendly, and earnest demeanor made him approachable to all, and he continually motivated his peers, helping to create a positive and collaborative team environment.

In addition to his responsibilities as a Student Manager, Dhanush was also a leading member of the Student Union Leadership Council, where he contributed to strategic initiatives for leadership, professional development, policy making, awards and recognition to improve the student employee experience.

Dhanush would be a fantastic addition to any organization, and I highly recommend him for any role that values integrity, leadership, and teamwork.`,
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
    <section id="recommendations" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-12">
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
                  transform: `translateX(calc(50% - 25vw - ${currentIndex} * (50vw + 2rem)))`,
                }}
              >
                {recommendations.map((rec, index) => (
                  <div key={index} className="w-[50vw] flex-shrink-0 mx-4">
                    <Card
                      className={`shadow-lg transition-all duration-300 ${
                        index === currentIndex
                          ? 'scale-105 shadow-xl'
                          : 'scale-95 opacity-60'
                      } ${rec.name === 'Stephen Dietemann' ? 'w-[40vw] mx-auto' : ''}`}
                    >
                      <CardContent className={`${
                        rec.name === 'Stephen Dietemann' ? 'p-4' : 'p-8'
                      }`}
                      >
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
                            <p className="text-slate-600 text-sm">
                              {rec.title}
                            </p>
                          </div>
                        </div>
                        <p
                          className={`text-slate-600 italic mb-4 text-center ${
                            rec.name === 'Stephen Dietemann'
                              ? 'text-[0.6rem]'
                              : 'text-xs md:text-sm'
                          }`}
                        >
                          "{rec.quote}"
                        </p>
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