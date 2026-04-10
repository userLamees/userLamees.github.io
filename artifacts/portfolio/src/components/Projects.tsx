import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Trophy } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "Jasmine",
    type: "Graduation Project",
    date: "Dec 2025",
    description: "An AI-powered iOS application for skin condition assessment. Users photograph their skin and receive personalized care recommendations powered by image recognition — bridging healthcare and technology for everyday users.",
    technologies: ["SwiftUI", "Core ML", "Vision", "iOS"],
    accent: "from-rose-50 to-orange-50",
    accentDark: "from-rose-950/20 to-orange-950/20",
    icon: Sparkles,
    link: "#"
  },
  {
    index: "02",
    title: "Naadek",
    type: "Hackathon — 1st Place",
    date: "Apr 2025",
    description: "First place at the University Solutions Hackathon. A student engagement platform integrating club discovery and task management — built around UI/UX best practices to meaningfully enhance campus connectivity.",
    technologies: ["UI/UX Design", "Figma", "System Design", "Prototyping"],
    accent: "from-amber-50 to-yellow-50",
    accentDark: "from-amber-950/20 to-yellow-950/20",
    icon: Trophy,
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <span className="section-line" />
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Selected Works</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
              What I've<br />
              <span className="italic text-primary">built.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground font-light max-w-xs md:text-right leading-relaxed">
              Projects that live at the intersection of design, technology, and human need.
            </p>
          </FadeIn>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={project.index} delay={i * 0.1}>
              <motion.a
                href={project.link}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group relative flex flex-col md:flex-row md:items-center gap-8 p-8 md:p-10 rounded-3xl border border-border bg-gradient-to-br ${project.accent} hover:border-primary/30 hover:shadow-lg transition-all duration-500 overflow-hidden`}
                data-testid={`project-card-${project.title.toLowerCase()}`}
              >
                {/* Index */}
                <div className="absolute top-8 right-8 font-mono text-7xl font-bold text-foreground/[0.04] select-none leading-none">
                  {project.index}
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/80 border border-border/60 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                  <project.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono tracking-wider uppercase text-primary font-medium">
                      {project.type}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs font-mono text-muted-foreground">{project.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 border border-border/60 text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-start md:self-center">
                  <div className="w-10 h-10 rounded-full bg-white/80 border border-border/60 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            </FadeIn>
          ))}

          {/* Coming soon */}
          <FadeIn delay={0.25}>
            <div className="flex items-center justify-center min-h-[120px] p-8 rounded-3xl border border-dashed border-border/60 bg-transparent hover:border-primary/30 transition-colors">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30 mx-auto mb-3"
                />
                <p className="text-sm font-mono text-muted-foreground tracking-wide">More works brewing...</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
