import { FadeIn } from "./FadeIn";
import { ShieldCheck } from "lucide-react";

const certifications = [
  {
    name: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Coursera",
    date: "Apr 2026",
    color: "from-blue-50 to-indigo-50",
  },
  {
    name: "Flutter Application Developer Certification",
    issuer: "Tuwaiq Academy",
    date: "Aug 2025",
    color: "from-cyan-50 to-teal-50",
  },
  {
    name: "AI Foundation Program",
    issuer: "Thakaa, KSU",
    date: "Aug 2025",
    color: "from-violet-50 to-purple-50",
  },
  {
    name: "AI Fundamentals with Capstone Project",
    issuer: "IBM SkillsBuild",
    date: "Jul 2025",
    color: "from-blue-50 to-sky-50",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6 md:px-12 lg:px-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Certifications</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeIn className="lg:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-foreground">
              Always<br />
              <span className="italic text-primary">learning.</span>
            </h2>
          </FadeIn>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className={`group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-gradient-to-br ${cert.color} border border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-400`}>
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="w-9 h-9 rounded-xl bg-white/80 border border-border/50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <ShieldCheck className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground leading-snug mb-4">{cert.name}</h3>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">Issued by</span>
                      <span className="text-xs font-semibold text-foreground">{cert.issuer}</span>
                    </div>
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
