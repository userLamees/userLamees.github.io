import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";
import {
  Smartphone, PenTool, BarChart3, Workflow, BrainCircuit,
  MessageSquare, Lightbulb, Users, ListTodo, Code2
} from "lucide-react";

const technicalSkills = [
  { name: "SwiftUI", icon: Smartphone, level: 90 },
  { name: "UI/UX Design", icon: PenTool, level: 88 },
  { name: "Figma & Sketch", icon: PenTool, level: 85 },
  { name: "Flutter", icon: Code2, level: 75 },
  { name: "Power BI", icon: BarChart3, level: 80 },
  { name: "System Analysis", icon: Workflow, level: 82 },
  { name: "AI/ML Fundamentals", icon: BrainCircuit, level: 70 },
];

const softSkills = [
  { name: "Effective Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Teamwork", icon: Users },
  { name: "Multitasking", icon: ListTodo },
];

const tools = ["Figma", "Sketch", "Xcode", "Swift", "SwiftUI", "Flutter", "Power BI", "Canva", "Git"];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
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
          {/* Technical with progress bars */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-8 pb-4 border-b border-border">Technical Skills</h3>
              <div className="space-y-5">
                {technicalSkills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <skill.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
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
                      <skill.icon className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium text-foreground leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 pb-4 border-b border-border">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-card border border-border text-foreground/80 hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
