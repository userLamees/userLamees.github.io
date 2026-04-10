import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    title: "First Place Winner — University Solutions Hackathon",
    date: "April 2025",
    description: "Designed 'Naadek,' a student engagement platform that won first place. The platform focused on enhancing student connectivity and club discovery.",
    icon: Trophy
  },
  {
    title: "Certificate of Appreciation — Student Participation",
    date: "2024",
    description: "Honored for designing the Annual Report and enhancing the department's visual identity with a cohesive design system.",
    icon: Award
  }
];

export function Achievements() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Honors & Awards." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/30 hover:bg-secondary/40 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm text-primary">
                  <achievement.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-mono text-muted-foreground mb-3">{achievement.date}</div>
                <h3 className="text-xl font-medium text-foreground mb-4">{achievement.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{achievement.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
