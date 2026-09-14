export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  accentIndex: number;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "HomeKart",
    category: "E-Commerce Marketplace",
    description:
      "An e-commerce marketplace connecting customers with homemade food, handmade products, artwork and other creative products.",
    technologies: ["Next.js", "React", "Node.js", "NestJS", "MongoDB", "JWT"],
    features: [
      "Authentication",
      "Product management",
      "Categories",
      "Admin dashboard",
      "Vendor functionality",
      "Orders",
      "REST APIs"
    ],
    accentIndex: 4,
    github: "#",
    live: "#"
  },
  {
    name: "AI Virtual Assistant",
    category: "AI / Voice Application",
    description:
      "An AI-powered virtual assistant built using modern web technologies with authentication, speech interaction and cloud media integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Web Speech API", "JWT", "Cloudinary"],
    features: [
      "AI conversations",
      "Voice interaction",
      "Authentication",
      "User management",
      "Cloud media"
    ],
    accentIndex: 5,
    github: "#",
    live: "#"
  },
  {
    name: "ExpensePro",
    category: "Finance / Analytics",
    description:
      "A full-stack expense management application for tracking income and expenses with analytics.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Recharts", "JWT"],
    features: [
      "Authentication",
      "Expense tracking",
      "Income tracking",
      "Categories",
      "Analytics",
      "Charts"
    ],
    accentIndex: 2,
    github: "#",
    live: "#"
  },
  {
    name: "Real-Time Chat Application",
    category: "Real-Time Communication",
    description:
      "A real-time communication application with user authentication and instant messaging.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    features: ["User authentication", "Instant messaging", "Real-time communication"],
    accentIndex: 1,
    github: "#",
    live: "#"
  }
];