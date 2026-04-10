import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Coursera",
    date: "April 2026"
  },
  {
    name: "Flutter Application Developer Certification",
    issuer: "Tuwaiq Academy",
    date: "August 2025"
  },
  {
    name: "AI Foundation Program",
    issuer: "Thakaa, KSU",
    date: "August 2025"
  },
  {
    name: "AI Fundamentals with Capstone Project",
    issuer: "IBM SkillsBuild",
    date: "July 2025"
  }
];

export function Certifications() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-card border-y border-border/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Certifications." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group flex flex-col justify-between p-6 h-full rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/20 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">{cert.date}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2 leading-tight">{cert.name}</h3>
                </div>
                <div className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border/50">
                  Issued by <span className="font-medium text-foreground">{cert.issuer}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
