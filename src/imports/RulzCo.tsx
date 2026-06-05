import svgPaths from "./svg-88lceig9qg";
import imgRinklCardPng from "figma:asset/43bd64f83fde2974f3ebb74b0e857c95932bc54f.png";
import imgDsCardPng from "figma:asset/3657b4e76d02bede50a0f684f28184a4c02a889c.png";
import imgHnpCardPng from "figma:asset/90ef2587933ad1162f19cd70e8eb299918856266.png";
import imgScanCardPng from "figma:asset/240e8f3b1eef093a8abc572addfe83fedeefa057.png";
import imgLinkLightPng from "figma:asset/66a74202bae2bb6ac3c0d95999c73485995092bb.png";

function RulzCo1() {
  return (
    <div className="h-[257.892px] relative shrink-0 w-[1366.276px]" data-name="Rulz&Co.">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1366.28 257.892">
        <g id="Rulz&Co.">
          <path d={svgPaths.p3efabd80} fill="var(--fill-0, #FFC703)" id="Vector" />
          <path d={svgPaths.p87bf700} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2b16b800} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p242ffe00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2cc8d700} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p17f71e90} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p16436b0} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p9679c00} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="overflow-clip relative self-stretch shrink-0 w-[14px]" data-name="SVG">
      <div className="absolute bottom-1/2 left-[15.63%] right-[15.63%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.625 1">
            <path d="M0 0.5H9.625" id="Vector" stroke="var(--stroke-0, #F3F5F3)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[17.92%] left-1/2 right-1/2 top-[17.92%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 11.2933">
            <path d="M0.5 0V11.2933" id="Vector" stroke="var(--stroke-0, #F3F5F3)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8.81px] items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[17.600000381469727px] not-italic relative shrink-0 text-[#f3f5f3] text-[16px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">MENU</p>
      </div>
      <Svg />
    </div>
  );
}

function DivMenuWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.menu-wrapper">
      <Label />
    </div>
  );
}

function DivSpan() {
  return (
    <div className="content-stretch flex items-center pl-[717.19px] relative shrink-0" data-name="div.span-12">
      <DivMenuWrapper />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[580px] top-0" data-name="Nav">
      <DivSpan />
    </div>
  );
}

function LogoLightSvg() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Logo-Light.svg">
      <RulzCo1 />
      <Nav />
    </div>
  );
}

function DivImageWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="div.image-wrapper">
      <LogoLightSvg />
    </div>
  );
}

function DivHeroBanner() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[1368px]" data-name="div.hero_banner">
      <DivImageWrapper />
    </div>
  );
}

function DivLabelHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.label-header">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#797a7a] text-[16px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">Design</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Product UI/UX design</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Rapid prototyping</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Design systems</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">UX for complex workflows</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Lightweight user research</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">{`Vibe-coded products `}</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0" data-name="List">
      <DivLabelHeader />
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function DivLabelHeader1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[35px] relative shrink-0 w-[92px]" data-name="div.label-header">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] max-h-[15.399999618530273px] max-w-[92px] not-italic relative shrink-0 text-[#797a7a] text-[16px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">Strategy</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">{`MVP definition & roadmap`}</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">{`Product strategy & prioritisation`}</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">{`PRDs & feature specs`}</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Competitive analysis</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Go-To-Market strategy</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">{`Launch planning `}</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative self-stretch shrink-0" data-name="List">
      <DivLabelHeader1 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function DivLabelHeader2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0 w-[92px]" data-name="div.label-header">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] max-h-[15.399999618530273px] max-w-[92px] not-italic relative shrink-0 text-[#797a7a] text-[16px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">AI</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">AI-first product concepts</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Agentic UX design</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Workflow automation design</p>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">AI feature discovery</p>
      </div>
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">{`Prompt & interaction design`}</p>
      </div>
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">AI MVP prototyping</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0" data-name="List">
      <DivLabelHeader2 />
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
      <Item16 />
      <Item17 />
    </div>
  );
}

function DivServiceTags() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-start min-h-px min-w-px relative" data-name="div.service-tags">
      <List />
      <List1 />
      <List2 />
    </div>
  );
}

function ColRight() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Montreal:Medium',sans-serif] gap-[16px] items-end not-italic relative shrink-0" data-name="col_right">
      <div className="flex flex-col justify-center leading-none max-w-[556px] relative shrink-0 text-[#f3f5f3] text-[32px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`AI Product Design & Strategy partner for`}</p>
        <p>startups shipping intelligent products.</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] max-w-[556px] relative shrink-0 text-[#797a7a] text-[24px] w-full">
        <p className="leading-none whitespace-pre-wrap">From idea → MVP → launch, with AI at the core.</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] max-w-[556px] relative shrink-0 text-[#ffcb00] text-[16px] uppercase w-full">
        <p className="leading-[17.6px] whitespace-pre-wrap">{`Start a project → `}</p>
      </div>
    </div>
  );
}

function DivHomeHero() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1368px]" data-name="div.home-hero">
      <DivServiceTags />
      <ColRight />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[46.3px] tracking-[-1.92px] whitespace-nowrap">
        <p className="leading-[48px]">How I work</p>
      </div>
    </div>
  );
}

function ScaleUps() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Scale-ups">
      <Heading2 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex items-center justify-center px-[40px] py-[24px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="Background">
      <ScaleUps />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[45.9px] tracking-[-1.92px] whitespace-nowrap">
        <p className="leading-[48px]">Engagement model</p>
      </div>
    </div>
  );
}

function Startups() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Startups">
      <Heading3 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[40px] py-[20px] relative rounded-tr-[4px] shrink-0" data-name="Background">
      <Startups />
      <div className="absolute inset-0 rounded-tr-[4px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-r border-solid border-t inset-0 pointer-events-none rounded-tr-[4px]" />
      </div>
    </div>
  );
}

