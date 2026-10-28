import PageHero from "@/components/page-hero";
import { CalendarDays, Clock3, MapPin, Users } from "lucide-react";
import SafeImage from "@/components/safe-image";

const phases = [
  {
    number: "01",
    days: "Days 1–2",
    title: "Orientation, Foundation & Ideation",
    description:
      "Participants settle into residence, form collaborative teams, and ground themselves in transformational leadership principles, emotional intelligence, and business ideation.",
    activities: [
      "Arrival, check-in, room allocation, and orientation",
      "Spiritual clarity, vision casting, and purpose discovery",
      "Emotional intelligence & teamwork fundamentals",
      "Introduction to tech tools & financial literacy basics",
    ],
  },
  {
    number: "02",
    days: "Days 3–4",
    title: "Applied Craft & Practical Execution",
    description:
      "Intensive specialization where each participant dives into their chosen digital skill or hand craft track to build practical, real-world assets.",
    activities: [
      "Specialized track workshops (Digital, Hand Crafts, Marketing)",
      "Hands-on building: web pages, video content, leather or resin goods",
      "Branding, costing models, and go-to-market strategies",
      "Pre-assessment reviews and facilitator mentorship",
    ],
  },
  {
    number: "03",
    days: "Day 5",
    title: "Demo Day, Commissioning & Future Mapping",
    description:
      "A live exhibition and pitch showcase where participants present their completed projects, receive awards, and connect with their post-event mentors.",
    activities: [
      "Project exhibition and live business pitch sessions",
      "Post-camp assessment and student recognition",
      "University of Ibadan counseling & mentorship onboarding",
      "Commissioning, awards ceremony, and departure",
    ],
  },
];

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="The week at a glance"
        title="Five days of learning, making, and looking ahead."
        description="A structured residential journey moving senior secondary leavers from self-awareness to vocational execution and community leadership."
        primaryLabel="Explore the training tracks"
        primaryHref="/programs/equip-2026/training"
      />

      <section className="section-space">
        <div className="page-shell">
          {/* Key Event Badges */}
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: CalendarDays, label: "Program dates", value: "November 22–28, 2026" },
              { icon: Clock3, label: "Camp format", value: "5-day residential boot camp" },
              { icon: MapPin, label: "Location", value: "Jericho, Ibadan" },
            ].map((item) => (
              <div key={item.label} className="panel flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-xs">
                <item.icon size={22} className="shrink-0 text-[#5925dc]" />
                <div>
                  <p className="text-xs text-[#77766e]">{item.label}</p>
                  <p className="mt-1 text-sm font-bold text-[#0a0f1d]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Phase Cards */}
          <div className="space-y-6">
            {phases.map((phase) => (
              <article
                key={phase.number}
                className="grid gap-7 rounded-3xl border border-black/10 bg-white p-6 md:grid-cols-[220px_1fr] md:p-9"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#5925dc]">
                    PHASE {phase.number}
                  </span>
                  <h2 className="display mt-3 text-3xl">{phase.days}</h2>
                  <div className="mt-4 inline-flex rounded-full bg-[#f0ecfc] px-3 py-1 text-xs font-semibold text-[#3e1699]">
                    Curriculum Phase
                  </div>
                </div>

                <div>
                  <h3 className="display text-3xl md:text-4xl text-[#0a0f1d]">
                    {phase.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#66675f]">
                    {phase.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {phase.activities.map((activity) => (
                      <div
                        key={activity}
                        className="flex items-start gap-3 rounded-xl bg-[#f8f9fc] p-4 text-sm"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#5925dc]" />
                        <span className="leading-6 text-[#3b3c37]">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Showcase */}
      <section className="pb-20">
        <div className="page-shell">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="image-frame min-h-[320px] rounded-3xl overflow-hidden">
              <SafeImage
                src="/images/venue/hebron-center.jpg"
                alt="Jericho, Ibadan"
                loading="lazy"
              />
            </div>

            <div className="rounded-3xl bg-[#0a0f1d] p-7 text-white md:p-9 flex flex-col justify-between">
              <div>
                <MapPin size={24} className="text-[#e9ae56]" />
                <p className="eyebrow mt-4 text-[#e9ae56]">The Venue</p>
                <h2 className="display mt-2 text-3xl md:text-4xl">Jericho, Ibadan</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  A secure, conducive, and fully equipped residential facility providing safe lodging,
                  catered dining halls, technical labs, and creative workshops for all 100 participants.
                </p>
              </div>
              <p className="mt-6 flex items-start gap-2 text-xs leading-6 text-white/55 border-t border-white/10 pt-4">
                <Users size={16} className="mt-1 shrink-0 text-[#e9ae56]" />
                Participants and parents receive detailed arrival packets, welfare contacts, and daily schedules upon confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}