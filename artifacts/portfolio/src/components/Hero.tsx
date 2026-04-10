import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Abstract background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-orange-100/30 blur-3xl opacity-50 mix-blend-multiply" />
      </div>

      <div className="max-w-5xl mx-auto w-full z-10">
        <FadeIn delay={0.2} direction="up" duration={1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 border border-border/50 shadow-sm" data-testid="hero-badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Riyadh, Saudi Arabia
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.3} direction="up" duration={1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-foreground leading-[1.1]" data-testid="hero-name">
              Lamis <br className="hidden md:block" />
              <span className="text-muted-foreground">Alharbi.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" duration={1}>
            <p className="text-xl md:text-2xl text-foreground font-light max-w-2xl leading-relaxed" data-testid="hero-title">
              CIS Student <span className="mx-2 text-primary/50">|</span> UI/UX Designer <span className="mx-2 text-primary/50">|</span> iOS Developer
            </p>
          </FadeIn>

          <FadeIn delay={0.5} direction="up" duration={1}>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mt-4 font-light" data-testid="hero-summary">
              Bridging the gap between beautiful interfaces and intelligent technology. 
              Specializing in AI-powered mobile applications and user-centered digital solutions.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.8} direction="up" duration={1}>
          <div className="mt-16 md:mt-24">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group shadow-sm border border-border"
              aria-label="Scroll to projects"
              data-testid="hero-scroll-btn"
            >
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
