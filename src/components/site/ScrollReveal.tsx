import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Scroll-controlled rise: element travels up and fades in as it enters the viewport. */
export function ScrollReveal({
  children,
  distance = 140,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [0, 0.7, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
}