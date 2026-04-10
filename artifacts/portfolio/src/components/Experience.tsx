import { FadeIn } from "./FadeIn";
import { Users, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Users, Heart];

export function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">{e.label}</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeIn className="lg:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-foreground">
              {e.heading1}<br />
              <span className="italic text-primary">{e.heading2}</span>
            </h2>
          </FadeIn>

          <div className="lg:col-span-8 space-y-5">
            {e.items.map((exp, i) => {
              const Icon = icons[i];
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group flex gap-6 p-8 rounded-3xl bg-card border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-400">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">{exp.type}</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{exp.badge}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                          <p className="text-primary text-sm font-medium">{exp.organization}</p>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed mt-3">{exp.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
