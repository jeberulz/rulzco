import { ArrowRight, Grip } from "lucide-react";
import LineReveal from "./LineReveal";

const benefits = [
  {
    left: "Turn raw AI capability into a clear user workflow",
    right: "Let people see what the agent is doing",
  },
  {
    left: "Ground outputs in sources and evidence",
    right: "Build review and approval into consequential actions",
  },
  {
    left: "Handle waiting, failure, and recovery without breaking trust",
    right: "Prove the interaction with a working interface",
  },
];

export function Benefits() {
  return (
    <div className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-1 hidden lg:block pt-3">
            <Grip className="w-8 h-8 text-black opacity-50" />
          </div>

          <div className="lg:col-span-11">
            <LineReveal stagger={0.06}>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-black leading-[1.1] mb-10 max-w-5xl tracking-tight">
                Agentic products do not need another chat box. They need an
                interface people can understand, steer, and trust.
              </h2>
            </LineReveal>

            <a
              href="mailto:hello@rulz.co?subject=Agentic%20interface%20project"
              className="w-fit bg-black text-[#FFC703] rounded-full px-8 py-4 text-[13px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-90 transition-opacity mb-24"
            >
              Start a project <ArrowRight size={16} />
            </a>

            <div className="w-full">
              {benefits.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24"
                >
                  <div
                    className={`text-xl md:text-2xl text-black font-normal leading-normal py-10 border-b border-gray-200 ${i === 0 ? "border-t" : ""}`}
                  >
                    {row.left}
                  </div>
                  <div
                    className={`text-xl md:text-2xl text-black font-normal leading-normal py-10 border-b border-gray-200 ${i === 0 ? "border-t" : ""}`}
                  >
                    {row.right}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
