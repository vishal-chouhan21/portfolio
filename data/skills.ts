export type Skill = {
  name: string;
  icon?: string;
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "JWT", "bcrypt"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "SQL", "Database Design", "Query Optimization"]
  },
  {
    title: "DevOps & Deployment",
    skills: ["Docker", "CI/CD", "GitHub Actions", "AWS", "Nginx", "PM2"]
  },
  {
    title: "Programming",
    skills: ["C++", "JavaScript", "DSA"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "Linux/CLI"]
  }
] as const;
