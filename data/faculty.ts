export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  specialization: string;
  business?: string;
  image: string;
  paragraphs: string[];
};

export const convener: FacultyMember = {
  id: "convener",
  name: "Adeyemi Adebinmbe",
  role: "Convener, Leading Minds Leadership Initiative",
  specialization: "Youth leadership and program direction",
  image: "", // Add image path when available (e.g. "/team/Adeyemi.jpeg")
  paragraphs: [
    // Add biography paragraphs when available
  ],
};

export const faculty: FacultyMember[] = [
  {
    id: "facilitator-01",
    name: "Blessing Ewatomi Tejuosho",
    role: "Shoemaking & Leatherworks Facilitator",
    specialization: "Shoemaking and Leatherworks",
    business: "EWA ONI BATA",
    image: "/team/Blessing.jpeg",
    paragraphs: [
      "Tejuosho Blessing Ewatomi is a trained shoemaker, leatherworks entrepreneur, and the founder of EWA ONI BATA, a brand dedicated to the production of stylish, quality footwear and other leather products.",
      "Having completed formal shoemaking training and gained additional experience through apprenticeship and personal practice, she has developed practical knowledge of footwear production and leather craftsmanship.",
      "She is deeply passionate about vocational skill development, creativity, and entrepreneurship. Through her work, she seeks to encourage individuals to acquire practical skills that promote self-reliance, personal development, and economic empowerment.",
      "As a facilitator, Blessing leads participants through hands-on shoemaking training, introducing them to the fundamentals of footwear production and encouraging them to explore shoemaking as both a creative craft and a viable livelihood.",
      "Through her sessions, she inspires participants to hone their skills, embrace their creative instincts, and recognize the vast economic opportunities available within the leatherworks industry.",
    ],
  },
  {
    id: "facilitator-02",
    name: "Babs-Olawoyin Adedamola Victoria",
    role: "Creative Arts & Dance Facilitator",
    specialization: "Creative Arts, Dance & Movement Therapy",
    business: "Okotorapy",
    image: "/team/Victoria.jpeg",
    paragraphs: [
      "Babs Olawoyin is a creative arts practitioner, dance educator, and founder of Okotorapy, a movement and creative arts initiative that promotes self-expression, creativity, and personal development through dance and the arts.",
      "With a background in English and extensive experience across dance, drama, choreography, costume design, and stage performance, Babs is passionate about teaching and nurturing creativity in both children and adults. She believes dance is more than an art form; it is a practical tool for learning vital life skills, building confidence, developing discipline, encouraging teamwork, and navigating everyday life.",
      "Through her work, she creates engaging learning experiences that combine movement, cultural appreciation, and hands-on creativity, including African and traditional dances and indigenous art forms such as Adire tie-and-dye. Her goal is to empower young people to discover their potential, develop practical skills, and express themselves with confidence.",
    ],
  },
  {
    id: "facilitator-03",
    name: "Omowumi Temitope Ogunrinde",
    role: "Communications & Digital Media Facilitator",
    specialization: "Digital Communication, Social Media Management & Audience Engagement",
    image: "/team/Temitope.jpeg",
    paragraphs: [
      "Omowumi Temitope Ogunrinde is a communications and social media professional with proven expertise in content creation, digital communication, social media management, and community engagement. Holding a background in Communication and Language Arts from the University of Ibadan, she combines academic insight with practical industry execution across content planning, copywriting, community management, and social media analytics.",
      "Her professional track record includes managing high-impact social media accounts for government institutions and driving strategic communication and project coordination initiatives.",
      "Passionate about effective digital communication, Temitope is dedicated to helping young people understand how to leverage social media strategically, build valuable digital competencies, and unlock opportunities in today's digital economy.",
    ],
  },
  {
    id: "facilitator-04",
    name: "Tobi Bello",
    role: "Youth Development & Operations Facilitator",
    specialization: "Social Work, Operations Leadership & Youth Empowerment",
    business: "My Freedom VA LLC",
    image: "/team/Tobi.jpeg",
    paragraphs: [
      "Tobi Bello is a social worker, operations leader, and facilitator passionate about personal and professional development.",
      "She currently serves as the Operations Manager at My Freedom VA LLC, where she supports organizational growth, team development, and operational excellence.",
      "With a strong background in social work and leadership, her experience spans mental health advocacy, substance use prevention, counselling, sexuality education, and youth development. She is passionate about empowering young people and women to cultivate self-awareness, build confidence, develop their potential, make intentional choices, and pursue meaningful lives and careers.",
      "Through her professional work and facilitation, Tobi curates transformative conversations that foster healthy decision-making, emotional wellbeing, and purposeful living.",
    ],
  },
  {
    id: "facilitator-05",
    name: "Philip Ajayi",
    role: "Software Engineering & AI Facilitator",
    specialization: "Full-Stack Software Engineering & Artificial Intelligence",
    business: "Coherentity",
    image: "/team/Philip.jpeg",
    paragraphs: [
      "Philip Ajayi is a versatile full-stack software engineer, tech entrepreneur, and the founder of Coherentity, an innovative artificial intelligence venture focused on building practical, intelligent digital solutions.",
      "Philip brings a uniquely analytical and interdisciplinary approach to technology. He earned his bachelor's degree in Microbiology from Joseph Ayo Babalola University (JABU) before completing a Master's degree in Virology at the University of Ibadan (UI). His scientific research background honed a deep instinct for systems thinking, rigorous problem-solving, and attention to detail—qualities that seamlessly translated into architecting modern software and AI models.",
      "Driven by a passion for continuous innovation, Philip made the bold leap from biological sciences to programming, becoming a prolific freelance engineer building robust web and AI-driven products. As a facilitator, he is dedicated to demystifying technology for beginners and empowering young minds to explore software development, leverage AI tools, and create value in the global digital landscape.",
    ],
  },
  {
    id: "facilitator-06",
    name: "[Facilitator Six]",
    role: "Facilitator",
    specialization: "[Official specialization]",
    image: "/images/faculty/facilitator-06.jpg",
    paragraphs: ["[Official biography to be supplied.]"],
  },
  {
    id: "facilitator-07",
    name: "[Facilitator Seven]",
    role: "Facilitator",
    specialization: "[Official specialization]",
    image: "/images/faculty/facilitator-07.jpg",
    paragraphs: ["[Official biography to be supplied.]"],
  },
  {
    id: "facilitator-08",
    name: "[Facilitator Eight]",
    role: "Facilitator",
    specialization: "[Official specialization]",
    image: "/images/faculty/facilitator-08.jpg",
    paragraphs: ["[Official biography to be supplied.]"],
  },
];