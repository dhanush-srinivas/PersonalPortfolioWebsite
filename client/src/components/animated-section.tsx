import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { forwardRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  duration?: number;
  /** Stagger delay between children when using AnimatedSection + motion children with custom stagger */
  staggerChildren?: number;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, id, duration = 0.6, staggerChildren = 0.07 }, ref) => (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "-80px" }}
      variants={{
        ...sectionVariants,
        visible: {
          ...sectionVariants.visible,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: staggerChildren,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.section>
  )
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;

/** Use with motion components as direct children; they will stagger when section is in view */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
      delay: (i ?? 0) * 0.08,
    },
  }),
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      delay: (i ?? 0) * 0.05,
    },
  }),
};
