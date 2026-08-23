import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect, MouseEvent as ReactMouseEvent, ReactNode } from "react";

const stats = [
  { to: 260, suffix: "+", label: "volunteer hrs" },
  { to: 4,   suffix: "",  label: "certifications" },
  { to: 5,   suffix: "",  label: "projects" },
  { text: "1st",          label: "hackathon place" },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const duration = 1400;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, to]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function MagneticLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMove = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Soft ambient motion — slow-drifting glow, no hard shapes */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-24 w-[32rem] h-[32rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.16) 0%, transparent 70%)" }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[26rem] h-[26rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.10) 0%, transparent 70%)" }}
          animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border bg-secondary/60 text-xs font-mono tracking-wide text-muted-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Open to opportunities
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal text-[clamp(3.2rem,10vw,7.5rem)] leading-[0.95] tracking-tight text-foreground"
              data-testid="hero-name"
            >
              Lamis
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal italic text-[clamp(3.2rem,10vw,7.5rem)] leading-[0.95] tracking-tight text-primary"
              data-testid="hero-name-last"
            >
              Alharbi.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto"
            data-testid="hero-summary"
          >
            UI/UX Designer &amp; iOS Developer, building digital products with care for every detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <MagneticLink
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors duration-300 shadow-sm"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticLink>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors duration-300"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Stats — one quiet line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-baseline justify-center gap-x-8 gap-y-3 pt-10 border-t border-border max-w-xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-1.5">
                <span className="font-serif text-xl text-foreground">
                  {"text" in stat ? stat.text : <CountUp to={stat.to} suffix={stat.suffix} />}
                </span>
                <span className="text-xs font-mono text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <a
          href="#about"
          aria-label="Scroll down"
          data-testid="hero-scroll-btn"
          className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
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
