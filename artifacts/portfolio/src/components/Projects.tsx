import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Trophy, MapPin, Camera } from "lucide-react";
import { Lightbox } from "./Lightbox";

import jasminePoster from "@assets/poster_jamsine_1775783984115.png";
import icanPhoto1 from "@assets/ca908562-f427-4d37-ab7f-abd98895e4ae_1775784122191.jpeg";
import icanPhoto2 from "@assets/FullSizeRender_1775784122191.jpeg";
import naadekWin from "@assets/1753316461820_1775784843373.jpeg";

const projects = [
  {
    index: "01",
    title: "Jasmine",
    type: "Graduation Project",
    date: "Dec 2025",
    role: "iOS Developer · ML Engineer",
    description: "An AI-powered iOS application for skin condition assessment. Users photograph their skin and receive personalized care recommendations powered by image recognition — bridging healthcare and technology for everyday users.",
    highlight: "Selected as the only team from our batch to present at ICAN 2026.",
    technologies: ["SwiftUI", "Core ML", "Vision", "iOS"],
    accent: "from-rose-50 to-orange-50",
    icon: Sparkles,
    link: "#",
    photos: [jasminePoster, icanPhoto1, icanPhoto2],
    photoLabels: ["Project Poster", "ICAN 2026 Conference", "ICAN 2026 — Jasmine Demo"],
  },
  {
    index: "02",
    title: "Naadek",
    type: "Hackathon — 1st Place",
    date: "Apr 2025",
    role: "Project Manager",
    description: "First place at the University Solutions Hackathon. A student engagement platform integrating club discovery and task management — built around UI/UX best practices to meaningfully enhance campus connectivity.",
    highlight: null,
    technologies: ["UI/UX Design", "Figma", "System Design", "Prototyping"],
    accent: "from-amber-50 to-yellow-50",
    icon: Trophy,
    link: "#",
    photos: [naadekWin],
    photoLabels: ["1st Place — University Solutions Hackathon"],
  },
  {
    index: "03",
    title: "Haik | حيك",
    type: "Academic Project",
    date: "2025",
    role: "Project Manager",
    description: "An app designed to help users relocate by exploring neighborhoods individually, viewing available services and amenities, and comparing neighborhood ratings. Uses a recommendation system to suggest the most suitable neighborhoods based on work location, schools, and personal needs.",
    highlight: null,
    technologies: ["UI/UX Design", "Figma", "Recommendation Systems", "Project Management"],
    accent: "from-teal-50 to-emerald-50",
    icon: MapPin,
    link: "#",
    photos: [],
    photoLabels: [],
  },
];

interface LightboxState { projectIndex: number; photoIndex: number }

export function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (projectIndex: number, photoIndex: number) => {
    setLightbox({ projectIndex, photoIndex });
  };

  const closeLightbox = () => setLightbox(null);

  const prevPhoto = () => {
    if (!lightbox) return;
    const photos = projects[lightbox.projectIndex].photos;
    setLightbox({ ...lightbox, photoIndex: (lightbox.photoIndex - 1 + photos.length) % photos.length });
  };

  const nextPhoto = () => {
    if (!lightbox) return;
    const photos = projects[lightbox.projectIndex].photos;
    setLightbox({ ...lightbox, photoIndex: (lightbox.photoIndex + 1) % photos.length });
  };

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
              <div
                className={`group relative flex flex-col gap-6 p-8 md:p-10 rounded-3xl border border-border bg-gradient-to-br ${project.accent} hover:border-primary/30 hover:shadow-lg transition-all duration-500 overflow-hidden`}
                data-testid={`project-card-${project.title.toLowerCase().replace(/\s.*/, "")}`}
              >
                {/* Ghost index */}
                <div className="absolute top-8 right-8 font-mono text-7xl font-bold text-foreground/[0.04] select-none leading-none">
                  {project.index}
                </div>

                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/80 border border-border/60 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                    <project.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-mono tracking-wider uppercase text-primary font-medium">
                        {project.type}
                      </span>
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
                  <div className="flex-shrink-0 self-start">
                    <div className="w-10 h-10 rounded-full bg-white/80 border border-border/60 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Photo section */}
                {project.photos.length === 1 && (
                  <motion.button
                    onClick={() => openLightbox(i, 0)}
                    whileHover="hover"
                    className="relative w-full h-32 md:h-40 rounded-2xl overflow-hidden cursor-zoom-in mt-2 group/photo"
                  >
                    <motion.img
                      src={project.photos[0]}
                      alt={project.photoLabels[0]}
                      className="w-full h-full object-cover"
                      variants={{ hover: { scale: 1.04 } }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Label badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-mono tracking-wide">
                        {project.photoLabels[0]}
                      </span>
                    </div>
                    {/* Zoom hint */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                      <div className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono tracking-wide flex items-center gap-1.5">
                        <Camera className="w-3 h-3" />
                        View
                      </div>
                    </div>
                  </motion.button>
                )}

                {project.photos.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {/* Featured first photo */}
                    <motion.button
                      onClick={() => openLightbox(i, 0)}
                      whileHover="hover"
                      className="col-span-2 relative h-32 md:h-40 rounded-2xl overflow-hidden cursor-zoom-in group/photo"
                    >
                      <motion.img
                        src={project.photos[0]}
                        alt={project.photoLabels[0]}
                        className="w-full h-full object-cover"
                        variants={{ hover: { scale: 1.05 } }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-wide">
                          {project.photoLabels[0]}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                        <div className="px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono flex items-center gap-1">
                          <Camera className="w-2.5 h-2.5" />
                          View
                        </div>
                      </div>
                    </motion.button>

                    {/* Side thumbnails */}
                    <div className="col-span-1 flex flex-col gap-2">
                      {project.photos.slice(1).map((photo, pi) => (
                        <motion.button
                          key={pi}
                          onClick={() => openLightbox(i, pi + 1)}
                          whileHover="hover"
                          className="relative flex-1 rounded-xl overflow-hidden cursor-zoom-in group/thumb"
                        >
                          <motion.img
                            src={photo}
                            alt={project.photoLabels[pi + 1]}
                            className="w-full h-full object-cover"
                            variants={{ hover: { scale: 1.06 } }}
                            transition={{ duration: 0.4 }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors duration-300" />
                        </motion.button>
                      ))}
                      {project.photos.length > 1 && (
                        <p className="text-[10px] font-mono text-muted-foreground text-center pt-0.5">
                          +{project.photos.length - 1} more
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}

          {/* Coming soon */}
          <FadeIn delay={0.35}>
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

      {/* Lightbox */}
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
