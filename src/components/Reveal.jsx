import { motion } from "framer-motion";

/**
 * Wraps children in a fade + rise animation that triggers once when it
 * scrolls into view. Use `delay` to stagger sibling reveals.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.6,
  className = "",
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
