import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { Code2, PenTool, BarChart3, Workflow, Smartphone, BrainCircuit, MessageSquare, Lightbulb, Users, ListTodo } from "lucide-react";

const technicalSkills = [
  { name: "SwiftUI", icon: Smartphone },
  { name: "UI/UX Design", icon: PenTool },
  { name: "Flutter", icon: Smartphone },
  { name: "AI/ML Fundamentals", icon: BrainCircuit },
  { name: "System Analysis", icon: Workflow },
  { name: "Power BI", icon: BarChart3 },
];

const softSkills = [
  { name: "Effective Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Teamwork", icon: Users },
  { name: "Multitasking", icon: ListTodo },
];

export function Skills() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Capabilities." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Technical Skills */}
          <div>
            <FadeIn delay={0.1}>
              <h3 className="text-xl font-medium text-foreground mb-8 pb-4 border-b border-border">Technical</h3>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <FadeIn key={skill.name} delay={0.2 + index * 0.05}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary transition-colors">
                    <skill.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <FadeIn delay={0.2}>
              <h3 className="text-xl font-medium text-foreground mb-8 pb-4 border-b border-border">Professional</h3>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <FadeIn key={skill.name} delay={0.3 + index * 0.05}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary transition-colors">
                    <skill.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
