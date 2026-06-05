import imgRinklCardPng from "figma:asset/43bd64f83fde2974f3ebb74b0e857c95932bc54f.png";
import imgDsCardPng from "figma:asset/3657b4e76d02bede50a0f684f28184a4c02a889c.png";
import imgHnpCardPng from "figma:asset/90ef2587933ad1162f19cd70e8eb299918856266.png";
import imgScanCardPng from "figma:asset/240e8f3b1eef093a8abc572addfe83fedeefa057.png";
import { Grip, ArrowRight } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      id: "rinkl",
      title: "Rinkl",
      description: "Next-gen student finance tracker that helps you officially own your bank account. Real-time insights and nudges for better financial health.",
      tags: ["App", "Fintech"],
      image: imgRinklCardPng,
      col: 1
    },
    {
      id: "deskscapes",
      title: "DeskScapes",
      description: "Turning your desk into a runway, we help creators show off their setups. A community-led marketplace for desk accessories and setups.",
      tags: ["Web app", "eCommerce"],
      image: imgDsCardPng,
      col: 2
    },
    {
      id: "human-node",
      title: "Human Node Project",
      description: "The Human Node Project uses bio-authentication technology to secure digital identities in the Web3 ecosystem.",
      tags: ["Web", "Deep tech"],
      image: imgHnpCardPng,
      col: 1
    },
    {
      id: "scan-com",
      title: "Scan.com",
      description: "The world's largest search for medical scans. Scan.com connects patients with diagnostic centers, streamlining the booking process.",
      tags: ["Brand", "Health"],
      image: imgScanCardPng,
      col: 2
    }
  ];

  const fitItems = [
    { good: "Early-stage startups and B2B scale-ups", bad: "Pixel-only or execution-only design work" },
    { good: "Founders who want clarity, not just execution", bad: "Fixed-scope projects with no room to think" },
    { good: "Teams building AI-native or AI-enabled products", bad: "Large agency engagements or RFP processes" },
    { good: "Leaders who value product thinking alongside design", bad: "Teams without a clear owner or decision-maker" },
    { good: "Decision-makers who want to move fast and ship", bad: "Projects where AI is an afterthought" }
  ];

  const col1Projects = projects.filter(p => p.col === 1);
  const col2Projects = projects.filter(p => p.col === 2);

  return (
    <>
      <div className="w-full bg-[#111] text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-24">
              {col1Projects.map(project => (
                <div key={project.id} className="flex flex-col gap-6">
                  <div className="w-full overflow-hidden rounded-lg bg-[#1a1a1a]">
                     <img src={project.image} alt={project.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed max-w-md">{project.description}</p>
                    <div className="flex gap-4 mt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs uppercase tracking-widest text-gray-500">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-24 lg:mt-24">
               {col2Projects.map(project => (
                <div key={project.id} className="flex flex-col gap-6">
                  <div className="w-full overflow-hidden rounded-lg bg-[#1a1a1a]">
                     <img src={project.image} alt={project.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed max-w-md">{project.description}</p>
                    <div className="flex gap-4 mt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs uppercase tracking-widest text-gray-500">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
          
          {/* View All Projects Link */}
          <div className="flex justify-end mt-24">
            <button className="text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
              View All Work <span className="transform -rotate-45">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Engagement Fit Section */}
      <div className="w-full bg-white text-black py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Icon */}
            <div className="lg:col-span-1 hidden lg:block pt-3">
              <Grip className="w-8 h-8 text-black opacity-100" />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-11">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-black leading-[1.1] mb-12 max-w-4xl tracking-tight">
                I work best when there’s trust, momentum, and a shared ambition to build something meaningful.
              </h2>

              <button className="bg-black text-[#FFC703] rounded-full px-8 py-4 text-[13px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-90 transition-opacity mb-24">
                Start a project <ArrowRight size={16} />
              </button>

              <div className="w-full">
                {/* Header Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24">
                  <div className="text-xl md:text-2xl font-medium pb-6 border-b border-gray-200">Good fit 👍</div>
                  <div className="text-xl md:text-2xl font-medium pb-6 border-b border-gray-200 mt-6 md:mt-0">Not a good fit 👎</div>
                </div>

                {/* List Items */}
                {fitItems.map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24">
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
