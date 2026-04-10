import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/20 flex flex-col">
      <Navigation />
      
      <main className="flex-1 w-full pt-16">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Achievements />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
