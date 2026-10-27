export type BudgetItem = {
  id: string;
  title: string;
  description: string;
  amount: number;
};

export const budget: BudgetItem[] = [
  {
    id: "venue-accommodation",
    title: "Venue & Accommodation",
    description: "Hall rental and 5-day residential lodging for 100 participants.",
    amount: 1500000,
  },
  {
    id: "feeding",
    title: "Feeding & Refreshments",
    description: "Daily meals, potable drinking water, and refreshment breaks throughout the camp.",
    amount: 2600000,
  },
  {
    id: "training-technical",
    title: "Training & Technical",
    description: "Projector, PA system, power generation, and specialized tech training setup.",
    amount: 485000,
  },
  {
    id: "logistics-medicals",
    title: "Logistics & Medicals",
    description: "Local program transportation and first aid emergency supplies.",
    amount: 300000,
  },
  {
    id: "materials-branding",
    title: "Materials & Branding",
    description: "Participant tags, banners, backdrops, certificates, and event souvenirs.",
    amount: 1895000,
  },
  {
    id: "personnel-rewards",
    title: "Personnel & Rewards",
    description: "Facilitator honoraria, student giveaways/rewards, and photography/videography.",
    amount: 930000,
  },
  {
    id: "publicity-miscellaneous",
    title: "Publicity & Miscellaneous",
    description: "Promotional campaigns, ads, and operational contingency reserves.",
    amount: 740000,
  },
];

export const sponsorshipTiers = [
  {
    id: "platinum",
    title: "Platinum Sponsor",
    amount: 3000000,
    description:
      "Premium branding on all event materials, speaking opportunity at the event, named sponsorship of a specific training module, and comprehensive post-event impact reports.",
    benefit: "Premium branding & keynote speaking opportunity (₦3,000,000+)",
  },
  {
    id: "gold",
    title: "Gold Sponsor",
    amount: 1000000,
    description:
      "Prominent logo placement on banners and certificates, dedicated social media mentions, and inclusion in press releases.",
    benefit: "Logo placement on banners/certificates & press release (₦1,000,000 – ₦2,999,999)",
  },
  {
    id: "silver",
    title: "Silver Sponsor",
    amount: 500000,
    description:
      "Logo on participant tags and general event banners, plus official social media appreciation.",
    benefit: "Logo on participant tags, event banners & social shoutout (₦500,000 – ₦999,999)",
  },
  {
    id: "adopt-a-leader",
    title: "Adopt-a-Leader",
    amount: 84500,
    description:
      "Directly fund the complete 5-day experience—including accommodation, feeding, and training materials—for one specific teenager.",
    benefit: "Full sponsorship for 1 student",
  },
];

export const accountability = {
  statement:
    "Leading Minds Leadership Initiative is committed to transparency, accountability, and responsible stewardship of all funds entrusted to this project. We maintain rigorous financial records.",

  commitments: [
    {
      title: "Comprehensive Financial Reports",
      description:
        "Full financial documentation and detailed spending reports made available to all partners and sponsors.",
    },
    {
      title: "Media Documentation",
      description:
        "High-quality photographs and video documentation capturing all stages and milestones of the program.",
    },
    {
      title: "Impact Assessment & Feedback",
      description:
        "Direct participant feedback, learning outcomes, and verifiable impact assessment data.",
    },
  ],
};

export const futurePlans = [
  {
    title: "Purpose & Leadership Resource Centre",
    description:
      "Build the Purpose and Leadership Resource Centre as an official permanent venue for trainings and seminars.",
  },
  {
    title: "Secondary School & Institutional Outreaches",
    description:
      "Gain access to secondary schools and youth organizations to reach teenagers with the message of transformational leadership.",
  },
  {
    title: "Strategic Corporate & Private Partnerships",
    description:
      "Gain the trust of and secure enduring partnerships with private donors and corporate sponsors.",
  },
  {
    title: "Nationwide & Global Expansion",
    description:
      "Expand outreach into different cities and states to reach more teenagers and young people across Nigeria and across the globe.",
  },
];

export const totalBudget = budget.reduce(
  (total, item) => total + item.amount,
  0,
);