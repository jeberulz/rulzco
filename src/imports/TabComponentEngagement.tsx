function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Acid_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[45.9px] tracking-[-1.92px] whitespace-nowrap">
        <p className="leading-[48px]">How I work</p>
      </div>
    </div>
  );
}

function Startups() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Startups">
      <Heading />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[40px] py-[20px] relative rounded-tr-[4px] shrink-0" data-name="Background">
      <Startups />
      <div className="absolute inset-0 rounded-tr-[4px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-r border-solid border-t inset-0 pointer-events-none rounded-tr-[4px]" />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[46.3px] tracking-[-1.92px] whitespace-nowrap">
        <p className="leading-[48px]">Engagement model</p>
      </div>
    </div>
  );
}

function ScaleUps() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Scale-ups">
      <Heading1 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex items-center justify-center px-[40px] py-[24px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="Background">
      <ScaleUps />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <Background />
      <Background1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[19.4px] tracking-[-0.4px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Flexible ways to work together, depending on your stage, goals, and speed.</p>
      </div>
    </div>
  );
}

function YouveRaised50MYouNeedASeniorProductDesignerInYourTriadToAccelerateYourRoadmap() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="You’ve raised $50m+. You need a senior product designer in your triad to accelerate your roadmap.">
      <Container />
    </div>
  );
}

function Offer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e1e1e] w-[210px]" data-name="offer">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0 text-[31.1px] tracking-[-1.28px] whitespace-nowrap">
        <p className="leading-[32px]">Product sprint</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[-0.4px] w-[min-content]">
        <p className="whitespace-pre-wrap">
          <span className="font-['Neue_Montreal:Medium',sans-serif] leading-[24px] not-italic">{`Best for: `}</span>
          <span className="leading-[24px]">early clarity, new ideas, stuck teams</span>
        </p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Problem definition</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Product strategy</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta2() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Core UX flows</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta3() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">AI feature concepts</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Pill() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="pill">
      <Cta />
      <Cta1 />
      <Cta2 />
      <Cta3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">Duration:</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">1 - 2 weeks</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">Outcome:</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">A clear product direction and a prototype you can confidently move forward with.</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="content">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[19.7px] tracking-[-0.4px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">A focused sprint to align on the problem, define the product, and design the core experience. Ideal when you need direction before committing to a full build.</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">What’s included:</p>
      </div>
      <Pill />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[80px] items-start pb-[32px] pt-[40px] relative shrink-0 w-full" data-name="wrapper">
      <Offer />
      <Content />
    </div>
  );
}

function Offer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e1e1e] w-[210px]" data-name="offer">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0 text-[31.1px] tracking-[-1.28px] whitespace-nowrap">
        <p className="leading-[32px]">AI MVP Build</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[16px] tracking-[-0.4px] w-[min-content]">
        <p className="whitespace-pre-wrap">
          <span className="font-['Neue_Montreal:Medium',sans-serif] leading-[24px] not-italic">{`Best for: `}</span>
          <span className="leading-[24px]">founders ready to ship</span>
        </p>
      </div>
    </div>
  );
}

function Cta4() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">End-to-end product design</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta5() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Agentic UX and AI interactions</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta6() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">MVP-ready prototypes</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta7() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Design system foundations</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta8() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Launch support</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Pill1() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="pill">
      <Cta4 />
      <Cta5 />
      <Cta6 />
      <Cta7 />
      <Cta8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">Duration:</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">4 - 6 weeks</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">Outcome:</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">A testable, investor-ready MVP built to be shipped or handed off to engineering.</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="content">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[19.7px] tracking-[-0.4px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">An end-to-end engagement to design and prototype a real MVP, with AI and system thinking at the core.</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">What’s included:</p>
      </div>
      <Pill1 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex gap-[80px] items-start pb-[32px] pt-[40px] relative shrink-0 w-full" data-name="wrapper">
      <Offer1 />
      <Content1 />
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Offer2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e1e1e] w-[210px]" data-name="offer">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0 text-[31.1px] tracking-[-1.28px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Ongoing Product Partner</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center relative shrink-0 text-[16px] tracking-[-0.4px] w-full">
        <p className="whitespace-pre-wrap">
          <span className="font-['Neue_Montreal:Medium',sans-serif] leading-[24px] not-italic">{`Best for: `}</span>
          <span className="leading-[24px]">startups scaling or iterating</span>
        </p>
      </div>
    </div>
  );
}

function Cta9() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Product strategy support</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta10() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">UX and AI feature design</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta11() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Workflow and automation thinking</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta12() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Continuous iteration</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cta13() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Launch support</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Pill2() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="pill">
      <Cta9 />
      <Cta10 />
      <Cta11 />
      <Cta12 />
      <Cta13 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">Duration:</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">Monthly</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">Outcome:</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px]">A senior product partner embedded in your team, without the overhead of a full-time hire.</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="content">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[19.7px] tracking-[-0.4px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">A monthly partnership where I work closely with your team to shape product direction, design new features, and evolve your AI capabilities over time.</p>
      </div>
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">What’s included:</p>
      </div>
      <Pill2 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex gap-[80px] items-start pb-[32px] pt-[40px] relative shrink-0 w-full" data-name="wrapper">
      <Offer2 />
      <Content2 />
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function WeBringDesignsToLifeFromWireframesThisInvolvesUsingConsistentDesignSystemComponentsAndMappingOutEndToEndAnnotatedFlowsForEasyEngineerHandOff() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We bring designs to life from wireframes. This involves using consistent design system components, and mapping out end-to-end annotated flows for easy engineer hand-off.">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[19.8px] tracking-[-0.4px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">I work with a small number of teams at a time to stay focused, hands-on, and high impact.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1000px]" data-name="Container">
      <WeBringDesignsToLifeFromWireframesThisInvolvesUsingConsistentDesignSystemComponentsAndMappingOutEndToEndAnnotatedFlowsForEasyEngineerHandOff />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[80px] items-start pb-[32px] pt-[40px] relative shrink-0 w-full">
      <Container1 />
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f6f6f6] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[40px] py-[48px] relative w-full">
          <YouveRaised50MYouNeedASeniorProductDesignerInYourTriadToAccelerateYourRoadmap />
          <Wrapper />
          <Wrapper1 />
          <Wrapper2 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function HowEngagement() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="how_engagement">
      <Frame1 />
      <Background2 />
    </div>
  );
}

export default function TabComponentEngagement() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="tab_component-engagement">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HowEngagement />
      </div>
    </div>
  );
}