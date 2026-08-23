import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { ShieldCheck, Trophy, ExternalLink } from "lucide-react";
import { Lightbox } from "./Lightbox";

import tuwaiqCert from "@/assets/cert-tuwaiq-flutter.jpeg";
import ibmCert from "@assets/1755382025609_1775784182933.jpeg";
import participationCert from "@/assets/cert-participation.jpeg";
import achievementCert from "@/assets/cert-achievement-naadek.jpeg";

const professional = [
  {
    name: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Microsoft · Coursera",
    date: "Apr 2026",
    color: "from-blue-50 to-indigo-50",
    image: null as string | null,
    verifyUrl: "https://coursera.org/verify/TG5ASXVAPYQZ",
  },
  {
    name: "Flutter Application Developer Certification",
    issuer: "Tuwaiq Academy",
    date: "Aug 2025",
    color: "from-cyan-50 to-teal-50",
    image: tuwaiqCert as string | null,
    verifyUrl: null as string | null,
  },
  {
    name: "AI Foundation Program",
    issuer: "Thakaa Center · KSU",
    date: "Aug 2025",
    color: "from-violet-50 to-purple-50",
    image: null as string | null,
    verifyUrl: "/certs/ksu-ai-foundation.pdf",
  },
  {
    name: "AI Fundamentals with Capstone Project",
    issuer: "IBM SkillsBuild",
    date: "Jul 2025",
    color: "from-blue-50 to-sky-50",
    image: ibmCert as string | null,
    verifyUrl: null as string | null,
  },
];

const awards = [
  {
    name: "Certificate of Appreciation — Student Participation",
    issuer: "IMAMU, IS Department",
    date: "2025",
    detail: "Recognised for participation and interaction in designing the IS Student Council.",
    color: "from-amber-50 to-orange-50",
    image: participationCert as string | null,
  },
  {
    name: "Certificate of Appreciation — Student Achievement",
    issuer: "IMAMU, IS Department",
    date: "2025",
    detail: "1st place at the University Solutions Hackathon (Naadek project).",
    color: "from-yellow-50 to-amber-50",
    image: achievementCert as string | null,
  },
];

type LightboxPool = { images: string[]; index: number };

export function Certifications() {
  const [lightbox, setLightbox] = useState<LightboxPool | null>(null);

  const openPool = (pool: Array<{ image: string | null }>, clickedIndex: number) => {
    const withImages = pool.map((c, i) => ({ image: c.image, originalIndex: i })).filter(c => c.image);
    const posInPool = withImages.findIndex(c => c.originalIndex === clickedIndex);
    if (posInPool === -1) return;
    setLightbox({ images: withImages.map(c => c.image as string), index: posInPool });
  };

  const CertCard = ({
    item,
    pool,
    poolIndex,
    delay,
    icon: Icon,
  }: {
    item: { name: string; issuer: string; date: string; color: string; image: string | null; verifyUrl?: string | null; detail?: string };
    pool: Array<{ image: string | null }>;
    poolIndex: number;
    delay: number;
    icon: typeof ShieldCheck;
  }) => {
    const isClickable = !!(item.image || item.verifyUrl);
    const handleClick = () => {
      if (item.verifyUrl) {
        window.open(item.verifyUrl, "_blank", "noopener,noreferrer");
      } else if (item.image) {
        openPool(pool, poolIndex);
      }
    };
    return (
      <FadeIn delay={delay}>
        <div
          onClick={handleClick}
          className={`group relative flex flex-col justify-between h-full p-6 rounded-xl bg-card border border-border/60 transition-all duration-300 ${
            isClickable
              ? "cursor-pointer hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              : "cursor-default"
          }`}
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-secondary border border-border/50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground">{item.date}</span>
                {isClickable && (
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <ExternalLink className="w-2.5 h-2.5 text-primary" />
                  </div>
                )}
              </div>
            </div>
            <h3 className="text-sm font-semibold text-foreground leading-snug mb-2">{item.name}</h3>
            {"detail" in item && item.detail && (
              <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1 mb-2">{item.detail}</p>
            )}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <span className="text-xs text-muted-foreground">Issued by</span>
            <span className="text-xs font-semibold text-foreground">{item.issuer}</span>
          </div>
        </div>
      </FadeIn>
    );
  };

  return (
    <section id="certifications" className="py-32 px-6 md:px-12 lg:px-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ── Professional Certifications ── */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <span className="section-line" />
              <span className="text-xs font-mono text-primary tabular-nums">07</span>
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
                Click any card to view the certificate.
              </p>
            </FadeIn>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {professional.map((cert, i) => (
                  <CertCard
                    key={i}
                    item={cert}
                    pool={professional}
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
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Awards & Recognition</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-4">
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-foreground">
                Making an<br />
                <span className="italic text-primary">impact.</span>
              </h2>
              <p className="mt-5 text-sm text-muted-foreground font-light leading-relaxed">
                Click any card to view the certificate.
              </p>
            </FadeIn>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {awards.map((award, i) => (
                  <CertCard
                    key={i}
                    item={award}
                    pool={awards}
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
