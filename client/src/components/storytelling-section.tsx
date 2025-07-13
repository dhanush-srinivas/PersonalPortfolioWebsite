import AnimatedSection from "@/components/animated-section";

export default function StorytellingSection() {
  return (
    <AnimatedSection id="storytelling" className="py-10" duration={1.2}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-8">
          🎭 Storytelling Through Filmmaking & Hip-Hop 🎞️
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-slate-600 font-montserrat text-lg">
          <p>
            I've always loved storytelling. Whether I'm explaining real-life situations or presenting ideas, I try to frame them like a narrative to build curiosity and keep people engaged. One of the most powerful and immersive forms of storytelling, for me, is filmmaking.
          </p>
          <p>
            🎬 As a passionate filmmaker, I have written, directed, and edited short films in both English and my native language ಕನ್ನಡ (Kannada), exploring genres such as horror, thriller, comedy, and action. Each project reflects my creativity, cultural identity, and ability to communicate through visual narrative.
          </p>
          <p>
            🎤 I’m also a hip-hop rapper and lyricist, writing, producing, and performing original music. With three tracks published online, I use rap to express raw emotion, personal experiences, and social themes bringing storytelling to life through rhythm and verse.
          </p>
          <p>
            These creative pursuits have not only fueled my passion but also sharpened my ability to communicate with clarity, engage diverse audiences, and bring authenticity to every personal and professional interaction.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
