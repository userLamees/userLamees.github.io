import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  PenTool, BarChart3, Workflow, BrainCircuit, Smartphone, Layers,
  MessageSquare, Lightbulb, Users, ListTodo,
} from "lucide-react";

import figmaLogo from "@/assets/logos/figma.svg";
import sketchLogo from "@/assets/logos/sketch.svg";
import xcodeLogo from "@/assets/logos/xcode.svg";
import swiftLogo from "@/assets/logos/swift.svg";
import flutterLogo from "@/assets/logos/flutter.svg";
import gitLogo from "@/assets/logos/git.svg";
import canvaLogo from "@/assets/logos/canva.svg";

type SkillItem = { name: string; icon?: LucideIcon; logo?: string };

function LogoIcon({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-4 h-4 object-contain" />;
}

const technicalSkills: SkillItem[] = [
  { name: "iOS Development", icon: Smartphone },
  { name: "UI/UX Design", icon: PenTool },
  { name: "Cross-Platform Development", icon: Layers },
  { name: "Data Analysis", icon: BarChart3 },
  { name: "System Analysis", icon: Workflow },
  { name: "AI/ML Fundamentals", icon: BrainCircuit },
];

const softSkills: SkillItem[] = [
  { name: "Effective Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Teamwork", icon: Users },
  { name: "Multitasking", icon: ListTodo },
];

const tools: SkillItem[] = [
  { name: "Figma", logo: figmaLogo },
  { name: "Sketch", logo: sketchLogo },
  { name: "Xcode", logo: xcodeLogo },
  { name: "Swift", logo: swiftLogo },
  { name: "Flutter", logo: flutterLogo },
  { name: "Power BI", icon: BarChart3 },
  { name: "Canva", logo: canvaLogo },
  { name: "Git", logo: gitLogo },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono text-primary-text tabular-nums">03</span>
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Capabilities</span>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-16">
            What I<br />
            <span className="italic text-primary">bring to the table.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Technical skills */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-8 pb-4 border-b border-border">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {technicalSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/50 border border-border/60 hover:bg-secondary hover:border-border transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {skill.logo ? (
                        <LogoIcon src={skill.logo} alt={skill.name} />
                      ) : skill.icon ? (
                        <skill.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      ) : null}
                    </div>
                    <span className="text-sm font-medium text-foreground leading-tight">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Soft skills as cards + tools */}
          <FadeIn delay={0.15}>
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-8 pb-4 border-b border-border">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-3 mb-12">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/50 border border-border/60 hover:bg-secondary hover:border-border transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {skill.icon ? <skill.icon className="w-3.5 h-3.5 text-primary" strokeWidth={2} /> : null}
                    </div>
                    <span className="text-sm font-medium text-foreground leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>

        {/* Tools & Technologies — scrolling logo strip */}
        <FadeIn delay={0.2}>
          <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 pb-4 border-b border-border">Tools & Technologies</h3>
        </FadeIn>
      </div>

      <FadeIn delay={0.25}>
        <div
          className="relative overflow-hidden py-2"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
        >
          <motion.div
            className="flex items-center gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          >
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-secondary/50 border border-border/60 flex-shrink-0"
              >
                {tool.logo ? (
                  <LogoIcon src={tool.logo} alt={tool.name} />
                ) : tool.icon ? (
                  <tool.icon className="w-4 h-4 text-foreground/70" />
                ) : null}
                <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
