import Link from "next/link";
import PageHero from "@/components/page-hero";
import { initiative } from "@/data/initiative";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Growing people, one meaningful step at a time."
        description="Our programs are designed to help young people grow in character, find guidance, and build the skills to take their next steps with confidence."
        primaryLabel="Explore Project EQUIP"
        primaryHref="/programs/equip-2026"
      />

      <section className="section-space">
        <div className="page-shell space-y-5">
          {initiative.programs.map((program) => (
            <article
              key={program.number}
              className="grid gap-6 rounded-3xl border border-white/10 bg-[#0e1736] p-6 md:grid-cols-[100px_1fr_auto] md:items-center md:p-9"
            >
              <span className="font-mono text-3xl text-[#5925dc]">
                {program.number}
              </span>
              <div>
                <p className="eyebrow">{program.status}</p>
                <h2 className="display mt-3 text-3xl md:text-4xl">
                  {program.title}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                  {program.description}
                </p>
              </div>
              <Link
                href={
                  program.number === "03"
                    ? "/programs/equip-2026"
                    : "/about"
                }
                className="outline-button"
              >
                Explore <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="page-shell">
          <div className="rounded-3xl bg-[#0a0f1d] p-8 text-white md:p-12">
            <p className="eyebrow text-[#e9ae56]">Our current focus</p>
            <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
              Project EQUIP 2026 brings leadership and practical learning together.
            </h2>
            <Link href="/programs/equip-2026" className="clay-button mt-7">
              Discover the program <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}