function Frame11() {
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
        <p className="leading-[24px] whitespace-pre-wrap">You’re building an ambitious product and need a senior product partner to bring clarity, speed, and execution.</p>
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

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[31.1px] tracking-[-1.28px] whitespace-nowrap">
        <p className="leading-[32px]">Clarify the problem</p>
      </div>
    </div>
  );
}

function Rituals() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[210px]" data-name="Rituals">
      <Container1 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0" data-name="cta">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[15.36px]">Problem framing</p>
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
          <p className="leading-[15.36px]">User need</p>
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
          <p className="leading-[15.36px]">Success metric</p>
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
    </div>
  );
}

function WeEmbedIntoYourProductTeamsRitualsAnythingFromStandupDesignWorkshopsToTestParties() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="We embed into your product team’s rituals. Anything from standup, design workshops, to test parties.">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[19.7px] tracking-[-0.4px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">We align on the real problem worth solving, not just the initial idea. This includes goals, constraints, users, and where AI actually creates leverage.</p>
      </div>
      <Pill />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[80px] items-start pb-[32px] pt-[40px] relative shrink-0 w-full">
      <Rituals />
      <WeEmbedIntoYourProductTeamsRitualsAnythingFromStandupDesignWorkshopsToTestParties />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[31.4px] tracking-[-1.28px] whitespace-nowrap">
        <p className="leading-[32px]">Design the system</p>
      </div>
    </div>
  );
}

function Wireframes() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[210px]" data-name="Wireframes">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[19.8px] tracking-[-0.4px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">I design the product logic first, flows, states, decisions, and AI behaviour. Screens come after the system makes sense.</p>
      </div>
    </div>
  );
}

function ThisIsAHugeFocusForUsWeTriangulateInformationFromYourBriefAnyUserDocsYouHaveCompetitorAnalysesToProvideOptionsOnProductDirection() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="This is a huge focus for us. We triangulate information from your brief, any user docs you have & competitor analyses, to provide options on product direction.">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[15.36px]">User flows</p>
      </div>
    </div>
  );
}

function UserInterviews() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="User interviews">
      <Container4 />
    </div>
  );
}

function Cta3() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center overflow-clip px-[8px] py-[8.5px] relative rounded-[12px] shrink-0" data-name="cta">
      <UserInterviews />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Acid_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[15.5px] text-center tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[15.36px]">AI behaviour</p>
      </div>
    </div>
  );
}

function CompetitorAnalysis() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Competitor analysis">
      <Container5 />
    </div>
  );
}

function Cta4() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center overflow-clip px-[8px] py-[8.5px] relative rounded-[12px] shrink-0" data-name="cta">
      <CompetitorAnalysis />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[15.36px]">System logic</p>
      </div>
    </div>
  );
}

function Brainstorm() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Brainstorm">
      <Container6 />
    </div>
  );
}

function Cta5() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center overflow-clip px-[8px] py-[8.5px] relative rounded-[12px] shrink-0" data-name="cta">
      <Brainstorm />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full">
      <Cta3 />
      <Cta4 />
      <Cta5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <ThisIsAHugeFocusForUsWeTriangulateInformationFromYourBriefAnyUserDocsYouHaveCompetitorAnalysesToProvideOptionsOnProductDirection />
      <Frame7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[80px] items-start pb-[32px] pt-[40px] relative shrink-0 w-full">
      <Wireframes />
      <Frame10 />
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[31.6px] tracking-[-1.28px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Build the MVP</p>
      </div>
    </div>
  );
}

function DesignSystems() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[210px]" data-name="Design systems">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[15.36px]">Clickable prototypes</p>
      </div>
    </div>
  );
}

function UserInterviews1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="User interviews">
      <Container8 />
    </div>
  );
}

function Cta6() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center overflow-clip px-[8px] py-[8.5px] relative rounded-[12px] shrink-0" data-name="cta">
      <UserInterviews1 />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Acid_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[15.5px] text-center tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[15.36px]">AI interactions</p>
      </div>
    </div>
  );
}

function CompetitorAnalysis1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Competitor analysis">
      <Container9 />
    </div>
  );
}

function Cta7() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center overflow-clip px-[8px] py-[8.5px] relative rounded-[12px] shrink-0" data-name="cta">
      <CompetitorAnalysis1 />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[15.36px]">MVP artefacts</p>
      </div>
    </div>
  );
}

function Brainstorm1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Brainstorm">
      <Container10 />
    </div>
  );
}

function Cta8() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center overflow-clip px-[8px] py-[8.5px] relative rounded-[12px] shrink-0" data-name="cta">
      <Brainstorm1 />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full">
      <Cta6 />
      <Cta7 />
      <Cta8 />
    </div>
  );
}

function WeCreateAndManageAScalableDesignSystemMakingItEasyForYourEngineeringTeamToShipOnBrandTeamsGetValueFromThisBeyondOurEngagement() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="We create and manage a scalable design system, making it easy for your engineering team to ship on brand. Teams get value from this beyond our engagement.">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[19.8px] tracking-[-0.4px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">We prototype fast, from flows to interactions. Designs are MVP-ready and can be shipped or handed to engineers without translation.</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[80px] items-start pb-[32px] pt-[40px] relative shrink-0 w-full">
      <DesignSystems />
      <WeCreateAndManageAScalableDesignSystemMakingItEasyForYourEngineeringTeamToShipOnBrandTeamsGetValueFromThisBeyondOurEngagement />
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[31.6px] tracking-[-1.28px] whitespace-nowrap">
        <p className="leading-[32px]">Ship and iterate</p>
      </div>
    </div>
  );
}

function HighFidelity() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[210px]" data-name="High-fidelity">
      <Container11 />
    </div>
  );
}

