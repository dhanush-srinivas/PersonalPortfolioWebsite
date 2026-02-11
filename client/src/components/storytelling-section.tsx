import AnimatedSection, { staggerItemVariants } from "@/components/animated-section";
import { motion } from "framer-motion";

export default function StorytellingSection() {
  return (
    <AnimatedSection id="storytelling" className="py-10" duration={1.2} staggerChildren={0.06}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerItemVariants}
          className="border rounded-lg bg-[#FEFEFE] p-6 md:p-8"
          whileHover={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <motion.h2
            variants={staggerItemVariants}
            className="text-3xl font-bold text-[hsl(var(--portfolio-secondary))] text-center mb-8"
          >
            🎭 Storytelling Through Filmmaking & Hip-Hop 🎞️
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4 text-slate-600 font-montserrat text-base text-center px-6">
            <motion.p variants={staggerItemVariants} custom={0}>
              I've always loved storytelling. Whether I'm explaining real-life situations or presenting ideas, I try to frame them like a narrative to build curiosity and keep people engaged. One of the most powerful and immersive forms of storytelling, for me, is filmmaking.
            </motion.p>
            <motion.p variants={staggerItemVariants} custom={1}>
              🎬 As a passionate filmmaker, I have written, directed, and edited short films in both English and my native language ಕನ್ನಡ (Kannada), exploring genres such as horror, thriller, comedy, and action. Each project reflects my creativity, cultural identity, and ability to communicate through visual narrative.
            </motion.p>
            <motion.p variants={staggerItemVariants} custom={2}>
              🎤 I’m also a hip-hop rapper and lyricist, writing, producing, and performing original music. With three tracks published online, I use rap to express raw emotion, personal experiences, and social themes bringing storytelling to life through rhythm and verse.
            </motion.p>
            <motion.p variants={staggerItemVariants} custom={3}>
              These creative pursuits have not only fueled my passion but also sharpened my ability to communicate with clarity, engage diverse audiences, and bring authenticity to every personal and professional interaction.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
