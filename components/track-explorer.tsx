"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { curriculum } from "@/data/curriculum";

export default function TrackExplorer() {
  const [activeTrack, setActiveTrack] = useState(curriculum[0].id);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(
    curriculum[0].skills[0].id,
  );

  const track =
    curriculum.find((item) => item.id === activeTrack) ?? curriculum[0];

  return (
    <section>
      <div
        className="grid gap-3 md:grid-cols-3"
        role="tablist"
        aria-label="Choose a training track"
      >
        {curriculum.map((item) => {
          const active = activeTrack === item.id;

          return (
            <button
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`track-panel-${item.id}`}
              id={`track-tab-${item.id}`}
              key={item.id}
              onClick={() => {
                setActiveTrack(item.id);
                setExpandedSkill(item.skills[0].id);
              }}
              className={`rounded-2xl border p-5 text-left transition-all ${
                active
                  ? "border-[#5925dc] bg-[#5925dc] text-white"
                  : "border-black/10 bg-white hover:border-[#5925dc]/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs opacity-65">
                  TRACK {item.number}
                </span>
                <ArrowUpRight size={17} />
              </div>
              <h3 className="mt-7 font-serif text-2xl leading-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-xs opacity-75">
                {item.skills.length} practical skills
              </p>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`track-panel-${track.id}`}
        aria-labelledby={`track-tab-${track.id}`}
        className="mt-10"
      >
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Track {track.number}</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">
              {track.title}
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#66675f]">
            {track.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
          {track.skills.map((skill, index) => {
            const expanded = expandedSkill === skill.id;

            return (
              <div key={skill.id} className="border-b border-black/10 last:border-0">
                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-7"
                  aria-expanded={expanded}
                  onClick={() =>
                    setExpandedSkill(expanded ? null : skill.id)
                  }
                >
                  <span className="font-mono text-xs text-[#5925dc]">
                    {track.number}.{index + 1}
                  </span>

                  <span className="flex-1 text-base font-semibold">
                    {skill.title}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 transition-transform ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expanded && (
                  <div className="grid gap-5 px-5 pb-7 pl-[52px] md:grid-cols-2 md:px-7 md:pl-[68px]">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5925dc]">
                        What you will learn
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#66675f]">
                        {skill.focus}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1c7c54]">
                        What you can do
                      </p>
                      <p className="mt-2 flex gap-2 text-sm leading-7 text-[#66675f]">
                        <Check
                          size={17}
                          className="mt-1 shrink-0 text-[#1c7c54]"
                        />
                        {skill.result}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
