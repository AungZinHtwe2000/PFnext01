// Edit content here — index.html and main.js read from this file.

const WORK = [
  {
    num: "01",
    title: "TrailFlix",
    headline: "Joining movie discovery and ticket booking in one focused flow.",
    outcome: "0→1 concept connecting recommendations, trailers, showtimes and booking.",
    scope: "Product strategy · UX research · Mobile UI",
    accent: "#ff7ac6",
    variant: "trailflix",
    coverImage: "assets/legacy/trailflix/cover.png",
    tags: ["Mobile App", "UX Research", "0→1"],
    desc: "A movie discovery app that turns trailer-browsing into ticket-booking — recommendations, trailer streaming, and theater listings in one flow.",
    fullDesc: "TrailFlix is a mobile-first entertainment experience designed to help users discover films quickly, compare showtimes, and book tickets with fewer taps.",
    highlights: [
      "Reduced browsing time with a clear discovery feed and instant trailer access.",
      "Created a seamless flow from trailer watching to ticket booking.",
      "Designed an onboarding experience that improved first-session activation."
    ],
    year: "2024",
    role: "Mobile app experience",
    tools: ["Figma", "User interviews", "ProtoPie"],
    gradient: "linear-gradient(135deg, #ff3e88, #6b2a5c)",
    link: "pages/project.html?project=trailflix"
  },
  {
    num: "02",
    title: "SKYNET APP",
    headline: "Redesigning Myanmar’s entertainment experience for clearer discovery.",
    outcome: "SkyNet V2 launched with a new navigation model and scalable product system.",
    scope: "Lead design · Research · Design system · Handoff",
    accent: "#d8ff58",
    variant: "skynet",
    isLive: true,
    featured: true,
    tags: ["OTT", "Admin Panel", "End User App"],
    desc: "An OTT experience redesigned with cinematic storytelling, clearer content discovery, and a polished cross-platform interface.",
    fullDesc: "SKYNET APP is a SkyNet OTT case study that blends immersive content storytelling with admin tools, aiming to create a seamless entertainment experience for both viewers and platform managers.",
    highlights: [
      "Improved content discoverability with a simplified navigation hierarchy.",
      "Designed a flexible admin dashboard for content, analytics, and operations.",
      "Refined visual rhythm for better readability across long viewing sessions."
    ],
    year: "2025",
    role: "Product redesign",
    tools: ["Figma", "Accessibility review", "Design system"],
    gradient: "linear-gradient(135deg, #2fe8c9, #14403a)",
    coverImage: "assets/images/skynet-cover.webp",
    link: "pages/project.html?project=skynet"
  },
  {
    num: "03",
    title: "Pristine Global",
    headline: "Making everyday finance feel calmer and more trustworthy.",
    outcome: "Client-approved loan journey and visual redesign delivered in four weeks—and now live.",
    scope: "UX audit · Product flows · FinTech UI",
    accent: "#ffb84d",
    variant: "pristine",
    isLive: true,
    coverImage: "assets/legacy/pristine/cover.png",
    tags: ["FinTech", "4-Week Sprint"],
    desc: "A finance loan app redesigned in four weeks—modernizing the interface and removing unnecessary application steps.",
    fullDesc: "Pristine Global is a finance experience built to simplify everyday money tasks, with lighter micro-interactions and a calm, trustworthy visual tone.",
    highlights: [
      "Delivered a clear dashboard layout for account balances and transaction flow.",
      "Designed transfer and payment flows suited for both novice and experienced users.",
      "Shelved visual complexity in favor of high-contrast clarity for trust."
    ],
    year: "2024",
    role: "FinTech case study",
    tools: ["Miro", "Usability testing", "Design tokens"],
    gradient: "linear-gradient(135deg, #ffb84d, #5c3a14)",
    link: "pages/project.html?project=pristine-global"
  },
  {
    num: "04",
    title: "D-Learn",
    headline: "Turning 15 new words a day into a habit learners can sustain.",
    outcome: "A two-week competition concept combining microlearning, quizzes, progress and AI personalization.",
    scope: "Rapid validation · Product strategy · Gamified mobile UI",
    accent: "#8ed8ff",
    variant: "dlearn",
    coverImage: "assets/legacy/dlearn/cover.png",
    tags: ["Ed-Tech", "Design System"],
    desc: "A learning platform built on a scalable design system, so new lessons and features could ship without breaking visual consistency.",
    fullDesc: "D-Learn is a modular education platform that supports new course content and learning tools through a consistent, reusable visual system.",
    highlights: [
      "Created a design system that supported rapid feature additions.",
      "Designed a lesson flow that keeps learners motivated through progress cues.",
      "Implemented a settings experience that balances personalization with ease of use."
    ],
    year: "2025",
    role: "Education platform",
    tools: ["Figma", "Component libraries", "User journey mapping"],
    gradient: "linear-gradient(135deg, #ff3e88, #2fe8c9)",
    link: "pages/project.html?project=dlearn"
  }
];

const EXPERIENCE = [
  {
    period: "Aug 2024 — Present",
    role: "Product (UI/UX Designer)",
    org: "SkyNet (Shwe Thanlwin Media)",
    points: [
      "Led end-to-end design of the SkyNet OTT app, from ideation to implementation.",
      "Ran user research, competitor analysis, user flows and interviews for a seamless UX.",
      "Partnered with the MarCom team on social assets that improved product conversion."
    ]
  },
  {
    period: "Feb 2024 — Aug 2024",
    role: "UI/UX Designer",
    org: "Global Wave Technology",
    points: [
      "Designed the employee savings dashboard for the GlobalTA & HR app.",
      "Redesigned the Pristine Global Finance App in four weeks with high client satisfaction.",
      "Expanded the GlobalTA design system for consistency and scale across products."
    ]
  },
  {
    period: "May 2023 — Apr 2024",
    role: "Jr. UI/UX Designer (Volunteer)",
    org: "TeeHtwin Organization",
    points: [
      "Designed UI/UX for Art-Tech projects alongside ML and UX researchers.",
      "Led the Kanote Art Platform App and the Kalasa Art Gallery website solo — now live."
    ]
  },
  {
    period: "Mar 2023 — Feb 2024",
    role: "Jr. UI/UX Designer",
    org: "Myanmar Online Entrepreneur",
    points: [
      "Designed multiple live websites within a team of designers.",
      "Led the ShweShops app and website, researching shop owners and consumers directly."
    ]
  }
];

const EDUCATION = [
  {
    period: "2016 — 2020",
    role: "Undergraduate studies, Port & Harbour Engineering",
    org: "Myanmar Maritime University",
    points: ["A structural-engineering foundation — thinking in systems long before it became design systems."]
  },
  {
    period: "2024",
    role: "How to Make Design Systems People Want to Use",
    org: "Design System University",
    points: []
  },
  {
    period: "2023",
    role: "Google UX Design",
    org: "Coursera",
    points: []
  },
  {
    period: "2023",
    role: "UX Strategy Fundamentals",
    org: "Udemy",
    points: []
  },
  {
    period: "2023",
    role: "Ultimate Guide to Product Design",
    org: "Nobel Work Foundation",
    points: []
  },
  {
    period: "2023",
    role: "Figma to Lottie Course",
    org: "LottieFiles",
    points: []
  },
  {
    period: "2022",
    role: "Professional Web Design & UI/UX Design",
    org: "Fairway Technology",
    points: []
  }
];