function WeBringDesignsToLifeFromWireframesThisInvolvesUsingConsistentDesignSystemComponentsAndMappingOutEndToEndAnnotatedFlowsForEasyEngineerHandOff() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We bring designs to life from wireframes. This involves using consistent design system components, and mapping out end-to-end annotated flows for easy engineer hand-off.">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[19.8px] tracking-[-0.4px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">We refine what matters, cut what doesn’t, and prepare the product for launch, scale, or fundraising.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[15.36px]">Feedback loops</p>
      </div>
    </div>
  );
}

function UserInterviews2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="User interviews">
      <Container13 />
    </div>
  );
}

function Cta9() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center overflow-clip px-[8px] py-[8.5px] relative rounded-[12px] shrink-0" data-name="cta">
      <UserInterviews2 />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Acid_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[15.5px] text-center tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[15.36px]">Iterations</p>
      </div>
    </div>
  );
}

function CompetitorAnalysis2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Competitor analysis">
      <Container14 />
    </div>
  );
}

function Cta10() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center overflow-clip px-[8px] py-[8.5px] relative rounded-[12px] shrink-0" data-name="cta">
      <CompetitorAnalysis2 />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[15.36px]">Launch readiness</p>
      </div>
    </div>
  );
}

function Brainstorm2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Brainstorm">
      <Container15 />
    </div>
  );
}

function Cta11() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center overflow-clip px-[8px] py-[8.5px] relative rounded-[12px] shrink-0" data-name="cta">
      <Brainstorm2 />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full">
      <Cta9 />
      <Cta10 />
      <Cta11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-[1000px]" data-name="Container">
      <WeBringDesignsToLifeFromWireframesThisInvolvesUsingConsistentDesignSystemComponentsAndMappingOutEndToEndAnnotatedFlowsForEasyEngineerHandOff />
      <Frame9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[80px] items-start pb-[32px] pt-[40px] relative shrink-0 w-full">
      <HighFidelity />
      <Container12 />
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
          <Frame6 />
          <Frame4 />
          <Frame5 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function HowTab() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="how_tab">
      <Frame11 />
      <Background2 />
    </div>
  );
}

function TabComponentHow() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="tab_component-how">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <HowTab />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_2_485)" id="svg9191526987">
          <path d={svgPaths.p17540000} fill="var(--fill-0, #0F0F0F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_485">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Graphic() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[34px]" data-name="graphic">
      <Svg1 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col h-full items-start overflow-clip pt-[6px] relative shrink-0 w-[280px]" data-name="Left">
      <Graphic />
    </div>
  );
}

function LeftAlignStretch() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Left:align-stretch">
      <Left />
    </div>
  );
}

function NameHeading() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Name → Heading 2">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[69px] not-italic relative shrink-0 text-[#0f0f0f] text-[58.2px] tracking-[-1.8px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`On your marks. Get set. Go-to-market. `}</p>
        <p className="mb-0">{`Quickly launch your company past the `}</p>
        <p>competition.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[15.4px]">Them</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-[10px] pt-[9px] px-[10px] relative shrink-0" data-name="Container">
      <Container19 />
    </div>
  );
}

function Short() {
  return (
    <div className="bg-[#c8ff54] content-stretch flex flex-col h-[40px] items-center justify-center max-w-[100px] overflow-clip relative shrink-0 w-[100px]" data-name="Short">
      <Container18 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Short />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[15.4px]">You</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-[10px] pt-[9px] px-[10px] relative shrink-0" data-name="Container">
      <Container23 />
    </div>
  );
}

function Short1() {
  return (
    <div className="bg-[#c8ff54] content-stretch flex flex-col h-[40px] items-center justify-center max-w-[100px] overflow-clip relative shrink-0 w-[100px]" data-name="Short">
      <Container22 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Short1 />
    </div>
  );
}

function Comparison() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Comparison">
      <Container17 />
      <Container21 />
    </div>
  );
}

function Divider() {
  return <div className="bg-[#737370] h-px shrink-0 w-full" data-name="Divider" />;
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[23.1px] whitespace-nowrap">
        <p className="leading-[33.6px]">Look 10x bigger</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container26 />
    </div>
  );
}

function Divider1() {
  return <div className="bg-[#737370] h-px shrink-0 w-full" data-name="Divider" />;
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[22.9px] whitespace-nowrap">
        <p className="leading-[33.6px]">Get to market faster</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container28 />
    </div>
  );
}

function Divider2() {
  return <div className="bg-[#737370] h-px shrink-0 w-full" data-name="Divider" />;
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[23.4px] whitespace-nowrap">
        <p className="leading-[33.6px]">Raise a round</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container30 />
    </div>
  );
}

function Divider3() {
  return <div className="bg-[#737370] h-px shrink-0 w-full" data-name="Divider" />;
}

function Half() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px overflow-clip relative" data-name="Half">
      <Divider />
      <Container25 />
      <Divider1 />
      <Container27 />
      <Divider2 />
      <Container29 />
      <Divider3 />
    </div>
  );
}

function Divider4() {
  return <div className="bg-[#737370] h-px shrink-0 w-full" data-name="Divider" />;
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[23.3px] whitespace-nowrap">
        <p className="leading-[33.6px]">Earn customer trust</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container32 />
    </div>
  );
}

function Divider5() {
  return <div className="bg-[#737370] h-px shrink-0 w-full" data-name="Divider" />;
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[22.9px] whitespace-nowrap">
        <p className="leading-[33.6px]">Stand out from the crowd</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container34 />
    </div>
  );
}

function Divider6() {
  return <div className="bg-[#737370] h-px shrink-0 w-full" data-name="Divider" />;
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[23.4px] whitespace-nowrap">
        <p className="leading-[33.6px]">Save capital</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container36 />
    </div>
  );
}

