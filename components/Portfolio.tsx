import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grip } from "lucide-react";
import TrailContainer from "./TrailContainer";

const projects = [
  {
    id: "rinkl",
    title: "Rinkl",
    description:
      "Interaction logic that turns live transaction data into timely, useful nudges—surfacing the next financial decision without adding noise.",
    tags: ["Interaction logic", "Real-time nudges", "Fintech"],
    image: "/images/rinkl-card.png",
    col: 1,
  },
  {
    id: "deskscapes",
    title: "DeskScapes",
    description:
      "An intent-led discovery system for a creator marketplace, connecting how people explore setups with how products are found.",
    tags: ["Discovery UX", "Information architecture", "Marketplace"],
    image: "/images/ds-card.png",
    col: 2,
  },
  {
    id: "human-node",
    title: "Human Node Project",
    description:
      "A multi-step verification flow that turns dense identity security into a clear, low-drop onboarding experience.",
    tags: ["Trust UX", "Verification flow", "Deep tech"],
    image: "/images/hnp-card.png",
    col: 1,
  },
  {
    id: "scan-com",
    title: "Scan.com",
    description:
      "Search, intake, and routing for a medical scan platform—making a high-friction path from patient need to diagnostic centre feel clear.",
    tags: ["Complex workflow", "Search & routing", "Health"],
    image: "/images/scan-card.png",
    col: 2,
  },
];

const fitItems = [
  {
    good: "Teams with working AI but a clunky or missing interface",
    bad: "Chatbot reskins looking for visual polish",
  },
  {
    good: "Product leaders shaping agentic workflows before heavy engineering",
    bad: "Pixel-only briefs with no room to shape behaviour",
  },
  {
    good: "Startups and mid-market teams ready to design and build",
    bad: "Large agency engagements or RFP processes",
  },
  {
    good: "Teams that value trust and control as product features",
    bad: "Teams without a clear owner or decision-maker",
  },
  {
    good: "Decision-makers ready to test a working interface",
    bad: "Projects where AI is bolted on at the end",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full overflow-hidden rounded-lg bg-[#1a1a1a] aspect-[4/3] relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-medium">{project.title}</h3>
        <p className="text-gray-400 leading-relaxed max-w-md">
          {project.description}
        </p>
        <div className="flex gap-4 mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-widest text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const col1Projects = projects.filter((p) => p.col === 1);
  const col2Projects = projects.filter((p) => p.col === 2);

  const trailImages = [
    "/images/rinkl-card.png",
    "/images/ds-card.png",
    "/images/hnp-card.png",
    "/images/scan-card.png",
  ];

  return (
    <>
      <div className="w-full bg-[#111] text-white py-24 px-6 md:px-12 relative">
        <TrailContainer images={trailImages} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="flex flex-col gap-24">
              {col1Projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="flex flex-col gap-24 lg:mt-24">
              {col2Projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-24">
            <Link
              href="/work"
              className="text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              View All Work <span className="transform -rotate-45">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-black py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-1 hidden lg:block pt-3">
              <Grip className="w-8 h-8 text-black" />
            </div>

            <div className="lg:col-span-11">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-black leading-[1.1] mb-12 max-w-4xl tracking-tight">
                We work best with teams ready to make AI usable, not merely
                available.
              </h2>

              <a
                href="mailto:hello@rulz.co?subject=Agentic%20interface%20project"
                className="w-fit bg-black text-[#FFC703] rounded-full px-8 py-4 text-[13px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-90 transition-opacity mb-24"
              >
                Start a project <ArrowRight size={16} />
              </a>

              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24">
                  <div className="text-xl md:text-2xl font-medium pb-6 border-b border-gray-200">
                    Good fit 👍
                  </div>
                  <div className="text-xl md:text-2xl font-medium pb-6 border-b border-gray-200 mt-6 md:mt-0">
                    Not a good fit 👎
                  </div>
                </div>

                {fitItems.map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24"
                  >
                    <div className="text-lg md:text-xl text-black font-normal leading-normal py-6 md:py-8 border-b border-gray-200">
                      {item.good}
                    </div>
                    <div className="text-lg md:text-xl text-black font-normal leading-normal py-6 md:py-8 border-b border-gray-200">
                      {item.bad}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
