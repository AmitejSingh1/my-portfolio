import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { NowSection } from "@/components/sections/NowSection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Playground } from "@/components/sections/Playground";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-fg">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <NowSection />
        <SelectedWork />
        <About />
        <Experience />
        <Playground />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

