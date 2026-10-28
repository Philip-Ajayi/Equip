import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  primaryLabel,
  primaryHref,
}: PageHeroProps) {
  return (
    <section className="grid-lines border-b border-black/10">
      <div className="page-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-in">
          <p className="eyebrow">{eyebrow}</p>

          <h1 className="display mt-6 max-w-[800px] text-5xl md:text-7xl">
            {title}
          </h1>

          <p className="section-copy mt-6">{description}</p>

          {primaryLabel && primaryHref && (
            <Link href={primaryHref} className="clay-button mt-7">
              {primaryLabel} <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="image-frame min-h-[280px] lg:min-h-[420px]">
          {image ? (
            <img src={image} alt={imageAlt} className="absolute inset-0" />
          ) : (
            <div className="monolith absolute inset-[13%] min-h-0" />
          )}

          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 rounded-2xl border border-white/50 bg-white/85 p-4 backdrop-blur-lg md:inset-x-5 md:bottom-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5925dc]">
                Project EQUIP 2026
              </p>
              <p className="mt-1 text-sm font-semibold">
                Preparing young people for what comes next.
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs text-black/50">
              01 / 26
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
