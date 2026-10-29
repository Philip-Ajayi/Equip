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
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0b132e] via-[#080d22] to-[#050b18]">
      {/* Ambient Velvet Glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#5925dc]/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-[100px]" />

      <div className="page-shell relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-in">
          <p className="eyebrow">{eyebrow}</p>

          <h1 className="display mt-6 max-w-[800px] text-5xl md:text-7xl">
            {title}
          </h1>

          <p className="section-copy mt-6 text-slate-300">{description}</p>

          {primaryLabel && primaryHref && (
            <Link href={primaryHref} className="clay-button mt-8">
              {primaryLabel} <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="image-frame min-h-[300px] overflow-hidden rounded-3xl border border-white/15 bg-[#0e1736] shadow-2xl lg:min-h-[420px]">
          {image ? (
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-[#160b30] to-[#0e1736]" />
          )}

          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 rounded-2xl border border-white/10 bg-[#050b18]/85 p-5 backdrop-blur-md md:inset-x-5 md:bottom-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d4af37]">
                Project EQUIP 2026
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Preparing young people for what comes next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}