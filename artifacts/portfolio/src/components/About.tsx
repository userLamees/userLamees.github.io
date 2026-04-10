import { FadeIn } from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">{a.label}</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <FadeIn direction="up">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
                {a.heading1}<br />
                <span className="italic text-primary">{a.heading2}</span>
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <FadeIn delay={0.15}>
              <p className="text-xl text-muted-foreground font-light leading-[1.8]">
                {a.p1}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-lg text-muted-foreground font-light leading-[1.8]">
                {a.p2}
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">{a.location}</p>
                  <p className="text-foreground font-medium">{a.locationValue}</p>
                </div>
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">{a.languages}</p>
                  <p className="text-foreground font-medium">{a.languagesValue}</p>
                </div>
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">{a.specialization}</p>
                  <p className="text-foreground font-medium">{a.specializationValue}</p>
                </div>
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">{a.status}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    <p className="text-foreground font-medium">{a.statusValue}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
