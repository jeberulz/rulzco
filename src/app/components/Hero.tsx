import { Logo } from "./Logo";
import { ArrowRight } from "lucide-react";
import { NavMenu } from "./NavMenu";

export function Hero() {
  const services = [
    {
      category: "Design",
      items: [
        "Product UI/UX design",
        "Rapid prototyping",
        "Design systems",
        "UX for complex workflows",
        "Lightweight user research",
        "Vibe-coded products"
      ]
    },
    {
      category: "Strategy",
      items: [
        "MVP definition & roadmap",
        "Product strategy & prioritisation",
        "PRDs & feature specs",
        "Competitive analysis",
        "Go-To-Market strategy",
        "Launch planning"
      ]
    },
    {
      category: "AI",
      items: [
        "AI-first product concepts",
        "Agentic UX design",
        "Workflow automation design",
        "AI feature discovery",
        "Prompt & interaction design",
        "AI MVP prototyping"
      ]
    }
  ];

  return (
    <div className="w-full bg-[#0a0a0a] text-white pt-8 pb-20 px-6 md:px-12 relative overflow-hidden">
      {/* Menu Button - Absolute Top Right */}
      <NavMenu className="absolute top-8 right-8 z-50" />

      <div className="w-full max-w-[1920px] mx-auto flex flex-col">
        
        {/* Logo Section - Full Width */}
        <div className="w-full mb-20 mt-8 md:mt-12">
          <Logo className="w-full h-auto block" />
        </div>

        {/* Bottom Section: Services & Content */}
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-8 justify-between items-start w-full">
          
          {/* Services Lists - Left Side */}
          <div className="flex flex-wrap gap-x-16 gap-y-12 md:gap-x-24">
            {services.map((service) => (
              <div key={service.category} className="flex flex-col gap-4">
                <h3 className="text-[#4A4A4A] uppercase text-sm tracking-widest font-medium">
                  {service.category}
                </h3>
                <ul className="flex flex-col gap-2 text-[#A1A1AA] text-[15px] font-light leading-normal">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tagline and CTA - Right Side */}
          <div className="order-first xl:order-none xl:max-w-[560px] flex flex-col items-start gap-8 pt-2">
            <h1 className="text-3xl md:text-[32px] leading-[1.3] font-medium text-[#F3F5F3]">
              AI Product Design & Strategy partner for startups shipping intelligent products.
            </h1>
            <p className="text-[24px] text-[#797A7A] leading-tight font-light">
              From idea → MVP → launch, with AI at the core.
            </p>
            <button className="mt-2 border border-[#FFC703] text-[#FFC703] rounded-full px-8 py-3 text-[13px] font-medium tracking-[0.05em] uppercase flex items-center gap-2 hover:bg-[#FFC703] hover:text-black transition-all duration-300 group">
              Start a project 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
