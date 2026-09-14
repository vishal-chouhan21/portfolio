import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Strategy from "../components/Strategy";
import Projects from "../components/Projects";
import Services from "../components/Services";
import GithubActivity from "../components/GithubActivity";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Strategy />
      <Projects />
      <Services />
      <GithubActivity />
      <Contact />
      <Footer />
    </main>
  );
}
