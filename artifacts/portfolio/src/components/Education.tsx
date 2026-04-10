import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const educationData = [
  {
    degree: "Bachelor of Computer Information Systems",
    institution: "Imam Mohammad Ibn Saud Islamic University",
    period: "August 2022 – 2026",
    details: "GPA: 4.40 / 5.00",
  },
  {
    degree: "First Year Program",
    institution: "Apple Developer Academy",
    period: "August 2025 – Current",
    details: "Intensive training in iOS development, design, and professional skills.",
  }
];

export function Education() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Education." />
        
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative pl-8 md:pl-0">
                {/* Timeline line for mobile */}
                <div className="absolute left-[11px] top-2 bottom-[-48px] w-px bg-border md:hidden last:hidden"></div>
                {/* Timeline dot for mobile */}
                <div className="absolute left-2 top-2 w-2 h-2 rounded-full bg-primary md:hidden"></div>

                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-medium text-foreground">
                    {item.degree}
                  </h3>
                  <span className="text-sm md:text-base font-mono text-muted-foreground mt-1 md:mt-0 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-lg text-primary font-medium mb-3">
                  {item.institution}
                </h4>
                <p className="text-muted-foreground font-light max-w-3xl">
                  {item.details}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
