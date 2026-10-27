export type Skill = {
  id: string;
  title: string;
  focus: string;
  result: string;
};

export type Track = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  skills: Skill[];
};

export type SchedulePhase = {
  days: string;
  phase: string;
  focus: string;
};

export const curriculum: Track[] = [
  {
    id: "digital",
    number: "01",
    title: "Digital Skills",
    shortTitle: "Digital",
    description:
      "Master foundational digital tools and modern creative workflows—from no-code web development and mobile content creation to AI-powered productivity.",
    skills: [
      {
        id: "digital-1",
        title: "Web Design (No-Code)",
        focus:
          "Building responsive, user-friendly websites without coding using drag-and-drop builders like Wix, Carrd, and WordPress. Emphasizes layout structuring, typography, image optimization, and mobile responsiveness.",
        result:
          "Each participant builds and launches a live, fully functional personal portfolio, blog, or basic business landing page.",
      },
      {
        id: "digital-2",
        title: "Video Editing & Content Creation",
        focus:
          "Mobile videography fundamentals (camera angles, lighting, and pacing) paired with hands-on post-production—clipping, pacing, seamless transitions, subtitle integration, and sound design using tools like CapCut and InShot.",
        result:
          "Participants produce a polished, high-engagement 30-to-60-second social media reel or promotional video from raw smartphone footage.",
      },
      {
        id: "digital-3",
        title: "Prompt Engineering & AI Productivity",
        focus:
          "Demystifying generative AI platforms (such as ChatGPT, Claude, and Canva AI). Learn structured prompt engineering frameworks to generate concepts, draft business correspondence, outline essays, and streamline problem-solving.",
        result:
          "Participants collaborate with AI tools to produce a mini digital publication or a structured startup business plan.",
      },
      {
        id: "digital-4",
        title: "Graphic Design & Branding",
        focus:
          "Core design principles (color theory, typographic hierarchy, composition, and alignment) applied practically in Canva to design marketing collaterals including flyers, business cards, and social media posts.",
        result:
          "Participants develop a complete Brand Identity Pack featuring a custom logo, brand color palette guide, and three branded marketing templates.",
      },
    ],
  },
  {
    id: "crafts",
    number: "02",
    title: "Hand Skills & Creative Crafts",
    shortTitle: "Creative Crafts",
    description:
      "Turn raw materials into bespoke, functional goods while developing craftsmanship discipline, material safety, and product quality standards.",
    skills: [
      {
        id: "craft-1",
        title: "Resin Arts & Product Casting",
        focus:
          "Workshop safety protocols, accurate measuring, mixing epoxy resin, and embedding pigments or objects to cast customized lifestyle accessories such as keychains, name tags, and phone grips.",
        result:
          "Finished, crystal-clear, durable resin accessories ready for packaging, product photography, and sale.",
      },
      {
        id: "craft-2",
        title: "Leatherwork & Accessories",
        focus:
          "Handling traditional leather tools, pattern drafting, precision cutting, edge burnishing, hole punching, and hand-stitching with genuine and synthetic leather.",
        result:
          "A handmade, durable utility item such as a cardholder, passport wallet, keychain loop, or personalized wristband.",
      },
      {
        id: "craft-3",
        title: "Textile Branding & Fabric Styling",
        focus:
          "Fabric manipulation, Adire tie-dye patterns, heat-press application, and fabric-painting techniques to convert raw textiles into wearable statement pieces.",
        result:
          "Branded cloth accessories (such as customized canvas tote bags or minimalist patterned caps) sporting original hand-crafted designs.",
      },
      {
        id: "craft-4",
        title: "Perfume & Scent Formulation (Oil Blending)",
        focus:
          "Understanding the fragrance pyramid (top, middle, and base notes), calculating essential and carrier oil ratios safely, blending fragrances, and adhering to cosmetic safety guidelines.",
        result:
          "Custom-formulated, bottled oil perfumes or artisanal room fragrances with personalized brand naming and packaging.",
      },
    ],
  },
  {
    id: "business",
    number: "03",
    title: "Digital Marketing & Business Fundamentals",
    shortTitle: "Business",
    description:
      "Bridge technical craftsmanship with commercial viability through actionable marketing strategies, financial accountability, and personal digital branding.",
    skills: [
      {
        id: "business-1",
        title: "Social Media Marketing & Operations",
        focus:
          "Understanding major platform algorithms, organic reach mechanics, community building, conversion-focused copywriting, hashtag strategies, and content planning.",
        result:
          "A structured 7-day social media content rollout schedule and an optimized profile layout engineered to attract organic traffic.",
      },
      {
        id: "business-2",
        title: "Basic Financial Literacy for Young Entrepreneurs",
        focus:
          "Practical money management tailored for early-stage ventures: calculating unit production costs, segregating personal and operational funds, setting sustainable profit margins, and basic bookkeeping.",
        result:
          "A completed pricing, break-even, and profit calculation model for a sample product or service.",
      },
      {
        id: "business-3",
        title: "Personal Branding & Professional Networking",
        focus:
          "Building an authentic digital footprint, maintaining online safety, and showcasing skills effectively on platforms like LinkedIn, Instagram, or X to attract clients, mentors, and employers.",
        result:
          "A fully audited and optimized professional social profile positioned for career, freelance, or vocational opportunities.",
      },
    ],
  },
];

export const programSchedule: SchedulePhase[] = [
  {
    days: "Days 1–2",
    phase: "Foundation",
    focus:
      "Introduction to tools and workflows, fundamentals of financial literacy, and collaborative business ideation.",
  },
  {
    days: "Days 3–4",
    phase: "Execution",
    focus:
      "Hands-on building of the core asset (website, video, brand pack, or physical craft) and formulating go-to-market strategies.",
  },
  {
    days: "Day 5",
    phase: "Demo Day & Showcase",
    focus:
      "Live showcase and mini-pitch session where participants present their completed projects and business ideas to peers and mentors.",
  },
];