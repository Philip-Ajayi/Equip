"use client";

import { useState } from "react";
import Link from "next/link";
import BudgetLedger from "@/components/budget-ledger";
import Reveal from "@/components/reveal";
import { accountability, sponsorshipTiers } from "@/data/financials";
import { formatNaira } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HandHeart,
  ShieldCheck,
  Award,
  Users,
  Target,
  Check,
  Building2,
  Calculator,
} from "lucide-react";

const tierIcons = [Award, HandHeart, Target, Building2];

export default function SupportPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [sponsorCount, setSponsorCount] = useState<number>(1);

  const selected = sponsorshipTiers.find((tier) => tier.id === selectedTier);

  const unitCost = 84500;
  const totalPledge = unitCost * sponsorCount;

  return (
    <>
      {/* Interactive Hero */}
      <section className="grid-lines border-b border-white/10 bg-gradient-to-b from-[#091026] via-[#060b18] to-[#050b18]">
        <div className="page-shell grid min-h-[600px] items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-in">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
              <p className="eyebrow text-[#d4af37]">Support the Next Generation</p>
            </div>

            <h1 className="display mt-5 max-w-[760px] text-5xl text-white sm:text-6xl lg:text-[76px]">
              Help make room for{" "}
              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#d4af37] bg-clip-text text-transparent">
                100 young people
              </span>{" "}
              to grow.
            </h1>

            <p className="section-copy mt-6 max-w-[580px] text-slate-300">
              Project EQUIP 2026 is funded through partnerships and sponsorships.
              Every contribution directly covers residential lodging, wholesome
              meals, practical workshop kits, and mentor-led vocational tracks.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0e1736] px-4 py-2 text-slate-200">
                <Users size={14} className="text-[#a78bfa]" /> 100 Student Cohort
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0e1736] px-4 py-2 text-slate-200">
                <Target size={14} className="text-[#d4af37]" /> ₦8.45M Campaign Goal
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0e1736] px-4 py-2 text-slate-200">
                <ShieldCheck size={14} className="text-[#10b981]" /> Verified Allocation
              </span>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#sponsorship-tiers" className="clay-button">
                Explore sponsorship tiers <ArrowRight size={16} />
              </a>
              <Link href="/contact?topic=sponsorship" className="outline-button">
                Discuss custom partnership <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Interactive Sponsorship Impact Calculator */}
          <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
            <div className="absolute inset-4 rounded-3xl bg-[#703bf7]/25 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#0e1736]/95 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator size={16} className="text-[#d4af37]" />
                  <span className="font-mono text-[11px] font-bold tracking-wider text-[#d4af37]">
                    IMPACT CALCULATOR
                  </span>
                </div>
                <span className="text-[11px] text-slate-300">Select student count:</span>
              </div>

              {/* Student Count Selector */}
              <div className="mt-4">
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 5, 10].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setSponsorCount(qty)}
                      className={`rounded-xl py-2.5 text-xs font-bold transition ${
                        sponsorCount === qty
                          ? "bg-[#703bf7] text-white shadow-md"
                          : "border border-white/10 bg-[#080e23] text-slate-300 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {qty} {qty === 1 ? "Youth" : "Youths"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Cost Display */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-[#060b1b] p-5 text-white">
                <p className="text-[11px] text-slate-400">Calculated Sponsorship Impact</p>
                <p className="display mt-1 text-3xl font-bold text-[#d4af37]">
                  {formatNaira(totalPledge)}
                </p>
                <p className="mt-1 text-[11px] text-slate-300">
                  Full 3-day residential scholarship for {sponsorCount}{" "}
                  {sponsorCount === 1 ? "secondary school leaver" : "secondary school leavers"}.
                </p>

                {/* Real-time Tangible Deliverables */}
                <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Hot meals provided</span>
                    <span className="font-semibold text-white">{sponsorCount * 15} meals (3/day)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Residential nights</span>
                    <span className="font-semibold text-white">{sponsorCount * 5} safe bed-nights</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Hands-on learning kits</span>
                    <span className="font-semibold text-white">{sponsorCount} complete toolkits</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Dedicated mentorship</span>
                    <span className="font-semibold text-white">{sponsorCount * 16} workshop hours</span>
                  </div>
                </div>
              </div>

              {/* Direct Action Link */}
              <Link
                href={`/contact?topic=sponsorship&students=${sponsorCount}`}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#703bf7] to-[#5925dc] py-3 text-xs font-bold text-white transition hover:opacity-90 shadow-lg"
              >
                Sponsor {sponsorCount} {sponsorCount === 1 ? "Student" : "Students"} ({formatNaira(totalPledge)})
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Metrics */}
      <section className="section-space-sm bg-[#050b18]">
        <div className="page-shell">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-[#0e1736] p-6 text-white md:p-8">
              <p className="eyebrow text-[#d4af37]">Funding target</p>
              <p className="display mt-4 text-4xl text-[#d4af37] md:text-5xl">₦8.45m</p>
              <p className="mt-3 text-xs leading-6 text-slate-300">
                Proposed total requirement for 100 students.
              </p>
            </div>

            <div className="panel border border-white/10 bg-[#0e1736] p-6 md:p-8">
              <p className="eyebrow text-[#d4af37]">Cost per student</p>
              <p className="display mt-4 text-4xl text-white md:text-5xl">
                {formatNaira(unitCost)}
              </p>
              <p className="mt-3 text-xs leading-6 text-slate-300">
                All-inclusive unit cost covering accommodation, materials, and welfare.
              </p>
            </div>

            <div className="panel border border-white/10 bg-[#0e1736] p-6 md:p-8">
              <p className="eyebrow text-[#d4af37]">Cohort scale</p>
              <p className="display mt-4 text-4xl text-white md:text-5xl">100</p>
              <p className="mt-3 text-xs leading-6 text-slate-300">
                Secondary school leavers receiving full sponsorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="section-space bg-[#080e23] border-t border-white/10">
        <div className="page-shell">
          <p className="eyebrow text-[#d4af37]">Where the money goes</p>
          <h2 className="section-title text-white">A clear look at the proposed budget.</h2>
          <p className="section-copy mb-9 text-slate-300">
            Each line below represents an illustrative allocation towards
            delivering the camp. These amounts reflect planned operational
            provisions for housing, catering, toolkits, and mentor logistics.
          </p>
          <BudgetLedger />
          <p className="mt-4 text-xs leading-6 text-slate-400">
            The budget is a demonstration allocation, not a verified quotation.
            Actual costs and supporting estimates are reconciled transparently
            before and after program delivery.
          </p>
        </div>
      </section>

      {/* Sponsorship Tiers (Fixed: Active Card will NEVER turn white) */}
      <section id="sponsorship-tiers" className="section-space bg-[#050b18] border-t border-white/10">
        <div className="page-shell">
          <p className="eyebrow text-[#d4af37]">Choose how to help</p>
          <h2 className="section-title text-white">There is more than one way to make a difference.</h2>
          <p className="section-copy text-slate-300">
            Select a proposed sponsorship level to review its deliverables. You
            can then connect with the team to finalize your partnership.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorshipTiers.map((tier, index) => {
              const active = selectedTier === tier.id;
              const TierIcon = tierIcons[index % tierIcons.length];

              return (
                <Reveal key={tier.id} delay={index * 0.04}>
                  <button
                    type="button"
                    onClick={() => setSelectedTier(active ? null : tier.id)}
                    aria-pressed={active}
                    className={`card-hover relative flex h-full w-full flex-col rounded-3xl border p-6 text-left transition-all ${
                      active
                        ? "border-[#d4af37] bg-gradient-to-b from-[#220f4b] to-[#0e1736] ring-2 ring-[#d4af37]/50 shadow-[0_0_35px_rgba(212,175,55,0.25)]"
                        : "border-white/10 bg-[#0e1736] hover:border-white/25 hover:bg-[#121c40]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs font-bold ${active ? "text-[#d4af37]" : "text-[#a78bfa]"}`}>
                        0{index + 1}
                      </span>
                      <TierIcon size={20} className={active ? "text-[#d4af37]" : "text-[#a78bfa]"} />
                    </div>

                    <h3 className="display mt-7 text-3xl text-white">{tier.title}</h3>

                    <p className="mt-4 text-2xl font-bold tabular-nums text-[#d4af37]">
                      {formatNaira(tier.amount)}
                    </p>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                      {tier.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold">
                      <span className="text-slate-200">{tier.benefit}</span>
                      <span className={active ? "text-[#d4af37] font-bold flex items-center gap-1" : "text-[#a78bfa]"}>
                        {active ? "Selected ✓" : "Select"}
                      </span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {selected && (
            <div className="mt-6 rounded-3xl border border-[#d4af37]/40 bg-gradient-to-r from-[#1c0d3d] via-[#141b3d] to-[#0e1736] p-6 shadow-xl md:p-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <p className="eyebrow text-[#d4af37]">Your selected tier</p>
                  <h3 className="display mt-2 text-3xl text-white">{selected.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Proposed contribution:{" "}
                    <strong className="text-[#d4af37] text-base">
                      {formatNaira(selected.amount)}
                    </strong>
                  </p>
                </div>

                <Link
                  href={`/contact?topic=sponsorship&tier=${selected.id}`}
                  className="clay-button"
                >
                  Discuss this partnership <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Accountability Section (Fixed: Deep Midnight Emerald palette so item.title is clearly readable) */}
      <section className="section-space bg-[#080e23] border-t border-white/10">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-[#10b981]">Accountability</p>
            <h2 className="section-title text-white">Support deserves a clear account.</h2>
            <p className="section-copy text-slate-300">
              Financial transparency is part of responsible stewardship.
              Supporters receive comprehensive post-program impact documentation
              accounting for how every naira was expended.
            </p>
            <ShieldCheck className="mt-7 text-[#10b981]" size={40} />
          </div>

          <div className="rounded-3xl border border-[#10b981]/30 bg-[#07191d] p-6 md:p-9 shadow-lg">
            <p className="text-sm leading-8 text-emerald-200/90">
              {accountability.statement}
            </p>

            <div className="mt-7 space-y-5">
              {accountability.commitments.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#10b981]"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Talk CTA */}
      <section className="pb-20 bg-[#080e23]">
        <div className="page-shell">
          <div className="relative overflow-hidden rounded-[30px] border border-[#a78bfa]/30 bg-gradient-to-r from-[#2a1065] via-[#4318a8] to-[#1e0a4f] p-7 text-white shadow-2xl md:p-12">
            <p className="eyebrow text-[#d4af37]">Ready to talk?</p>
            <h2 className="display mt-4 max-w-3xl text-4xl text-white md:text-6xl">
              Let&apos;s discuss a partnership that makes sense for you.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">
              Contact the initiative to explore individual sponsorships, corporate
              partnerships, equipment donations, and transparent reporting schedules.
            </p>
            <Link
              href="/contact?topic=sponsorship"
              className="mt-7 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#d4af37] px-8 text-sm font-bold text-[#050b18] shadow-lg transition hover:bg-[#e9ae56]"
            >
              Contact the team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}