function Divider7() {
  return <div className="bg-[#737370] h-px shrink-0 w-full" data-name="Divider" />;
}

function Half1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px overflow-clip relative" data-name="Half">
      <Divider4 />
      <Container31 />
      <Divider5 />
      <Container33 />
      <Divider6 />
      <Container35 />
      <Divider7 />
    </div>
  );
}

function Benefits() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Benefits">
      <Half />
      <Half1 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[80px] items-start min-h-px min-w-px overflow-clip relative" data-name="Right">
      <NameHeading />
      <Comparison />
      <Benefits />
    </div>
  );
}

function SectionSplit() {
  return (
    <div className="content-stretch flex gap-[30px] items-start overflow-clip relative shrink-0 w-full" data-name="Section - Split">
      <LeftAlignStretch />
      <Right />
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] max-w-[1440px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] px-[20px] py-[160px] relative w-full">
          <SectionSplit />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Section">
      <Container16 />
    </div>
  );
}

function RinklCardPng() {
  return (
    <div className="absolute inset-[-0.62px_-0.56px_-0.61px_-0.56px]" data-name="Rinkl_Card.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRinklCardPng} />
      </div>
    </div>
  );
}

function DivImage() {
  return (
    <div className="flex-[1_0_0] max-h-[1600px] min-h-px min-w-px overflow-clip relative w-full" data-name="div.image">
      <RinklCardPng />
    </div>
  );
}

function DivImageMargin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-h-[1624px] min-h-px min-w-px pb-[24px] relative w-full" data-name="div.image:margin">
      <DivImage />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="content-stretch flex flex-col items-start pr-[341px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] max-h-[27.489999771118164px] max-w-[396px] not-italic relative shrink-0 text-[#f3f5f3] text-[25px] whitespace-nowrap">
          <p className="leading-[32px]">Rinkl</p>
        </div>
      </div>
    </div>
  );
}

function PSmall() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.small">
      <div className="content-stretch flex flex-col items-start pr-[6px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[17.5px] max-w-[396px] not-italic relative shrink-0 text-[#f3f5f3] text-[14px] whitespace-nowrap">
          <p className="mb-0">Rinkl is a platform for content-creators, that believes that</p>
          <p className="mb-0">allowing your audience to ask direct, personal questions for</p>
          <p className="mb-0">a small fee filters out the low-value questions and noise,</p>
          <p>allowing you to cut directly to those looking for advice/help.</p>
        </div>
      </div>
    </div>
  );
}

function DivCardContent() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start max-w-[396px] relative shrink-0 w-full" data-name="div.card-content">
      <Heading4 />
      <PSmall />
    </div>
  );
}

function DivLabelXsmall() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.label-xsmall">
      <div className="content-stretch flex flex-col items-start pr-[6.39px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[13.199999809265137px] not-italic relative shrink-0 text-[#f3f5f3] text-[12px] whitespace-nowrap">
          <p className="leading-[13.2px]">Rinkl</p>
        </div>
      </div>
    </div>
  );
}

function DivClient() {
  return (
    <div className="content-stretch flex flex-col gap-[3.19px] items-start relative self-stretch shrink-0" data-name="div.client">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#797a7a] text-[12px] whitespace-nowrap">
        <p className="leading-[13.2px]">Client</p>
      </div>
      <DivLabelXsmall />
    </div>
  );
}

function DivLabelXsmall1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.label-xsmall">
      <div className="content-stretch flex flex-col items-start pr-[11.25px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[13.199999809265137px] not-italic relative shrink-0 text-[#f3f5f3] text-[12px] whitespace-nowrap">
          <p className="leading-[13.2px]">Media</p>
        </div>
      </div>
    </div>
  );
}

function DivClient1() {
  return (
    <div className="content-stretch flex flex-col gap-[3.19px] items-start relative self-stretch shrink-0" data-name="div.client">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#797a7a] text-[11.813px] whitespace-nowrap">
        <p className="leading-[13.2px]">Industry</p>
      </div>
      <DivLabelXsmall1 />
    </div>
  );
}

function DivCardDescription() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-description">
      <div className="content-stretch flex gap-[32px] items-start pr-[444.36px] relative w-full">
        <DivClient />
        <DivClient1 />
      </div>
    </div>
  );
}

function DivContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="div.content-wrapper">
      <DivCardContent />
      <DivCardDescription />
    </div>
  );
}

function DivHoverUnderlineAnimation() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="div.hover-underline-animation">
      <DivImageMargin />
      <DivContentWrapper />
    </div>
  );
}

function Link() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Link">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative rounded-[inherit] w-full">
        <DivHoverUnderlineAnimation />
      </div>
      <div aria-hidden="true" className="absolute border-[#292929] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivProjectSmall() {
  return (
    <div className="content-stretch flex items-start pb-[0.31px] relative self-stretch shrink-0 w-[556px]" data-name="div.project-small">
      <Link />
    </div>
  );
}

function DsCardPng() {
  return (
    <div className="absolute inset-[-0.87px_-0.79px]" data-name="DS_Card.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDsCardPng} />
      </div>
    </div>
  );
}

function DivImage1() {
  return (
    <div className="flex-[1_0_0] max-h-[1600px] min-h-px min-w-px overflow-clip relative w-full" data-name="div.image">
      <DsCardPng />
    </div>
  );
}

function DivImageMargin1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-h-[1624px] min-h-px min-w-px pb-[24px] relative w-full" data-name="div.image:margin">
      <DivImage1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="content-stretch flex flex-col items-start pr-[256px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] max-h-[27.489999771118164px] max-w-[396px] not-italic relative shrink-0 text-[#f3f5f3] text-[25px] whitespace-nowrap">
          <p className="leading-[32px]">DeskSetups</p>
        </div>
      </div>
    </div>
  );
}

