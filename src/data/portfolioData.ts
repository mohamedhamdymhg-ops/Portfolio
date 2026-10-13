import {
  PersonalInfo,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  ServiceItem,
  CertificationItem,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Mohamed Hamdy Sayed Gouda",
  title: "Digital Marketer",
  shortDescription:
    "I’m a digital marketer specializing in social media, paid advertising, and content creation. My client work includes developing content strategies for a nutrition professional and creating social media designs for a dental clinic. Paid advertising is my strongest area, and I bring an organized, hardworking, and detail-focused approach to my work.",
  location: "Giza, Egypt",
  email: "mohamed.hamdy.mhg@gmail.com",
  phone: "+201080929267",
  availability: "Open to new job opportunities",
  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "B2 (Professional Working)" },
  ],
  interests: "Tracking and analyzing campaign performance",
  socials: {
    linkedin: "https://www.linkedin.com/in/mohamed-hamdy-s/",
    github: "https://github.com/mohamedhamdymhg-ops",
    facebook: "https://www.facebook.com/hamdy.for.marketing",
    instagram: "https://www.instagram.com/hamdy_for_marketing/",
  },
};

export const aboutContent = {
  paragraphs: [
    "I am currently enrolled in the Digital Marketing track of the Digital Egypt Pioneers Initiative (DEPI), which is part of Egypt’s Ministry of Communications and Information Technology. I have worked directly with clients in nutrition and dental care, as well as with a creative professional who works as a video editor and graphic designer. My work includes content strategy, social media designs, and visual identity and logo development.",
    "My professional goal is to understand each business and its audience deeply, learn how people think and how to communicate with them, and use those insights to build successful marketing strategies. I want to work with clients across different industries and continue developing my expertise in paid advertising.",
    "I am especially interested in tracking campaign performance. My working style is organized, hardworking, and detail-focused. I believe in understanding the client, the business, and its audience before developing a strategy.",
  ],
  corePrinciples: [
    {
      title: "Audience-First Thinking",
      description:
        "Deep research into buyer psychology, pain points, and behavioral triggers before drafting a single deliverable.",
    },
    {
      title: "Analytical Discipline",
      description:
        "Structured tracking of engagement loops and marketing performance to turn observations into actionable strategic decisions.",
    },
    {
      title: "Cohesive Visual & Copy Alignment",
      description:
        "Ensuring visual assets, brand tone, and messaging architecture work together consistently across all touchpoints.",
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: "paid-advertising",
    title: "Paid Advertising",
    description: "Core area of strength focused on high-intent campaign architecture and testing.",
    note: "Paid advertising is an area of strength and a service I offer. However, I have not yet executed paid campaigns for clients.",
    skills: [
      { name: "Campaign Setup" },
      { name: "Audience Targeting" },
      { name: "Ad Copywriting" },
      { name: "Performance Tracking" },
      { name: "Campaign Optimization" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Strategy",
    description: "Comprehensive planning and audience alignment for sustainable engagement.",
    skills: [
      { name: "Marketing Strategy" },
      { name: "Content Strategy" },
      { name: "Social Media Account Management" },
      { name: "Audience Research & Understanding" },
    ],
  },
  {
    id: "creative",
    title: "Creative & Design",
    description: "Visual identity and high-impact visual communication assets.",
    skills: [
      { name: "Social Media Post Design" },
      { name: "Logo Design" },
      { name: "Visual Identity Development" },
    ],
  },
  {
    id: "platforms-tools",
    title: "Platforms & Tools",
    description: "Modern ad managers, design suites, and generative AI research workflows.",
    skills: [
      { name: "Meta Ads Manager" },
      { name: "Google Ads" },
      { name: "Google Analytics" },
      { name: "Canva" },
      { name: "ChatGPT" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "Google Flow" },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "freelance-marketer",
    role: "Freelance Digital Marketer",
    company: "Independent Client Projects",
    location: "Giza, Egypt",
    period: "July 2026 – Present",
    type: "Freelance / Client Projects",
    responsibilities: [
      "Developed a comprehensive content strategy for a nutrition professional to increase awareness, explain the service clearly, and communicate that dieting can be approachable without deprivation.",
      "Designed multiple social media posts for a dental clinic showcasing available services, clinical treatment cases, and before-and-after examples.",
      "Prepared a structured content strategy for a video editor and graphic designer to support consistent publishing despite tight time constraints.",
      "Contributed to content strategy, social media account management, post design, and visual identity and logo development across client engagements.",
    ],
    note: "All listed engagements represent independent strategic and creative client work. Paid advertising campaigns have not yet been executed for clients.",
  },
];

export const educationData: EducationItem[] = [
  {
    id: "depi",
    degree: "Digital Marketing Track",
    institution: "Digital Egypt Pioneers Initiative (DEPI)",
    organization: "Ministry of Communications and Information Technology (MCIT)",
    dates: "17 July 2026 – 2 December 2026",
    status: "In Progress",
    statusBadgeColor: "yellow",
    details: [
      "Advanced hands-on program by the Ministry of Communications and Information Technology.",
      "Focusing on omnichannel marketing strategies, social media architectures, ad analytics, and digital brand development.",
    ],
  },
  {
    id: "bachelor-law",
    degree: "Bachelor of Laws, English Section",
    institution: "Beni-Suef University",
    location: "Beni-Suef, Egypt",
    dates: "2019 – 2023",
    status: "Graduated",
    statusBadgeColor: "emerald",
    details: [
      "Completed degree in the English section with rigorous training in analytical reasoning, precise documentation, and regulatory compliance.",
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "paid-advertising",
    title: "Paid Advertising",
    description:
      "Structured ad campaign preparation, granular audience segmentation, compelling direct-response copywriting, and conversion-focused tracking.",
    iconName: "TrendingUp",
    capabilities: [
      "Meta Ads & Google Ads setup",
      "Audience targeting & lookalikes",
      "Ad copywriting & angle variations",
      "Performance tracking & KPI mapping",
      "Campaign optimization frameworks",
    ],
    note: "Offered service ready for implementation; no client ad accounts managed in past engagements.",
  },
  {
    id: "marketing-strategy",
    title: "Marketing Strategy",
    description:
      "Holistic go-to-market plans that align business offerings with the exact needs, pains, and desires of target buyer personas.",
    iconName: "Compass",
    capabilities: [
      "Competitive landscape analysis",
      "Audience persona profiling",
      "Value proposition positioning",
      "Channel distribution planning",
    ],
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    description:
      "Actionable 30-day publishing roadmaps, content pillar definitions, editorial rhythms, and platform-specific execution guidelines.",
    iconName: "FileSpreadsheet",
    capabilities: [
      "Content pillars & themes",
      "Editorial calendars & publishing rhythm",
      "Platform-specific content rules",
      "Measurement frameworks",
    ],
  },
  {
    id: "social-media-management",
    title: "Social Media Account Management",
    description:
      "End-to-end guidance to maintain consistent social presence, protect brand voice, and nurture organic community interaction.",
    iconName: "Share2",
    capabilities: [
      "Account layout & bio optimization",
      "Publishing workflow management",
      "Community engagement guidelines",
      "Performance monitoring",
    ],
  },
  {
    id: "post-design",
    title: "Social Media Post Design",
    description:
      "Eye-catching, branded social visual assets designed to stop scrolling, communicate key benefits, and highlight real client transformations.",
    iconName: "Layout",
    capabilities: [
      "Carousel & multi-slide formats",
      "Promotional & case-study graphics",
      "Typography hierarchy & readability",
      "Brand-consistent color styling",
    ],
  },
  {
    id: "visual-identity",
    title: "Logo & Visual Identity Design",
    description:
      "Distinctive logo marks and visual systems that establish credibility, brand cohesion, and an elegant professional aesthetic.",
    iconName: "Sparkles",
    capabilities: [
      "Logo concept design & variations",
      "Color palette curation",
      "Typography guidelines",
      "Brand asset preparation",
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "oracle-ai",
    name: "AI for You",
    provider: "Oracle",
    date: "September 2026",
    badge: "Official Certificate",
  },
];
