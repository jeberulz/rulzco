"use client";

import { useState } from "react";
import { clsx } from "clsx";

const steps = [
  {
    title: "Find the right job",
    description:
      "We identify the work your AI should own, the decisions people must keep, and the outcome worth designing for before we draw a screen.",
    tags: ["Workflow audit", "User need", "Success metric"],
  },
  {
    title: "Design human control",
    description:
      "We design how people direct the agent, see its progress, verify its evidence, and step in before anything consequential happens.",
    tags: ["Interaction model", "Agent behaviour", "Trust & control"],
  },
  {
    title: "Build the interface",
    description:
      "We turn the interaction model into a working frontend on your AI stack, with real data, live states, and recovery paths—not a static happy path.",
    tags: ["React build", "Live integrations", "All states"],
  },
  {
    title: "Ship and learn",
    description:
      "We release the interface, observe where trust or momentum breaks, and refine the product around real use.",
    tags: ["Instrumentation", "Adoption", "Iteration"],
  },
];

const engagementModels = [
  {
    title: "Interface Diagnostic",
    subtitle: "working AI, unclear workflow",
    description:
      "A focused engagement to find where the interface is blocking trust, control, or adoption—and define the right thing to build next.",
    tags: [
      "Workflow and user audit",
      "Agent responsibility map",
      "Risk and trust review",
      "Interface recommendation",
    ],
    duration: "1 - 2 weeks",
    outcome:
      "A prioritised interface direction, core flow, and build brief your team can act on.",
  },
  {
    title: "Agentic Interface Build",
    subtitle: "teams ready to ship",
    description:
      "We design and build one working interface on top of your models, tools, and workflows—from interaction logic to production-ready frontend.",
    tags: [
      "Agentic interaction design",
      "Working React frontend",
      "Live model and tool states",
      "Human approval and recovery",
      "Launch instrumentation",
    ],
    duration: "2 - 6 weeks",
    outcome:
      "A deployed, testable interface people can use with your real AI capability.",
  },
  {
    title: "Interface Partner",
    subtitle: "agentic products growing in scope",
    description:
      "Ongoing product direction, interface design, and frontend delivery as your agents take on more workflows and responsibility.",
    tags: [
      "Product direction",
      "New agentic workflows",
      "Interface system evolution",
      "Adoption and trust signals",
      "Continuous delivery",
    ],
    duration: "Monthly",
    outcome:
      "A senior interface partner who keeps the human experience coherent as the AI system evolves.",
  },
];

export function Process() {
  const [activeTab, setActiveTab] = useState<"work" | "model">("work");

  return (
    <div className="w-full bg-[#111] pb-16">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
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
            How we work
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

        <div className="bg-white rounded-b-lg rounded-tr-lg p-8 md:p-12 min-h-[500px]">
          {activeTab === "work" ? (
            <div className="space-y-16">
              <p className="text-xl text-gray-800 max-w-3xl mb-16">
                Your AI can already reason and act. The interface determines
                whether people can use it with confidence.
              </p>
              <div className="space-y-16">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-gray-100 pb-16 last:border-0 last:pb-0"
                  >
                    <div className="lg:col-span-3">
                      <h3 className="text-[32px] font-medium text-[#1e1e1e] leading-tight tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-9 flex flex-col gap-8">
                      <p className="text-xl text-[#1e1e1e] leading-relaxed max-w-3xl">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-[#f3f3f5] text-[#1e1e1e] text-xs font-medium rounded-full border border-black/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              <p className="text-xl text-gray-800 max-w-3xl mb-16">
                Start with the uncertainty you need to remove: what to build,
                how it should work, or how to keep improving it.
              </p>
              <div className="space-y-16">
                {engagementModels.map((model, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-gray-100 pb-16 last:border-0 last:pb-0"
                  >
                    <div className="lg:col-span-3 flex flex-col gap-2">
                      <h3 className="text-[32px] font-medium text-[#1e1e1e] leading-tight tracking-tight">
                        {model.title}
                      </h3>
                      <p className="text-base text-[#1e1e1e]">
                        <span className="font-medium">Best for: </span>
                        {model.subtitle}
                      </p>
                    </div>
                    <div className="lg:col-span-9 flex flex-col gap-8">
                      <p className="text-xl text-[#1e1e1e] leading-relaxed max-w-3xl">
                        {model.description}
                      </p>
                      <div className="flex flex-col gap-4">
                        <span className="font-medium text-[#1e1e1e]">
                          What&apos;s included:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {model.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 bg-[#f3f3f5] text-[#1e1e1e] text-xs font-medium rounded-full border border-black/5"
                            >
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
                  Rulz&amp;Co works with a small number of teams at a time to
                  stay senior, hands-on, and close to the shipped product.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