function PSmall1() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.small">
      <div className="content-stretch flex flex-col items-start pr-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[17.5px] max-w-[396px] not-italic relative shrink-0 text-[#f3f5f3] text-[14px] whitespace-nowrap">
          <p className="mb-0">Noticing a shift in the way we work, and the rise of those</p>
          <p className="mb-0">working from home, DeskSetups sought to become the go-</p>
          <p className="mb-0">to for those looking to upgrade their setups. It allows users</p>
          <p className="mb-0">to browse and submit their setups, find the products that</p>
          <p className="mb-0">make them, and build and optimize their own custom</p>
          <p>product list.</p>
        </div>
      </div>
    </div>
  );
}

function DivCardContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start max-w-[396px] relative shrink-0 w-full" data-name="div.card-content">
      <Heading5 />
      <PSmall1 />
    </div>
  );
}

function DivLabelXsmall2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.label-xsmall">
      <div className="content-stretch flex flex-col items-start pr-[1.3px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[13.199999809265137px] not-italic relative shrink-0 text-[#f3f5f3] text-[12px] whitespace-nowrap">
          <p className="leading-[13.2px]">DeskSetups</p>
        </div>
      </div>
    </div>
  );
}

function DivClient2() {
  return (
    <div className="content-stretch flex flex-col gap-[3.19px] items-start relative self-stretch shrink-0" data-name="div.client">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#797a7a] text-[12px] whitespace-nowrap">
        <p className="leading-[13.2px]">Client</p>
      </div>
      <DivLabelXsmall2 />
    </div>
  );
}

function DivLabelXsmall3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.label-xsmall">
      <div className="content-stretch flex flex-col items-start pr-[1.41px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[13.199999809265137px] not-italic relative shrink-0 text-[#f3f5f3] text-[12px] whitespace-nowrap">
          <p className="leading-[13.2px]">Community</p>
        </div>
      </div>
    </div>
  );
}

function DivClient3() {
  return (
    <div className="content-stretch flex flex-col gap-[3.19px] items-start relative self-stretch shrink-0" data-name="div.client">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#797a7a] text-[11.813px] whitespace-nowrap">
        <p className="leading-[13.2px]">Industry</p>
      </div>
      <DivLabelXsmall3 />
    </div>
  );
}

function DivCardDescription1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-description">
      <div className="content-stretch flex gap-[32px] items-start pr-[620.29px] relative w-full">
        <DivClient2 />
        <DivClient3 />
      </div>
    </div>
  );
}

function DivContentWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="div.content-wrapper">
      <DivCardContent1 />
      <DivCardDescription1 />
    </div>
  );
}

function DivHoverUnderlineAnimation1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="div.hover-underline-animation">
      <DivImageMargin1 />
      <DivContentWrapper1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="relative self-stretch shrink-0 w-[788px]" data-name="Link">
      <div className="content-stretch flex flex-col items-start justify-end overflow-clip pb-px relative rounded-[inherit] size-full">
        <DivHoverUnderlineAnimation1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#292929] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1368px]" data-name="div.grid-12">
      <DivProjectSmall />
      <Link1 />
    </div>
  );
}

function HnpCardPng() {
  return (
    <div className="absolute inset-[-0.87px_-0.79px_-0.86px_-0.79px]" data-name="hnp_Card.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHnpCardPng} />
      </div>
    </div>
  );
}

function DivImage2() {
  return (
    <div className="flex-[1_0_0] max-h-[1600px] min-h-px min-w-px overflow-clip relative w-full" data-name="div.image">
      <HnpCardPng />
    </div>
  );
}

function DivImageMargin2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-h-[1624px] min-h-px min-w-px pb-[24px] relative w-full" data-name="div.image:margin">
      <DivImage2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="content-stretch flex flex-col items-start pr-[153px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] max-h-[27.489999771118164px] max-w-[396px] not-italic relative shrink-0 text-[#f3f5f3] text-[25px] whitespace-nowrap">
          <p className="leading-[32px]">Human Node Project</p>
        </div>
      </div>
    </div>
  );
}

function PSmall2() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.small">
      <div className="content-stretch flex flex-col items-start pr-[14px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[17.5px] max-w-[396px] not-italic relative shrink-0 text-[#f3f5f3] text-[14px] whitespace-nowrap">
          <p className="mb-0">The Human Node Project (HNP) is an online experience</p>
          <p className="mb-0">that looks to create a curated collection of individuals who</p>
          <p className="mb-0">want to do “good” in the world, and act with good</p>
          <p>intentions.</p>
        </div>
      </div>
    </div>
  );
}

function DivCardContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start max-w-[396px] relative shrink-0 w-full" data-name="div.card-content">
      <Heading6 />
      <PSmall2 />
    </div>
  );
}

function DivLabelXsmall4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.label-xsmall">
      <div className="content-stretch flex flex-col items-start pr-[7.39px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[13.199999809265137px] not-italic relative shrink-0 text-[#f3f5f3] text-[12px] whitespace-nowrap">
          <p className="leading-[13.2px]">HNP</p>
        </div>
      </div>
    </div>
  );
}

function DivClient4() {
  return (
    <div className="content-stretch flex flex-col gap-[3.19px] items-start relative self-stretch shrink-0" data-name="div.client">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#797a7a] text-[12px] whitespace-nowrap">
        <p className="leading-[13.2px]">Client</p>
      </div>
      <DivLabelXsmall4 />
    </div>
  );
}

function DivLabelXsmall5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.label-xsmall">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[13.199999809265137px] not-italic relative shrink-0 text-[#f3f5f3] text-[12px] whitespace-nowrap">
        <p className="leading-[13.2px]">Blockchain</p>
      </div>
    </div>
  );
}

