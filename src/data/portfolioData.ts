export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "social" | "brand" | "campaign" | "character" | "motion";
  categoryLabel: string;
  year: string;
  client: string;
  role: string;
  image: string;
  aspectRatio: "wide" | "square" | "portrait";
  metrics?: string;
  description: string;
  narrative: string;
  deliverables: string[];
  tools: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "modern-teams-social",
    title: "Modern Teams — Social Campaign",
    subtitle: "Business Communication & Employer Branding Visuals",
    category: "social",
    categoryLabel: "SOCIAL",
    year: "2026",
    client: "Modern Teams",
    role: "Graphic Designer & Content Creative",
    image: "/src/assets/images/hero_brand_visual_1790940958401.jpg",
    aspectRatio: "wide",
    metrics: "40+ Social Assets & Carousels",
    description: "Social media creatives, LinkedIn posts, carousels and campaign visuals created around hiring, leadership, training and employer branding.",
    narrative: "Designed high-velocity visual communication for Modern Teams during my internship and job tenure. Created content addressing executive hiring, leadership growth, and workplace culture with clean typographic hierarchy, engaging LinkedIn carousels, and thumb-stopping feed creatives.",
    deliverables: [
      "LinkedIn Multi-Slide Carousels",
      "Hiring & Leadership Announcement Posts",
      "Employer Branding Infographics",
      "Creative Captions & Concept Copy"
    ],
    tools: ["Photoshop", "Canva", "Illustrator"]
  },
  {
    id: "sales-brigade-growth",
    title: "Sales Brigade — Growth Creatives",
    subtitle: "High-Impact Promotional & Social Media Content",
    category: "campaign",
    categoryLabel: "CAMPAIGN",
    year: "2026",
    client: "Sales Brigade",
    role: "Graphic Design & Content Creative",
    image: "/src/assets/images/project_cyber_beverage_1790940972840.jpg",
    aspectRatio: "wide",
    metrics: "Sales & Training Creative System",
    description: "Created promotional and social media content around sales, business growth, leadership, hiring and training.",
    narrative: "Engineered bold, contrast-rich visual assets turning abstract sales concepts into digestible visual communication. Formulated visual templates for rapid campaign iteration across social channels.",
    deliverables: [
      "Promotional Campaign Graphics",
      "Social Media Growth Posts",
      "Hiring & Team Expansion Ads",
      "AI-Assisted Concept Graphics"
    ],
    tools: ["Photoshop", "Canva", "AI Tools"]
  },
  {
    id: "kinetic-posters",
    title: "Kinetic Swiss — Poster & Advertising",
    subtitle: "Message-Driven Exhibition & Campaign Visuals",
    category: "campaign",
    categoryLabel: "CAMPAIGN",
    year: "2025",
    client: "Studio Independent",
    role: "Visual & Poster Designer",
    image: "/src/assets/images/project_editorial_posters_1790940998191.jpg",
    aspectRatio: "portrait",
    metrics: "High-Hierarchy Print & Digital Series",
    description: "Visuals built around a clear message, strong hierarchy and attention-grabbing composition.",
    narrative: "Experimental poster explorations investigating brutalist layout, intense typographic scale, and high-tension compositional grids. Designed for both street fly-posting and high-res digital displays.",
    deliverables: [
      "Large Format Posters",
      "Digital Advertising Banners",
      "Event Announcement System",
      "Typographic Layouts"
    ],
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: "brand-identity-craft",
    title: "Kura Visual System — Branding",
    subtitle: "Visual Identity & Packaging Guidelines",
    category: "brand",
    categoryLabel: "BRAND",
    year: "2025",
    client: "Kura Creative Concepts",
    role: "Brand Identity Designer",
    image: "/src/assets/images/project_cyber_beverage_1790940972840.jpg",
    aspectRatio: "square",
    metrics: "Complete Brand Guideline Bible",
    description: "Building visual systems that make brands recognizable, consistent and easier to remember.",
    narrative: "Designed a cohesive visual identity encompassing custom wordmarks, color palettes, packaging mockups, and social media branding templates to maintain strict visual consistency across touchpoints.",
    deliverables: [
      "Wordmark & Logo Variations",
      "Color Palette & Typography System",
      "Brand Collateral & Packaging",
      "Social Branding Kit"
    ],
    tools: ["Illustrator", "Photoshop", "Canva"]
  },
  {
    id: "mascot-character-study",
    title: "Sentinel — Character Design",
    subtitle: "Expressive Characters for Stories & Brands",
    category: "character",
    categoryLabel: "CHARACTER",
    year: "2025",
    client: "Aryansh Studio Experiment",
    role: "Character Concept Artist",
    image: "/src/assets/images/avatar_aryansh_1790941010324.jpg",
    aspectRatio: "square",
    metrics: "Character Concepts & Sheets",
    description: "Developing simple, expressive characters that can become part of a visual story or brand identity.",
    narrative: "Explored tactile, minimalist character designs with expressive eyes and distinct silhouettes. Built model sheets and pose variations capable of translating between static graphic brand assets and motion animation.",
    deliverables: [
      "Character Concept Sketches",
      "Turnaround & Expression Sheets",
      "Stylized 2D Vector Assets",
      "Interactive SVG Eye Prototype"
    ],
    tools: ["Photoshop", "Canva", "Figma"]
  },
  {
    id: "alpine-diorama-golden-hour",
    title: "Alpine Cliff — 3D & Animation Visuals (Image 1)",
    subtitle: "Cinematic Environment Concept & Spatial Lighting",
    category: "motion",
    categoryLabel: "MOTION & 3D",
    year: "2026",
    client: "Aryansh Studio & Arena Animation",
    role: "3D & Visual Concept Designer",
    image: "/src/assets/images/diorama_cliff_golden_hour_1790941328588.jpg",
    aspectRatio: "wide",
    metrics: "Featured Portfolio Artwork — 1376×768",
    description: "Atmospheric alpine cliff diorama exploration capturing dramatic golden hour lighting, tactile elevation, and spatial depth.",
    narrative: "Exploration of 3D spatial staging, ambient volumetric sunlight, and diorama-style environment storytelling. Created as part of ongoing animation and visual production studies, examining lighting temperature, rock stratification, and scale perspective.",
    deliverables: [
      "High-Resolution 3D Environment Concept",
      "Dynamic Golden Hour Lighting Keyframes",
      "Tactile Diorama Elevation Layout",
      "Cinematic Camera Staging Angles"
    ],
    tools: ["3D Animation", "Photoshop", "AI Generative Tools"]
  },
  {
    id: "floating-ridge-hero-visual",
    title: "Floating Ridge — Website Horizon (Image 2)",
    subtitle: "Flagship Website Cinematic Backdrop & Motion Environment",
    category: "motion",
    categoryLabel: "MOTION & 3D",
    year: "2026",
    client: "Aryansh Digital Experience",
    role: "Lead Visual Designer & Worldbuilder",
    image: "/src/assets/images/floating_cliff_diorama_hero_1790942505523.jpg",
    aspectRatio: "wide",
    metrics: "Flagship Hero Backdrop — 1376×768",
    description: "Expansive floating cliff diorama serving as the primary cinematic backdrop for the website interactive experience.",
    narrative: "Designed specifically as the flagship visual centerpiece for Aryansh Kumar's website. Balances atmospheric depth with typographic legibility, framing the hero typography against a living sky and alpine horizon.",
    deliverables: [
      "Hero Background Landscape System",
      "Atmospheric Vignette & Depth Layers",
      "Interactive Day/Night Sky Integration",
      "Cinematic Lighting Calibration"
    ],
    tools: ["3D Spatial Design", "Photoshop", "AI Production"]
  }
];

