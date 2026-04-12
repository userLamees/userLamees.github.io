import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Trophy } from "lucide-react";
import { Lightbox } from "./Lightbox";

import jasminePoster from "@assets/poster_jamsine_1775783984115.png";
import icanPhoto1 from "@assets/ca908562-f427-4d37-ab7f-abd98895e4ae_1775784122191.jpeg";
import icanPhoto2 from "@assets/FullSizeRender_1775784122191.jpeg";
import naadekWin from "@assets/1753316461820_1775784843373.jpeg";
import haikLogo from "@/assets/haik-logo.png";

const projects = [
  {
    index: "01",
    title: "Jasmine",
    type: "Graduation Project",
    date: "Dec 2025",
    role: "iOS Developer · ML Engineer",
    description: "An AI-powered iOS app for skin condition assessment. Snap a photo, get personalized skincare recommendations — where healthcare meets everyday tech.",
    highlight: "Only team from our batch selected to present at ICAN 2026.",
    technologies: ["SwiftUI", "Core ML", "Vision", "iOS"],
    accent: "from-rose-50 to-orange-50",
    icon: Sparkles,
    logo: null as string | null,
    photos: [jasminePoster, icanPhoto1, icanPhoto2],
    photoLabels: ["Project Poster", "ICAN 2026", "Jasmine Demo"],
    appStoreUrl: null as string | null,
  },
  {
    index: "02",
    title: "Naadek",
    type: "Hackathon — 1st Place",
    date: "Apr 2025",
    role: "Project Manager",
    description: "1st place at the University Solutions Hackathon. A campus platform where students discover clubs, manage tasks, and actually stay connected.",
    highlight: null,
    technologies: ["UI/UX Design", "Figma", "System Design", "Prototyping"],
    accent: "from-amber-50 to-yellow-50",
    icon: Trophy,
    logo: null as string | null,
    photos: [naadekWin],
    photoLabels: ["1st Place — University Solutions Hackathon"],
    appStoreUrl: null as string | null,
  },
  {
    index: "03",
    title: "Haik | حيك",
    type: "Live on App Store",
    date: "2025",
    role: "Project Manager",
    description: "Moving to a new neighborhood? Haik helps you explore areas, compare what's nearby, and find the spot that actually fits your life.",
    highlight: null,
    technologies: ["UI/UX Design", "Figma", "Recommendation Systems", "Project Management"],
    accent: "from-teal-50 to-emerald-50",
    icon: null,
    logo: haikLogo,
    photos: [],
    photoLabels: [],
    appStoreUrl: "https://apps.apple.com/sa/app/haik-%D8%AD%D9%8A-%D9%83/id6759011646",
  },
];

interface LightboxState { projectIndex: number; photoIndex: number }

