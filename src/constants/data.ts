import type { Experience, Metric, Project, TechCategory } from "../types";

export const METRICS: Metric[] = [
  { label: "Active Users", value: "5,000+" },
  { label: "Perceived Performance", value: "40% ↑" },
  { label: "Lighthouse Score", value: "90+" },
  { label: "API Calls Reduced", value: "35%" },
  { label: "Students Guided", value: "100+" },
];

export const TECH_STACK: TechCategory[] = [
  {
    title: "Frontend & UI",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend & Systems",
    items: [
      "Spring Boot",
      "REST APIs",
      "JWT Auth",
      "PostgreSQL",
      "Spring Data JPA",
      "Firebase",
      "Firestore",
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      "Git/GitHub",
      "Jest",
      "RTL",
      "Vercel",
      "Postman",
      "Agile/Scrum",
      "Chrome DevTools",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "cine-fusion",
    name: "Cine Fusion",

    description:
      "High-performance movie discovery platform handling 1,000+ daily requests with <2s initial load time. Features efficient pagination and search-driven results for optimized API usage.",
    tech: ["React", "TMDb API", "Tailwind CSS", "Vercel"],
    impact: "90+ Lighthouse Score",
    githubUrl: "https://github.com/ayushagrawal2806/Cine-Fusion",
    liveUrl: "https://cine-fusion-gamma.vercel.app/",
  },
  {
    id: "codepen-clone",
    name: "CodePen Clone",
    description:
      "Real-time collaborative code editor with <100ms sync latency using Firebase. Built a secure iframe sandbox for secure execution and auto-save version history.",
    tech: ["Firebase", "React", "CodeMirror", "Firestore"],
    impact: "<100ms Sync Latency",
    githubUrl: "https://github.com/ayushagrawal2806/CodePen-Clone",
    liveUrl: "https://code-pen-clone-five.vercel.app/",
  },
  {
    id: "airbnb-backend",
    name: "Airbnb Clone Backend",
    description:
      "RESTful API architecture using Spring Boot with JWT-based authentication. Designed scalable relational data models using PostgreSQL and integrated Stripe workflows.",
    tech: ["Spring Boot", "PostgreSQL", "Spring Data JPA", "Stripe"],
    impact: "Role-based Access Control",
    githubUrl: "https://github.com/ayushagrawal2806/Airbnb-Clone-Backend",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "Flurn Technologies Pvt Ltd",
    role: "Software Engineer",
    period: "June 2024 – Dec 2025",
    achievements: [
      "Architected frontend solutions using React.js and React Native, serving 5,000+ monthly active users with a maintaining a 95%+ crash-free rate",
      "Optimized data-fetching via TanStack Query, reducing API calls by 35% and improving perceived performance by 40%.",
      "Engineered a reusable component library with Tailwind CSS, reducing feature development time by 25%.",
      "Achieved 85% code coverage with Jest and RTL, reducing production bugs by 30%.",
    ],
  },
  {
    id: "exp-2",
    company: "Geekster",
    role: "Teaching Assistant (Part-Time)",
    period: "Oct 2024 – Apr 2025",
    achievements: [
      "Mentored 100+ students through technical mentorship, code reviews, and live sessions on React architecture.",
      "Conducted mock technical interviews, improving student placement success rates by 40%.",
      "Provided structured feedback to strengthen debugging and problem-solving skills across the cohort.",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology in Computer Science",
  school: "Shambhunath Institute of Engineering and Technology",
  period: "Oct 2020 – Jun 2024",
  location: "Prayagraj, India",
  courses: [
    "DSA",
    "Web Development",
    "Database Management",
    "Operating Systems",
  ],
};
