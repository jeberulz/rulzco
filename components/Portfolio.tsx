import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grip } from "lucide-react";
import TrailContainer from "./TrailContainer";

type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  accent?: string;
  placeholderLines?: [string, string];
  col: number;
};

const projects: FeaturedProject[] = [
  {
    id: "extract",
    title: "Extract",
    description:
      "A self-initiated document interface where every extracted field links to its source, uncertainty is visible, and the user approves the final data.",
    tags: ["Click-to-source", "Confidence states", "Document AI"],
    image: "/images/work/extract/cover.png",
    imageAlt:
      "Extract interface fields lifted above an invoice verification workspace.",
    imagePosition: "center",
    accent: "#C9A96A",
    col: 1,
  },
  {
    id: "margin",
    title: "Margin",
    description:
      "A self-initiated finance interface that turns six months of trading data into one action, with every claim linked to the chart behind it.",
    tags: ["Linked evidence", "Visible reasoning", "Finance AI"],
    image: "/images/work/margin/cover.png",
    imageAlt:
      "Descending forest-green steps beside a margin reduction marker.",
    imagePosition: "center",
    accent: "#A8C77A",
    placeholderLines: ["Read the chart.", "Trace the action."],
    col: 1,
  },
  {
    id: "draft",
    title: "Draft",
    description:
      "A self-initiated support interface that marks every claim in an AI-written reply and holds send until each one can be backed up.",
    tags: ["Claim-level proof", "Send gate", "Support AI"],
    accent: "#D97A5E",
    placeholderLines: ["Mark the claim.", "Hold the send."],
    col: 2,
  },
  {
    id: "brief",
    title: "Brief",
    description:
      "A self-initiated research interface where sources arrive as they are read and remain aligned with the passages they support.",
    tags: ["Visible progress", "Source alignment", "Research AI"],
    image: "/images/work/brief/cover.png",
    imageAlt:
      "Brief research interface showing sources landing as the brief grows.",
    imagePosition: "center",
    accent: "#91A7D0",
    col: 1,
  },
  {
    id: "watch",
    title: "Watch",
    description:
      "A self-initiated agent-control interface that shows the plan ahead and puts stop and redirect controls on the live edge.",
    tags: ["Live edge", "Intervention", "Agent control"],
    accent: "#F08A5D",
    placeholderLines: ["See the plan.", "Stop the run."],
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

function ProjectCard({ project }: { project: FeaturedProject }) {
  const placeholderLines = project.placeholderLines ?? [
    "Click a field.",
    "See its source.",
  ];

  return (
    <Link
      href={`/work/${project.id}`}
      className="group flex flex-col gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC703]"
    >
      <div className="w-full overflow-hidden rounded-lg bg-[#1a1a1a] aspect-[4/3] relative">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} project cover`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: project.imagePosition ?? "center" }}
            quality={90}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 75% 25%, ${project.accent}33 0%, transparent 30%),
                  linear-gradient(135deg, #0A0A0B 0%, #141416 58%, #211e18 100%)
                `,
              }}
            />
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
            <div className="absolute inset-x-6 bottom-6 border-t border-white/15 pt-4">
              <p className="text-xl leading-tight text-white md:text-2xl">
                {placeholderLines[0]}
                <br />
                {placeholderLines[1]}
              </p>
            </div>
          </>
        )}
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
    </Link>
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
                className="w-fit bg-black text-[#FFC703] rounded-full px-8 py-4 text-[13px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-90 transition-opacity mb-16 md:mb-24"
              >
                Start a project <ArrowRight size={16} />
              </a>

              <div className="w-full md:hidden space-y-12">
                <section>
                  <h3 className="text-2xl font-medium pb-5 border-b border-gray-200">
                    Good fit 👍
                  </h3>
                  {fitItems.map((item) => (
                    <p
                      key={item.good}
                      className="text-lg text-black font-normal leading-relaxed py-5 border-b border-gray-200"
                    >
                      {item.good}
                    </p>
                  ))}
                </section>

                <section>
                  <h3 className="text-2xl font-medium pb-5 border-b border-gray-200">
                    Not a good fit 👎
                  </h3>
                  {fitItems.map((item) => (
                    <p
                      key={item.bad}
                      className="text-lg text-black font-normal leading-relaxed py-5 border-b border-gray-200"
                    >
                      {item.bad}
                    </p>
                  ))}
                </section>
              </div>

              <div className="hidden md:block w-full">
                <div className="grid grid-cols-2 gap-x-24">
                  <div className="text-2xl font-medium pb-6 border-b border-gray-200">
                    Good fit 👍
                  </div>
                  <div className="text-2xl font-medium pb-6 border-b border-gray-200">
                    Not a good fit 👎
                  </div>
                </div>

                {fitItems.map((item) => (
                  <div
                    key={item.good}
                    className="grid grid-cols-2 gap-x-24"
                  >
                    <div className="text-xl text-black font-normal leading-normal py-8 border-b border-gray-200">
                      {item.good}
                    </div>
                    <div className="text-xl text-black font-normal leading-normal py-8 border-b border-gray-200">
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
