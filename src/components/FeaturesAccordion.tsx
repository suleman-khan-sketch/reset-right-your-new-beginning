import { useState } from "react";
import {
  Brain,
  Bell,
  Compass,
  Users,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Plus,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Accent = "primary" | "violet";

interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  outcome: string;
  bullets: string[];
  accent: Accent;
  preview: React.ReactNode;
}

/* ---------- Preview panels ---------- */

const DiagnosticPreview = () => (
  <div className="space-y-3">
    <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">You said</p>
      <p className="mt-1.5 text-sm font-medium text-foreground">
        “I keep doom-scrolling till 1am and hate myself in the morning.”
      </p>
    </div>
    <div className="flex items-center justify-center">
      <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <Sparkles className="mx-2 h-3.5 w-3.5 text-primary" />
      <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">AI built your plan</p>
      <p className="mt-1.5 text-sm font-medium text-foreground">21-day Sleep Anchor · 3 micro-tasks/day</p>
      <div className="mt-3 flex gap-1">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className={`h-6 flex-1 rounded-sm ${
              i < 3 ? "bg-primary" : i < 7 ? "bg-primary/50" : "bg-primary/15"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
);

const NudgePreview = () => (
  <div className="space-y-3">
    {[
      { time: "10:28 PM", text: "Phone in drawer. Lights down. 2 min.", state: "now" },
      { time: "Tomorrow 7am", text: "Morning anchor — no phone for 30 min.", state: "soon" },
      { time: "Sat 9pm", text: "Weekend reset check-in.", state: "later" },
    ].map((n, i) => (
      <div
        key={i}
        className={`flex items-start gap-3 rounded-2xl border p-3.5 ${
          n.state === "now"
            ? "border-violet/40 bg-violet/10"
            : "border-border/60 bg-background/60"
        }`}
      >
        <div
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
            n.state === "now" ? "bg-violet/20 text-violet" : "bg-muted text-muted-foreground"
          }`}
        >
          <Bell className="h-3.5 w-3.5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {n.time}
          </p>
          <p className="mt-0.5 text-sm font-medium text-foreground">{n.text}</p>
        </div>
      </div>
    ))}
  </div>
);

