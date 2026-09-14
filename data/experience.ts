export type ExperienceEntry = {
  role: string;
  company: string;
  duration: string;
  type: string;
  summary: string;
  points: string[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Stack Developer (MERN)",
    company: "Freelance / Independent Projects",
    duration: "2023 — Present",
    type: "2+ Years",
    summary:
      "Designing and shipping production-grade full-stack applications end-to-end — from database schema and API architecture to cloud deployment, monitoring and iteration.",
    points: [
      "Architected and deployed 5+ full-stack production applications end-to-end, from local development to live cloud infrastructure",
      "Designed relational schemas in PostgreSQL/SQL and document models in MongoDB, choosing the right database per use case",
      "Built and secured REST APIs with Node.js, Express & NestJS, implementing JWT authentication, role-based access and input validation",
      "Containerized applications with Docker and set up CI/CD pipelines (GitHub Actions) for automated build, test and deploy",
      "Deployed and managed applications on AWS with Docker and Nginx, configuring environment variables, domains and SSL",
      "Optimized database queries and indexes across MongoDB and PostgreSQL, improving response times on data-heavy endpoints",
      "Implemented monitoring, error logging and rollback strategies to keep deployed applications stable and observable",
      "Collaborated using Git/GitHub with structured branching, code reviews and versioned releases",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Docker",
      "AWS",
      "CI/CD",
      "JWT",
      "Git",
    ],
  },
];

export const deploymentStrategy = [
  {
    phase: "Plan & Design",
    detail:
      "Requirement analysis, database schema design (SQL/NoSQL) and API contract planning before writing code.",
  },
  {
    phase: "Develop",
    detail:
      "Build modular frontend and backend code with TypeScript, REST APIs and clean, reusable architecture.",
  },
  {
    phase: "Database Layer",
    detail:
      "Model data in MongoDB or PostgreSQL/SQL depending on the use case, with indexing and query optimization.",
  },
  {
    phase: "Test & Secure",
    detail:
      "Validate inputs, add authentication/authorization, and test critical flows before shipping.",
  },
  {
    phase: "Containerize",
    detail:
      "Package the app with Docker for consistent environments across development, staging and production.",
  },
  {
    phase: "Deploy",
    detail:
      "Ship to AWS with Docker, Nginx and CI/CD pipelines for automated, repeatable releases.",
  },
  {
    phase: "Monitor & Scale",
    detail:
      "Track performance and errors post-launch, then iterate — optimizing, scaling and hardening the system.",
  },
];
