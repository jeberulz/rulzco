import { Hero } from "@/app/components/Hero";
import { Process } from "@/app/components/Process";
import { Benefits } from "@/app/components/Benefits";
import { Portfolio } from "@/app/components/Portfolio";
import { About } from "@/app/components/About";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#111] font-sans">
      <Hero />
      <Process />
      <Benefits />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
}
