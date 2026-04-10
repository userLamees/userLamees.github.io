import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Lightbox } from "./Lightbox";

import tuwaiqCert from "@/assets/cert-tuwaiq-flutter.jpeg";
import ibmCert from "@assets/1755382025609_1775784182933.jpeg";
import participationCert from "@/assets/cert-participation.jpeg";
import achievementCert from "@/assets/cert-achievement-naadek.jpeg";

const certifications = [
  {
    name: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Coursera",
    date: "Apr 2026",
    color: "from-blue-50 to-indigo-50",
    image: null,
  },
  {
    name: "Flutter Application Developer Certification",
    issuer: "Tuwaiq Academy",
    date: "Aug 2025",
    color: "from-cyan-50 to-teal-50",
    image: tuwaiqCert,
  },
  {
    name: "AI Foundation Program",
    issuer: "Thakaa, KSU",
    date: "Aug 2025",
    color: "from-violet-50 to-purple-50",
    image: null,
  },
  {
    name: "AI Fundamentals with Capstone Project",
    issuer: "IBM SkillsBuild",
    date: "Jul 2025",
    color: "from-blue-50 to-sky-50",
    image: ibmCert,
  },
  {
    name: "Certificate of Appreciation — Student Participation",
    issuer: "IMAMU IS Department",
    date: "2025",
    color: "from-amber-50 to-orange-50",
    image: participationCert,
  },
  {
    name: "Certificate of Appreciation — Student Achievement (Naadek, 1st Place)",
    issuer: "IMAMU IS Department",
    date: "2025",
    color: "from-yellow-50 to-amber-50",
    image: achievementCert,
  },
];

export function Certifications() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const certsWithImages = certifications.map((c, i) => ({ ...c, originalIndex: i })).filter(c => c.image !== null);

  const handleCardClick = (cert: typeof certifications[0]) => {
    if (!cert.image) return;
    const idx = certsWithImages.findIndex(c => c.image === cert.image);
    setLightboxIndex(idx);
  };

  return (
    <section id="certifications" className="py-32 px-6 md:px-12 lg:px-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-line" />
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Certifications</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeIn className="lg:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-foreground">
              Always<br />
              <span className="italic text-primary">learning.</span>
            </h2>
            <p className="mt-5 text-sm text-muted-foreground font-light leading-relaxed">
              Click any certificate to view the full credential.
            </p>
          </FadeIn>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div
                    onClick={() => handleCardClick(cert)}
                    className={`group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-gradient-to-br ${cert.color} border border-border/60 transition-all duration-300 ${
                      cert.image
                        ? "cursor-pointer hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
                        : "cursor-default hover:border-primary/20"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="w-9 h-9 rounded-xl bg-white/80 border border-border/50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <ShieldCheck className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                          {cert.image && (
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                              <ExternalLink className="w-2.5 h-2.5 text-primary" />
                            </div>
                          )}
                        </div>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground leading-snug mb-4">{cert.name}</h3>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">Issued by</span>
                      <span className="text-xs font-semibold text-foreground">{cert.issuer}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={certsWithImages.map(c => c.image as string)}
          index={lightboxIndex}
          caption={certsWithImages[lightboxIndex]?.name}
          onClose={() => setLightboxIndex(null)}
          onPrev={certsWithImages.length > 1 ? () => setLightboxIndex(i => i !== null ? (i - 1 + certsWithImages.length) % certsWithImages.length : 0) : undefined}
          onNext={certsWithImages.length > 1 ? () => setLightboxIndex(i => i !== null ? (i + 1) % certsWithImages.length : 0) : undefined}
        />
      )}
    </section>
  );
}
