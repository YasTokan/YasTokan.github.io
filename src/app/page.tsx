import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
      <Hero />
      <About />
      <SelectedWork />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