function DivClient5() {
  return (
    <div className="content-stretch flex flex-col gap-[3.19px] items-start relative self-stretch shrink-0" data-name="div.client">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#797a7a] text-[11.813px] whitespace-nowrap">
        <p className="leading-[13.2px]">Industry</p>
      </div>
      <DivLabelXsmall5 />
    </div>
  );
}

function DivCardDescription2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-description">
      <div className="content-stretch flex gap-[32px] items-start pr-[660.61px] relative w-full">
        <DivClient4 />
        <DivClient5 />
      </div>
    </div>
  );
}

function DivContentWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="div.content-wrapper">
      <DivCardContent2 />
      <DivCardDescription2 />
    </div>
  );
}

function DivHoverUnderlineAnimation2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="div.hover-underline-animation">
      <DivImageMargin2 />
      <DivContentWrapper2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="relative self-stretch shrink-0 w-[788px]" data-name="Link">
      <div className="content-stretch flex flex-col items-start justify-end overflow-clip pb-px relative rounded-[inherit] size-full">
        <DivHoverUnderlineAnimation2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#292929] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ScanCardPng() {
  return (
    <div className="absolute inset-[-0.61px_-0.56px]" data-name="Scan_Card.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgScanCardPng} />
      </div>
    </div>
  );
}

function DivImage3() {
  return (
    <div className="flex-[1_0_0] max-h-[1600px] min-h-px min-w-px overflow-clip relative w-full" data-name="div.image">
      <ScanCardPng />
    </div>
  );
}

function DivImageMargin3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-h-[1624px] min-h-px min-w-px pb-[24px] relative w-full" data-name="div.image:margin">
      <DivImage3 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="content-stretch flex flex-col items-start pr-[281px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] max-h-[27.489999771118164px] max-w-[396px] not-italic relative shrink-0 text-[#f3f5f3] text-[25px] whitespace-nowrap">
          <p className="leading-[32px]">Scan.com</p>
        </div>
      </div>
    </div>
  );
}

function PSmall3() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.small">
      <div className="content-stretch flex flex-col items-start pr-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[17.5px] max-w-[396px] not-italic relative shrink-0 text-[#f3f5f3] text-[14px] whitespace-nowrap">
          <p className="mb-0">Fed up with the long waits for medical scans, Scan.com</p>
          <p className="mb-0">allows it’s users to compare, browse and book scans</p>
          <p className="mb-0">directly with the facilities offering them. No more waiting for</p>
          <p className="mb-0">doctors to follow up, lengthy referral processes and month-</p>
          <p>long wait times.</p>
        </div>
      </div>
    </div>
  );
}

function DivCardContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start max-w-[396px] relative shrink-0 w-full" data-name="div.card-content">
      <Heading7 />
      <PSmall3 />
    </div>
  );
}

function DivLabelXsmall6() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.label-xsmall">
      <div className="content-stretch flex flex-col items-start pr-[4.39px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[13.199999809265137px] not-italic relative shrink-0 text-[#f3f5f3] text-[12px] whitespace-nowrap">
          <p className="leading-[13.2px]">Scan</p>
        </div>
      </div>
    </div>
  );
}

function DivClient6() {
  return (
    <div className="content-stretch flex flex-col gap-[3.19px] items-start relative self-stretch shrink-0" data-name="div.client">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#797a7a] text-[12px] whitespace-nowrap">
        <p className="leading-[13.2px]">Client</p>
      </div>
      <DivLabelXsmall6 />
    </div>
  );
}

function DivLabelXsmall7() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.label-xsmall">
      <div className="content-stretch flex flex-col items-start pr-[8.25px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[13.199999809265137px] not-italic relative shrink-0 text-[#f3f5f3] text-[12px] whitespace-nowrap">
          <p className="leading-[13.2px]">Health</p>
        </div>
      </div>
    </div>
  );
}

function DivClient7() {
  return (
    <div className="content-stretch flex flex-col gap-[3.19px] items-start relative self-stretch shrink-0" data-name="div.client">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#797a7a] text-[11.813px] whitespace-nowrap">
        <p className="leading-[13.2px]">Industry</p>
      </div>
      <DivLabelXsmall7 />
    </div>
  );
}

function DivCardDescription3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-description">
      <div className="content-stretch flex gap-[32px] items-start pr-[444.36px] relative w-full">
        <DivClient6 />
        <DivClient7 />
      </div>
    </div>
  );
}

function DivContentWrapper3() {
  return (
    <div className="content-stretch flex flex-col gap-[23.5px] items-start relative shrink-0 w-full" data-name="div.content-wrapper">
      <DivCardContent3 />
      <DivCardDescription3 />
    </div>
  );
}

function DivHoverUnderlineAnimation3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="div.hover-underline-animation">
      <DivImageMargin3 />
      <DivContentWrapper3 />
    </div>
  );
}

function Link3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Link">
      <div className="content-stretch flex flex-col items-start justify-end overflow-clip pb-px relative rounded-[inherit] w-full">
        <DivHoverUnderlineAnimation3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#292929] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivRemoveMarginBottom() {
  return (
    <div className="content-stretch flex items-end pb-[0.32px] pt-[237.95px] relative self-stretch shrink-0 w-[556px]" data-name="div.remove-margin-bottom">
      <Link3 />
    </div>
  );
}

