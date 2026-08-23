import { motion } from "framer-motion";

const words = [
  "UI/UX Design", "iOS Development", "SwiftUI", "Data Analysis",
  "Figma", "Prototyping", "Problem Solving", "Product Thinking",
];

export function Marquee() {
  const track = [...words, ...words];
  return (
    <div className="relative py-6 border-y border-border overflow-hidden bg-secondary/30">
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
      >
        {track.map((word, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-mono uppercase tracking-widest text-muted-foreground">
            {word}
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
