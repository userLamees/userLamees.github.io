import { FadeIn } from "./FadeIn";
import { Trophy, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "First Place — University Solutions Hackathon",
    date: "April 2025",
    description: "Designed and prototyped \"Naadek\" — a student engagement platform integrating club discovery and task management using UI/UX best practices to enhance student connectivity.",
    highlight: true,
  },
  {
    icon: Star,
    title: "Certificate of Appreciation — Student Participation",
    date: "2024",
    description: "Honored for enhancing the department's visual identity by designing the Annual Report and supporting student initiatives through high-quality graphic design work.",
    highlight: false,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 md:px-12 lg:px-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Achievements</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeIn className="lg:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-foreground">
              Recognized<br />
              <span className="italic text-primary">for impact.</span>
            </h2>
          </FadeIn>

          <div className="lg:col-span-8 space-y-5">
            {achievements.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`group relative overflow-hidden flex gap-5 p-8 rounded-3xl border transition-all duration-400 ${
                  item.highlight
                    ? "bg-primary/5 border-primary/20 hover:border-primary/40 hover:shadow-md"
                    : "bg-card border-border hover:border-primary/20 hover:shadow-sm"
                }`}>
                  {item.highlight && (
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  )}

                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                    item.highlight ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                  }`}>
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 relative">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <h3 className="text-base font-semibold text-foreground leading-tight max-w-lg">{item.title}</h3>
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{item.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
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
