import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-20 ${alignment === "center" ? "text-center" : ""}`}>
      <FadeIn direction="up">
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-foreground mb-4">
          {title}
        </h2>
      </FadeIn>
      
      {subtitle && (
        <FadeIn direction="up" delay={0.1}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-light">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