function DivGrid1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1368px]" data-name="div.grid-12">
      <Link2 />
      <DivRemoveMarginBottom />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[16px]" data-name="Frame">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-4.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 8.70711">
            <path d={svgPaths.p2ac69180} id="Vector" stroke="var(--stroke-0, #CACCCA)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[34.38%] left-[34.38%] right-1/4 top-1/4" data-name="Vector">
        <div className="absolute inset-[-7.69%_-7.69%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0 0.5H6.5V7" id="Vector" stroke="var(--stroke-0, #CACCCA)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Frame />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start pl-[8px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg2 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[17.600000381469727px] not-italic relative shrink-0 text-[#caccca] text-[16px] whitespace-nowrap">
        <p className="leading-[17.6px]">View All Work</p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <SvgMargin />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start pb-[7px] pt-[6px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#292929] border-b border-solid inset-0 pointer-events-none" />
      <Link4 />
    </div>
  );
}

function DivViewMoreWrapper() {
  return (
    <div className="absolute bottom-[0.99px] content-stretch flex flex-col items-start right-0 w-[130.8px]" data-name="div.view-more_wrapper">
      <Button />
    </div>
  );
}

function DivViewMore() {
  return (
    <div className="h-px relative shrink-0 w-[1368px]" data-name="div.view-more">
      <DivViewMoreWrapper />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[24px] relative shrink-0 w-[1368px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[67px] max-w-[1368px] not-italic relative shrink-0 text-[#f3f5f3] text-[61px] whitespace-nowrap">
        <p className="mb-0">Monolif is a small agency by choice. This</p>
        <p className="mb-0">allows us to stay agile, work with full creativity</p>
        <p className="mb-0">and freedom, and remain close to each project,</p>
        <p>guiding it through the process.</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[36px] relative w-full">
        <DivHeroBanner />
        <DivHomeHero />
        <TabComponentHow />
        <Section1 />
        <DivGrid />
        <DivGrid1 />
        <DivViewMore />
        <Heading />
      </div>
    </div>
  );
}

function LinkLightPng() {
  return (
    <div className="h-[30px] relative shrink-0 w-[21px]" data-name="Link → Light.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkLightPng} />
      </div>
    </div>
  );
}

function DivLogo() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pr-[303px] relative self-stretch shrink-0 w-[324px]" data-name="div.logo">
      <LinkLightPng />
    </div>
  );
}

function DivLabelSmall() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[18px] pr-[20.69px] relative shrink-0" data-name="div.label-small">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">BASED IN BRISTOL, UK, WORKING WORLDWIDE</p>
      </div>
    </div>
  );
}

function DivBased() {
  return (
    <div className="content-stretch flex items-start pr-[333.31px] relative self-stretch shrink-0 w-[672px]" data-name="div.based">
      <DivLabelSmall />
    </div>
  );
}

function DivLabelSmall1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[18px] pr-[2.13px] relative shrink-0" data-name="div.label-small">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Sunday 1:25 PM</p>
      </div>
    </div>
  );
}

function DivLabelSmall2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[18px] relative shrink-0" data-name="div.label-small">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">51.4538° N | 2.5972° W</p>
      </div>
    </div>
  );
}

function DivMenu() {
  return (
    <div className="content-stretch flex items-start justify-between pr-[0.05px] relative self-stretch shrink-0 w-[324px]" data-name="div.menu">
      <DivLabelSmall1 />
      <DivLabelSmall2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2_466)" id="SVG">
          <path d="M12 16.125V7.875" id="Vector" stroke="var(--stroke-0, #797A7A)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p4a2c400} id="Vector_2" stroke="var(--stroke-0, #797A7A)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1aa6b600} id="Vector_3" stroke="var(--stroke-0, #292929)" />
        </g>
        <defs>
          <clipPath id="clip0_2_466">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[1044px] pr-[3.36px] top-[-43px] w-[141.36px]" data-name="Link">
      <Svg3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[141.36000061035156px] not-italic relative shrink-0 text-[#797a7a] text-[16px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Back to top</p>
      </div>
    </div>
  );
}

function DivFooterTopbar() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pt-[19px] relative shrink-0 w-full" data-name="div.footer-topbar">
      <div aria-hidden="true" className="absolute border-[#292929] border-solid border-t inset-0 pointer-events-none" />
      <DivLogo />
      <DivBased />
      <DivMenu />
      <Link5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start pr-[109px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[53.89px] max-w-[672px] not-italic relative shrink-0 text-[#f3f5f3] text-[49px] whitespace-nowrap">
          <p className="mb-0">CRAFTING MEMORABLE</p>
          <p>DIGITAL EXPERIENCES</p>
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start pr-[217px] relative w-full">
        <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] max-h-[53.88999938964844px] max-w-[672px] not-italic relative shrink-0 text-[#f3f5f3] text-[49px] whitespace-nowrap">
          <p className="leading-[53.89px]">contact@monolif.co</p>
        </div>
      </div>
    </div>
  );
}

function DivContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16.78px] h-full items-start relative shrink-0 w-[672px]" data-name="div.contact-info">
      <Heading1 />
      <Heading8 />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="relative shrink-0 w-full" data-name="div#placeholder">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[211px] relative w-full">
          <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] max-w-[288px] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">
            <p className="leading-[normal]">Your Email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[2.8px] pt-[1.2px] relative self-stretch" data-name="Input">
      <DivPlaceholder />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3 9L9 3" id="Vector" stroke="var(--stroke-0, #797A7A)" strokeLinejoin="round" />
          <path d="M4.125 3H9V7.875" id="Vector_2" stroke="var(--stroke-0, #797A7A)" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pt-[6px] relative self-stretch shrink-0" data-name="Button">
      <Svg4 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[11px] relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#797a7a] border-b border-solid inset-0 pointer-events-none" />
      <Input />
      <Button1 />
    </div>
  );
}

function DivLabelSmall3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.label-small">
      <div className="content-stretch flex flex-col items-start pr-[16px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[15.4px] max-w-[324px] not-italic relative shrink-0 text-[#797a7a] text-[13.781px] whitespace-nowrap">
          <p className="mb-0">Join our newsletter to stay informed about new</p>
          <p className="mb-0">tips, tutorials, projects, products, investments,</p>
          <p>and more.</p>
        </div>
      </div>
    </div>
  );
}

