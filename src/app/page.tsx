import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Projects } from "@/components/home/Projects";
import { TechUniverse } from "@/components/home/TechUniverse";
import { Metrics } from "@/components/home/Metrics";
import { Blog } from "@/components/home/Blog";
import { InnovationLab } from "@/components/home/InnovationLab";
import { Contact } from "@/components/home/Contact"; // Incorrect path

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Metrics />
      <Projects />
      <TechUniverse />
      <Blog />
      <InnovationLab />
      <Contact />
    </div>
  );
}
