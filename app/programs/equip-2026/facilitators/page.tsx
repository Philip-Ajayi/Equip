"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { convener, faculty } from "@/data/faculty";
import { ArrowUpRight, User, X } from "lucide-react";

export default function FacilitatorsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  // Filter out empty placeholder slots (e.g. "[Facilitator Six]") so only confirmed members display
  const confirmedFaculty = faculty.filter(
    (person) => !person.name.startsWith("[")
  );

  const people = [convener, ...faculty];
  const activePerson = people.find((person) => person.id === selected);

  return (
    <>
      <PageHero
        eyebrow="Meet the people"
        title="Experience matters. So does the person who shares it."
        description="Meet the dedicated leadership team, industry practitioners, and vocational mentors guiding the participants of Project EQUIP 2026."
        image="/team/Adeyemi.jpeg"
        imageAlt="Project EQUIP Leadership"
      />

      <section className="section-space bg-[#050b18]">
        <div className="page-shell">
          {/* Convener Section */}
          <div className="mb-8">
            <p className="eyebrow text-[#d4af37]">Program leadership</p>
            <h2 className="section-title text-white">The convener</h2>
          </div>

          <button
            type="button"
            onClick={() => setSelected(convener.id)}
            className="group grid w-full gap-7 rounded-3xl border border-white/10 bg-[#0e1736] p-5 text-left transition hover:border-[#a78bfa]/40 hover:bg-[#121c42] hover:shadow-2xl md:grid-cols-[300px_1fr] md:p-8"
          >
            <div className="image-frame aspect-[0.9] max-h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#121c40] flex items-center justify-center">
              {convener.image ? (
                <img
                  src={convener.image}
                  alt={convener.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[#a78bfa]">
                  <User size={64} strokeWidth={1.5} />
                  <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Convener
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow text-[#d4af37]">Program Leadership</p>
              <h3 className="display mt-4 text-4xl text-white md:text-5xl group-hover:text-[#a78bfa] transition-colors">
                {convener.name}
              </h3>
              <p className="mt-3 text-sm font-semibold text-[#d4af37]">
                {convener.role}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {convener.paragraphs?.[0] ||
                  "Convener of Leading Minds Leadership Initiative, providing strategic vision, direction, and mentorship for Project EQUIP 2026."}
              </p>
              <span className="text-link mt-6 text-[#a78bfa] group-hover:text-[#c4b5fd] inline-flex items-center gap-1.5 font-bold text-xs">
                Read profile <ArrowUpRight size={15} />
              </span>
            </div>
          </button>

          {/* Facilitators Grid */}
          <div className="mb-8 mt-16">
            <p className="eyebrow text-[#d4af37]">The faculty</p>
            <h2 className="section-title text-white">Meet the facilitators</h2>
            <p className="section-copy text-slate-300">
              Explore each facilitator&apos;s background, area of specialization, and workshop focus.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {confirmedFaculty.map((person, index) => (
              <button
                type="button"
                key={person.id}
                onClick={() => setSelected(person.id)}
                className="panel card-hover group overflow-hidden rounded-2xl border border-white/10 bg-[#0e1736] text-left transition hover:border-[#a78bfa]/40 hover:bg-[#121c42]"
              >
                <div className="image-frame aspect-[0.9] overflow-hidden bg-[#121c40] border-b border-white/10">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[#a78bfa]">
                      <User size={48} />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                      FACILITATOR {String(index + 1).padStart(2, "0")}
                    </p>
                    {person.business && (
                      <span className="rounded-full border border-[#d4af37]/35 bg-[#d4af37]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[#f3e8c8] shadow-xs">
                        {person.business}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300 line-clamp-2">
                    {person.specialization}
                  </p>
                  <span className="text-link mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#a78bfa] group-hover:text-[#c4b5fd]">
                    View biography <ArrowUpRight size={14} />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Counseling & Welfare Support (Official Partnership) */}
          <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#1d0d42] to-[#0e1736] p-7 md:p-10 border border-[#703bf7]/30 shadow-xl">
            <p className="eyebrow text-[#d4af37]">Post-Event Welfare & Mentorship</p>
            <h2 className="display mt-3 text-3xl text-white md:text-4xl">
              Professional counseling and sustained mentorship.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200">
              Project EQUIP works alongside trained and qualified counselors from
              the <strong className="text-white font-bold">University of Ibadan</strong> who consistently monitor the
              personal growth and psychological well-being of participants. Following
              the 3-day camp, participants are assigned to dedicated facilitators
              for structured post-event guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Modal */}
      {activePerson && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-5"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="faculty-dialog-title"
            className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/15 bg-[#0e1736] p-6 shadow-2xl sm:rounded-3xl sm:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
              <div>
                <p className="eyebrow text-[#d4af37]">Faculty Profile</p>
                <h2
                  id="faculty-dialog-title"
                  className="display mt-2 text-3xl text-white md:text-4xl"
                >
                  {activePerson.name}
                </h2>
                <p className="mt-1.5 text-sm font-semibold text-[#d4af37]">
                  {activePerson.role}
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  {activePerson.specialization}
                  {activePerson.business ? ` • ${activePerson.business}` : ""}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close biography"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {activePerson.paragraphs && activePerson.paragraphs.length > 0 ? (
                activePerson.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-7 text-slate-200"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-sm italic text-slate-400">
                  Full biography and session details will be published shortly.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}