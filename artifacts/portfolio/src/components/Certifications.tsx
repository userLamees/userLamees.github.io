import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { ShieldCheck, Trophy, ExternalLink } from "lucide-react";
import { Lightbox } from "./Lightbox";
import { useLanguage } from "@/contexts/LanguageContext";

import tuwaiqCert from "@/assets/cert-tuwaiq-flutter.jpeg";
import ibmCert from "@assets/1755382025609_1775784182933.jpeg";
import participationCert from "@/assets/cert-participation.jpeg";
import achievementCert from "@/assets/cert-achievement-naadek.jpeg";

const professionalImages = [null, tuwaiqCert as string | null, null, ibmCert as string | null];
const professionalColors = [
  "from-blue-50 to-indigo-50",
  "from-cyan-50 to-teal-50",
  "from-violet-50 to-purple-50",
  "from-blue-50 to-sky-50",
];

const awardsImages = [participationCert as string | null, achievementCert as string | null];
const awardsColors = ["from-amber-50 to-orange-50", "from-yellow-50 to-amber-50"];

type LightboxPool = { images: string[]; index: number };

export function Certifications() {
  const { t } = useLanguage();
  const c = t.certifications;

  const [lightbox, setLightbox] = useState<LightboxPool | null>(null);

  const openPool = (images: Array<string | null>, clickedIndex: number) => {
    const withImages = images.map((img, i) => ({ img, i })).filter(x => x.img);
    const posInPool = withImages.findIndex(x => x.i === clickedIndex);
    if (posInPool === -1) return;
    setLightbox({ images: withImages.map(x => x.img as string), index: posInPool });
  };

  const CertCard = ({
    name,
    issuer,
    date,
    detail,
    color,
    image,
    poolImages,
    poolIndex,
    delay,
    icon: Icon,
  }: {
    name: string;
    issuer: string;
    date: string;
    detail?: string;
    color: string;
    image: string | null;
    poolImages: Array<string | null>;
    poolIndex: number;
    delay: number;
    icon: typeof ShieldCheck;
  }) => (
    <FadeIn delay={delay}>
      <div
        onClick={() => image && openPool(poolImages, poolIndex)}
        className={`group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-gradient-to-br ${color} border border-border/60 transition-all duration-300 ${
          image
            ? "cursor-pointer hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
            : "cursor-default"
        }`}
      >
        <div>
          <div className="flex items-start justify-between gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-white/80 border border-border/50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground">{date}</span>
              {image && (
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <ExternalLink className="w-2.5 h-2.5 text-primary" />
                </div>
              )}
            </div>
          </div>
          <h3 className="text-sm font-semibold text-foreground leading-snug mb-2">{name}</h3>
          {detail && (
            <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1 mb-2">{detail}</p>
          )}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="text-xs text-muted-foreground">{c.issuedBy}</span>
          <span className="text-xs font-semibold text-foreground">{issuer}</span>
        </div>
      </div>
    </FadeIn>
  );

  return (
    <section id="certifications" className="py-32 px-6 md:px-12 lg:px-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ── Professional Certifications ── */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <span className="section-line" />
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">{c.proLabel}</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-4">
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-foreground">
                {c.proHeading1}<br />
                <span className="italic text-primary">{c.proHeading2}</span>
              </h2>
              <p className="mt-5 text-sm text-muted-foreground font-light leading-relaxed">
                {c.proSubtext}
              </p>
            </FadeIn>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {c.professional.map((cert, i) => (
                  <CertCard
                    key={i}
                    name={cert.name}
                    issuer={cert.issuer}
                    date={cert.date}
                    color={professionalColors[i]}
                    image={professionalImages[i]}
                    poolImages={professionalImages}
                    poolIndex={i}
                    delay={i * 0.07}
                    icon={ShieldCheck}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Awards & Recognition ── */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <span className="section-line" />
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">{c.awardsLabel}</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-4">
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-foreground">
                {c.awardsHeading1}<br />
                <span className="italic text-primary">{c.awardsHeading2}</span>
              </h2>
              <p className="mt-5 text-sm text-muted-foreground font-light leading-relaxed">
                {c.awardsSubtext}
              </p>
            </FadeIn>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {c.awards.map((award, i) => (
                  <CertCard
                    key={i}
                    name={award.name}
                    issuer={award.issuer}
                    date={award.date}
                    detail={award.detail}
                    color={awardsColors[i]}
                    image={awardsImages[i]}
                    poolImages={awardsImages}
                    poolIndex={i}
                    delay={i * 0.1}
                    icon={Trophy}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          caption={undefined}
          onClose={() => setLightbox(null)}
          onPrev={
            lightbox.images.length > 1
              ? () => setLightbox(lb => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : null)
              : undefined
          }
          onNext={
            lightbox.images.length > 1
              ? () => setLightbox(lb => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null)
              : undefined
          }
        />
      )}
    </section>
  );
}
