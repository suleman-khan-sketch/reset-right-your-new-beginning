import { useState } from "react";
import {
  Brain,
  Bell,
  Compass,
  Users,
  BarChart3,
  ShieldCheck,
  Plus,
  type LucideIcon,
} from "lucide-react";

type Accent = "primary" | "violet";

interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: Accent;
}

const features: Feature[] = [
  {
    id: "diagnostic",
    icon: Brain,
    title: "AI Diagnostic",
    desc: "Type a habit in your own words. Our AI parses the pattern and builds a personalized 21-day plan shaped to you.",
    accent: "primary",
  },
  {
    id: "nudges",
    icon: Bell,
    title: "Context-Aware Nudges",
    desc: "One specific cue at the moment you're vulnerable — late evenings, weekend crashes, post-meeting slumps. Never spam.",
    accent: "violet",
  },
  {
    id: "coach",
    icon: Compass,
    title: "Adaptive AI Coach",
    desc: "Real conversations that adjust difficulty, help you recover from slips without shame, and remember your story.",
    accent: "primary",
  },
  {
    id: "buddy",
    icon: Users,
    title: "Buddy System",
    desc: "Invite a friend. One-tap check-ins, emoji reactions, shared milestones. Quiet pressure that actually works.",
    accent: "violet",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Identity Analytics",
    desc: "Beyond streaks. Measure consistency, identity drift, and momentum — see the new version of yourself emerging.",
    accent: "primary",
  },
  {
    id: "streak",
    icon: ShieldCheck,
    title: "Streak Protection",
    desc: "One Streak Freeze per week, automatic. A single bad day shouldn't undo three weeks of work.",
    accent: "violet",
  },
];

const FeaturesAccordion = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <ul className="reveal mx-auto mt-14 max-w-2xl divide-y divide-border/60 border-y border-border/60">
      {features.map((f, i) => {
        const isActive = i === active;
        const isViolet = f.accent === "violet";
        return (
          <li key={f.id}>
            <button
              onClick={() => setActive(isActive ? null : i)}
              aria-expanded={isActive}
              className="group flex w-full items-center gap-4 py-5 text-left transition-colors"
            >
              <f.icon
                className={`h-5 w-5 shrink-0 transition-colors ${
                  isActive
                    ? isViolet
                      ? "text-violet"
                      : "text-primary"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
                strokeWidth={1.75}
              />
              <h3 className="flex-1 font-display text-lg font-semibold text-foreground sm:text-xl">
                {f.title}
              </h3>
              <Plus
                className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                  isActive ? "rotate-45 text-foreground" : "text-muted-foreground"
                }`}
                strokeWidth={2}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ease-out ${
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pl-9 pr-9 text-[15px] leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FeaturesAccordion;
