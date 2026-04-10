import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const experiences = [
  {
    role: "Media Team Leader",
    organization: "Advisory Student Council — Information Systems Dept.",
    period: "August 2025 – Current",
    description: "Leading the media team to create engaging content and strengthen the department's digital presence and communication strategy."
  },
  {
    role: "Dedicated Volunteer",
    organization: "National Volunteer Portal",
    period: "Ongoing",
    description: "Contributed 260+ certified volunteer hours towards various community and technological initiatives."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Experience & Volunteering." />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 p-8 rounded-2xl bg-background border border-border/50 hover:shadow-sm transition-all duration-300">
                <div className="md:w-1/3 shrink-0">
                  <div className="text-sm font-mono text-primary mb-2">{exp.period}</div>
                  <h3 className="text-xl font-medium text-foreground">{exp.role}</h3>
                  <div className="text-muted-foreground mt-1">{exp.organization}</div>
                </div>
                <div className="md:w-2/3 flex items-center">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
