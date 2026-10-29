import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { futurePlans } from "@/data/financials";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  HeartHandshake,
  LineChart,
  Sparkles,
  Users,
} from "lucide-react";

const impacts = [
  {
    icon: Award,
    number: "01",
    title: "Direct Skills Empowerment",
    description:
      "100 secondary school leavers equipped with verifiable digital skills and practical artisan craft competencies before entering tertiary institutions.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Community Transformation",
    description:
      "At least 80% of participants will launch and execute a mini-community project, turning leadership principles into tangible social impact.",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Measurable Growth Metrics",
    description:
      "Structured pre- and post-camp evaluations measure verified growth in participant confidence, communication, emotional intelligence, and problem-solving.",
  },
];

const followUp = [
  {
    title: "Professional Counseling Partnership",
    description:
      "We partner with qualified counselors from the University of Ibadan who consistently monitor personal growth and psychological well-being beyond the camp.",
  },
  {
    title: "Dedicated Facilitator Mentorship",
    description:
      "Each participant is assigned to specific vocational and leadership facilitators for ongoing guidance, ensuring knowledge is sustained and practically applied.",
  },
  {
    title: "Community Project Execution",
    description:
      "Structured support channels help participants plan, collaborate on, and deliver their grassroots community transformation initiatives.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Measurable Outcomes"
        title="Guaranteed return on social investment."
        description="Project EQUIP 2026 is designed with structured post-event tracking to ensure personal transformation, psychological welfare, and long-term vocational application."
      />

      {/* Expected Impact */}
      <section className="section-space">
        <div className="page-shell">
          <p className="eyebrow">Expected Impact</p>
          <h2 className="section-title">Measurable outcomes for every participant.</h2>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {impacts.map((item) => (
              <Reveal key={item.number}>
                <article className="panel card-hover h-full rounded-3xl border border-white/10 bg-[#0e1736] p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#5925dc]">
                      {item.number}
                    </span>
                    <item.icon size={24} className="text-[#5925dc]" />
                  </div>
                  <h3 className="display mt-8 text-2xl md:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Event Tracking (UI Counselors & Dedicated Facilitators) */}
      <section className="dark-section section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-[#e9ae56]">Post-Event Sustainability</p>
            <h2 className="section-title text-white">
              Engagement does not end on the fifth day.
            </h2>
            <p className="section-copy text-white/70">
              Long-term impact requires consistent reinforcement. Our post-event tracking
              framework pairs professional psychological counseling with practical mentor check-ins.
            </p>
          </div>

          <div className="space-y-4">
            {followUp.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0e1736]/[0.04] p-6"
              >
                <p className="font-mono text-xs text-[#e9ae56]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="section-space">
        <div className="page-shell">
          <p className="eyebrow">Strategic Roadmap</p>
          <h2 className="section-title">The future we are actively building.</h2>

          <div className="mt-9 space-y-4">
            {futurePlans.map((plan, index) => (
              <Reveal key={plan.title}>
                <article className="grid gap-4 rounded-2xl border border-white/10 bg-[#0e1736] p-6 md:grid-cols-[70px_1fr] md:p-8">
                  <span className="font-mono text-lg font-bold text-[#5925dc]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="display text-2xl md:text-3xl">{plan.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                      {plan.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4 rounded-2xl bg-[#f5ead5] p-5 text-sm leading-7 text-[#6c5841]">
            <span>
              These strategic goals guide Leading Minds Leadership Initiative&apos;s continuous expansion across Oyo State and nationwide.
            </span>
            <a href="/support" className="clay-button shrink-0">
              Partner with us <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}