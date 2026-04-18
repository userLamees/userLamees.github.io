import { FadeIn } from "./FadeIn";
import { GraduationCap, Apple } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Computer Information Systems",
    institution: "Imam Mohammad Ibn Saud Islamic University",
    period: "2022 – 2026",
    badge: "In Progress",
  },
  {
    icon: Apple,
    degree: "First Year Program",
    institution: "Apple Developer Academy",
    period: "Aug 2025 – Present",
    badge: "Current",
  },
];

export function Education() {
  return (
    <section id="education" className="py-32 px-6 md:px-12 lg:px-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Education</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeIn className="lg:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-foreground">
              Where I've<br />
              <span className="italic text-primary">learned.</span>
            </h2>
          </FadeIn>

          <div className="lg:col-span-8 space-y-6">
            {items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="group relative flex gap-6 p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-400">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground leading-tight">{item.degree}</h3>
                        <p className="text-primary font-medium text-sm mt-0.5">{item.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-right">
                        <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{item.period}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{item.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
