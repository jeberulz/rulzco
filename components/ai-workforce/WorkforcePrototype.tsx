"use client";

import {
  Activity,
  Archive,
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  Box,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  CircleDot,
  ClipboardCheck,
  Clock3,
  Code2,
  Command,
  Cpu,
  Eye,
  File,
  FileCode2,
  FileText,
  Filter,
  Flag,
  Folder,
  Gauge,
  GitBranch,
  Goal,
  Home,
  Inbox,
  Layers3,
  Library,
  Link2,
  ListChecks,
  LockKeyhole,
  Maximize2,
  MessageSquare,
  MoreHorizontal,
  Network,
  PanelLeftClose,
  Pause,
  PenTool,
  Play,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  UserRound,
  Users,
  X,
  Zap,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useMemo, useState } from "react";
import styles from "./workforce.module.css";

type View =
  | "today"
  | "strategy"
  | "goals"
  | "work"
  | "team"
  | "library"
  | "artifacts"
  | "inbox"
  | "activity"
  | "settings";
type AgentId = "research" | "designer" | "builder" | "analyst" | "reviewer";
type DecisionId = "research-plan" | "prototype-direction";
type WorkTab = "Tasks" | "Routines" | "Runs";
type LibraryTab = "Skills" | "Context" | "Tools" | "Templates";

const navigation = [
  { id: "today" as const, label: "Today", icon: Home },
  { id: "strategy" as const, label: "Strategy", icon: Target },
  { id: "goals" as const, label: "Goals", icon: Goal },
  { id: "work" as const, label: "Work", icon: BriefcaseBusiness },
  { id: "team" as const, label: "AI Team", icon: Users },
  { id: "library" as const, label: "Library", icon: Library },
  { id: "artifacts" as const, label: "Artifacts", icon: Box },
];

const agents: Record<
  AgentId,
  {
    name: string;
    model: string;
    status: "Working" | "Waiting" | "Available";
    assignment: string;
    due?: string;
    icon: typeof Bot;
    skills: string[];
    mandate: string;
    tools: string;
  }
> = {
  research: {
    name: "Research Assistant",
    model: "Claude",
    status: "Working",
    assignment: "Discovery brief",
    due: "Today 4:00 PM",
    icon: Search,
    skills: ["Market research", "User interviews", "Insight synthesis"],
    mandate: "Finds and synthesises evidence for approved product questions.",
    tools: "Claude, web research, Dovetail",
  },
  designer: {
    name: "Product Designer",
    model: "Claude",
    status: "Working",
    assignment: "Onboarding flow v2",
    due: "Tomorrow 10:00 AM",
    icon: PenTool,
    skills: ["UX design", "Information architecture", "Design systems"],
    mandate: "Turns approved product strategy into testable user experiences.",
    tools: "Claude, Figma, design system",
  },
  builder: {
    name: "Prototype Builder",
    model: "Codex",
    status: "Working",
    assignment: "Signal discovery flow",
    due: "Today 6:00 PM",
    icon: Code2,
    skills: ["Front-end development", "Component implementation", "Interaction states"],
    mandate: "Builds functional prototypes and UI flows from approved designs and specifications.",
    tools: "Codex, GitHub, local sandbox",
  },
  analyst: {
    name: "Workflow Analyst",
    model: "Claude",
    status: "Available",
    assignment: "Available",
    icon: Network,
    skills: ["Process mapping", "Workflow optimisation", "Metrics & reporting"],
    mandate: "Maps operating workflows and identifies high-leverage automation opportunities.",
    tools: "Claude, analytics, internal knowledge",
  },
  reviewer: {
    name: "Independent Reviewer",
    model: "Claude",
    status: "Available",
    assignment: "Available",
    icon: ShieldCheck,
    skills: ["Quality assurance", "Risk assessment", "Policy compliance"],
    mandate: "Reviews work independently and escalates material quality or policy risks to the human.",
    tools: "Claude, evaluation suite, policy library",
  },
};

const tasks = [
  {
    id: "1",
    title: "Strategy — Define opportunity and approach",
    owner: "Strategy Partner",
    status: "Approved",
    due: "26 Jul 2026",
    dependency: "—",
    children: [
      { id: "1.1", title: "Clarify problem and user outcomes", owner: "Strategy Partner", status: "Approved", due: "24 Jul", dependency: "—" },
      { id: "1.2", title: "Validate value and success metrics", owner: "Strategy Partner", status: "Approved", due: "25 Jul", dependency: "1.1" },
      { id: "1.3", title: "Recommend solution approach", owner: "Strategy Partner", status: "Approved", due: "26 Jul", dependency: "1.1, 1.2" },
    ],
  },
  {
    id: "2",
    title: "Research — Understand users and signals",
    owner: "Research Assistant",
    status: "In progress",
    due: "31 Jul 2026",
    dependency: "1",
    children: [
      { id: "2.1", title: "Analyse search behaviour and intent", owner: "Research Assistant", status: "In progress", due: "28 Jul", dependency: "1" },
      { id: "2.2", title: "Identify content gaps and opportunities", owner: "Research Assistant", status: "Not started", due: "30 Jul", dependency: "2.1" },
      { id: "2.3", title: "Prioritise use cases", owner: "Research Assistant", status: "Not started", due: "31 Jul", dependency: "2.1" },
    ],
  },
  {
    id: "3",
    title: "Prototype — Build and evaluate concepts",
    owner: "Prototype Builder",
    status: "Waiting",
    due: "8 Aug 2026",
    dependency: "2",
    children: [
      { id: "3.1", title: "Information architecture options", owner: "Product Designer", status: "Waiting", due: "3 Aug", dependency: "2.2" },
      { id: "3.2", title: "Interactive prototype", owner: "Prototype Builder", status: "Waiting", due: "6 Aug", dependency: "3.1" },
      { id: "3.3", title: "Internal review", owner: "Product Designer", status: "Waiting", due: "8 Aug", dependency: "3.2" },
    ],
  },
  {
    id: "4",
    title: "Validation — Test and measure",
    owner: "Independent Reviewer",
    status: "Not started",
    due: "16 Aug 2026",
    dependency: "3",
    children: [
      { id: "4.1", title: "Usability testing", owner: "Independent Reviewer", status: "Not started", due: "11 Aug", dependency: "3.2" },
      { id: "4.2", title: "Measure impact on key metrics", owner: "Independent Reviewer", status: "Not started", due: "14 Aug", dependency: "4.1" },
      { id: "4.3", title: "Recommend next steps", owner: "Independent Reviewer", status: "Not started", due: "16 Aug", dependency: "4.2" },
    ],
  },
];

function IconButton({
  label,
  children,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button className={styles.iconButton} aria-label={label} title={label} onClick={onClick}>
      {children}
    </button>
  );
}

function Status({ value }: { value: string }) {
  const className =
    value === "Approved"
      ? styles.statusApproved
      : value === "In progress" || value === "Working"
        ? styles.statusWorking
        : value === "Waiting"
          ? styles.statusWaiting
          : styles.statusIdle;
  return (
    <span className={`${styles.status} ${className}`}>
      {value === "Approved" ? <CheckCircle2 /> : value === "In progress" ? <CircleDot /> : <Circle />}
      {value}
    </span>
  );
}

function Sidebar({
  view,
  onNavigate,
  paused,
  onTogglePaused,
  onSearch,
}: {
  view: View;
  onNavigate: (view: View) => void;
  paused: boolean;
  onTogglePaused: () => void;
  onSearch: () => void;
}) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.brandMark}>A</div>
        <span>Algolia AI Workforce</span>
        <PanelLeftClose size={16} />
      </div>
      <nav className={styles.primaryNav} aria-label="Primary">
        {navigation.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`${styles.navItem} ${view === id ? styles.navItemActive : ""}`}
            onClick={() => onNavigate(id)}
          >
            <Icon />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <div className={styles.navDivider} />
      <nav className={styles.utilityNav} aria-label="Utilities">
        <button
          className={`${styles.navItem} ${view === "inbox" ? styles.navItemActive : ""}`}
          onClick={() => onNavigate("inbox")}
        >
          <Inbox />
          <span>Inbox</span>
          <span className={styles.badge}>3</span>
        </button>
        <button
          className={`${styles.navItem} ${view === "activity" ? styles.navItemActive : ""}`}
          onClick={() => onNavigate("activity")}
        >
          <Activity />
          <span>Activity</span>
        </button>
        <button className={styles.navItem} onClick={onSearch}>
          <Search />
          <span>Search</span>
          <kbd>⌘K</kbd>
        </button>
        <button className={styles.navItem} onClick={onTogglePaused}>
          {paused ? <Play /> : <Pause />}
          <span>{paused ? "Resume all" : "Pause all"}</span>
        </button>
        <button
          className={`${styles.navItem} ${view === "settings" ? styles.navItemActive : ""}`}
          onClick={() => onNavigate("settings")}
        >
          <Settings />
          <span>Settings</span>
        </button>
      </nav>
      <div className={styles.profile}>
        <div className={styles.avatar}>AM</div>
        <div>
          <strong>Alex Morgan</strong>
          <span>Staff Product Designer</span>
        </div>
        <ChevronRight />
      </div>
    </aside>
  );
}

