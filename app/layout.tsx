import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Vishal Singh Chouhan | Full-Stack Developer",
  description:
    "Portfolio of Vishal Singh Chouhan, a Full-Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
  keywords: [
    "Vishal Singh Chouhan",
    "Full-Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB"
  ],
  openGraph: {
    title: "Vishal Singh Chouhan | Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable, modern and user-focused web applications.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Singh Chouhan | Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable, modern and user-focused web applications."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}