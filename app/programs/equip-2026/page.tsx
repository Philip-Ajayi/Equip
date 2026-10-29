import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { initiative } from "@/data/initiative";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Users,
} from "lucide-react";

export default function EquipPage() {
  return (
    <>
      <PageHero
        eyebrow="The flagship experience"
        title="A stronger start for the journey beyond school."
        description="Project EQUIP 2026 is an intensive 3-day residential boot camp for 100 secondary school leavers in Oyo State, combining transformational leadership, emotional intelligence, practical tech and hand skills, and sustained post-camp mentorship."
        primaryLabel="Explore the training tracks"
        primaryHref="/programs/equip-2026/training"
        image="/images/outreach/outreach-03.jpg"
        imageAlt="Students taking part in a group learning activity"
      />

      {/* Quick Metadata Bar */}
      <section className="border-b border-white/10 bg-[#0e1736]">
        <div className="page-shell grid gap-5 py-7 sm:grid-cols-3">
          {[
            { icon: CalendarDays, label: "Program dates", value: initiative.dateLabel },
            { icon: MapPin, label: "Venue", value: initiative.venue },
            { icon: Users, label: "Student cohort", value: `${initiative.participants} sponsored places` },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0e7db] text-[#5925dc]">
                <item.icon size={19} />
              </div>
              <div>
                <p className="text-xs text-slate-300">{item.label}</p>
                <p className="mt-1 text-sm font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why EQUIP Matters */}
      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why EQUIP matters</p>
            <h2 className="section-title">
              More than a camp. A bridge to what comes next.
            </h2>
          </div>
          <div className="space-y-5">
            {initiative.equipOverview.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-300">
                {paragraph}
              </p>
            ))}
            <div className="rounded-2xl border border-[#d99b26]/40 bg-[#f6edda] p-5">
              <p className="text-sm font-bold text-[#8a5b0f]">Program Format & Schedule</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {initiative.programNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 Objectives Grid (Dynamic Count) */}
      <section className="section-space bg-[#0e1736]">
        <div className="page-shell">
          <p className="eyebrow">Program Pillars</p>
          <h2 className="section-title">
            {initiative.equipObjectives.length} Core Objectives for the Week.
          </h2>

          <div className="mt-9 grid gap-3 md:grid-cols-2">
            {initiative.equipObjectives.map((objective, index) => (
              <Reveal key={objective}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-[#0e1736] p-5 transition hover:border-[#5925dc]/40">
                  <span className="font-mono text-xs font-bold text-[#5925dc]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium leading-7 text-[#2f302b]">
                    {objective}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-space">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">How we train</p>
              <h2 className="section-title">
                Character formation meets practical application.
              </h2>
              <p className="section-copy">
                Rather than teaching leadership merely as theory, Project EQUIP emphasizes
                hands-on vocational mastery, community problem-solving, and measurable personal growth.
              </p>
            </div>
            <div className="space-y-3">
              {initiative.methodology.map((item) => (
                <Reveal key={item.title}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-[#0e1736] p-5">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#5925dc]" size={19} />
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="dark-section section-space">
        <div className="page-shell">
          <p className="eyebrow text-[#e9ae56]">Keep exploring</p>
          <h2 className="display mt-4 max-w-3xl text-5xl md:text-6xl">
            See how the experience comes together.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/programs/equip-2026/training" className="clay-button">
              Training tracks <ArrowRight size={16} />
            </Link>
            <Link
              href="/programs/equip-2026/schedule"
              className="outline-button border-white/20 text-white hover:bg-[#0e1736]/10"
            >
              View the schedule <ArrowRight size={16} />
            </Link>
            <Link
              href="/programs/equip-2026/impact"
              className="outline-button border-white/20 text-white hover:bg-[#0e1736]/10"
            >
              Follow-up and impact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}