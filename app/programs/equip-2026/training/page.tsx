import PageHero from "@/components/page-hero";
import TrackExplorer from "@/components/track-explorer";
import { curriculum } from "@/data/curriculum";

export default function TrainingPage() {
  const totalSkills = curriculum.reduce(
    (sum, track) => sum + track.skills.length,
    0,
  );

  return (
    <>
      <PageHero
        eyebrow="The learning experience"
        title="Eleven skills. Three pathways to self-reliance."
        description="To prevent cognitive overload, participants specialize in a dedicated digital skill, hand craft, or business track designed to produce a tangible, market-ready asset by the end of the week."
      />

      <section className="section-space">
        <div className="page-shell">
          <div className="mb-9 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-[#0e1736] px-4 py-2 text-xs font-semibold text-[#5925dc]">
              {totalSkills} practical skills
            </span>
            <span className="rounded-full border border-white/10 bg-[#0e1736] px-4 py-2 text-xs font-semibold">
              3 specialization tracks
            </span>
            <span className="rounded-full border border-white/10 bg-[#0e1736] px-4 py-2 text-xs font-semibold">
              5-day intensive residential
            </span>
          </div>

          <TrackExplorer />
        </div>
      </section>

      <section className="pb-20">
        <div className="page-shell">
          <div className="rounded-3xl bg-gradient-to-br from-[#1d0d42] to-[#0e1736] p-7 md:p-10 border border-[#703bf7]/30">
            <p className="eyebrow text-[#5925dc]">Our Training Philosophy</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">
              Learn it. Make it. Put it to use.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#55564f]">
              Every track pairs theoretical instruction with hands-on toolkits. Whether building a responsive
              no-code landing page, formulating artisanal perfumes, or crafting bespoke leather accessories,
              each student graduates with a published or physical portfolio piece.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}