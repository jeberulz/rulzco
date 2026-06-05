import { useState } from "react";
import { clsx } from "clsx";

export function Process() {
  const [activeTab, setActiveTab] = useState<"work" | "model">("work");

  const steps = [
    {
      title: "Clarify the problem",
      description: "We align on the real problem worth solving, not just the initial idea. This includes goals, constraints, users, and where AI actually creates leverage.",
      tags: ["Problem framing", "User need", "Success metric"]
    },
    {
      title: "Design the system",
      description: "I design the product logic first, flows, states, decisions, and AI behaviour. Screens come after the system makes sense.",
      tags: ["User flows", "AI behaviour", "System logic"]
    },
    {
      title: "Build the MVP",
      description: "Rapid design first, from flows to interaction. Designs are MVP ready and can be handed to engineers without translation.",
      tags: ["Design library", "Active states", "DEV ready"]
    },
    {
      title: "Ship and iterate",
      description: "Real-time user analytics, hotjar heatmaps, and prepare the product for launch, scale, and fundraising.",
      tags: ["Observation", "Solutions", "Launch strategy"]
    }
  ];

  const engagementModels = [
    {
      title: "Product sprint",
      subtitle: "Best for: early clarity, new ideas, stuck teams",
      description: "A focused sprint to align on the problem, define the product, and design the core experience. Ideal when you need direction before committing to a full build.",
      tags: ["Problem definition", "Product strategy", "Core UX flows", "AI feature concepts"],
      duration: "1 - 2 weeks",
      outcome: "A clear product direction and a prototype you can confidently move forward with."
    },
    {
      title: "AI MVP Build",
      subtitle: "Best for: founders ready to ship",
      description: "An end-to-end engagement to design and prototype a real MVP, with AI and system thinking at the core.",
      tags: ["End-to-end product design", "Agentic UX and AI interactions", "MVP-ready prototypes", "Design system foundations", "Launch support"],
      duration: "4 - 6 weeks",
      outcome: "A testable, investor-ready MVP built to be shipped or handed off to engineering."
    },
    {
      title: "Ongoing Product Partner",
      subtitle: "Best for: startups scaling or iterating",
      description: "A monthly partnership where I work closely with your team to shape product direction, design new features, and evolve your AI capabilities over time.",
      tags: ["Product strategy support", "UX and AI feature design", "Workflow and automation thinking", "Continuous iteration", "Launch support"],
      duration: "Monthly",
      outcome: "A senior product partner embedded in your team, without the overhead of a full-time hire."
    }
  ];

  return (
    <div className="w-full bg-[#111] pb-16">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
        {/* Tabs */}
        <div className="flex items-end overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveTab("work")}
            className={clsx(
              "px-4 py-3 md:px-8 md:py-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium rounded-t-lg transition-colors whitespace-nowrap",
              activeTab === "work" 
                ? "bg-white text-black" 
                : "bg-[#222] text-gray-500 hover:bg-[#333]"
            )}
          >
            How I work
          </button>
          <button 
            onClick={() => setActiveTab("model")}
            className={clsx(
              "px-4 py-3 md:px-8 md:py-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium rounded-t-lg transition-colors ml-1 whitespace-nowrap",
              activeTab === "model" 
                ? "bg-white text-black" 
                : "bg-[#222] text-gray-500 hover:bg-[#333]"
            )}
          >
            Engagement model
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-lg rounded-tr-lg p-8 md:p-12 min-h-[500px]">
          {activeTab === "work" ? (
            <div className="space-y-16">
              <p className="text-xl text-gray-800 max-w-3xl mb-16">
                You’re building an ambitious product and need a senior product partner to bring clarity, speed, and execution.
              </p>

              <div className="space-y-16">
                {steps.map((step, index) => (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-gray-100 pb-16 last:border-0 last:pb-0">
                    <div className="lg:col-span-3">
                      <h3 className="text-[32px] font-medium text-[#1e1e1e] leading-tight tracking-tight">{step.title}</h3>
                    </div>
                    <div className="lg:col-span-9 flex flex-col gap-8">
                      <p className="text-xl text-[#1e1e1e] leading-relaxed max-w-3xl">
                        {step.description}
                      </p>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1.5 bg-[#f3f3f5] text-[#1e1e1e] text-xs font-medium rounded-full border border-black/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              <p className="text-xl text-gray-800 max-w-3xl mb-16">
                Flexible ways to work together, depending on your stage, goals, and speed.
              </p>

              <div className="space-y-16">
                {engagementModels.map((model, index) => (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-gray-100 pb-16 last:border-0 last:pb-0">
                    <div className="lg:col-span-3 flex flex-col gap-2">
                      <h3 className="text-[32px] font-medium text-[#1e1e1e] leading-tight tracking-tight">
                        {model.title}
                      </h3>
                      <p className="text-base text-[#1e1e1e]">
                        <span className="font-medium">Best for: </span>
                        {model.subtitle.replace("Best for: ", "")}
                      </p>
                    </div>
                    
                    <div className="lg:col-span-9 flex flex-col gap-8">
                      <p className="text-xl text-[#1e1e1e] leading-relaxed max-w-3xl">
                        {model.description}
                      </p>
                      
                      <div className="flex flex-col gap-4">
                        <span className="font-medium text-[#1e1e1e]">What's included:</span>
                        <div className="flex flex-wrap gap-2">
                          {model.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1.5 bg-[#f3f3f5] text-[#1e1e1e] text-xs font-medium rounded-full border border-black/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 text-base text-[#1e1e1e]">
                        <div className="flex gap-2">
                          <span className="font-medium">Duration:</span>
                          <span>{model.duration}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-medium">Outcome:</span>
                          <span>{model.outcome}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-xl text-[#1e1e1e]">
                  I work with a small number of teams at a time to stay focused, hands-on, and high impact.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
