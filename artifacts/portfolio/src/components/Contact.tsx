import { FadeIn } from "./FadeIn";
import { Mail, ArrowRight, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn direction="up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8 mx-auto">
            <Mail className="w-8 h-8" />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-foreground mb-6">
            Let's build something <br className="hidden sm:block" />
            <span className="text-muted-foreground">meaningful.</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12">
            Currently open to new opportunities, collaborations, and conversations about design, technology, and everything in between.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <a 
            href="mailto:Lamees1harbi@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            data-testid="contact-email-btn"
          >
            Say Hello
            <ArrowRight className="w-5 h-5" />
          </a>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <a 
              href="mailto:Lamees1harbi@gmail.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span>Lamees1harbi@gmail.com</span>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span>@LamisAlharbi</span>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span>GitHub</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
