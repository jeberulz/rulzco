import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Benefits } from "@/components/Benefits";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#111] font-sans">
      <Hero />
      <Process />
      <Benefits />
      <Portfolio />
      <About />
      <Footer />
    </main>
  );
}