export function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => {
    if (!lightbox) return;
    const len = projects[lightbox.projectIndex].photos.length;
    setLightbox({ ...lightbox, photoIndex: (lightbox.photoIndex - 1 + len) % len });
  };
  const nextPhoto = () => {
    if (!lightbox) return;
    const len = projects[lightbox.projectIndex].photos.length;
    setLightbox({ ...lightbox, photoIndex: (lightbox.photoIndex + 1) % len });
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
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

        {/* Cards */}
        <div className="space-y-5">
          {projects.map((project, i) => {
            const hasSinglePhoto = project.photos.length === 1;
            const hasGallery = project.photos.length > 1;

            return (
              <FadeIn key={project.index} delay={i * 0.1}>
                <div
                  className={`group relative rounded-3xl border border-border bg-gradient-to-br ${project.accent} hover:border-primary/30 hover:shadow-lg transition-all duration-500 overflow-hidden`}
                  data-testid={`project-card-${project.title.toLowerCase().replace(/\s.*/, "")}`}
                >
                  {/* Ghost index */}
                  <div className="absolute top-6 right-6 font-mono text-6xl font-bold text-foreground/[0.04] select-none leading-none z-0 pointer-events-none">
                    {project.index}
                  </div>

                  {/* ── Split layout for single-photo cards ── */}
                  {hasSinglePhoto ? (
                    <div className="flex flex-col md:flex-row">
                      {/* Left: content */}
                      <div className="flex-1 p-8 md:p-10 flex flex-col gap-5 relative z-10">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/80 border border-border/60 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                              {project.logo
                                ? <img src={project.logo} alt={project.title} className="w-8 h-8 object-contain" />
                                : project.icon && <project.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                              }
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs font-mono tracking-wider uppercase text-primary font-medium">{project.type}</span>
                                <span className="w-1 h-1 rounded-full bg-border" />
                                <span className="text-xs font-mono text-muted-foreground">{project.date}</span>
                              </div>
                              <p className="text-xs font-mono text-muted-foreground/70 mt-0.5">{project.role}</p>
                            </div>
                          </div>
                          {project.appStoreUrl ? (
                            <a
                              href={project.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 w-9 h-9 rounded-full bg-white/80 border border-border/60 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          ) : (
                            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/80 border border-border/60 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          )}
                        </div>

                        <div>
                          <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground font-light leading-relaxed text-sm">
                            {project.description}
                          </p>
                        </div>

                        {project.highlight && (
                          <div className="flex items-start gap-2 px-3 py-2 rounded-xl bg-primary/8 border border-primary/15">
                            <Trophy className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                            <p className="text-xs text-primary font-medium leading-relaxed">{project.highlight}</p>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 border border-border/60 text-foreground/70">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: photo panel */}
                      <motion.button
                        onClick={() => setLightbox({ projectIndex: i, photoIndex: 0 })}
                        whileHover="hover"
                        className="relative md:w-[42%] h-56 md:h-auto flex-shrink-0 cursor-zoom-in overflow-hidden md:rounded-r-3xl"
                      >
                        <motion.img
                          src={project.photos[0]}
                          alt={project.photoLabels[0]}
                          className="w-full h-full object-cover"
                          variants={{ hover: { scale: 1.05 } }}
                          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 md:bg-none" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="inline-block px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-mono tracking-wide">
                            {project.photoLabels[0]}
                          </span>
                        </div>
                      </motion.button>
                    </div>

                  ) : (
                    /* ── Standard layout (no photo, or gallery) ── */
                    <div className="p-8 md:p-10 flex flex-col gap-6 relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/80 border border-border/60 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                          {project.logo
                            ? <img src={project.logo} alt={project.title} className="w-10 h-10 object-contain" />
                            : project.icon && <project.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                          }
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="text-xs font-mono tracking-wider uppercase text-primary font-medium">{project.type}</span>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span className="text-xs font-mono text-muted-foreground">{project.date}</span>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span className="text-xs font-mono text-muted-foreground">{project.role}</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mb-4">
                            {project.description}
                          </p>
                          {project.highlight && (
                            <div className="flex items-start gap-2 mb-4 px-3 py-2 rounded-xl bg-primary/8 border border-primary/15">
                              <Trophy className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                              <p className="text-xs text-primary font-medium leading-relaxed">{project.highlight}</p>
                            </div>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 border border-border/60 text-foreground/70">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex-shrink-0 self-start">
                          {project.appStoreUrl ? (
                            <a
                              href={project.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-xs font-semibold hover:bg-primary transition-colors duration-300 shadow-sm whitespace-nowrap"
                            >
                              App Store
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-white/80 border border-border/60 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Gallery row for multiple photos */}
                      {hasGallery && (
                        <div className="grid grid-cols-3 gap-2">
                          {project.photos.map((photo, pi) => (
                            <motion.button
                              key={pi}
                              onClick={() => setLightbox({ projectIndex: i, photoIndex: pi })}
                              whileHover="hover"
                              className="relative h-36 md:h-44 rounded-2xl overflow-hidden cursor-zoom-in group/thumb"
                            >
                              <motion.img
                                src={photo}
                                alt={project.photoLabels[pi]}
                                className="w-full h-full object-cover"
                                variants={{ hover: { scale: 1.06 } }}
                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/15 transition-colors duration-300" />
                              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/50 to-transparent translate-y-full group-hover/thumb:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-[10px] font-mono truncate">{project.photoLabels[pi]}</p>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}

          {/* Coming soon */}
          <FadeIn delay={0.35}>
            <div className="flex items-center justify-center min-h-[100px] p-8 rounded-3xl border border-dashed border-border/60 hover:border-primary/30 transition-colors">
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

      {lightbox && (
        <Lightbox
          images={projects[lightbox.projectIndex].photos}
          index={lightbox.photoIndex}
          caption={projects[lightbox.projectIndex].photoLabels[lightbox.photoIndex]}
          onClose={closeLightbox}
          onPrev={projects[lightbox.projectIndex].photos.length > 1 ? prevPhoto : undefined}
          onNext={projects[lightbox.projectIndex].photos.length > 1 ? nextPhoto : undefined}
        />
      )}
    </section>
  );
}
