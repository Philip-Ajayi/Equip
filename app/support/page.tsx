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
      {/* Interactive Hero (Replaces PageHero — Zero 3D Monolith, Zero Sparkles) */}
      <section className="grid-lines border-b border-black/10 bg-[#ffffff]">
        <div className="page-shell grid min-h-[600px] items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-in">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#5925dc]" />
              <p className="eyebrow">Support the Next Generation</p>
            </div>

            <h1 className="display mt-5 max-w-[760px] text-5xl sm:text-6xl lg:text-[76px]">
              Help make room for{" "}
              <span className="text-[#5925dc]">100 young people</span> to grow.
            </h1>

            <p className="section-copy mt-6 max-w-[580px]">
              Project EQUIP 2026 is funded through partnerships and sponsorships.
              Every contribution directly covers residential lodging, wholesome
              meals, practical workshop kits, and mentor-led vocational tracks.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2">
                <Users size={14} className="text-[#5925dc]" /> 100 Student Cohort
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2">
                <Target size={14} className="text-[#5925dc]" /> ₦8.45M Campaign Goal
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2">
                <ShieldCheck size={14} className="text-[#1c7c54]" /> Verified Allocation
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
            <div className="absolute inset-4 rounded-3xl bg-[#c4b5fd]/25 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 shadow-xl md:p-8">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator size={16} className="text-[#5925dc]" />
                  <span className="font-mono text-[11px] font-bold tracking-wider text-[#5925dc]">
                    IMPACT CALCULATOR
                  </span>
                </div>
                <span className="text-[11px] text-[#66675f]">Select student count:</span>
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
                          ? "bg-[#5925dc] text-white shadow-xs"
                          : "border border-black/10 bg-[#f8f9fc] text-[#0a0f1d] hover:border-black/30"
                      }`}
                    >
                      {qty} {qty === 1 ? "Youth" : "Youths"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Cost Display */}
              <div className="mt-5 rounded-2xl bg-[#0a0f1d] p-5 text-white">
                <p className="text-[11px] text-white/60">Calculated Sponsorship Impact</p>
                <p className="display mt-1 text-3xl font-bold text-[#e9ae56]">
                  {formatNaira(totalPledge)}
                </p>
                <p className="mt-1 text-[11px] text-white/70">
                  Full 5-day residential scholarship for {sponsorCount}{" "}
                  {sponsorCount === 1 ? "secondary school leaver" : "secondary school leavers"}.
                </p>

                {/* Real-time Tangible Deliverables */}
                <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs text-white/90">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Hot meals provided</span>
                    <span className="font-semibold">{sponsorCount * 15} meals (3/day)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Residential nights</span>
                    <span className="font-semibold">{sponsorCount * 5} safe bed-nights</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Hands-on learning kits</span>
                    <span className="font-semibold">{sponsorCount} complete toolkits</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Dedicated mentorship</span>
                    <span className="font-semibold">{sponsorCount * 16} workshop hours</span>
                  </div>
                </div>
              </div>

              {/* Direct Action Link */}
              <Link
                href={`/contact?topic=sponsorship&students=${sponsorCount}`}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5925dc] py-3 text-xs font-bold text-white transition hover:bg-[#3e1699]"
              >
                Sponsor {sponsorCount} {sponsorCount === 1 ? "Student" : "Students"} ({formatNaira(totalPledge)})
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Metrics */}
      <section className="section-space-sm">
        <div className="page-shell">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#0a0f1d] p-6 text-white md:p-8">
              <p className="eyebrow text-[#e9ae56]">Funding target</p>
              <p className="display mt-4 text-4xl md:text-5xl">₦8.45m</p>
              <p className="mt-3 text-xs leading-6 text-white/55">
                Proposed total requirement for 100 students at Hebron Center.
              </p>
            </div>

            <div className="panel p-6 md:p-8">
              <p className="eyebrow">Cost per student</p>
              <p className="display mt-4 text-4xl md:text-5xl">
                {formatNaira(unitCost)}
              </p>
              <p className="mt-3 text-xs leading-6 text-[#66675f]">
                All-inclusive unit cost covering accommodation, materials, and welfare.
              </p>
            </div>

            <div className="panel p-6 md:p-8">
              <p className="eyebrow">Cohort scale</p>
              <p className="display mt-4 text-4xl md:text-5xl">100</p>
              <p className="mt-3 text-xs leading-6 text-[#66675f]">
                Secondary school leavers receiving full sponsorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="section-space">
        <div className="page-shell">
          <p className="eyebrow">Where the money goes</p>
          <h2 className="section-title">A clear look at the proposed budget.</h2>
          <p className="section-copy mb-9">
            Each line below represents an illustrative allocation towards
            delivering the camp. These amounts reflect planned operational
            provisions for housing, catering, toolkits, and mentor logistics.
          </p>
          <BudgetLedger />
          <p className="mt-4 text-xs leading-6 text-[#77766e]">
            The budget is a demonstration allocation, not a verified quotation.
            Actual costs and supporting estimates are reconciled transparently
            before and after program delivery.
          </p>
        </div>
      </section>

      {/* Sponsorship Tiers (Clean Icons — No Sparkles) */}
      <section id="sponsorship-tiers" className="section-space bg-[#ffffff]">
        <div className="page-shell">
          <p className="eyebrow">Choose how to help</p>
          <h2 className="section-title">There is more than one way to make a difference.</h2>
          <p className="section-copy">
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
                    className={`card-hover flex h-full w-full flex-col rounded-3xl border p-6 text-left transition-colors ${
                      active
                        ? "border-[#5925dc] bg-[#f0ecfc]"
                        : "border-black/10 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#5925dc]">
                        0{index + 1}
                      </span>
                      <TierIcon size={19} className="text-[#5925dc]" />
                    </div>

                    <h3 className="display mt-7 text-3xl">{tier.title}</h3>

                    <p className="mt-4 text-2xl font-semibold tabular-nums">
                      {formatNaira(tier.amount)}
                    </p>

                    <p className="mt-4 flex-1 text-sm leading-7 text-[#66675f]">
                      {tier.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-xs font-semibold">
                      <span className="text-[#0a0f1d]">{tier.benefit}</span>
                      <span className="text-[#5925dc]">{active ? "Selected" : "Select"}</span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {selected && (
            <div className="mt-6 rounded-3xl border border-[#5925dc]/30 bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <p className="eyebrow text-[#5925dc]">Your selected tier</p>
                  <h3 className="display mt-2 text-3xl">{selected.title}</h3>
                  <p className="mt-2 text-sm text-[#66675f]">
                    Proposed contribution:{" "}
                    <strong className="text-[#0a0f1d]">
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

      {/* Accountability Section */}
      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Accountability</p>
            <h2 className="section-title">Support deserves a clear account.</h2>
            <p className="section-copy">
              Financial transparency is part of responsible stewardship.
              Supporters receive comprehensive post-program impact documentation
              accounting for how every naira was expended.
            </p>
            <ShieldCheck className="mt-7 text-[#1c7c54]" size={36} />
          </div>

          <div className="rounded-3xl border border-[#1c7c54]/20 bg-[#edf3e9] p-6 md:p-9">
            <p className="text-sm leading-8 text-[#435b49]">
              {accountability.statement}
            </p>

            <div className="mt-7 space-y-5">
              {accountability.commitments.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#1c7c54]"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#0a0f1d]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#526657]">
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
      <section className="pb-20">
        <div className="page-shell">
          <div className="rounded-3xl bg-[#0a0f1d] p-7 text-white md:p-12">
            <p className="eyebrow text-[#e9ae56]">Ready to talk?</p>
            <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
              Let&apos;s discuss a partnership that makes sense for you.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
              Contact the initiative to explore individual sponsorships, corporate
              partnerships, equipment donations, and transparent reporting schedules.
            </p>
            <Link href="/contact?topic=sponsorship" className="clay-button mt-7">
              Contact the team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}