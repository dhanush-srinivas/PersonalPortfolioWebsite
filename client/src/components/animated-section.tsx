import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { forwardRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  duration?: number;
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, id, duration }, ref) => (
    <motion.section
      ref={ref as any}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: duration ?? 0.6 }}
    >
      {children}
    </motion.section>
  )
);

export default AnimatedSection;

