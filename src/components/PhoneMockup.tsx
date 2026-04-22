import { useEffect, useState } from "react";
import {
  Home,
  MessageSquare,
  BarChart3,
  Trophy,
  Handshake,
  Flame,
  Check,
  ChevronLeft,
  Calendar,
  Star,
  Lock,
  Shield,
  Paperclip,
  Smile,
  Zap,
  Award,
  Send,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import mascot from "@/assets/mascot.png";

/**
 * Animated, clickable iPhone mockup with 5 tabs matching the real Reset app:
 *   Home · Chat (AI Coach) · Stats · Reward · Buddies
 * Each tab swaps a dedicated, faithful screen with cinematic transitions.
 */

type TabId = "home" | "chat" | "stats" | "reward" | "buddies";

const TABS: { id: TabId; label: string; Icon: typeof Home }[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "chat", label: "Chat", Icon: MessageSquare },
  { id: "stats", label: "Stats", Icon: BarChart3 },
  { id: "reward", label: "Reward", Icon: Trophy },
  { id: "buddies", label: "Buddies", Icon: Handshake },
];

const PhoneMockup = () => {
  const [tab, setTab] = useState<TabId>("home");
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-cycle tabs until the user interacts
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setTab((t) => {
        const i = TABS.findIndex((x) => x.id === t);
        return TABS[(i + 1) % TABS.length].id;
      });
    }, 4200);
    return () => clearInterval(id);
  }, [autoPlay]);

  const handleTab = (id: TabId) => {
    setAutoPlay(false);
    setTab(id);
  };

  return (
    <div className="relative mx-auto w-full max-w-[420px] perspective-1000">
      {/* Background glow */}
      <div className="absolute -inset-10 -z-10 bg-gradient-orb opacity-70 blur-3xl" />

      {/* Floating UI cards (decorative, hidden on small screens) */}
      <FloatingProgressCard
        className="-left-10 top-20 animate-float"
        delay="0.2s"
      />
      <FloatingStreakCard
        className="-right-8 bottom-32 animate-float-slow"
        delay="0.6s"
      />
      <img
        src={mascot}
        alt=""
        aria-hidden
        className="absolute -right-10 -top-6 z-20 hidden h-16 w-16 animate-float drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)] sm:block"
        style={{ animationDelay: "0.3s" }}
      />

      {/* iPhone frame */}
      <div className="relative mx-auto w-full max-w-[320px] animate-float">
        <div className="relative aspect-[9/19.5] rounded-[3rem] border border-border/80 bg-gradient-to-b from-[hsl(160_20%_8%)] to-[hsl(160_25%_4%)] p-2 shadow-elegant ring-1 ring-primary/10">
          {/* Side buttons */}
          <span className="absolute -left-[3px] top-24 h-12 w-[3px] rounded-l-sm bg-border" />
          <span className="absolute -left-[3px] top-40 h-16 w-[3px] rounded-l-sm bg-border" />
          <span className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-r-sm bg-border" />

          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-background">
            {/* Dynamic island */}
            <div className="absolute left-1/2 top-2 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

            {/* Status bar */}
            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-foreground">
              <span>9:41</span>
              <span className="opacity-70">●●●● 5G</span>
            </div>

            {/* Screen content (scrollable) */}
            <div
              key={tab}
              className={`scrollbar-hide absolute inset-0 overflow-y-auto pt-9 animate-fade-in ${
                tab === "chat" ? "pb-[120px]" : "pb-20"
              }`}
            >
              {tab === "home" && <HomeScreen />}
              {tab === "chat" && <ChatScreen />}
              {tab === "stats" && <StatsScreen />}
              {tab === "reward" && <RewardScreen />}
              {tab === "buddies" && <BuddiesScreen />}
            </div>

            {/* Chat input — pinned above nav, only on chat tab */}
            {tab === "chat" && <ChatInput />}

            {/* Bottom Nav — pill style matching real app */}
            <div className="absolute inset-x-3 bottom-3 z-30">
              <div className="flex items-center justify-between rounded-full border border-border/70 bg-card/85 px-2 py-2 backdrop-blur-xl shadow-elegant">
                {TABS.map(({ id, label, Icon }) => {
                  const active = tab === id;
                  return (
                    <button
                      key={id}
                      onClick={() => handleTab(id)}
                      aria-label={label}
                      aria-pressed={active}
                      className={`relative flex items-center justify-center gap-1.5 rounded-full transition-all duration-500 ${
                        active
                          ? "bg-primary px-3 py-1.5 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.6)]"
                          : "h-8 w-8 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon
                        className={active ? "h-3.5 w-3.5" : "h-4 w-4"}
                        strokeWidth={active ? 2.4 : 1.8}
                        fill={active && id === "home" ? "currentColor" : "none"}
                      />
                      {active && (
                        <span className="text-[11px] font-bold leading-none animate-fade-in">
                          {label}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------- Premium floating side cards -------------------- */
const FloatingProgressCard = ({
  className,
  delay,
}: {
  className: string;
  delay: string;
}) => (
  <div
    className={`glass-strong absolute z-20 hidden w-[180px] rounded-2xl p-3 shadow-elegant sm:block ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft-glow">
          <TrendingUp className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
            Today
          </p>
          <p className="font-display text-xs font-bold">+120 XP</p>
        </div>
      </div>
      <span className="text-[10px] font-semibold text-primary">+18%</span>
    </div>
    <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-border/70">
      <div
        className="h-full rounded-full bg-gradient-primary animate-shimmer"
        style={{ width: "72%" }}
      />
    </div>
    <div className="mt-1.5 flex items-center justify-between text-[8px] text-muted-foreground">
      <span>Level 3</span>
      <span>Level 4</span>
    </div>
  </div>
);

const FloatingStreakCard = ({
  className,
  delay,
}: {
  className: string;
  delay: string;
}) => (
  <div
    className={`glass-strong absolute z-20 hidden rounded-2xl p-3 shadow-elegant sm:block ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-600/10 ring-1 ring-orange-400/30">
        <Flame className="h-5 w-5 text-orange-400 drop-shadow-[0_0_8px_rgb(251,146,60,0.6)]" />
        <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[7px] font-bold text-primary-foreground ring-2 ring-background">
          7
        </span>
      </div>
      <div>
        <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
          Streak
        </p>
        <p className="font-display text-xs font-bold leading-tight">
          7 day fire
        </p>
        <div className="mt-0.5 flex gap-0.5">
          {[...Array(7)].map((_, i) => (
            <span
              key={i}
              className="h-1 w-2.5 rounded-full bg-gradient-to-r from-orange-500 to-primary"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ============================== HOME ============================== */
const HomeScreen = () => {
  const [xp, setXp] = useState(72);
  const [tasks, setTasks] = useState([true, false, false]);
  useEffect(() => {
    let i = 1;
    const id = setInterval(() => {
      setTasks((p) => {
        const n = [...p];
        n[i % 3] = !n[i % 3];
        return n;
      });
      setXp((v) => (v >= 95 ? 60 : v + 4));
      i++;
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-3 px-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/60 to-primary-deep ring-2 ring-primary/40" />
          <div>
            <p className="text-[9px] font-medium text-primary">Good Morning, Jimmy</p>
            <p className="font-display text-sm font-bold leading-tight">Day 7 of 21</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-semibold">
          Streak 7 <Flame className="h-3 w-3 text-orange-400" />
        </div>
      </div>

      {/* Habit Health gauge */}
      <div className="relative flex h-32 items-end justify-center overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/10 to-transparent">
        <svg viewBox="0 0 200 110" className="h-full w-full">
          <path
            d="M20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gauge)"
            strokeWidth="10"
            strokeLinecap="round"
            className="animate-draw"
            strokeDasharray="251"
            strokeDashoffset="55"
          />
          <defs>
            <linearGradient id="gauge" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(170 80% 54%)" />
              <stop offset="100%" stopColor="hsl(165 90% 65%)" />
            </linearGradient>
          </defs>
          <circle cx="172" cy="38" r="5" fill="white" />
        </svg>
        <div className="absolute inset-x-0 bottom-3 text-center">
          <p className="text-[9px] text-muted-foreground">Habit Health</p>
          <p className="font-display text-2xl font-bold text-primary">78%</p>
        </div>
      </div>

      {/* XP today */}
      <div className="rounded-2xl border border-border/70 bg-card/60 p-2.5">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-muted-foreground">XP Today:</span>
          <span className="font-bold">+120</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-gradient-primary transition-all duration-700"
            style={{ width: `${xp}%` }}
          />
        </div>
        <div className="mt-1 flex justify-between text-[8px] text-muted-foreground">
          {["Level 3", "Level 3", "Level 3", "Level 3"].map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </div>
      </div>

      {/* Next badge */}
      <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/60 px-3 py-2 text-[10px]">
        <span className="text-muted-foreground">Next Badge:</span>
        <span className="font-bold">7-Day Streak 🏅</span>
      </div>

      {/* Today's checklist */}
      <div className="rounded-2xl border border-border/70 bg-card/60 p-3">
        <p className="mb-2 text-[11px] font-bold">Today's Checklist</p>
        <div className="space-y-2">
          {[
            { l: "Meditate 5 min", xp: "+10 XP" },
            { l: "Read 10 pages", xp: "+10 XP" },
            { l: "Go for a walk", xp: "+10 XP" },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition-all ${
                  tasks[i]
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border"
                }`}
              >
                {tasks[i] && <Check className="h-2.5 w-2.5 animate-tick" strokeWidth={3} />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-[9px]">
                  <span className={tasks[i] ? "line-through opacity-60" : ""}>{t.l}</span>
                  <span className="text-muted-foreground">{t.xp}</span>
                </div>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-gradient-primary transition-all duration-700"
                    style={{ width: tasks[i] ? "100%" : `${30 + i * 20}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full rounded-xl border border-primary/40 py-2 text-[10px] font-semibold text-primary">
          View Today Details
        </button>
      </div>

      <button className="w-full rounded-xl bg-foreground py-2 text-[11px] font-bold text-background">
        Complete Today
      </button>
    </div>
  );
};

/* ============================== CHAT ============================== */
const ChatScreen = () => {
  return (
    <div className="space-y-2.5 px-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <ChevronLeft className="h-4 w-4" />
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary-deep/40 ring-2 ring-primary/40">
          <img src={mascot} alt="AI Coach" className="h-6 w-6" />
          <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
        </div>
        <div>
          <p className="text-xs font-bold">AI Coach</p>
          <p className="text-[8px] text-primary">Online</p>
        </div>
      </div>

      {/* Daily motivation */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-2.5">
        <p className="text-[10px] font-bold">Daily Motivation</p>
        <p className="mt-0.5 text-[9px] leading-relaxed text-muted-foreground">
          You're on Day 6 of your 21-day journey. One small action today keeps your streak alive 🔥
        </p>
      </div>

      <p className="text-[10px] font-bold">Quick Help</p>
      <div className="flex flex-wrap gap-1.5">
        {["I'm struggling today 😔", "Motivate me 💪", "Help me finish today ✨", "I missed a day 😟"].map(
          (q) => (
            <button
              key={q}
              className="rounded-full border border-border/70 bg-card/60 px-2 py-1 text-[8.5px]"
            >
              {q}
            </button>
          ),
        )}
      </div>

      {/* Messages */}
      <div className="space-y-2 pt-1">
        <Bubble side="left">
          Complete one small step in 5 minutes — that's enough to save your streak.
        </Bubble>
        <Bubble side="right">Motivate me 💪</Bubble>
        <Bubble side="left">It's okay to feel low. Let's do just ONE task together.</Bubble>
      </div>

      {/* Today's challenge */}
      <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent p-2.5">
        <p className="text-[10px] font-bold">Today's Challenge ⚡</p>
        <p className="mt-0.5 text-[9px] text-muted-foreground">
          Finish today's main task 15% faster. Reward: +15 XP
        </p>
        <button className="mt-2 w-full rounded-lg bg-foreground py-1.5 text-[9px] font-bold text-background">
          Accept Challenge
        </button>
      </div>
    </div>
  );
};

/* Chat input — anchored above the bottom nav */
const ChatInput = () => (
  <div className="absolute inset-x-3 bottom-[68px] z-20">
    <div className="flex items-center gap-1.5 rounded-full border border-border/70 bg-card/90 px-2.5 py-1.5 backdrop-blur-xl shadow-elegant">
      <Smile className="h-3 w-3 text-muted-foreground" />
      <span className="flex-1 truncate text-[9px] text-muted-foreground">
        Type message
      </span>
      <Paperclip className="h-3 w-3 text-muted-foreground" />
      <button
        aria-label="Send"
        className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-[0_0_12px_hsl(var(--primary)/0.6)] transition-transform hover:scale-105 active:scale-95"
      >
        <Send className="h-3 w-3 -translate-x-[1px] translate-y-[1px]" strokeWidth={2.5} />
      </button>
    </div>
  </div>
);

const Bubble = ({ side, children }: { side: "left" | "right"; children: React.ReactNode }) => (
  <div className={`flex items-end gap-1.5 ${side === "right" ? "flex-row-reverse" : ""}`}>
    {side === "left" ? (
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary-deep/40 ring-1 ring-primary/40">
        <img src={mascot} alt="" className="h-3.5 w-3.5" />
      </div>
    ) : (
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 text-[7px] font-bold text-white ring-1 ring-white/20">
        J
      </div>
    )}
    <div
      className={`max-w-[75%] rounded-2xl px-2.5 py-1.5 text-[9px] leading-snug ${
        side === "right" ? "bg-primary text-primary-foreground" : "bg-card border border-border/60"
      }`}
    >
      {children}
    </div>
  </div>
);

/* ============================== STATS ============================== */
const StatsScreen = () => {
  return (
    <div className="space-y-2.5 px-4">
      <div>
        <p className="text-[9px] text-primary">Your Progress</p>
        <p className="font-display text-sm font-bold">Day 7 of 21 Completed</p>
      </div>

      {/* Calendar */}
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold">Completion Calendar</p>
          <Calendar className="h-3 w-3 text-primary" />
        </div>
        <p className="text-[8px] text-primary">7 / 21 Days Completed</p>
        <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[8px] text-muted-foreground">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <span key={d}>{d}</span>
          ))}
          {[14, 15, 16, 17, 18, 19, 20].map((n, i) => (
            <span
              key={n}
              className={`rounded-full py-1 text-[9px] font-bold ${
                i >= 4 ? "bg-primary text-primary-foreground" : "border border-border/60"
              }`}
            >
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* Streak cards */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-border/70 bg-card/60 p-2">
          <p className="text-[8px] text-muted-foreground">Current Streak</p>
          <p className="font-display text-sm font-bold">7 Days</p>
        </div>
        <div className="rounded-xl border border-border/70 bg-card/60 p-2">
          <p className="text-[8px] text-muted-foreground">Longest Streak</p>
          <p className="font-display text-sm font-bold">9 Days</p>
        </div>
      </div>

      {/* Habit health line chart */}
      <div className="rounded-2xl border border-border/70 bg-card/60 p-2.5">
        <p className="text-[8px] text-muted-foreground">Habit Health Trend</p>
        <p className="text-[10px] font-bold">Habit Health Over Time</p>
        <svg viewBox="0 0 200 70" className="mt-1 h-16 w-full">
          <defs>
            <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(170 80% 54%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(170 80% 54%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 55 Q 25 50 40 40 T 80 25 T 120 15 T 160 28 T 200 45 L 200 70 L 0 70 Z"
            fill="url(#lg)"
          />
          <path
            d="M0 55 Q 25 50 40 40 T 80 25 T 120 15 T 160 28 T 200 45"
            fill="none"
            stroke="hsl(170 80% 54%)"
            strokeWidth="2"
            className="animate-draw"
          />
          <circle cx="120" cy="15" r="3" fill="white" />
        </svg>
        <p className="text-[9px] font-bold">Current Health: 78%</p>
      </div>

      {/* XP progress */}
      <div className="rounded-2xl border border-border/70 bg-card/60 p-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold">XP Progress</p>
          <span className="rounded-full border border-border/60 px-1.5 py-0.5 text-[8px]">
            Level 3
          </span>
        </div>
        <p className="mt-1 text-[8px] text-muted-foreground">Total XP earned</p>
        <p className="font-display text-base font-bold">1250</p>
      </div>

      {/* Badge progress */}
      <div className="space-y-1.5">
        <p className="text-[10px] font-bold">Badge Progress</p>
        {[
          { n: "3-Day Badge", s: "Unlocked" },
          { n: "7-Day Badge", s: "1 day left" },
          { n: "21-Day Transformation", s: "Locked" },
        ].map((b) => (
          <div
            key={b.n}
            className="flex items-center justify-between rounded-xl border border-border/70 bg-card/60 px-2 py-1.5 text-[9px]"
          >
            <span>{b.n}</span>
            <span className={b.s === "Unlocked" ? "text-primary font-semibold" : "text-muted-foreground"}>
              {b.s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================== REWARD ============================== */
const RewardScreen = () => {
  return (
    <div className="space-y-2.5 px-4">
      <div className="flex items-center gap-2">
        <ChevronLeft className="h-4 w-4" />
        <p className="flex-1 text-center text-xs font-bold">Rewards Hub</p>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <p className="text-[9px] text-primary">Your Rewards</p>
          <p className="font-display text-sm font-bold leading-tight">
            Every streak, every
            <br /> task it all counts.
          </p>
        </div>
        <img src={mascot} alt="" className="h-12 w-12" />
      </div>

      {/* Summary card */}
      <div className="rounded-2xl border border-border/70 bg-card/60 p-3">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-muted px-2 py-0.5 text-[8px]">Summary</span>
          <Star className="h-3 w-3 fill-warning text-warning" />
        </div>
        <p className="mt-1.5 text-[10px] font-bold">Xp & Level Summary</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-[8px] text-primary">Current Level:</p>
            <p className="text-[11px] font-bold">Level 3 Builder</p>
            <p className="mt-1 text-[8px] text-primary">Total XP:</p>
            <p className="text-[11px] font-bold">1,240 XP</p>
          </div>
          <div className="relative h-14 w-14">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="url(#rg)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="94"
                strokeDashoffset="26"
              />
              <defs>
                <linearGradient id="rg" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(170 80% 54%)" />
                  <stop offset="100%" stopColor="hsl(280 80% 60%)" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold">
              72%
            </span>
          </div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-border">
          <div className="h-full w-3/4 rounded-full bg-gradient-primary" />
        </div>
        <div className="mt-1.5 flex justify-between text-[8px]">
          <span className="text-muted-foreground">Progress to Next Level</span>
          <span className="text-warning font-semibold">Level 4 — Warrior</span>
        </div>
      </div>

      {/* Badge collection */}
      <div className="rounded-2xl border border-border/70 bg-card/60 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold">Badge Collection</p>
          <Shield className="h-3 w-3 text-primary" />
        </div>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded-full bg-muted px-2 py-0.5 text-[8px]">🔒 Locked: 4</span>
          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[8px] text-primary">
            ✓ Unlocked: 2
          </span>
        </div>
        <div className="mt-2 grid grid-cols-5 gap-1.5">
          {[
            { unlocked: true, color: "from-primary/40 to-primary/10" },
            { unlocked: true, color: "from-orange-500/40 to-orange-500/10" },
            { unlocked: true, color: "from-warning/40 to-warning/10" },
            { unlocked: false, color: "" },
            { unlocked: false, color: "" },
          ].map((b, i) => (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-lg border ${
                b.unlocked
                  ? `border-border/70 bg-gradient-to-br ${b.color}`
                  : "border-border/50 bg-muted/30"
              }`}
            >
              {b.unlocked ? (
                <div className="h-4 w-4 rotate-45 bg-gradient-primary" />
              ) : (
                <Lock className="h-3 w-3 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================== BUDDIES ============================== */
const BuddiesScreen = () => {
  const buddies = [
    {
      name: "Davis Curtis",
      initials: "DC",
      gradient: "from-blue-400 to-indigo-600",
      status: "PENDING",
      color: "text-warning",
      action: "Nudge",
    },
    {
      name: "Sara Lee",
      initials: "SL",
      gradient: "from-pink-400 to-rose-600",
      status: "COMPLETED",
      color: "text-primary",
      action: "View",
    },
    {
      name: "Mira K.",
      initials: "MK",
      gradient: "from-amber-400 to-orange-600",
      status: "MISSED",
      color: "text-destructive",
      action: "Nudge",
    },
  ];
  return (
    <div className="space-y-2.5 px-4">
      <div className="flex items-center gap-2">
        <ChevronLeft className="h-4 w-4" />
        <p className="flex-1 text-center text-xs font-bold">Your Buddies</p>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <p className="text-[9px] text-primary">Your Buddies</p>
          <p className="font-display text-sm font-bold leading-tight">
            Habits grow better
            <br /> together.
          </p>
        </div>
        <img src={mascot} alt="" className="h-12 w-12" />
      </div>

      <div className="space-y-2">
        {buddies.map((b, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border/70 bg-card/60 p-2.5 animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${b.gradient} text-[9px] font-bold text-white ring-2 ring-white/10 shadow-soft-glow`}
                >
                  {b.initials}
                </div>
                <div>
                  <p className="text-[10px] font-bold">{b.name}</p>
                  <span className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-orange-500/20 px-1.5 py-0.5 text-[8px] text-orange-300">
                    <Flame className="h-2 w-2" /> Streak: 12 days
                  </span>
                </div>
              </div>
              <span className={`text-[8px] font-bold ${b.color}`}>{b.status}</span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <button className="rounded-lg border border-border/70 py-1 text-[9px] font-semibold">
                {b.action}
              </button>
              <button className="rounded-lg bg-primary py-1 text-[9px] font-bold text-primary-foreground">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="pt-1 text-center text-[10px] font-semibold text-muted-foreground">
        Stay accountable with friends.
      </p>
    </div>
  );
};

export default PhoneMockup;
