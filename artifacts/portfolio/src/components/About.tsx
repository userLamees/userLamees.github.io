import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">About</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — headline */}
          <div className="lg:col-span-5">
            <FadeIn direction="up">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
                Building things people<br />
                <span className="italic text-primary">love to use.</span>
              </h2>
            </FadeIn>
          </div>

          {/* Right — copy + meta */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn delay={0.15}>
              <p className="text-xl text-muted-foreground font-light leading-[1.8]">
                I'm Lamis — a CIS student who got hooked on one simple question: why do some apps feel effortless while others feel like a chore? That curiosity led me to design and iOS development, and I haven't looked back since.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-lg text-muted-foreground font-light leading-[1.8]">
                I care about the details — the tap that feels satisfying, the layout that just makes sense, the flow you never have to think about. Whether I'm in Figma or writing SwiftUI, I'm always asking: does this actually feel good? I want to bring that mindset into a team that cares about the same things.
              </p>
            </FadeIn>

            {/* Meta grid */}
            <FadeIn delay={0.35}>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Location</p>
                  <p className="text-foreground font-medium">Riyadh, Saudi Arabia</p>
                </div>
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Languages</p>
                  <p className="text-foreground font-medium">Arabic · English</p>
                </div>
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Specialization</p>
                  <p className="text-foreground font-medium">iOS · UI/UX · AI</p>
                </div>
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    <p className="text-foreground font-medium">Open to opportunities</p>
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