export const CAPABILITIES = [
  {
    num: "01",
    title: "Social Media Design",
    description: "Social media creatives designed to grab attention, communicate quickly and maintain a consistent visual identity.",
    includes: [
      "Instagram Posts",
      "LinkedIn Creatives",
      "Carousels",
      "Promotional Graphics",
      "Campaign Visuals"
    ]
  },
  {
    num: "02",
    title: "Poster & Advertising Design",
    description: "Visuals built around a clear message, strong hierarchy and attention-grabbing composition.",
    includes: [
      "Posters",
      "Digital Advertisements",
      "Promotional Creatives",
      "Campaign Graphics"
    ]
  },
  {
    num: "03",
    title: "Branding & Visual Identity",
    description: "Building visual systems that make brands recognizable, consistent and easier to remember.",
    includes: [
      "Visual Direction",
      "Brand Graphics",
      "Campaign Identity",
      "Social Branding",
      "Creative Systems"
    ]
  },
  {
    num: "04",
    title: "Character Design",
    description: "Developing simple, expressive characters that can become part of a visual story or brand identity.",
    includes: [
      "Character Concepts",
      "Character Sheets",
      "Expressions",
      "Stylized Illustrations"
    ]
  },
  {
    num: "05",
    title: "AI-Assisted Visual Content",
    description: "Combining design knowledge with AI tools to experiment with faster visual development, promotional content and creative concepts.",
    includes: [
      "Concept Moodboards",
      "Generative Keyframes",
      "Visual Brainstorming",
      "Rapid Prototyping"
    ]
  },
  {
    num: "06",
    title: "Motion & Animation",
    description: "Currently expanding my design skills into 2D and 3D animation, with a focus on visual storytelling and motion.",
    includes: [
      "2D Character Motion Basics",
      "3D Workflow Foundations",
      "Animated Social Teasers",
      "Visual Timing & Rhythm"
    ]
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: "DESIGN",
    skills: [
      { name: "Photoshop", level: "Intermediate", pct: 68 },
      { name: "Canva", level: "Intermediate", pct: 75 },
      { name: "Illustrator", level: "Beginner", pct: 45 }
    ]
  },
  {
    category: "CREATIVE",
    skills: [
      { name: "Character Design", level: "Intermediate", pct: 65 },
      { name: "Branding", level: "Intermediate", pct: 70 },
      { name: "Social Media Design", level: "Intermediate", pct: 82 }
    ]
  },
  {
    category: "MOTION",
    skills: [
      { name: "2D Animation", level: "Learning", pct: 35 },
      { name: "3D Animation", level: "Learning", pct: 30 },
      { name: "Video Editing", level: "Beginner", pct: 48 }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    summary: "First, I understand the brand, audience, objective and message."
  },
  {
    step: "02",
    title: "Research",
    summary: "I study the market, visual references, competitors and current trends."
  },
  {
    step: "03",
    title: "Concept",
    summary: "I develop visual directions that connect the message with the audience."
  },
  {
    step: "04",
    title: "Design",
    summary: "I turn the concept into a clear visual system using composition, typography, color and imagery."
  },
  {
    step: "05",
    title: "Refine",
    summary: "I review the design, improve hierarchy and remove anything that doesn't serve the idea."
  },
  {
    step: "06",
    title: "Deliver",
    summary: "Final creative assets are prepared for the required platform and format."
  }
];

export const NEXT_UP = [
  {
    title: "2D ANIMATION",
    description: "Learning character movement, timing, expressions and visual storytelling."
  },
  {
    title: "3D ANIMATION",
    description: "Exploring 3D workflows and building foundational skills in animation and visual development."
  },
  {
    title: "AI + MOTION",
    description: "Experimenting with AI-assisted workflows to create faster and more experimental visual content."
  },
  {
    title: "STORYTELLING",
    description: "Exploring how design, animation and narrative can work together to create stronger visual experiences."
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    year: "2026",
    role: "Graphic Designer & Content Creative",
    org: "Modern Teams",
    tag: "Internship → Job",
    detail: "Visual communication for business, leadership, hiring, training and employer branding."
  },
  {
    year: "2026",
    role: "Graphic Design & Content Creative",
    org: "Sales Brigade",
    tag: "Contract",
    detail: "Promotional and social media content around sales, business growth and training."
  },
  {
    year: "2025–Present",
    role: "Independent Graphic Designer",
    org: "Freelance",
    tag: "1+ Year",
    detail: "Promotional graphics, social media content, advertisements and brand visuals."
  },
  {
    year: "2025–Present",
    role: "Animation / VFX / Unreal learning",
    org: "Arena Animation",
    tag: "Education",
    detail: "Expanding into 2D/3D animation, timing, character movement and visual development."
  },
  {
    year: "2024–2027",
    role: "BBA (Bachelor of Business Administration)",
    org: "Axis Institute of Higher Education",
    tag: "Degree",
    detail: "Business administration, communication, marketing foundations."
  }
];
