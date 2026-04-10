import { FadeIn } from "./FadeIn";
import { Mail, ArrowRight, Linkedin, Github, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const links = [
    {
      icon: Mail,
      label: c.emailLabel,
      value: "Lamees1harbi@gmail.com",
      href: "mailto:Lamees1harbi@gmail.com",
    },
    {
      icon: Linkedin,
      label: c.linkedinLabel,
      value: "@LamisAlharbi",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: c.githubLabel,
      value: "GitHub Profile",
      href: "https://github.com",
    },
    {
      icon: MapPin,
      label: c.locationLabel,
      value: t.about.locationValue,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">{c.label}</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div className="lg:col-span-6">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground mb-8">
                {c.heading1}<br />
                <span className="italic text-primary">{c.heading2}</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-md">
                {c.subtext}
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
                {c.cta}
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
                        data-testid={`contact-link-${i}`}
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
