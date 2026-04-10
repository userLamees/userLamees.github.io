import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-5">
            <SectionHeading 
              title="About Me." 
              subtitle="Driven by curiosity, grounded in detail."
            />
          </div>
          
          <div className="md:col-span-7 space-y-8">
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                As a Computer Information Systems student, I'm fascinated by the intersection of human psychology and technology. I don't just write code; I design experiences that feel intuitive, elegant, and purposeful.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                My approach is rooted in precision. Whether I'm crafting a complex SwiftUI interface or architecting a user flow in Figma, I believe that the smallest details often make the biggest impact. I am eager to apply my technical skills to deliver high-impact results that matter.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <FadeIn delay={0.4}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Riyadh, Saudi Arabia</p>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2">Languages</h4>
                <p className="text-muted-foreground">Arabic (Native)<br />English (Professional)</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