function DivEmailNewsletter() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-full items-start pb-[87.67px] relative shrink-0 w-[324px]" data-name="div.email-newsletter">
      <Form />
      <DivLabelSmall3 />
    </div>
  );
}

function DivFooterContent() {
  return (
    <div className="content-stretch flex gap-[372px] items-end relative shrink-0 w-full" data-name="div.footer-content">
      <div className="flex flex-row items-end self-stretch">
        <DivContactInfo />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <DivEmailNewsletter />
      </div>
    </div>
  );
}

function DivTop() {
  return (
    <div className="content-stretch flex flex-col gap-[55px] items-start relative shrink-0 w-full" data-name="div.top">
      <DivFooterTopbar />
      <DivFooterContent />
    </div>
  );
}

function Link6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4.69px] relative w-full">
          <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] max-h-[15.399999618530273px] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">WORK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[2px] self-stretch shrink-0" data-name="Button">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[2.34px] relative w-full">
          <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] max-h-[15.399999618530273px] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">STUDIO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[2px] self-stretch shrink-0" data-name="Button">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4.89px] relative w-full">
          <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] max-h-[15.399999618530273px] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">SERVICES</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[2px] self-stretch shrink-0" data-name="Button">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[3.34px] relative w-full">
          <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] max-h-[15.399999618530273px] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">CONTACT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[2px] self-stretch shrink-0" data-name="Button">
      <Link9 />
    </div>
  );
}

function DivPageLinks() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="div.page-links">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[14px]" data-name="Frame">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-4.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.61872 7.61872">
            <path d={svgPaths.p123c4100} id="Vector" stroke="var(--stroke-0, #CACCCA)" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[34.38%] left-[34.38%] right-1/4 top-1/4" data-name="Vector">
        <div className="absolute inset-[-7.69%_-7.69%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.125 6.125">
            <path d="M0 0.4375H5.6875V6.125" id="Vector" stroke="var(--stroke-0, #CACCCA)" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start pl-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg5 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex gap-[2.81px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] max-h-[15.399999618530273px] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">TWITTER</p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <SvgMargin1 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[2px] self-stretch shrink-0" data-name="Button">
      <Link10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[14px]" data-name="Frame">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-4.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.61872 7.61872">
            <path d={svgPaths.p123c4100} id="Vector" stroke="var(--stroke-0, #CACCCA)" strokeLinejoin="round" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[34.38%] left-[34.38%] right-1/4 top-1/4" data-name="Vector">
        <div className="absolute inset-[-7.69%_-7.69%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.125 6.125">
            <path d="M0 0.4375H5.6875V6.125" id="Vector" stroke="var(--stroke-0, #CACCCA)" strokeWidth="0.875" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Frame2 />
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start pl-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg6 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex gap-[4.44px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] max-h-[15.399999618530273px] not-italic relative shrink-0 text-[#caccca] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">LINKEDIN</p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <SvgMargin2 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[2px] self-stretch shrink-0" data-name="Button">
      <Link11 />
    </div>
  );
}

function DivSocialLinks() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="div.social-links">
      <Button6 />
      <Button7 />
    </div>
  );
}

function DivLinksRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.links-row">
      <DivPageLinks />
      <DivSocialLinks />
    </div>
  );
}

function LogoLightSvg2() {
  return (
    <div className="h-[208.17px] relative shrink-0 w-[1367.974px]" data-name="Logo-Light.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1367.97 208.17">
        <g clipPath="url(#clip0_2_494)" id="Logo-Light.svg">
          <path d={svgPaths.p18b95300} fill="var(--fill-0, #F3F5F3)" id="Vector" />
          <path d={svgPaths.p3994de00} fill="var(--fill-0, #F3F5F3)" id="Vector_2" />
          <path d={svgPaths.p2c98c200} fill="var(--fill-0, #F3F5F3)" id="Vector_3" />
          <path d={svgPaths.p293ee100} fill="var(--fill-0, #F3F5F3)" id="Vector_4" />
          <path d={svgPaths.p3191fa00} fill="var(--fill-0, #F3F5F3)" id="Vector_5" />
          <path d={svgPaths.p29b5e080} fill="var(--fill-0, #F3F5F3)" id="Vector_6" />
          <path d={svgPaths.p2d8e8080} fill="var(--fill-0, #F3F5F3)" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_2_494">
            <rect fill="white" height="208.17" width="1367.97" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoLightSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[208.17px] items-center justify-center overflow-clip px-[0.013px] relative shrink-0 w-[1368px]" data-name="Logo-Light.svg fill">
      <LogoLightSvg2 />
    </div>
  );
}

function LogoLightSvg1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip right-0 top-0" data-name="Logo-Light.svg">
      <LogoLightSvgFill />
    </div>
  );
}

function DivLargeLogo() {
  return (
    <div className="h-[122px] max-h-[122px] overflow-clip relative shrink-0 w-full" data-name="div.large-logo">
      <LogoLightSvg1 />
    </div>
  );
}

function DivBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[19.99px] items-center relative shrink-0 w-full" data-name="div.bottom">
      <DivLinksRow />
      <DivLargeLogo />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start justify-between px-[36px] relative w-full">
        <DivTop />
        <DivBottom />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[200px] items-start relative shrink-0 w-full" data-name="Main">
      <Section />
      <Footer />
    </div>
  );
}

export default function RulzCo() {
  return (
    <div className="bg-[#0f0c0c] content-stretch flex flex-col items-start relative size-full" data-name="Rulz&Co">
      <Main />
    </div>
  );
}