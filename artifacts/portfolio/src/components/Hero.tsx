import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(24 80% 58% / 0.10) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(38 60% 70% / 0.08) 0%, transparent 70%)" }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(24 40% 65% / 0.05) 0%, transparent 70%)" }} />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm font-mono text-muted-foreground shadow-sm"
              data-testid="hero-badge"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-tight text-foreground"
              data-testid="hero-name"
            >
              Lamis
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal italic text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-tight text-primary"
              data-testid="hero-name-last"
            >
              Alharbi.
            </motion.h1>
          </div>

          {/* Subtitle tags */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            {["CIS Student", "UI/UX Designer", "iOS Developer"].map((tag, i) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-border bg-card/60 backdrop-blur-sm text-foreground"
                data-testid={`hero-tag-${i}`}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed mb-16"
            data-testid="hero-summary"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-sm"
          >
            {t.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card/80 backdrop-blur-sm px-6 py-5 flex flex-col gap-1"
              >
                <span className="font-serif text-2xl md:text-3xl font-normal text-foreground">{stat.value}</span>
                <span className="text-xs font-mono text-muted-foreground tracking-wide uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <a
          href="#about"
          aria-label="Scroll down"
          data-testid="hero-scroll-btn"
          className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
