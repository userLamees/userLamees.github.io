import { FadeIn } from "./FadeIn";
import { Mail, ArrowRight, Linkedin, Github, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "Lamees1harbi@gmail.com",
    href: "mailto:Lamees1harbi@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "lamis-alharbi",
    href: "https://www.linkedin.com/in/lamis-alharbi-a666a229b",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "userLamees",
    href: "https://github.com/userLamees",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Riyadh, Saudi Arabia",
    href: null,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-foreground rounded-t-[2.5rem] md:rounded-t-[3.5rem]"
    >
      {/* Oversized ghost word — editorial flourish */}
      <div
        aria-hidden
        className="absolute -bottom-10 left-0 right-0 text-center font-serif italic text-[18vw] leading-none text-background/[0.04] select-none pointer-events-none whitespace-nowrap"
      >
        Say hello
      </div>

      <div className="relative max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="w-8 h-px bg-primary inline-block" />
            <span className="text-xs font-mono text-primary tabular-nums">08</span>
            <span className="text-xs font-mono tracking-widest uppercase text-background/50">Contact</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div className="lg:col-span-6">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-background mb-8">
                Let's build something<br />
                <span className="italic text-primary">meaningful.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-background/60 font-light leading-relaxed mb-12 max-w-md">
                Open to internships and collaborations — let's talk.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <motion.a
                href="mailto:Lamees1harbi@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg"
                data-testid="contact-email-btn"
              >
                Say Hello
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </FadeIn>
          </div>

          {/* Right — contact links */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.15}>
              <div className="space-y-3">
                {links.map((link, i) => (
                  <FadeIn key={link.label} delay={0.2 + i * 0.07}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-5 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/40 hover:bg-background/[0.07] transition-all duration-300"
                        data-testid={`contact-link-${link.label.toLowerCase()}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <link.icon className="w-4 h-4 text-background/70 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-xs font-mono text-background/40 mb-0.5">{link.label}</p>
                            <p className="text-sm font-medium text-background">{link.value}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-background/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-background/5 border border-background/10">
                        <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                          <link.icon className="w-4 h-4 text-background/70" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-mono text-background/40 mb-0.5">{link.label}</p>
                          <p className="text-sm font-medium text-background">{link.value}</p>
                        </div>
                      </div>
                    )}
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
