// src/components/Reveal/Reveal.jsx
import { motion } from "framer-motion";

export default function Reveal({ children, direction = "up", delay = 0 }) {
  // Determine initial position based on direction
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
