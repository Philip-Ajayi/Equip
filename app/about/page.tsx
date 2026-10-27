import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { initiative } from "@/data/initiative";
import { ArrowRight, Heart, Lightbulb, ShieldCheck } from "lucide-react";

// Matches initiative.values: Purpose | Integrity | Excellence | Empowerment | Inclusion | Service | Collaboration
const valueDescriptions = [
  "Help young people discover their God-given identity, clarity of calling, and personal intentionality.",
  "Lead by example with uncompromising character, moral fortitude, honesty, and transparency.",
  "Deliver the highest standard of dedication, skill mastery, and discipline in every endeavor.",
  "Equip secondary leavers with practical vocational competence and the confidence to be self-reliant.",
  "Create an accessible, nurturing environment that welcomes and elevates young people from all backgrounds.",
  "Commit knowledge, talent, and energy to uplifting others and driving meaningful social change.",
  "Foster teamwork, mutual accountability, and strategic partnerships for sustainable community impact.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Raising principled, purpose-driven, and transformational leaders."
        description={initiative.about}
        image="/images/outreach/outreach-01.jpg"
        imageAlt="Young people participating in a community learning activity"
      />

      {/* Vision & Mission */}
      <section className="section-space">
        <div className="page-shell grid gap-6 md:grid-cols-2">
          <Reveal className="panel rounded-3xl border border-black/10 bg-white p-7 md:p-10">
            <span className="eyebrow text-[#5925dc]">Our vision</span>
            <h2 className="display mt-4 text-3xl md:text-4xl">What we see ahead.</h2>
            <p className="mt-5 text-sm leading-8 text-[#66675f]">
              {initiative.vision}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl bg-[#0a0f1d] p-7 text-white md:p-10">
            <span className="eyebrow text-[#e9ae56]">Our mission</span>
            <h2 className="display mt-4 text-3xl md:text-4xl">What we do daily.</h2>
            <p className="mt-5 text-sm leading-8 text-white/70">
              {initiative.mission}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-space bg-[#ffffff]">
        <div className="page-shell">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#5925dc]">The values we live by</p>
            <h2 className="section-title">Character matters as much as competence.</h2>
            <p className="section-copy">{initiative.valuesIntro}</p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {initiative.values.map((value, index) => (
              <Reveal key={value} delay={index * 0.035}>
                <div className="card-hover panel h-full rounded-2xl border border-black/10 bg-white p-6 shadow-xs">
                  <span className="font-mono text-xs font-bold text-[#5925dc]">
                    0{index + 1}
                  </span>
                  <h3 className="display mt-6 text-2xl md:text-3xl">{value}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#66675f]">
                    {valueDescriptions[index]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Our objectives</p>
            <h2 className="section-title">Good intentions, put into practice.</h2>
            <p className="section-copy">
              Our work brings personal growth, real-world skills, and community service
              together so young people can transition into adulthood with direction and confidence.
            </p>
          </div>

          <div className="space-y-4">
            {initiative.objectives.map((objective, index) => (
              <Reveal key={objective.title}>
                <div className="flex gap-5 rounded-2xl border border-black/10 bg-white p-5 md:p-7 shadow-xs">
                  <span className="font-mono text-sm font-bold text-[#5925dc]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0a0f1d]">
                      {objective.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#66675f]">
                      {objective.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan & Philosophy */}
      <section className="dark-section section-space">
        <div className="page-shell grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="eyebrow text-[#e9ae56]">Our conviction</p>
            <h2 className="display mt-4 text-4xl md:text-6xl text-white">
              {initiative.sloganHeading}
            </h2>
          </div>
          <div className="border-l border-[#d99b26]/50 pl-6 md:pl-10">
            {initiative.slogan.map((sentence) => (
              <p
                key={sentence}
                className="display mb-4 text-2xl leading-snug text-white/90 last:mb-0 md:text-3xl"
              >
                “{sentence}”
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Portfolio */}
      <section className="section-space">
        <div className="page-shell">
          <p className="eyebrow">Our programs</p>
          <h2 className="section-title">A continuous pathway of growth.</h2>

          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {initiative.programs.map((program) => (
              <Reveal key={program.number}>
                <article className="panel card-hover flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#5925dc]">
                      PROGRAM {program.number}
                    </span>
                    {program.number === "03" ? (
                      <Lightbulb className="text-[#5925dc]" size={22} />
                    ) : (
                      <Heart className="text-[#5925dc]" size={22} />
                    )}
                  </div>
                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[#77766e]">
                    {program.status}
                  </p>
                  <h3 className="display mt-2 text-2xl md:text-3xl text-[#0a0f1d]">
                    {program.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#66675f]">
                    {program.description}
                  </p>
                  <Link
                    href={
                      program.number === "03"
                        ? "/programs/equip-2026"
                        : "/programs"
                    }
                    className="text-link mt-7 inline-flex items-center gap-1.5 text-xs font-bold text-[#5925dc]"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability Statement */}
      <section className="pb-20">
        <div className="page-shell">
          <div className="rounded-3xl bg-[#ede9fe] p-7 md:p-10 border border-[#ddd6fe]">
            <ShieldCheck size={28} className="text-[#5925dc]" />
            <h2 className="display mt-4 text-3xl md:text-4xl text-[#0a0f1d]">
              A mission rooted in trust and stewardship.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#55564f]">
              Leading Minds Leadership Initiative (RC 9434550) is committed to complete
              accountability, financial transparency, and ethical execution. Every partner,
              donor, and sponsor receives comprehensive post-event documentation and verified impact reports.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}