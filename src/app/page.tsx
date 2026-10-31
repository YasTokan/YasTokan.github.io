import type { Metadata } from "next";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LatestArticles } from "@/components/LatestArticles";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";
import { person } from "@/content/profile";
import { homeSchema } from "@/content/schema";
import { sharedOpenGraph } from "@/content/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...sharedOpenGraph,
    type: "profile",
    url: "/",
    title: person.seoTitle,
    description: person.description,
    firstName: person.givenName,
    lastName: person.familyName,
    username: person.username,
  },
};

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
      <JsonLd data={homeSchema} />
      <Hero />
      <About />
      <SelectedWork />
      <Experience />
      <Skills />
      <Education />
      <LatestArticles />
      <Contact />
    </main>
  );
}
