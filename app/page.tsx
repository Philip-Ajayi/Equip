"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  Compass,
  Users,
  Award,
  Calendar,
  Check,
  User,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { initiative } from "@/data/initiative";
import { curriculum } from "@/data/curriculum";
import { faculty, convener } from "@/data/faculty";
import { formatNaira } from "@/lib/utils";
import SafeImage from "@/components/safe-image";

// Images from public/schools/1.jpeg through 9.jpeg
const schoolPhotos = [
  "/school/1.jpeg",
  "/school/2.jpeg",
  "/school/3.jpeg",
  "/school/4.jpeg",
  "/school/5.jpeg",
  "/school/6.jpeg",
  "/school/7.jpeg",
  "/school/8.jpeg",
  "/school/9.jpeg",
];

// Interactive Hero Explorer Component
function HeroInteractiveHub() {
  const [activeTab, setActiveTab] = useState<"skills" | "schedule" | "impact">("skills");
  const [activeSkillCategory, setActiveSkillCategory] = useState<number>(0);
  const [sponsoredCount, setSponsoredCount] = useState<number>(1);

  // Aligned with the official 11 Project EQUIP curriculum tracks
  const skillsData = [
    {
      category: "Digital Skills",
      skills: [
        "No-Code Web Design",
        "Video Editing & Reels",
        "Prompt Engineering (AI)",
        "Graphic Design & Branding",
      ],
      outcome: "Build a responsive live portfolio, brand assets, and engaging video reels.",
    },
    {
      category: "Hand Skills & Crafts",
      skills: [
        "Resin Product Casting",
        "Leatherwork & Stitching",
        "Textile Styling & Adire",
        "Perfume & Oil Blending",
      ],
      outcome: "Craft market-ready, packaged artisanal goods ready for product photography and sale.",
    },
    {
      category: "Business & Marketing",
      skills: [
        "Social Media Growth",
        "Financial Costing & Margins",
        "Personal Digital Branding",
      ],
      outcome: "A 7-day content schedule, product unit-pricing sheet, and optimized professional profile.",
    },
  ];

  const schedulePreview = [
    { day: "Days 1–2", title: "Foundation & Ideation", desc: "Orientation, leadership character, and business ideation." },
    { day: "Days 3–4", title: "Applied Practical Craft", desc: "Hands-on studio build of digital assets & physical crafts." },
    { day: "Day 5", title: "Demo Day & Commissioning", desc: "Live project exhibition, pitching, awards & mentor pairing." },
  ];

  const unitCost = initiative.studentCost; // ₦84,500

  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
      {/* Ambient background glow */}
      <div className="absolute inset-4 rounded-3xl bg-[#e7c3a4]/30 blur-2xl" />

      {/* Main Interactive Deck */}
      <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#fffdf8] p-6 shadow-xl transition-all">
        {/* Top Header & Tab Switcher */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b84a29] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#b84a29]" />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-[#0e1318]">
              COHORT 2026 PREVIEW
            </span>
          </div>

          <div className="flex rounded-full bg-black/[0.04] p-1 text-[11px] font-medium">
            <button
              onClick={() => setActiveTab("skills")}
              className={`rounded-full px-3 py-1 transition ${
                activeTab === "skills"
                  ? "bg-[#b84a29] text-white shadow-sm"
                  : "text-[#66675f] hover:text-[#0e1318]"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={`rounded-full px-3 py-1 transition ${
                activeTab === "schedule"
                  ? "bg-[#b84a29] text-white shadow-sm"
                  : "text-[#66675f] hover:text-[#0e1318]"
              }`}
            >
              5 Days
            </button>
            <button
              onClick={() => setActiveTab("impact")}
              className={`rounded-full px-3 py-1 transition ${
                activeTab === "impact"
                  ? "bg-[#b84a29] text-white shadow-sm"
                  : "text-[#66675f] hover:text-[#0e1318]"
              }`}
            >
              Impact
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Skills Matrix */}
        {activeTab === "skills" && (
          <div className="py-4">
            <p className="text-xs font-semibold text-[#66675f]">
              Select a learning track to preview specialized skills:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skillsData.map((item, idx) => (
                <button
                  key={item.category}
                  onClick={() => setActiveSkillCategory(idx)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                    activeSkillCategory === idx
                      ? "border-[#b84a29] bg-[#b84a29]/10 text-[#b84a29]"
                      : "border-black/10 bg-white text-[#66675f] hover:border-black/20"
                  }`}
                >
                  {item.category}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-black/5 bg-[#f7f5f0] p-4">
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#b84a29]">
                Hands-on Workshops
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {skillsData[activeSkillCategory].skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-[#0e1318] shadow-2xs"
                  >
                    <Check size={12} className="text-[#b84a29]" />
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs leading-5 text-[#66675f]">
                {skillsData[activeSkillCategory].outcome}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: 5-Day Interactive Timeline */}
        {activeTab === "schedule" && (
          <div className="py-3">
            <p className="text-xs text-[#66675f]">
              Residential schedule at Hebron Center, Idi-Ishin:
            </p>
            <div className="mt-3 space-y-2">
              {schedulePreview.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-xl border border-black/5 bg-[#f7f5f0] p-2.5"
                >
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#b84a29]">
                      {item.day}
                    </span>
                    <p className="text-xs font-bold text-[#0e1318]">{item.title}</p>
                    <p className="text-[11px] text-[#66675f]">{item.desc}</p>
                  </div>
                  <Calendar size={18} className="text-[#b84a29]/60 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Interactive Sponsorship & Impact Calculator */}
        {activeTab === "impact" && (
          <div className="py-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#66675f]">Select student count:</span>
              <div className="flex gap-1.5">
                {[1, 2, 5, 10].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setSponsoredCount(qty)}
                    className={`h-7 w-7 rounded-full text-xs font-bold transition ${
                      sponsoredCount === qty
                        ? "bg-[#b84a29] text-white"
                        : "border border-black/10 bg-white text-[#66675f]"
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[#0e1318] p-4 text-white">
              <p className="text-[11px] text-white/60">Total Sponsorship Impact</p>
              <p className="display mt-1 text-2xl font-bold text-[#e9ae56]">
                {formatNaira(unitCost * sponsoredCount)}
              </p>
              <div className="mt-3 space-y-1.5 border-t border-white/10 pt-3 text-[11px] text-white/80">
                <div className="flex justify-between">
                  <span>5-day lodging & 15 warm meals</span>
                  <span>{formatNaira(41000 * sponsoredCount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Hands-on toolkits & materials</span>
                  <span>{formatNaira(23800 * sponsoredCount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>UI counseling & mentor follow-up</span>
                  <span>{formatNaira(19700 * sponsoredCount)}</span>
                </div>
              </div>
            </div>

            <Link
              href="/support"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#b84a29] py-2.5 text-xs font-bold text-white transition hover:bg-[#a13f22]"
            >
              Sponsor {sponsoredCount} {sponsoredCount === 1 ? "student" : "students"}{" "}
              <ArrowRight size={14} />
            </Link>
          </div>
        )}

        {/* Bottom Micro-Card */}
        <div className="mt-2 flex items-center justify-between border-t border-black/10 pt-3 text-xs">
          <div className="flex items-center gap-1.5 text-[#66675f]">
            <Award size={15} className="text-[#b84a29]" />
            <span>100 full scholarships</span>
          </div>
          <Link
            href="/programs/equip-2026/training"
            className="flex items-center gap-1 font-semibold text-[#b84a29] hover:underline"
          >
            All 11 skills <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <p className="mt-2 text-center font-mono text-[10px] tracking-[0.14em] text-[#77766e]">
        PURPOSE · INTEGRITY · EXCELLENCE · SERVICE
      </p>
    </div>
  );
}

export default function HomePage() {
  const confirmedFaculty = faculty.filter((person) => !person.name.startsWith("["));

  return (
    <>
      {/* Hero Section */}
      <section className="grid-lines overflow-hidden">
        <div className="page-shell grid min-h-[650px] items-center gap-10 py-12 md:py-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="animate-in">
            <p className="eyebrow">Leading Minds Leadership Initiative presents</p>

            <h1 className="display mt-7 max-w-[760px] text-6xl sm:text-7xl lg:text-[86px]">
              The next chapter starts{" "}
              <span className="text-[#b84a29]">with you.</span>
            </h1>

            <p className="section-copy mt-7 max-w-[570px]">
              An intensive 5-day residential boot camp empowering 100 secondary school
              leavers in Oyo State with transformational leadership, emotional intelligence,
              and in-demand tech and vocational skills.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold">
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">
                {initiative.dateLabel}
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">
                {initiative.venue}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/programs/equip-2026" className="clay-button">
                Discover Project EQUIP <ArrowRight size={16} />
              </Link>
              <Link href="/support" className="outline-button">
                Sponsor a student <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-black/10 pt-6">
              <div className="flex -space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f7f5f0] bg-[#e4c7b3]">
                  <Users size={16} className="text-[#0e1318]" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f7f5f0] bg-[#d9b98b]">
                  <Compass size={16} className="text-[#0e1318]" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f7f5f0] bg-[#c7d4bf]">
                  <HeartHandshake size={16} className="text-[#0e1318]" />
                </div>
              </div>
              <p className="max-w-xs text-xs leading-6 text-[#66675f]">
                Leadership, practical vocational learning, mentorship, and a clear bridge to tertiary life.
              </p>
            </div>
          </div>

          {/* Interactive Hero Hub */}
          <HeroInteractiveHub />
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="border-y border-black/10 bg-[#fffdf8]">
        <div className="page-shell grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4">
          {[
            ["100", "Sponsored student places"],
            ["05", "Residential learning days"],
            ["11", "Practical skills"],
            ["₦8.45m", "Total campaign funding"],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-black/10 pl-4 md:pl-6">
              <p className="metric">{value}</p>
              <p className="mt-2 text-xs text-[#66675f]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Section featuring Secondary School Images 1, 2, and 3 */}
      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">The transition gap</p>
            <h2 className="section-title">School ends. The questions begin.</h2>
            <p className="section-copy">
              The period immediately following secondary school is one of the most vulnerable
              transitions in a young person&apos;s life. Project EQUIP bridges the gap between
              secondary education and tertiary life by equipping teenagers with values, self-reliance,
              and real-world competencies.
            </p>
            <Link href="/programs/equip-2026" className="text-link mt-6">
              Discover Project EQUIP <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-3">
            <Reveal className="image-frame min-h-[270px] overflow-hidden rounded-2xl">
              <SafeImage
                src={schoolPhotos[0]} // /schools/1.jpeg
                alt="Secondary school outreach session"
                loading="lazy"
              />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-3">
              <div className="image-frame min-h-[160px] flex-1 overflow-hidden rounded-2xl">
                <SafeImage
                  src={schoolPhotos[1]} // /schools/2.jpeg
                  alt="Students engaged in leadership training"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-[#e8e1d4] p-5 md:p-7">
                <Compass className="text-[#b84a29]" size={24} />
                <div>
                  <p className="display text-3xl">Room to grow.</p>
                  <p className="mt-2 text-xs leading-6 text-[#66675f]">
                    Character development. Vocational mastery. Dedicated mentors.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Real Outreach Gallery from public/schools/ (Images 4, 5, 6, 7, 8, 9) */}
      <section className="pb-16 pt-4 bg-[#fbf9f5] border-y border-black/5">
        <div className="page-shell">
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-[#b84a29]">Secondary School Outreaches</p>
              <h2 className="display text-3xl md:text-4xl">Engaging teenagers where they are.</h2>
            </div>
            <p className="text-xs text-[#66675f] max-w-sm">
              Snapshots from our ongoing mobile leadership academies and youth outreaches across Oyo State.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {schoolPhotos.slice(3, 9).map((photoPath, index) => (
              <div
                key={photoPath}
                className="image-frame aspect-square overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xs"
              >
                <SafeImage
                  src={photoPath}
                  alt={`School outreach photograph ${index + 4}`}
                  loading="lazy"
                  className="transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Tracks */}
      <section className="dark-section section-space">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[#e9ae56]">Learn something useful</p>
              <h2 className="section-title max-w-[720px] text-white">
                Skills that reach far beyond the classroom.
              </h2>
            </div>
            <Link
              href="/programs/equip-2026/training"
              className="outline-button border-white/20 text-white hover:bg-white/10"
            >
              Explore all 11 skills <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {curriculum.map((track) => (
              <Reveal key={track.id}>
                <Link
                  href="/programs/equip-2026/training"
                  className="card-hover block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-7 transition hover:border-white/25"
                >
                  <span className="font-mono text-xs text-[#e9ae56]">
                    TRACK {track.number}
                  </span>
                  <h3 className="display mt-8 text-3xl text-white">{track.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {track.description}
                  </p>
                  <p className="mt-7 flex items-center gap-2 text-xs font-bold text-[#e9ae56]">
                    {track.skills.length} specialized skills
                    <ArrowUpRight size={15} />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilitator & Team Preview */}
      <section className="section-space">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-[#b84a29]">The team behind the program</p>
              <h2 className="section-title">
                Mentorship makes all the difference.
              </h2>
              <p className="section-copy">
                Meet the convener, vocational entrepreneurs, tech practitioners, and
                counselors committed to guiding each participant personally.
              </p>
              <Link
                href="/programs/equip-2026/facilitators"
                className="text-link mt-6"
              >
                Meet the faculty <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[convener, ...confirmedFaculty.slice(0, 5)].map((person) => (
                <Link
                  key={person.id}
                  href="/programs/equip-2026/facilitators"
                  className="group block text-left"
                >
                  <div className="image-frame aspect-[0.85] overflow-hidden rounded-2xl bg-[#f0eae1]">
                    {person.image ? (
                      <SafeImage
                        src={person.image}
                        alt={person.name}
                        loading="lazy"
                        className="transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[#b84a29]/50">
                        <User size={38} />
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-sm font-bold text-[#0e1318] group-hover:text-[#b84a29] transition-colors">
                    {person.name}
                  </p>
                  <p className="mt-1 text-xs text-[#66675f] line-clamp-1">
                    {person.specialization}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sponsorship Banner */}
      <section className="section-space-sm">
        <div className="page-shell">
          <div className="relative overflow-hidden rounded-[30px] bg-[#b84a29] p-7 text-white md:p-12 lg:p-16">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/20" />
            <div className="absolute -right-4 -top-12 h-52 w-52 rounded-full border border-white/20" />

            <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[740px]">
                <p className="eyebrow text-white/80">Help make it possible</p>
                <h2 className="display mt-5 text-4xl sm:text-5xl md:text-6xl">
                  Give a young person a stronger start.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/90">
                  Fully sponsor a student for ₦84,500 covering their full 5-day residential
                  lodging, feeding, hands-on workshop toolkits, and post-event mentorship.
                </p>
              </div>

              <Link
                href="/support"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 self-start rounded-full bg-white px-6 text-sm font-bold text-[#0e1318] transition hover:bg-[#f2e5d6] lg:self-end"
              >
                Sponsor a student <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative mt-10 grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-3">
              {[
                "Full accommodation & meals",
                "Verified vocational learning kits",
                "UI counseling & mentor follow-up",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2 text-xs font-medium">
                  <CheckCircle2 size={16} className="text-[#e9ae56]" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Marquee */}
      <section className="overflow-hidden border-y border-black/10 bg-[#fffdf8] py-5">
        <div className="marquee-track">
          <div className="marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {[
                  "DISCOVER YOUR PURPOSE",
                  "DEVELOP YOUR POTENTIAL",
                  "LEAD WITH CHARACTER",
                  "SERVE YOUR COMMUNITY",
                ].map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="mx-7 flex items-center gap-7 whitespace-nowrap font-mono text-[10px] tracking-[0.18em] text-[#66675f]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b84a29]" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Bar */}
      <section className="py-5">
        <div className="page-shell flex flex-wrap items-center justify-between gap-3 text-xs text-[#77766e]">
          <span>{initiative.venue}</span>
          <Link href="/programs/equip-2026/schedule" className="text-link">
            See the full week schedule <ArrowDown size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}