function DecisionCard({
  title,
  summary,
  recommendation,
  impact,
  approved,
  onApprove,
  onReview,
}: {
  title: string;
  summary: string;
  recommendation: string;
  impact: string;
  approved: boolean;
  onApprove: () => void;
  onReview: () => void;
}) {
  return (
    <article className={`${styles.decisionCard} ${approved ? styles.decisionApproved : ""}`}>
      <div className={styles.decisionTop}>
        <div className={styles.squareIcon}>{approved ? <Check /> : <Sparkles />}</div>
        <div>
          <h3>{approved ? `${title} approved` : title}</h3>
          <span>Recommended by Strategy Partner</span>
        </div>
      </div>
      <p>{approved ? "Decision recorded. The team can continue within the approved plan." : summary}</p>
      <div className={styles.recommendation}>
        <strong>I suggest</strong>
        <span>{recommendation}</span>
      </div>
      <div className={styles.decisionMeta}>
        <span>Impact <strong>{impact}</strong></span>
        <span>Effort <strong>Medium</strong></span>
        <span>ETA <strong>5–7 days</strong></span>
        <div className={styles.cardActions}>
          {!approved && (
            <>
              <button className={styles.secondaryButton} onClick={onReview}>Review</button>
              <button className={styles.primaryButton} onClick={onApprove}>Approve</button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

function MiniTeamMap() {
  return (
    <section className={`${styles.panel} ${styles.miniTeamPanel}`}>
      <div className={styles.panelHeader}>
        <h2>Your AI team today</h2>
        <button className={styles.textButton}>View team <ArrowRight /></button>
      </div>
      <div className={styles.miniTeam}>
        <div className={`${styles.miniCard} ${styles.humanCard}`}>
          <UserRound />
          <div><strong>You</strong><span>Human employee · Focused</span></div>
        </div>
        <div className={styles.miniLine} />
        <div className={`${styles.miniCard} ${styles.strategyCard}`}>
          <BrainCircuit />
          <div><strong>Strategy Partner</strong><span>Planning & coordination · Working</span></div>
        </div>
        <div className={styles.miniBranches} />
        <div className={styles.miniSpecialists}>
          {[
            ["Research Assistant", "Working"],
            ["Product Designer", "Waiting"],
            ["Prototype Builder", "Waiting"],
          ].map(([name, status]) => (
            <div className={styles.specialistCard} key={name}>
              <Bot />
              <strong>{name}</strong>
              <span><i className={status === "Working" ? styles.dotDark : styles.dotLight} />{status}</span>
            </div>
          ))}
        </div>
        <div className={styles.reviewerLink}>
          <span />
          <div className={styles.reviewerMini}>
            <ShieldCheck />
            <div><strong>Independent Reviewer</strong><span>Reports directly to you · Available</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TodayScreen({
  decisions,
  onDecision,
  onReview,
  onViewTeam,
  onViewInbox,
  onOpenGoal,
  onViewArtifacts,
  onViewActivity,
  paused,
}: {
  decisions: Record<DecisionId, boolean>;
  onDecision: (id: DecisionId) => void;
  onReview: (id: DecisionId) => void;
  onViewTeam: () => void;
  onViewInbox: () => void;
  onOpenGoal: () => void;
  onViewArtifacts: () => void;
  onViewActivity: () => void;
  paused: boolean;
}) {
  const pendingCount = Object.values(decisions).filter((value) => !value).length;
  return (
    <main className={styles.scrollArea}>
      <header className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>Personal workforce</span>
          <h1>Today</h1>
        </div>
        <div className={styles.headerMeta}>
          {paused && <span className={styles.pausedBanner}><Pause /> All AI work paused</span>}
          <CalendarDays />
          <span>24 July 2026</span>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.sectionTitle}>
          <div>
            <h2>Needs your decision</h2>
            <p>{pendingCount ? `${pendingCount} decisions are blocking the team.` : "Nothing is blocked. Your team is continuing the approved plan."}</p>
          </div>
          <button className={styles.textButton} onClick={onViewInbox}>View inbox <ArrowRight /></button>
        </div>
        <div className={styles.decisionGrid}>
          <DecisionCard
            title="Approve research plan"
            summary="The team has translated your goal into a focused evidence plan."
            recommendation="Run competitor analysis and six user interviews before selecting an opportunity."
            impact="High"
            approved={decisions["research-plan"]}
            onApprove={() => onDecision("research-plan")}
            onReview={() => onReview("research-plan")}
          />
          <DecisionCard
            title="Choose prototype direction"
            summary="Two interface directions are ready for your judgement."
            recommendation="Proceed with Direction B: a unified signals workspace with guided recommendations."
            impact="High"
            approved={decisions["prototype-direction"]}
            onApprove={() => onDecision("prototype-direction")}
            onReview={() => onReview("prototype-direction")}
          />
        </div>
      </section>

      <section className={styles.todayGrid}>
        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.kicker}>Current goal</span>
              <h2>Improve customer signal discovery</h2>
            </div>
            <button className={styles.secondaryButton} onClick={onOpenGoal}>Open goal</button>
          </div>
          <p className={styles.outcome}><strong>Outcome</strong> Customers find relevant signals faster and act on insights with fewer steps.</p>
          <div className={styles.stepper}>
            {[
              ["Strategy", "Complete"],
              ["Team", "Complete"],
              ["Plan", "In progress"],
              ["Work", "Not started"],
              ["Review", "Not started"],
            ].map(([label, state], index) => (
              <div className={styles.step} key={label}>
                <div className={`${styles.stepDot} ${index < 2 ? styles.stepDone : index === 2 ? styles.stepCurrent : ""}`}>
                  {index < 2 ? <Check /> : index + 1}
                </div>
                <strong>{label}</strong>
                <span>{state}</span>
              </div>
            ))}
          </div>
          <div className={styles.taskList}>
            <div className={styles.taskGroupTitle}><strong>In progress</strong><span>3</span></div>
            {[
              ["Competitor landscape scan", "Research Assistant", "Working"],
              ["User interview synthesis", "Research Assistant", "Working"],
              ["Opportunity scoring model", "Strategy Partner", "Working"],
            ].map((row) => (
              <div className={styles.taskRow} key={row[0]}>
                <CircleDot />
                <strong>{row[0]}</strong>
                <span>{row[1]}</span>
                <Status value={row[2]} />
                <ChevronRight />
              </div>
            ))}
            <div className={styles.taskGroupTitle}><strong>Waiting</strong><span>1</span></div>
            <div className={styles.taskRow}>
              <Circle />
              <strong>Approve research plan</strong>
              <span>You</span>
              <Status value="Waiting" />
              <ChevronRight />
            </div>
            <div className={styles.taskGroupTitle}><strong>Next</strong><span>2</span></div>
            {[
              ["Define prototype requirements", "Product Designer"],
              ["Build interactive prototype", "Prototype Builder"],
            ].map((row) => (
              <div className={styles.taskRow} key={row[0]}>
                <Circle />
                <strong>{row[0]}</strong>
                <span>{row[1]}</span>
                <Status value="Not started" />
                <ChevronRight />
              </div>
            ))}
          </div>
        </section>
        <div onClick={onViewTeam} role="button" tabIndex={0} className={styles.clickablePanel}>
          <MiniTeamMap />
        </div>
      </section>

      <section className={styles.bottomGrid}>
        <section className={styles.panel}>
          <div className={styles.panelHeader}><h2>Recent artifacts</h2><button className={styles.textButton} onClick={onViewArtifacts}>View all <ArrowRight /></button></div>
          <div className={styles.artifactTable}>
            {[
              ["Customer signal discovery — research plan", "Strategy Partner", "Today, 10:24"],
              ["Opportunity scoring model (v0.3)", "Research Assistant", "Today, 09:41"],
              ["Prototype directions — comparison", "Product Designer", "Yesterday, 17:18"],
            ].map(([name, owner, updated]) => (
              <div className={styles.artifactRow} key={name}>
                <FileText />
                <strong>{name}</strong>
                <span>{owner}</span>
                <time>{updated}</time>
                <MoreHorizontal />
              </div>
            ))}
          </div>
        </section>
        <section className={styles.panel}>
          <div className={styles.panelHeader}><h2>What changed since yesterday</h2><button className={styles.textButton} onClick={onViewActivity}>Full activity <ArrowRight /></button></div>
          <div className={styles.changeList}>
            {[
              ["Research plan created", "Strategy Partner drafted the evidence plan and success criteria."],
              ["Two prototype directions defined", "Product Designer is waiting for your selection."],
              ["Opportunity scoring updated", "Research Assistant added latest market and user evidence."],
            ].map(([title, text]) => (
              <div key={title}><CheckCircle2 /><p><strong>{title}</strong><span>{text}</span></p></div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function GoalScreen({
  tab,
  setTab,
  expanded,
  toggleExpanded,
  proposalApproved,
  onApproveProposal,
}: {
  tab: string;
  setTab: (tab: string) => void;
  expanded: Set<string>;
  toggleExpanded: (id: string) => void;
  proposalApproved: boolean;
  onApproveProposal: () => void;
}) {
  const tabs = ["Overview", "Strategy", "Team", "Plan", "Work", "Artifacts", "Decisions", "Activity"];
  return (
    <main className={styles.goalScreen}>
      <header className={styles.goalHeader}>
        <div className={styles.breadcrumb}><span>Goals</span><ChevronRight /><strong>Improve customer signal discovery</strong></div>
        <div className={styles.goalTitleRow}>
          <h1>Improve customer signal discovery</h1>
          <Status value="In progress" />
          <span className={styles.targetDate}>Target 16 Aug 2026</span>
          <button className={styles.primaryButton}><MessageSquare /> Ask Strategy Partner</button>
          <IconButton label="More actions"><MoreHorizontal /></IconButton>
        </div>
        <div className={styles.tabs}>
          {tabs.map((name) => (
            <button key={name} className={tab === name ? styles.tabActive : ""} onClick={() => setTab(name)}>{name}</button>
          ))}
        </div>
      </header>
      {tab !== "Plan" ? (
        <div className={styles.emptyTab}>
          <div className={styles.emptyIcon}><Folder /></div>
          <h2>{tab}</h2>
          <p>This prototype focuses on the Plan workspace. Switch back to Plan to inspect the approved task tree.</p>
          <button className={styles.primaryButton} onClick={() => setTab("Plan")}>Open plan</button>
        </div>
      ) : (
        <div className={styles.planLayout}>
          <aside className={styles.contextPanel}>
            <section><h2>Goal context</h2></section>
            <section><h3>Outcome</h3><p>Customers find the most relevant content faster, leading to higher engagement and self-serve success.</p></section>
            <section>
              <h3>Success measures</h3>
              <ul><li>+20% search success rate</li><li>−15% time to first signal</li><li>+10% self-serve conversion</li><li>≥ 80 CSAT</li></ul>
            </section>
            <section>
              <h3>Constraints</h3>
              <ul><li>Use existing Algolia stack</li><li>No PII in training data</li><li>Budget ≤ $40k</li><li>Ship MVP by 16 Aug 2026</li></ul>
            </section>
            <section>
              <h3>Linked sources</h3>
              {["Customer research report.pdf", "Search analytics deep dive.csv", "Product strategy brief.md", "Competitive landscape.pdf"].map((name) => (
                <button className={styles.sourceRow} key={name}><File />{name}</button>
              ))}
              <button className={styles.linkButton}>View all 12 documents</button>
            </section>
            <section>
              <h3>Human owner</h3>
              <div className={styles.ownerRow}><div className={styles.avatar}>AM</div><p><strong>Alex Morgan</strong><span>Product Design</span></p></div>
              <button className={styles.fullSecondary}>Edit context</button>
            </section>
          </aside>
          <section className={styles.executionPanel}>
            <div className={styles.executionHeader}>
              <div><span className={styles.kicker}>Approved operating plan</span><h2>Execution plan</h2></div>
              <div><button className={styles.secondaryButton}><Filter /> Filter</button><button className={styles.secondaryButton}><SlidersHorizontal /> Columns</button><IconButton label="Expand plan"><Maximize2 /></IconButton></div>
            </div>
            <div className={styles.taskTableHeader}>
              <span>Task</span><span>Owner</span><span>Status</span><span>Due date</span><span>Depends on</span>
            </div>
            {tasks.map((task, taskIndex) => (
              <div key={task.id}>
                <button className={styles.planTaskRow} onClick={() => toggleExpanded(task.id)}>
                  <span className={styles.taskTitleCell}>{expanded.has(task.id) ? <ChevronDown /> : <ChevronRight />}<b>{taskIndex + 1}</b><strong>{task.title}</strong></span>
                  <span className={styles.ownerChip}>{task.owner}</span>
                  <Status value={task.status} />
                  <time>{task.due}</time>
                  <span>{task.dependency}</span>
                </button>
                {task.id === "1" && !proposalApproved && (
                  <div className={styles.planProposal}>
                    <Sparkles />
                    <p><strong>Strategy Partner proposes 2 new tasks</strong><span>Add stakeholder alignment and a technical feasibility review.</span></p>
                    <button className={styles.secondaryButton}>Review changes</button>
                    <button className={styles.primaryButton} onClick={onApproveProposal}>Approve plan</button>
                  </div>
                )}
                {task.id === "1" && proposalApproved && (
                  <div className={styles.planApprovedNote}><CheckCircle2 /><span>Plan changes approved. Specialists have been notified.</span></div>
                )}
                {expanded.has(task.id) &&
                  task.children.map((child) => (
                    <div className={styles.planChildRow} key={child.id}>
                      <span className={styles.taskTitleCell}><i /><b>{child.id}</b><span>{child.title}</span></span>
                      <span className={styles.ownerChip}>{child.owner}</span>
                      <Status value={child.status} />
                      <time>{child.due}</time>
                      <span>{child.dependency}</span>
                    </div>
                  ))}
              </div>
            ))}
            <div className={styles.tableFooter}><button className={styles.secondaryButton}><Plus /> Add task</button><span><Check /> Approved</span><span><CircleDot /> In progress</span><span><Circle /> Waiting</span><em>Auto-saved 2 min ago</em></div>
          </section>
          <aside className={styles.controlPanel}>
            <section><h2>Goal control</h2></section>
            <section><h3>Human employee</h3><div className={styles.ownerRow}><div className={styles.avatar}>AM</div><p><strong>Alex Morgan</strong><span>Product Design · Owner</span></p><ChevronDown /></div></section>
            <section><h3>Strategy Partner</h3><div className={styles.ownerRow}><div className={styles.avatarIcon}><BrainCircuit /></div><p><strong>Strategy Partner</strong><span>Creates plans and recommends team</span></p><ChevronDown /></div></section>
            <section>
              <div className={styles.sectionRow}><h3>Assigned specialists</h3><button className={styles.smallButton}>Manage</button></div>
              {(["research", "designer", "builder", "reviewer"] as AgentId[]).map((id) => {
                const agent = agents[id];
                const Icon = agent.icon;
                return <div className={styles.specialistRow} key={id}><Icon /><p><strong>{agent.name}</strong><span>{agent.skills[0]}</span></p><ChevronDown /></div>;
              })}
            </section>
            <section><div className={styles.sectionRow}><h3>Approval policy</h3><button className={styles.smallButton}>Configure</button></div><p>Human approval required for plan changes, budget overages, and scope changes above 20%.</p></section>
            <section><h3>Autonomy level</h3><p>Draft and execute within approved plan</p></section>
            <section><h3>Run budget</h3><div className={styles.budgetRow}><span>$18,500 of $40,000</span><strong>46%</strong></div><div className={styles.progress}><span /></div></section>
            <section><button className={styles.fullSecondary}><Pause /> Pause goal</button></section>
            <section>
              <h3>Open decisions</h3>
              <button className={styles.openDecision}><b>1</b><span>Approve vector re-ranking service<small>Impact: cost ↑ $4,800</small></span><ChevronRight /></button>
              <button className={styles.openDecision}><b>2</b><span>Choose primary evaluation metric<small>Success rate vs time to signal</small></span><ChevronRight /></button>
            </section>
          </aside>
        </div>
      )}
    </main>
  );
}

function AgentCard({ id, selected, onSelect }: { id: AgentId; selected: boolean; onSelect: (id: AgentId) => void }) {
  const agent = agents[id];
  const Icon = agent.icon;
  return (
    <button className={`${styles.agentCard} ${selected ? styles.agentCardSelected : ""}`} onClick={() => onSelect(id)}>
      <div className={styles.agentCardHead}>
        <div className={styles.agentIcon}><Icon /></div>
        <div><strong>{agent.name}</strong><span>{agent.model}</span></div>
        <MoreHorizontal />
      </div>
      <ul>{agent.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
      <div className={styles.agentStatus}><i className={agent.status === "Available" ? styles.dotLight : styles.dotDark} /><span>{agent.assignment === "Available" ? "Available" : `Current: ${agent.assignment}`}</span></div>
      {agent.due && <time>Due: {agent.due}</time>}
    </button>
  );
}

function TeamScreen({
  selectedAgent,
  setSelectedAgent,
  inspectorOpen,
  setInspectorOpen,
  onAssign,
}: {
  selectedAgent: AgentId;
  setSelectedAgent: (id: AgentId) => void;
  inspectorOpen: boolean;
  setInspectorOpen: (open: boolean) => void;
  onAssign: () => void;
}) {
  const agent = agents[selectedAgent];
  const AgentIcon = agent.icon;
  const selectAgent = (id: AgentId) => {
    setSelectedAgent(id);
    setInspectorOpen(true);
  };
  return (
    <main className={styles.teamScreen}>
      <header className={styles.teamHeader}>
        <div><span className={styles.eyebrow}>Personal workforce</span><h1>AI Team</h1></div>
        <div><button className={styles.secondaryButton}><Archive /> Team templates</button><button className={styles.primaryButton}><Plus /> Add AI employee</button></div>
      </header>
      <div className={styles.teamBody}>
        <div className={styles.teamCanvas}>
          <div className={styles.zoomControls}>
            <IconButton label="Zoom in"><ZoomIn /></IconButton>
            <IconButton label="Zoom out"><ZoomOut /></IconButton>
            <IconButton label="Fit to screen"><Maximize2 /></IconButton>
          </div>
          <div className={styles.orgMap}>
            <article className={styles.humanNode}>
              <div className={styles.nodeIcon}><UserRound /></div>
              <div><h2>Alex Morgan — Human orchestrator</h2><p>Staff Product Designer</p><span>Intent · context · taste · priorities · approval</span></div>
              <MoreHorizontal />
            </article>
            <div className={styles.verticalConnector} />
            <article className={styles.strategyNode}>
              <div className={styles.nodeIcon}><BrainCircuit /></div>
              <div><h2>Strategy Partner</h2><p>Frontier reasoning model</p><span>Clarifies goals, proposes team, creates plans, coordinates work</span><small><i className={styles.dotDark} /> Working on: Q3 product roadmap</small></div>
              <MoreHorizontal />
            </article>
            <div className={styles.teamConnector}><span /></div>
            <div className={styles.agentGrid}>
              <AgentCard id="research" selected={selectedAgent === "research" && inspectorOpen} onSelect={selectAgent} />
              <AgentCard id="designer" selected={selectedAgent === "designer" && inspectorOpen} onSelect={selectAgent} />
              <AgentCard id="builder" selected={selectedAgent === "builder" && inspectorOpen} onSelect={selectAgent} />
              <AgentCard id="analyst" selected={selectedAgent === "analyst" && inspectorOpen} onSelect={selectAgent} />
            </div>
            <div className={styles.reviewConnector} />
            <div className={styles.reviewerNode}>
              <AgentCard id="reviewer" selected={selectedAgent === "reviewer" && inspectorOpen} onSelect={selectAgent} />
            </div>
            <div className={styles.legend}>
              <span><i className={styles.solidLine} /> Delegation</span>
              <span><i className={styles.dottedLine} /> Review / approval</span>
              <span><i className={styles.dotDark} /> Working</span>
              <span><i className={styles.dotMid} /> Waiting</span>
              <span><i className={styles.dotLight} /> Available</span>
            </div>
          </div>
        </div>
        {inspectorOpen && (
          <aside className={styles.inspector}>
            <header>
              <div><h2>{agent.name}</h2><span>{agent.model}</span><Status value={agent.status} /></div>
              <IconButton label="Close inspector" onClick={() => setInspectorOpen(false)}><X /></IconButton>
            </header>
            <section><h3><UserRound /> Role & mandate</h3><p>{agent.mandate}</p></section>
            <section><h3><Target /> Current goal</h3><p>Improve customer signal discovery</p></section>
            <section>
              <h3><Flag /> Assigned skills</h3>
              <div className={styles.skillTags}>
                {(selectedAgent === "builder"
                  ? ["prototype-from-approved-flow", "implement-design-system", "qa-interaction-states"]
                  : agent.skills.map((skill) => skill.toLowerCase().replaceAll(" ", "-"))
                ).map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </section>
            <section><h3><Command /> Tools</h3><p>{agent.tools}</p></section>
            <section><h3><ShieldCheck /> Autonomy</h3><p>{selectedAgent === "builder" ? "May build branches and draft PRs." : "May execute assigned work within the approved plan."}</p></section>
            <section><h3><CheckCircle2 /> Approval gates</h3><p>Merge, deploy, scope change</p></section>
            <section>
              <h3><Activity /> Today’s run status</h3>
              <div className={styles.runProgress}><span>Progress</span><div className={styles.progress}><span /></div><strong>70%</strong></div>
              <dl><dt>Last run</dt><dd>Today 9:12 AM</dd><dt>Next run</dt><dd>Today 2:00 PM</dd><dt>Status</dt><dd><i className={styles.dotDark} /> {agent.status}</dd><dt>Notes</dt><dd>{agent.assignment}</dd></dl>
            </section>
            <footer><button className={styles.primaryButton} onClick={onAssign}>Assign work</button><button className={styles.fullSecondary}><Pause /> Pause</button></footer>
          </aside>
        )}
      </div>
    </main>
  );
}

function StrategyScreen({ onOpenOnboarding }: { onOpenOnboarding: () => void }) {
  const contextSections = [
    { label: "Role & responsibilities", value: "Staff Product Designer · Product experience and direction", state: "Complete" },
    { label: "Mission", value: "Turn customer and product signals into confident product decisions.", state: "Complete" },
    { label: "Current priorities", value: "Signal discovery · AI-native workflows · prototype quality", state: "Complete" },
    { label: "Stakeholders served", value: "Product leaders · designers · researchers · customer teams", state: "Complete" },
    { label: "Taste & quality bar", value: "Clear hierarchy, useful density, evidence before polish.", state: "Review due" },
    { label: "Decision principles", value: "Human judgment at scope, direction, quality and release gates.", state: "Complete" },
    { label: "Non-delegables", value: "Problem selection · product strategy · final design approval.", state: "Complete" },
    { label: "Default approval rules", value: "Approve external actions, scope change, release and spend.", state: "Complete" },
  ];
  return (
    <main className={styles.scrollArea}>
      <header className={styles.pageHeader}>
        <div><span className={styles.eyebrow}>Durable operating context</span><h1>Strategy</h1></div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryButton} onClick={onOpenOnboarding}><UserRound /> Replay onboarding</button>
          <button className={styles.primaryButton}><Sparkles /> Start strategy session</button>
        </div>
      </header>
      <section className={styles.strategyHero}>
        <div>
          <span className={styles.kicker}>Alex’s strategy layer</span>
          <h2>Give every AI employee the same direction, standards and boundaries.</h2>
          <p>This context is inherited by every goal, plan, task and review. Alex owns it; agents can propose updates, never silently change it.</p>
        </div>
        <div className={styles.strategyScore}>
          <strong>88%</strong><span>Context readiness</span>
          <div className={styles.progress}><span style={{ width: "88%" }} /></div>
          <small>1 section needs review</small>
        </div>
      </section>
      <section className={styles.strategyLayout}>
        <div className={styles.strategyMain}>
          <div className={styles.sectionTitle}>
            <div><h2>Operating context</h2><p>Shared instructions that shape planning and execution.</p></div>
            <button className={styles.secondaryButton}><Plus /> Add context</button>
          </div>
          <div className={styles.contextCardGrid}>
            {contextSections.map((item, index) => (
              <button className={styles.contextCard} key={item.label}>
                <div><span>{String(index + 1).padStart(2, "0")}</span><Status value={item.state === "Complete" ? "Approved" : "Waiting"} /></div>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
                <footer><span>Updated {index < 3 ? "today" : "8 days ago"}</span><ChevronRight /></footer>
              </button>
            ))}
          </div>
        </div>
        <aside className={styles.strategyRail}>
          <section className={styles.panel}>
            <div className={styles.panelHeader}><h2>Decision rights</h2><ShieldCheck /></div>
            <div className={styles.rightsList}>
              <div><UserRound /><p><strong>Alex decides</strong><span>Strategy, priorities, taste, approval</span></p></div>
              <div><BrainCircuit /><p><strong>Strategy Partner proposes</strong><span>Plans, team composition, tradeoffs</span></p></div>
              <div><Bot /><p><strong>Specialists execute</strong><span>Approved tasks using assigned skills</span></p></div>
            </div>
          </section>
          <section className={styles.panel}>
            <div className={styles.panelHeader}><h2>Review cadence</h2><CalendarDays /></div>
            <div className={styles.cadenceList}>
              <span><strong>Daily</strong> Decision brief</span>
              <span><strong>Friday</strong> Quality review</span>
              <span><strong>Monthly</strong> Strategy refresh</span>
            </div>
          </section>
          <section className={styles.panel}>
            <div className={styles.panelHeader}><h2>Proposed update</h2><Sparkles /></div>
            <p className={styles.railCopy}>Add “show the evidence behind every recommendation” to the design quality bar.</p>
            <div className={styles.inlineActions}><button className={styles.secondaryButton}>Review</button><button className={styles.primaryButton}>Approve</button></div>
          </section>
        </aside>
      </section>
    </main>
  );
}

const workRows = [
  { id: "AW-24", title: "Synthesize customer signal interviews", parent: "Improve customer signal discovery", owner: "Research Assistant", status: "In progress", priority: "High", updated: "12m ago" },
  { id: "AW-25", title: "Compare signal workspace directions", parent: "Improve customer signal discovery", owner: "Product Designer", status: "Waiting", priority: "High", updated: "31m ago" },
  { id: "AW-26", title: "Build direction B prototype", parent: "Prototype — Build and evaluate concepts", owner: "Prototype Builder", status: "Not started", priority: "Medium", updated: "1h ago" },
  { id: "AW-27", title: "Review evidence traceability", parent: "Validation — Test and measure", owner: "Independent Reviewer", status: "Not started", priority: "Medium", updated: "2h ago" },
  { id: "AW-28", title: "Define product signal taxonomy", parent: "Research — Understand users and signals", owner: "Strategy Partner", status: "Approved", priority: "Low", updated: "Yesterday" },
];

function WorkScreen({
  tab,
  setTab,
  selectedTask,
  setSelectedTask,
  onToast,
}: {
  tab: WorkTab;
  setTab: (tab: WorkTab) => void;
  selectedTask: string | null;
  setSelectedTask: (task: string | null) => void;
  onToast: (message: string) => void;
}) {
  const selected = workRows.find((item) => item.id === selectedTask) ?? workRows[0];
  return (
    <main className={styles.workScreen}>
      <header className={styles.workHeader}>
        <div><span className={styles.eyebrow}>Agent execution</span><h1>Work</h1></div>
        <button className={styles.primaryButton} onClick={() => onToast("New task composer opened.")}><Plus /> New task</button>
      </header>
      <div className={styles.segmentedTabs}>
        {(["Tasks", "Routines", "Runs"] as WorkTab[]).map((name) => (
          <button key={name} className={tab === name ? styles.segmentedActive : ""} onClick={() => setTab(name)}>
            {name}{name === "Tasks" && <span>12</span>}
          </button>
        ))}
      </div>
      <div className={styles.workToolbar}>
        <label><Search /><input placeholder={`Search ${tab.toLowerCase()}…`} /></label>
        <button className={styles.secondaryButton}><ListChecks /> List</button>
        <button className={styles.secondaryButton}><Filter /> Filter</button>
        <button className={styles.secondaryButton}><SlidersHorizontal /> Columns</button>
        <button className={styles.secondaryButton}><Layers3 /> Group</button>
      </div>
      {tab === "Tasks" && (
        <div className={styles.workSplit}>
          <section className={styles.workTable}>
            <div className={styles.workTableHead}><span>Task</span><span>Assignee</span><span>Status</span><span>Priority</span><span>Updated</span></div>
            {workRows.map((item, index) => (
              <button
                key={item.id}
                className={`${styles.workTableRow} ${selected.id === item.id ? styles.workTableRowActive : ""}`}
                onClick={() => setSelectedTask(item.id)}
              >
                <span className={styles.workTitle}><i>{index < 2 ? <ChevronDown /> : <ChevronRight />}</i><b>{item.id}</b><strong>{item.title}</strong><small>{item.parent}</small></span>
                <span className={styles.ownerChip}>{item.owner}</span>
                <Status value={item.status} />
                <span className={styles.priorityLabel}><i className={item.priority === "High" ? styles.priorityHigh : styles.priorityNormal} />{item.priority}</span>
                <time>{item.updated}</time>
              </button>
            ))}
          </section>
          <aside className={styles.taskInspector}>
            <header>
              <div><span className={styles.kicker}>{selected.id} · {selected.priority} priority</span><h2>{selected.title}</h2></div>
              <IconButton label="Close task details" onClick={() => setSelectedTask(null)}><X /></IconButton>
            </header>
            <div className={styles.taskInspectorBody}>
              <section><h3>Description</h3><p>Turn six interviews and existing analytics into a concise evidence map that the product team can use to select a prototype direction.</p></section>
              <section>
                <h3>Acceptance criteria</h3>
                <label><input type="checkbox" defaultChecked /> Sources linked to each finding</label>
                <label><input type="checkbox" defaultChecked /> Conflicting signals called out</label>
                <label><input type="checkbox" /> Top opportunities scored</label>
                <label><input type="checkbox" /> Independent review complete</label>
              </section>
              <section className={styles.taskProperties}>
                <h3>Properties</h3>
                <dl><dt>Goal</dt><dd>Improve customer signal discovery</dd><dt>Assignee</dt><dd>{selected.owner}</dd><dt>Reviewer</dt><dd>Independent Reviewer</dd><dt>Skill</dt><dd>research-to-opportunity</dd><dt>Runtime</dt><dd>Claude · Simulated</dd></dl>
              </section>
              <section><h3>Subtasks</h3><button className={styles.subtaskRow}><CheckCircle2 /><span><strong>Interview synthesis</strong><small>Complete</small></span></button><button className={styles.subtaskRow}><CircleDot /><span><strong>Evidence map</strong><small>In progress</small></span></button><button className={styles.subtaskRow}><Circle /><span><strong>Opportunity scoring</strong><small>Waiting</small></span></button></section>
              <section><h3>Latest update</h3><div className={styles.agentUpdate}><div className={styles.avatarIcon}><Search /></div><p><strong>Research Assistant</strong><span>Mapped 18 signals across four themes. Two contradictions need Alex’s judgment.</span><small>12 minutes ago</small></p></div></section>
            </div>
            <footer><button className={styles.secondaryButton} onClick={() => onToast("Agent wake queued in simulation.")}><Zap /> Wake agent</button><button className={styles.primaryButton} onClick={() => onToast("Task moved to review.")}><ClipboardCheck /> Send to review</button></footer>
          </aside>
        </div>
      )}
      {tab === "Routines" && (
        <section className={styles.routineGrid}>
          {[
            ["Morning decision brief", "Weekdays · 06:30", "Strategy Partner", "Next: tomorrow", "Active"],
            ["Customer & product signal scan", "Tue + Thu · 07:00", "Research Assistant", "Next: Tuesday", "Active"],
            ["Design quality review", "Friday · 16:00", "Independent Reviewer", "Next: Friday", "Active"],
            ["Artifact & learning synthesis", "Friday · 17:30", "Strategy Partner", "Paused", "Paused"],
          ].map(([name, schedule, owner, next, state]) => (
            <article className={styles.routineCard} key={name}>
              <header><div className={styles.squareIcon}><Clock3 /></div><Status value={state === "Active" ? "Working" : "Waiting"} /></header>
              <h2>{name}</h2><p>{schedule}</p>
              <dl><dt>Owner</dt><dd>{owner}</dd><dt>Creates</dt><dd>Task + auditable run</dd><dt>Next run</dt><dd>{next}</dd></dl>
              <footer><button className={styles.secondaryButton}>Edit</button><button className={styles.secondaryButton}><Play /> Run now</button></footer>
            </article>
          ))}
          <button className={styles.addRoutineCard}><Plus /><strong>Create routine</strong><span>Schedule repeatable, auditable work</span></button>
        </section>
      )}
      {tab === "Runs" && (
        <section className={styles.runTable}>
          <div className={styles.runTableHead}><span>Run</span><span>AI employee</span><span>Trigger</span><span>Result</span><span>Duration</span><span>Started</span></div>
          {[
            ["RUN-1842", "Research Assistant", "Task assigned", "Succeeded", "8m 12s", "10:14"],
            ["RUN-1841", "Strategy Partner", "Morning routine", "Succeeded", "3m 44s", "06:30"],
            ["RUN-1840", "Prototype Builder", "Task dependency", "Waiting for approval", "12m 08s", "Yesterday"],
            ["RUN-1839", "Independent Reviewer", "Artifact submitted", "Recovered", "5m 31s", "Yesterday"],
            ["RUN-1838", "Product Designer", "Manual wake", "Succeeded", "11m 19s", "Yesterday"],
          ].map((row) => (
            <button className={styles.runTableRow} key={row[0]}>
              <span><GitBranch /><strong>{row[0]}</strong></span><span>{row[1]}</span><span>{row[2]}</span><Status value={row[3] === "Succeeded" ? "Approved" : row[3] === "Recovered" ? "Recovered" : "Waiting"} /><span>{row[4]}</span><time>{row[5]}</time>
            </button>
          ))}
        </section>
      )}
    </main>
  );
}

function LibraryScreen({ tab, setTab }: { tab: LibraryTab; setTab: (tab: LibraryTab) => void }) {
  const content: Record<LibraryTab, Array<[string, string, string, string]>> = {
    Skills: [
      ["research-to-opportunity", "Research Assistant", "Evidence → opportunity brief", "Used 14 times"],
      ["prototype-from-approved-flow", "Prototype Builder", "Approved flow → working prototype", "Used 9 times"],
      ["design-quality-review", "Independent Reviewer", "Artifact → scored review + risks", "Used 11 times"],
      ["product-update-to-brief", "Strategy Partner", "Project change → decision brief", "Used 7 times"],
    ],
    Context: [
      ["Product strategy", "Company source", "Vision, principles, priorities", "Updated today"],
      ["Alex’s quality bar", "Personal source", "Taste, standards, non-delegables", "Review due"],
      ["Customer research", "Project source", "Interviews, signals, evidence", "24 sources"],
      ["Algolia design system", "Team source", "Components, patterns, accessibility", "Synced"],
    ],
    Tools: [
      ["Figma", "Design", "Read files · create drafts", "Connected"],
      ["GitHub sandbox", "Build", "Branch + draft PR only", "Connected"],
      ["Internal knowledge", "Research", "Approved workspace sources", "Connected"],
      ["Claude + Codex", "Runtime", "Simulated model assignment", "Prototype"],
    ],
    Templates: [
      ["Staff designer workforce", "Team template", "Strategy, research, design, build, QA", "Current"],
      ["Customer signal discovery", "Workflow template", "Research → synthesis → decision", "Reusable"],
      ["Prototype delivery", "Workflow template", "Brief → design → build → QA", "Reusable"],
      ["Weekly product review", "Routine template", "Evidence → review → priorities", "Reusable"],
    ],
  };
  return (
    <main className={styles.scrollArea}>
      <header className={styles.pageHeader}>
        <div><span className={styles.eyebrow}>Reusable company knowledge</span><h1>Library</h1></div>
        <button className={styles.primaryButton}><Plus /> Add {tab.slice(0, -1).toLowerCase()}</button>
      </header>
      <div className={styles.libraryLayout}>
        <aside className={styles.libraryNav}>
          {(["Skills", "Context", "Tools", "Templates"] as LibraryTab[]).map((name) => (
            <button key={name} className={tab === name ? styles.libraryNavActive : ""} onClick={() => setTab(name)}>
              {name === "Skills" ? <Command /> : name === "Context" ? <BookOpen /> : name === "Tools" ? <Link2 /> : <Layers3 />}
              <span><strong>{name}</strong><small>{content[name].length} available</small></span><ChevronRight />
            </button>
          ))}
        </aside>
        <section className={styles.libraryContent}>
          <div className={styles.libraryToolbar}><label><Search /><input placeholder={`Search ${tab.toLowerCase()}…`} /></label><button className={styles.secondaryButton}><Filter /> Filter</button></div>
          <div className={styles.libraryGrid}>
            {content[tab].map(([name, owner, description, meta]) => (
              <article className={styles.libraryCard} key={name}>
                <header><div className={styles.squareIcon}>{tab === "Skills" ? <Command /> : tab === "Context" ? <FileText /> : tab === "Tools" ? <Link2 /> : <Layers3 />}</div><MoreHorizontal /></header>
                <h2>{name}</h2><p>{description}</p>
                <footer><span>{owner}</span><strong>{meta}</strong></footer>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ArtifactsScreen() {
  const [selected, setSelected] = useState("Customer signal discovery — research plan");
  const artifacts = [
    ["Customer signal discovery — research plan", "Research brief", "Strategy Partner", "Ready for review", "Today 10:24"],
    ["Opportunity scoring model v0.3", "Analysis", "Research Assistant", "Draft", "Today 09:41"],
    ["Prototype directions — comparison", "Design brief", "Product Designer", "Decision needed", "Yesterday 17:18"],
    ["Signal workspace — interactive prototype", "Prototype", "Prototype Builder", "In progress", "Yesterday 15:46"],
    ["Evidence traceability review", "QA report", "Independent Reviewer", "Approved", "22 Jul 16:10"],
  ];
  const current = artifacts.find((item) => item[0] === selected) ?? artifacts[0];
  return (
    <main className={styles.workScreen}>
      <header className={styles.workHeader}><div><span className={styles.eyebrow}>Evidence and output</span><h1>Artifacts</h1></div><button className={styles.primaryButton}><Plus /> New artifact</button></header>
      <div className={styles.workToolbar}><label><Search /><input placeholder="Search artifacts…" /></label><button className={styles.secondaryButton}><Filter /> Type</button><button className={styles.secondaryButton}><Layers3 /> Group by goal</button></div>
      <div className={styles.artifactSplit}>
        <section className={styles.artifactList}>
          <div className={styles.artifactListHead}><span>Artifact</span><span>Author</span><span>Status</span><span>Updated</span></div>
          {artifacts.map((item) => (
            <button key={item[0]} className={`${styles.artifactListRow} ${selected === item[0] ? styles.workTableRowActive : ""}`} onClick={() => setSelected(item[0])}>
              <span><FileText /><div><strong>{item[0]}</strong><small>{item[1]}</small></div></span><span>{item[2]}</span><Status value={item[3] === "Approved" ? "Approved" : item[3] === "In progress" ? "In progress" : "Waiting"} /><time>{item[4]}</time>
            </button>
          ))}
        </section>
        <aside className={styles.artifactPreview}>
          <header><div><span className={styles.kicker}>{current[1]} · v1.4</span><h2>{current[0]}</h2></div><MoreHorizontal /></header>
          <div className={styles.documentPreview}>
            <span>Prepared by {current[2]} · Sources: 12</span>
            <h3>Recommendation</h3><p>Validate the unified signal workspace because it reduces context switching and makes evidence visible at the moment of decision.</p>
            <h3>Observed signals</h3><ul><li>Teams assemble product context manually across five tools.</li><li>Decision rationale is rarely attached to the resulting work.</li><li>Strong demand for traceable recommendations, not more dashboards.</li></ul>
            <h3>Assumptions to validate</h3><p>Users will trade breadth of signals for stronger prioritisation and clearer evidence.</p>
          </div>
          <div className={styles.artifactEvidence}><ShieldCheck /><p><strong>Review status</strong><span>Independent Reviewer checked source coverage and assumption labelling.</span></p></div>
          <footer><button className={styles.secondaryButton}><Eye /> Open full artifact</button><button className={styles.primaryButton}><ClipboardCheck /> Review</button></footer>
        </aside>
      </div>
    </main>
  );
}

function InboxScreen({ onToast }: { onToast: (message: string) => void }) {
  const [filter, setFilter] = useState("Mine");
  const [selected, setSelected] = useState(0);
  const items = [
    { type: "Decision", title: "Choose primary prototype direction", source: "Product Designer", why: "Direction choice blocks the prototype and evaluation plan.", action: "Approve direction B", time: "12m ago" },
    { type: "Review", title: "Customer signal research plan", source: "Strategy Partner", why: "Research scope is ready and within approved constraints.", action: "Approve plan", time: "34m ago" },
    { type: "Blocked", title: "Prototype Builder needs component access", source: "Prototype Builder", why: "The assigned design-system source is read-only in the sandbox.", action: "Change tool permission", time: "1h ago" },
    { type: "Recovered", title: "Evidence review resumed", source: "Independent Reviewer", why: "A missing source link was repaired automatically after one retry.", action: "Acknowledge", time: "Yesterday" },
  ];
  const current = items[selected];
  return (
    <main className={styles.workScreen}>
      <header className={styles.workHeader}><div><span className={styles.eyebrow}>Human attention queue</span><h1>Inbox</h1></div><button className={styles.secondaryButton}>Mark all as read</button></header>
      <div className={styles.inboxTabs}>{["Mine", "Unread", "Blocked", "All"].map((name) => <button key={name} className={filter === name ? styles.segmentedActive : ""} onClick={() => setFilter(name)}>{name}{name === "Mine" && <span>3</span>}</button>)}</div>
      <div className={styles.inboxLayout}>
        <section className={styles.inboxList}>
          <label className={styles.inboxSearch}><Search /><input placeholder="Search inbox…" /></label>
          {items.map((item, index) => (
            <button key={item.title} className={`${styles.inboxItem} ${selected === index ? styles.inboxItemActive : ""}`} onClick={() => setSelected(index)}>
              <div className={styles.inboxTypeIcon}>{item.type === "Decision" ? <Sparkles /> : item.type === "Review" ? <ClipboardCheck /> : item.type === "Blocked" ? <LockKeyhole /> : <CheckCircle2 />}</div>
              <div><span>{item.type} · {item.source}</span><strong>{item.title}</strong><small>{item.why}</small></div><time>{item.time}</time>
            </button>
          ))}
        </section>
        <aside className={styles.inboxDetail}>
          <header><span className={styles.kicker}>{current.type} brief</span><h2>{current.title}</h2><p>Requested by {current.source} · {current.time}</p></header>
          <section><h3>What happened</h3><p>{current.why}</p></section>
          <section><h3>Recommendation</h3><div className={styles.recommendation}><strong>I suggest</strong><span>{current.action}. This keeps the goal on schedule without expanding scope.</span></div></section>
          <section><h3>Evidence</h3><ul><li>3 tested workflow directions</li><li>6 interview signals</li><li>Design-system feasibility checked</li></ul></section>
          <section><h3>If you approve</h3><p>One dependent task resumes. No external publishing, merge, deploy or spend will occur.</p></section>
          <footer><button className={styles.secondaryButton} onClick={() => onToast("Feedback composer opened.")}>Request changes</button><button className={styles.primaryButton} onClick={() => onToast(`${current.action} recorded.`)}>{current.action}</button></footer>
        </aside>
      </div>
    </main>
  );
}

function ActivityScreen() {
  const groups = [
    ["Today", [
      ["AM", "Alex Morgan", "approved", "the customer signal research plan", "10:38"],
      ["RA", "Research Assistant", "created", "Opportunity scoring model v0.3", "10:24"],
      ["SY", "System", "recovered", "Independent Reviewer run after missing source repair", "09:58"],
      ["SP", "Strategy Partner", "proposed", "two new execution tasks", "09:41"],
    ]],
    ["Yesterday", [
      ["PD", "Product Designer", "submitted", "Prototype directions — comparison", "17:18"],
      ["PB", "Prototype Builder", "completed", "Signal workspace interaction shell", "15:46"],
      ["AM", "Alex Morgan", "updated", "Taste & quality bar", "11:12"],
    ]],
  ] as const;
  return (
    <main className={styles.scrollArea}>
      <header className={styles.pageHeader}><div><span className={styles.eyebrow}>Provenance and accountability</span><h1>Activity</h1></div><div className={styles.headerActions}><button className={styles.secondaryButton}><Filter /> All types</button><button className={styles.secondaryButton}><Users /> All actors</button></div></header>
      <section className={styles.activityLayout}>
        <div className={styles.activityFeed}>
          {groups.map(([day, entries]) => (
            <div className={styles.activityGroup} key={day}>
              <h2>{day}</h2>
              {entries.map(([initials, actor, action, object, time]) => (
                <button className={styles.activityEvent} key={`${actor}-${object}`}>
                  <div className={styles.activityAvatar}>{initials}</div>
                  <p><strong>{actor}</strong><span>{action}</span><b>{object}</b><small>Goal: Improve customer signal discovery · Origin: approved plan</small></p>
                  <time>{time}</time><ChevronRight />
                </button>
              ))}
            </div>
          ))}
        </div>
        <aside className={styles.activityRail}>
          <section className={styles.panel}><div className={styles.panelHeader}><h2>Trace coverage</h2><ShieldCheck /></div><div className={styles.traceScore}><strong>100%</strong><span>All current work has an origin, owner and linked goal.</span></div></section>
          <section className={styles.panel}><div className={styles.panelHeader}><h2>Event types</h2><Activity /></div><div className={styles.eventLegend}><span><i /> Human decision <b>8</b></span><span><i /> Agent action <b>24</b></span><span><i /> System event <b>11</b></span><span><i /> Recovery <b>2</b></span></div></section>
        </aside>
      </section>
    </main>
  );
}

function SettingsScreen({ onOpenOnboarding }: { onOpenOnboarding: () => void }) {
  const [simulation, setSimulation] = useState(true);
  return (
    <main className={styles.scrollArea}>
      <header className={styles.pageHeader}><div><span className={styles.eyebrow}>Workspace control</span><h1>Settings</h1></div><button className={styles.primaryButton}>Save changes</button></header>
      <div className={styles.settingsLayout}>
        <aside className={styles.settingsNav}>{["Profile & onboarding", "Models & runtimes", "Autonomy", "Notifications", "Resource guardrails", "Disclosure"].map((item, index) => <button key={item} className={index === 0 ? styles.settingsNavActive : ""}>{item}<ChevronRight /></button>)}</aside>
        <section className={styles.settingsContent}>
          <section className={styles.settingsSection}>
            <header><div><h2>Profile & onboarding</h2><p>The employee context that anchors this personal workforce.</p></div><button className={styles.secondaryButton} onClick={onOpenOnboarding}>Replay onboarding</button></header>
            <div className={styles.settingsProfile}><div className={styles.largeAvatar}>AM</div><div><strong>Alex Morgan</strong><span>Staff Product Designer · Algolia</span><small>Workspace created 24 Jul 2026</small></div><button className={styles.secondaryButton}>Edit profile</button></div>
          </section>
          <section className={styles.settingsSection}>
            <header><div><h2>Models & runtimes</h2><p>Assign the right reasoning and execution runtime by role.</p></div></header>
            <div className={styles.settingsRows}>
              <div><span><BrainCircuit /><p><strong>Strategy Partner</strong><small>Planning and orchestration</small></p></span><button>Frontier reasoning model <ChevronDown /></button></div>
              <div><span><Code2 /><p><strong>Prototype Builder</strong><small>Implementation lane</small></p></span><button>Codex · sandboxed <ChevronDown /></button></div>
              <div><span><Bot /><p><strong>Specialist agents</strong><small>Research, design and review</small></p></span><button>Claude · simulated <ChevronDown /></button></div>
            </div>
          </section>
          <section className={styles.settingsSection}>
            <header><div><h2>Autonomy defaults</h2><p>What AI employees may do before asking Alex.</p></div></header>
            <div className={styles.autonomyGrid}>
              {["Create draft tasks and artifacts", "Run approved skills", "Create branches and draft PRs", "Change strategy or priorities", "Publish, merge or deploy", "Spend or contact customers"].map((item, index) => <label key={item}><span><strong>{item}</strong><small>{index < 3 ? "Allowed within approved plan" : "Always requires Alex"}</small></span><input type="checkbox" defaultChecked={index < 3} disabled={index >= 3} /></label>)}
            </div>
          </section>
          <section className={styles.settingsSection}>
            <header><div><h2>Prototype disclosure</h2><p>Keep the difference between simulated and real execution unambiguous.</p></div></header>
            <label className={styles.disclosureToggle}><span><Cpu /><p><strong>Simulation mode</strong><small>All model calls, tool actions and autonomous work are represented with mock data.</small></p></span><input type="checkbox" checked={simulation} onChange={() => setSimulation((value) => !value)} /></label>
          </section>
          <section className={styles.settingsSection}>
            <header><div><h2>AI resource guardrails</h2><p>Control runtime use without scoring the human employee.</p></div></header>
            <div className={styles.resourceStats}><span><strong>40</strong><small>Runs / day</small></span><span><strong>2</strong><small>Concurrent agents</small></span><span><strong>1</strong><small>Automatic retry</small></span><span><strong>30m</strong><small>Maximum run</small></span></div>
          </section>
        </section>
      </div>
    </main>
  );
}

const onboardingSteps = [
  { label: "Welcome", title: "Meet your personal AI workforce", description: "You remain the orchestrator. AI employees help execute your strategy through approved skills, tools and context." },
  { label: "Role & mission", title: "Start with Alex’s role and mission", description: "The Strategy Partner uses this to clarify outcomes and propose the right specialist team." },
  { label: "Working context", title: "Teach the team how Alex works", description: "Responsibilities, taste, guardrails and review cadence become durable context for every run." },
  { label: "Strategy Partner", title: "Configure the orchestration layer", description: "The strongest reasoning model clarifies intent, recommends specialists and converts approved strategy into plans." },
  { label: "Environment", title: "Check the workspace before work begins", description: "Tools, sources and runtimes are tested before any task can be assigned." },
  { label: "Strategy", title: "Review the proposed operating strategy", description: "Alex approves the outcome, success measures, constraints and non-delegables." },
  { label: "AI team", title: "Approve the specialist team", description: "Each AI employee has a narrow mandate, assigned skills, tools and approval boundaries." },
  { label: "First plan", title: "Approve the first execution plan", description: "The team can begin only after the environment, strategy, team and task plan are approved." },
] as const;

function OnboardingFlow({
  step,
  setStep,
  onClose,
  onComplete,
}: {
  step: number;
  setStep: (step: number) => void;
  onClose: () => void;
  onComplete: () => void;
}) {
  const current = onboardingSteps[step];
  return (
    <div className={styles.onboardingOverlay}>
      <aside className={styles.onboardingRail}>
        <div className={styles.onboardingBrand}><div className={styles.brandMark}>A</div><span>Algolia AI Workforce</span></div>
        <div className={styles.onboardingProgress}>
          {onboardingSteps.map((item, index) => (
            <button key={item.label} className={`${index === step ? styles.onboardingStepActive : ""} ${index < step ? styles.onboardingStepDone : ""}`} onClick={() => index <= step && setStep(index)}>
              <i>{index < step ? <Check /> : index + 1}</i><span><strong>{item.label}</strong><small>{index < step ? "Approved" : index === step ? "In progress" : "Locked"}</small></span>
            </button>
          ))}
        </div>
        <div className={styles.onboardingPromise}><ShieldCheck /><p><strong>Human control by default</strong><span>No autonomous work starts before Alex approves the environment, strategy, team and plan.</span></p></div>
      </aside>
      <main className={styles.onboardingMain}>
        <header><div><span>Step {step + 1} of {onboardingSteps.length}</span><strong>Employee setup · Alex Morgan</strong></div><IconButton label="Close onboarding" onClick={onClose}><X /></IconButton></header>
        <section className={styles.onboardingContent}>
          <div className={styles.onboardingIntro}><span className={styles.eyebrow}>{current.label}</span><h1>{current.title}</h1><p>{current.description}</p></div>
          {step === 0 && (
            <div className={styles.onboardingWelcome}>
              <div className={styles.welcomeHuman}><UserRound /><p><strong>Alex owns</strong><span>Strategy · priorities · taste · approval</span></p></div>
              <ArrowRight />
              <div className={styles.welcomeAgent}><BrainCircuit /><p><strong>AI team executes</strong><span>Plans · skills · tools · auditable work</span></p></div>
              <div className={styles.onboardingDisclosure}><Cpu /><p><strong>Prototype mode</strong><span>This demo uses mock data. All model calls and tool actions are simulated.</span></p></div>
            </div>
          )}
          {step === 1 && (
            <div className={styles.onboardingForm}>
              <div className={styles.profileSummary}><div className={styles.largeAvatar}>AM</div><p><strong>Alex Morgan</strong><span>Staff Product Designer · Algolia</span></p><CheckCircle2 /></div>
              <label><span>Role template</span><button>Staff Product Designer <ChevronDown /></button></label>
              <label><span>Mission</span><textarea defaultValue="Turn customer and product signals into confident product decisions, then direct a specialist AI team to research, design, prototype and review the work." /></label>
              <div className={styles.choiceCards}><button className={styles.choiceActive}><CheckCircle2 /><span><strong>I know my mission</strong><small>Use the statement above</small></span></button><button><Sparkles /><span><strong>Help me clarify it</strong><small>Start a guided strategy session</small></span></button></div>
            </div>
          )}
          {step === 2 && (
            <div className={styles.contextSetupGrid}>
              {[
                ["Responsibilities", "Product direction · workflow design · prototyping"],
                ["Taste & quality", "Evidence-led, useful density, clear hierarchy"],
                ["Guardrails", "No PII · no production writes · human release gate"],
                ["Review cadence", "Daily decisions · Friday quality review"],
                ["Non-delegables", "Problem choice · strategy · final approval"],
                ["Stakeholders", "Product · design · research · customer teams"],
              ].map(([name, value]) => <button key={name}><div><strong>{name}</strong><CheckCircle2 /></div><span>{value}</span></button>)}
            </div>
          )}
          {step === 3 && (
            <div className={styles.partnerSetup}>
              <div className={styles.partnerCard}><div className={styles.partnerIcon}><BrainCircuit /></div><div><span>Orchestration layer</span><h2>Strategy Partner</h2><p>Clarifies goals, proposes the specialist team, creates plans, coordinates work and prepares decision briefs.</p></div><Status value="Approved" /></div>
              <div className={styles.partnerSettings}><div><span>Reasoning model</span><button>Frontier model <ChevronDown /></button></div><div><span>Autonomy</span><button>Propose and coordinate <ChevronDown /></button></div><div><span>Reports to</span><button>Alex Morgan <ChevronDown /></button></div></div>
              <div className={styles.boundaryNote}><ShieldCheck /><p><strong>Boundary</strong><span>The Strategy Partner can recommend strategy, but Alex owns strategy and taste.</span></p></div>
            </div>
          )}
          {step === 4 && (
            <div className={styles.healthCheck}>
              {[
                ["Strategy runtime", "Frontier reasoning model", "Ready"],
                ["Builder runtime", "Codex · local sandbox", "Ready"],
                ["Design source", "Figma · draft access", "Ready"],
                ["Code source", "GitHub · branch-only", "Ready"],
                ["Company knowledge", "Approved mock workspace", "Ready"],
              ].map(([name, detail, state]) => <div key={name}><div className={styles.healthIcon}><Check /></div><p><strong>{name}</strong><span>{detail}</span></p><b>{state}</b></div>)}
              <div className={styles.healthSummary}><CheckCircle2 /><p><strong>Environment healthy</strong><span>5 checks passed. Production actions remain unavailable.</span></p></div>
            </div>
          )}
          {step === 5 && (
            <div className={styles.strategyProposal}>
              <header><div className={styles.squareIcon}><Sparkles /></div><div><span>Strategy Partner proposal</span><h2>Improve customer signal discovery</h2></div><Status value="Waiting" /></header>
              <div className={styles.proposalGrid}><section><h3>Outcome</h3><p>Customers and product teams find relevant signals faster and act with clear evidence.</p></section><section><h3>Success measures</h3><ul><li>+20% search success</li><li>−15% time to signal</li><li>≥ 80 internal CSAT</li></ul></section><section><h3>Constraints</h3><ul><li>Use existing Algolia stack</li><li>No PII in model context</li><li>Prototype before integration</li></ul></section><section><h3>Alex decides</h3><p>Opportunity, product direction, quality bar and release.</p></section></div>
            </div>
          )}
          {step === 6 && (
            <div className={styles.teamProposal}>
              {[
                ["Research Assistant", Search, "Evidence gathering and synthesis", "research-to-opportunity"],
                ["Junior Product Designer", PenTool, "Flows, states and exploration", "approved-brief-to-flow"],
                ["Prototype Builder", Code2, "Functional prototypes on branches", "prototype-from-approved-flow"],
                ["Design QA Reviewer", ShieldCheck, "Independent quality and risk review", "design-quality-review"],
              ].map(([name, AgentIcon, mandate, skill]) => {
                const Icon = AgentIcon as typeof Bot;
                return <article key={name as string}><div className={styles.agentIcon}><Icon /></div><div><h3>{name as string}</h3><p>{mandate as string}</p><span>{skill as string}</span></div><CheckCircle2 /></article>;
              })}
            </div>
          )}
          {step === 7 && (
            <div className={styles.firstPlan}>
              <div className={styles.planApprovalSummary}><CheckCircle2 /><p><strong>All prerequisites approved</strong><span>Environment · strategy · specialist team</span></p></div>
              {[
                ["1", "Validate customer and product signals", "Research Assistant", "2 days"],
                ["2", "Synthesize opportunity directions", "Strategy Partner", "1 day"],
                ["3", "Design the primary workflow", "Junior Product Designer", "3 days"],
                ["4", "Build the interactive prototype", "Prototype Builder", "3 days"],
                ["5", "Run independent design QA", "Design QA Reviewer", "1 day"],
              ].map(([number, title, owner, duration]) => <div className={styles.firstPlanRow} key={number}><b>{number}</b><p><strong>{title}</strong><span>{owner}</span></p><time>{duration}</time><CheckCircle2 /></div>)}
              <div className={styles.planGate}><LockKeyhole /><p><strong>Final gate</strong><span>Activating creates the tasks and simulated runs. Publishing, merging, deployment, spend and customer contact still require Alex.</span></p></div>
            </div>
          )}
        </section>
        <footer className={styles.onboardingFooter}>
          <button className={styles.secondaryButton} disabled={step === 0} onClick={() => setStep(Math.max(0, step - 1))}>Back</button>
          <span><LockKeyhole /> Nothing runs until setup is approved</span>
          {step < onboardingSteps.length - 1
            ? <button className={styles.primaryButton} onClick={() => setStep(step + 1)}>{step >= 4 ? "Approve & continue" : "Continue"} <ArrowRight /></button>
            : <button className={styles.primaryButton} onClick={onComplete}><Play /> Approve plan & activate workspace</button>}
        </footer>
      </main>
    </div>
  );
}

function PlaceholderScreen({ view }: { view: View }) {
  const label = navigation.find((item) => item.id === view)?.label ?? "Workspace";
  return (
    <main className={styles.placeholderScreen}>
      <div className={styles.emptyIcon}><FileCode2 /></div>
      <span className={styles.eyebrow}>Algolia AI Workforce</span>
      <h1>{label}</h1>
      <p>This area is represented in the information architecture. The prototype currently brings the three core orchestration views to life.</p>
    </main>
  );
}

export function WorkforcePrototype() {
  const [view, setView] = useState<View>("today");
  const [decisions, setDecisions] = useState<Record<DecisionId, boolean>>({
    "research-plan": false,
    "prototype-direction": false,
  });
  const [paused, setPaused] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [goalTab, setGoalTab] = useState("Plan");
  const [expanded, setExpanded] = useState(new Set(["1", "2", "3", "4"]));
  const [proposalApproved, setProposalApproved] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<AgentId>("builder");
  const [inspectorOpen, setInspectorOpen] = useState(true);
  const [workTab, setWorkTab] = useState<WorkTab>("Tasks");
  const [selectedTask, setSelectedTask] = useState<string | null>("AW-24");
  const [libraryTab, setLibraryTab] = useState<LibraryTab>("Skills");
  const [onboardingOpen, setOnboardingOpen] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [reviewing, setReviewing] = useState<DecisionId | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2800);
  };

  const pendingDecision = useMemo(
    () =>
      reviewing === "research-plan"
        ? {
            title: "Approve research plan",
            text: "Validate the three strongest customer-signal opportunities with competitor evidence and six user interviews.",
          }
        : {
            title: "Choose prototype direction",
            text: "Direction B unifies scattered signals into one workspace and makes recommendations visible at the decision point.",
          },
    [reviewing],
  );

  const approveDecision = (id: DecisionId) => {
    setDecisions((current) => ({ ...current, [id]: true }));
    setReviewing(null);
    showToast("Decision approved. The team has resumed the dependent work.");
  };

  const toggleExpanded = (id: string) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className={styles.appShell}>
      <Sidebar view={view} onNavigate={setView} paused={paused} onTogglePaused={() => setPaused((value) => !value)} onSearch={() => setSearchOpen(true)} />
      <div className={styles.workspace}>
        {view === "today" && (
          <TodayScreen
            decisions={decisions}
            onDecision={approveDecision}
            onReview={setReviewing}
            onViewTeam={() => setView("team")}
            onViewInbox={() => setView("inbox")}
            onOpenGoal={() => setView("goals")}
            onViewArtifacts={() => setView("artifacts")}
            onViewActivity={() => setView("activity")}
            paused={paused}
          />
        )}
        {view === "goals" && (
          <GoalScreen
            tab={goalTab}
            setTab={setGoalTab}
            expanded={expanded}
            toggleExpanded={toggleExpanded}
            proposalApproved={proposalApproved}
            onApproveProposal={() => {
              setProposalApproved(true);
              showToast("Plan approved. Two new tasks were added.");
            }}
          />
        )}
        {view === "strategy" && <StrategyScreen onOpenOnboarding={() => { setOnboardingStep(0); setOnboardingOpen(true); }} />}
        {view === "work" && (
          <WorkScreen
            tab={workTab}
            setTab={setWorkTab}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            onToast={showToast}
          />
        )}
        {view === "team" && (
          <TeamScreen
            selectedAgent={selectedAgent}
            setSelectedAgent={setSelectedAgent}
            inspectorOpen={inspectorOpen}
            setInspectorOpen={setInspectorOpen}
            onAssign={() => showToast(`New work brief opened for ${agents[selectedAgent].name}.`)}
          />
        )}
        {view === "library" && <LibraryScreen tab={libraryTab} setTab={setLibraryTab} />}
        {view === "artifacts" && <ArtifactsScreen />}
        {view === "inbox" && <InboxScreen onToast={showToast} />}
        {view === "activity" && <ActivityScreen />}
        {view === "settings" && <SettingsScreen onOpenOnboarding={() => { setOnboardingStep(0); setOnboardingOpen(true); }} />}
      </div>

      {searchOpen && (
        <div className={styles.modalBackdrop} onMouseDown={() => setSearchOpen(false)}>
          <div className={styles.searchModal} onMouseDown={(event) => event.stopPropagation()}>
            <Search />
            <input autoFocus placeholder="Search goals, work, AI employees, skills, and artifacts…" />
            <kbd>Esc</kbd>
            <div className={styles.searchSuggestions}>
              <button onClick={() => { setView("goals"); setSearchOpen(false); }}><Goal /><span><strong>Improve customer signal discovery</strong><small>Active goal</small></span><ArrowRight /></button>
              <button onClick={() => { setView("team"); setSearchOpen(false); }}><Code2 /><span><strong>Prototype Builder</strong><small>AI employee · Working</small></span><ArrowRight /></button>
              <button><FileText /><span><strong>Customer signal discovery — research plan</strong><small>Artifact · Updated today</small></span><ArrowRight /></button>
            </div>
          </div>
        </div>
      )}

      {reviewing && (
        <div className={styles.modalBackdrop} onMouseDown={() => setReviewing(null)}>
          <div className={styles.reviewModal} onMouseDown={(event) => event.stopPropagation()}>
            <header><div><span className={styles.eyebrow}>Decision brief</span><h2>{pendingDecision.title}</h2></div><IconButton label="Close" onClick={() => setReviewing(null)}><X /></IconButton></header>
            <div className={styles.reviewBody}>
              <section><h3>Strategy Partner recommendation</h3><p>{pendingDecision.text}</p></section>
              <section><h3>Why now</h3><p>This decision unblocks the Product Designer and Prototype Builder. No external actions will be taken until you approve.</p></section>
              <section><h3>Evidence</h3><ul><li>12 customer calls synthesised</li><li>3 competitor workflows compared</li><li>Independent Reviewer found no policy conflicts</li></ul></section>
            </div>
            <footer><button className={styles.secondaryButton} onClick={() => setReviewing(null)}>Not yet</button><button className={styles.primaryButton} onClick={() => approveDecision(reviewing)}>Approve recommendation</button></footer>
          </div>
        </div>
      )}

      {onboardingOpen && (
        <OnboardingFlow
          step={onboardingStep}
          setStep={setOnboardingStep}
          onClose={() => setOnboardingOpen(false)}
          onComplete={() => {
            setOnboardingOpen(false);
            setView("today");
            setOnboardingStep(0);
            showToast("Alex’s AI workforce is active in simulation mode.");
          }}
        />
      )}

      {toast && <div className={styles.toast}><CheckCircle2 /><span>{toast}</span></div>}
    </div>
  );
}