const CoachPreview = () => (
  <div className="space-y-2.5">
    <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-primary/15 border border-primary/25 p-3">
      <p className="text-sm text-foreground">I slipped last night. Picked up my phone at midnight.</p>
    </div>
    <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-border/60 bg-background/60 p-3">
      <p className="text-sm text-foreground">
        That's data, not failure. What was the trigger — boredom or anxiety?
      </p>
      <div className="mt-2.5 flex gap-1.5">
        {["Boredom", "Anxiety", "Habit"].map((b) => (
          <button
            key={b}
            className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
          >
            {b}
          </button>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-1.5 px-2 pt-1">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary [animation-delay:150ms]" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary [animation-delay:300ms]" />
      <span className="text-[11px] text-muted-foreground">Coach is typing…</span>
    </div>
  </div>
);

const BuddyPreview = () => (
  <div className="space-y-3">
    <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-violet text-sm font-bold text-violet-foreground">
            SA
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Sara A.</p>
            <p className="text-[11px] text-muted-foreground">Day 9 · No phone after 10pm</p>
          </div>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
          ✓ Done
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        {["🔥", "💪", "👏", "🙌"].map((e) => (
          <button
            key={e}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-sm transition-transform hover:scale-110"
          >
            {e}
          </button>
        ))}
      </div>
    </div>
    <div className="rounded-2xl border border-violet/30 bg-violet/5 p-3.5">
      <p className="text-xs text-muted-foreground">Daily check-in</p>
      <p className="mt-0.5 text-sm font-medium text-foreground">
        Sara's counting on you. Tap when you finish today.
      </p>
    </div>
  </div>
);

const AnalyticsPreview = () => (
  <div className="space-y-3">
    <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Identity score
        </p>
        <p className="text-[11px] font-semibold text-primary">+18% this week</p>
      </div>
      <div className="mt-2 flex items-end justify-between">
        <p className="font-display text-4xl font-bold text-gradient">74</p>
        <p className="text-xs text-muted-foreground">/ 100</p>
      </div>
    </div>
    <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        Last 14 days
      </p>
      <div className="flex h-20 items-end gap-1.5">
        {[40, 55, 35, 60, 70, 65, 80, 75, 60, 85, 90, 78, 92, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-primary"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  </div>
);

const StreakPreview = () => (
  <div className="space-y-3">
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-5 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-primary/10" />
      <div className="relative">
        <p className="font-display text-5xl font-bold text-gradient">12</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Day streak
        </p>
      </div>
    </div>
    <div className="rounded-2xl border border-violet/30 bg-violet/5 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-violet" />
          <p className="text-sm font-semibold text-foreground">Streak Freeze ready</p>
        </div>
        <span className="rounded-full bg-violet/20 px-2.5 py-0.5 text-[11px] font-semibold text-violet">
          1 left
        </span>
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground">
        Miss a day without losing momentum. Refills weekly.
      </p>
    </div>
  </div>
);

/* ---------- Data ---------- */

const features: Feature[] = [
  {
    id: "diagnostic",
    icon: Brain,
    title: "AI Diagnostic",
    tagline: "Tell us a habit. We build the plan.",
    desc:
      "Type in your own words — “late-night scrolling”, “stress snacking”. Our AI parses it, finds the pattern, and generates a 21-day journey shaped to you.",
    outcome: "Know exactly why your habits don't stick.",
    bullets: ["Plain-language input", "Behavioral classification", "Personalized 21-day plan"],
    accent: "primary",
    preview: <DiagnosticPreview />,
  },
  {
    id: "nudges",
    icon: Bell,
    title: "Context-Aware Nudges",
    tagline: "The right reminder. The right moment.",
    desc:
      "We learn when you're vulnerable — late evenings, weekend crashes, post-meeting slumps — and send a single, specific cue. Never spam.",
    outcome: "Get reminded when it actually matters.",
    bullets: ["Time + location aware", "Adaptive frequency", "One nudge, never noise"],
    accent: "violet",
    preview: <NudgePreview />,
  },
  {
    id: "coach",
    icon: Compass,
    title: "Adaptive AI Coach",
    tagline: "A coach in your pocket, 24/7.",
    desc:
      "Real conversations, not chat-bot scripts. Your coach adjusts difficulty, helps you recover from slips without shame, and remembers your story.",
    outcome: "Bounce back from slips instead of quitting.",
    bullets: ["Memory across sessions", "Slip-recovery protocol", "Micro-tasks on demand"],
    accent: "primary",
    preview: <CoachPreview />,
  },
  {
    id: "buddy",
    icon: Users,
    title: "Buddy System",
    tagline: "Accountability without the nagging.",
    desc:
      "Invite a friend. Daily one-tap check-ins, emoji reactions, shared milestones. Quiet pressure that actually works.",
    outcome: "Stay consistent because someone's watching — kindly.",
    bullets: ["One-tap check-ins", "Emoji reactions", "Shared milestone wins"],
    accent: "violet",
    preview: <BuddyPreview />,
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Identity Analytics",
    tagline: "Track who you're becoming.",
    desc:
      "Beyond streaks. We measure consistency, identity drift, and behavioral momentum — so you can see the new version of yourself emerging.",
    outcome: "Watch your identity shift in real time.",
    bullets: ["Identity score", "Consistency curves", "Behavior heatmap"],
    accent: "primary",
    preview: <AnalyticsPreview />,
  },
  {
    id: "streak",
    icon: ShieldCheck,
    title: "Streak Protection",
    tagline: "Miss a day. Keep your momentum.",
    desc:
      "One Streak Freeze per week, automatic. Because real life happens — and a single bad day shouldn't undo three weeks of work.",
    outcome: "Never lose progress to one bad day.",
    bullets: ["Auto-applied freeze", "Weekly refill", "Soft restart, no shame"],
    accent: "violet",
    preview: <StreakPreview />,
  },
];

/* ---------- Component ---------- */

const FeaturesAccordion = () => {
  const [active, setActive] = useState(0);
  const current = features[active];
  const isViolet = current.accent === "violet";

  return (
    <div className="reveal mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
      {/* Left — Accordion list */}
      <ul className="flex flex-col gap-2">
        {features.map((f, i) => {
          const isActive = i === active;
          const violet = f.accent === "violet";
          return (
            <li key={f.id}>
              <button
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className={`group relative w-full overflow-hidden rounded-2xl border text-left transition-all duration-500 ${
                  isActive
                    ? violet
                      ? "border-violet/50 bg-gradient-to-br from-violet/10 via-card to-card"
                      : "border-primary/50 bg-gradient-to-br from-primary/10 via-card to-card"
                    : "border-border/60 bg-card/40 hover:border-border hover:bg-card/70"
                }`}
              >
                {/* index bar */}
                <span
                  className={`absolute left-0 top-0 h-full w-[3px] transition-all duration-500 ${
                    isActive
                      ? violet
                        ? "bg-gradient-violet"
                        : "bg-gradient-primary"
                      : "bg-transparent"
                  }`}
                />

                <div className="flex items-start gap-4 p-5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                      isActive
                        ? violet
                          ? "bg-gradient-violet text-violet-foreground shadow-glow-violet"
                          : "bg-gradient-primary text-primary-foreground shadow-soft-glow"
                        : "bg-muted/60 text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    <f.icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {f.title}
                      </h3>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isActive
                            ? violet
                              ? "rotate-45 border-violet/50 bg-violet/15 text-violet"
                              : "rotate-45 border-primary/50 bg-primary/15 text-primary"
                            : "border-border/70 text-muted-foreground"
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">{f.tagline}</p>

                    {/* Expanded body (mobile-friendly inline reveal) */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {f.bullets.map((b) => (
                            <li
                              key={b}
                              className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                                violet
                                  ? "border-violet/30 bg-violet/10 text-violet"
                                  : "border-primary/30 bg-primary/10 text-primary"
                              }`}
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Right — Detail Panel (sticky on desktop) */}
      <div className="hidden lg:block">
        <div className="sticky top-28">
          <div
            key={current.id}
            className={`relative animate-fade-in overflow-hidden rounded-3xl border bg-gradient-card p-7 shadow-card ${
              isViolet ? "border-violet/30" : "border-primary/30"
            }`}
          >
            {/* glow */}
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl ${
                isViolet ? "bg-violet/20" : "bg-primary/20"
              }`}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                    isViolet
                      ? "border-violet/40 bg-violet/10 text-violet"
                      : "border-primary/40 bg-primary/10 text-primary"
                  }`}
                >
                  <Sparkles className="h-3 w-3" />
                  Live preview
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  {String(active + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-foreground">
                {current.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{current.tagline}</p>

              <div className="mt-6">{current.preview}</div>

              <div
                className={`mt-6 flex items-center gap-2 rounded-2xl border p-3.5 ${
                  isViolet ? "border-violet/30 bg-violet/5" : "border-primary/30 bg-primary/5"
                }`}
              >
                <ArrowUpRight
                  className={`h-4 w-4 ${isViolet ? "text-violet" : "text-primary"}`}
                  strokeWidth={2.5}
                />
                <p
                  className={`text-sm font-semibold ${
                    isViolet ? "text-violet" : "text-primary"
                  }`}
                >
                  {current.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAccordion;
