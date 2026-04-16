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
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Contact</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div className="lg:col-span-6">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground mb-8">
                Let's build something<br />
                <span className="italic text-primary">meaningful.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-md">
                Open to internship opportunities, collaborations, and conversations about design, technology, and everything in between.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <motion.a
                href="mailto:Lamees1harbi@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors duration-300 shadow-lg"
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
                        className="group flex items-center justify-between p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                        data-testid={`contact-link-${link.label.toLowerCase()}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-xs font-mono text-muted-foreground mb-0.5">{link.label}</p>
                            <p className="text-sm font-medium text-foreground">{link.value}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border">
                        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                          <link.icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-mono text-muted-foreground mb-0.5">{link.label}</p>
                          <p className="text-sm font-medium text-foreground">{link.value}</p>
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
