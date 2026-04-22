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
  Send,
  Crown,
  Bell,
} from "lucide-react";
import mascot from "@/assets/mascot.png";

/**
 * Animated, clickable iPhone mockup with 5 tabs matching the real Reset app:
 *   Home · Chat (AI Coach) · Stats · Reward · Buddies
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

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setTab((t) => {
        const i = TABS.findIndex((x) => x.id === t);
        return TABS[(i + 1) % TABS.length].id;
      });
    }, 4500);
    return () => clearInterval(id);
  }, [autoPlay]);

  const handleTab = (id: TabId) => {
    setAutoPlay(false);
    setTab(id);
  };

  return (
    <div className="relative mx-auto w-full max-w-[420px] perspective-1000">
      <div className="absolute -inset-10 -z-10 bg-gradient-orb opacity-70 blur-3xl" />

      <img
        src={mascot}
        alt=""
        aria-hidden
        className="absolute -right-10 -top-6 z-20 hidden h-16 w-16 animate-float drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)] sm:block"
        style={{ animationDelay: "0.3s" }}
      />

      <div className="relative mx-auto w-full max-w-[320px] animate-float">
        <div className="relative aspect-[9/19.5] rounded-[3rem] border border-border/80 bg-gradient-to-b from-[hsl(160_20%_8%)] to-[hsl(160_25%_4%)] p-2 shadow-elegant ring-1 ring-primary/10">
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

            {/* Screen content */}
            <div
              key={tab}
              className={`scrollbar-hide absolute inset-0 overflow-y-auto pt-9 animate-fade-in ${
                tab === "chat" ? "pb-[120px]" : "pb-24"
              }`}
            >
              {tab === "home" && <HomeScreen />}
              {tab === "chat" && <ChatScreen />}
              {tab === "stats" && <StatsScreen />}
              {tab === "reward" && <RewardScreen />}
              {tab === "buddies" && <BuddiesScreen />}
            </div>

            {tab === "chat" && <ChatInput />}

            {/* Bottom Nav — pill style matching real app */}
            <div className="absolute inset-x-3 bottom-3 z-30">
              <div className="flex items-center justify-between rounded-full border border-primary/10 bg-[hsl(160_18%_8%)]/95 px-2 py-2 backdrop-blur-xl shadow-elegant">
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

/* ============================== HOME ============================== */
const HomeScreen = () => {
  // Match real app: all 3 tasks checked
  const tasks = [true, true, true];

  return (
    <div className="space-y-3 px-4">
      {/* Header row — plain teal avatar circle, like the real app */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-full bg-[hsl(170_30%_22%)] ring-1 ring-primary/20" />
          <div>
            <p className="text-[10px] font-semibold text-primary leading-tight">Good Morning, Jimmy</p>
            <p className="font-display text-[15px] font-extrabold leading-tight">Day 7 of 21</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-semibold">
          Streak 7 <Flame className="h-3 w-3 text-orange-400" fill="currentColor" />
        </div>
      </div>

      {/* Habit Health gauge — large thick mint arc centered in card */}
      <div className="relative flex h-[155px] items-center justify-center overflow-hidden rounded-2xl border border-primary/15 bg-card/50">
        <svg viewBox="0 0 200 130" className="h-full w-full px-3">
          {/* Track */}
          <path
            d="M30 110 A 70 70 0 0 1 170 110"
            fill="none"
            stroke="hsl(160 14% 14%)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Mint arc — ~78% of semicircle */}
          <path
            d="M30 110 A 70 70 0 0 1 170 110"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="220"
            strokeDashoffset="48"
            className="animate-draw"
          />
          {/* End indicator dot — top right of arc */}
          <circle cx="166" cy="50" r="6" fill="white" />
        </svg>
        <div className="absolute inset-x-0 bottom-6 text-center">
          <p className="text-[10px] text-muted-foreground">Habit Health</p>
          <p className="font-display text-[26px] font-extrabold text-primary leading-none mt-0.5">78%</p>
        </div>
      </div>

      {/* XP today */}
      <div className="rounded-2xl border border-border/70 bg-card/60 p-3">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-muted-foreground">XP Today:</span>
          <span className="font-extrabold">+120</span>
        </div>
        <div className="relative mt-2 h-[5px] rounded-full bg-[hsl(160_10%_18%)]">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-primary"
            style={{ width: "62%" }}
          />
          {/* Level marker dots sit ON the bar */}
          {[12.5, 37.5, 62.5, 87.5].map((p, i) => (
            <span
              key={p}
              className={`absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                i < 2 ? "bg-[hsl(170_60%_18%)]" : "bg-[hsl(160_10%_28%)]"
              }`}
              style={{ left: `${p}%` }}
            />
          ))}
        </div>
        <div className="mt-1.5 grid grid-cols-4 text-[8.5px] text-muted-foreground">
          <span className="text-left text-primary">Level 3</span>
          <span className="text-center text-primary">Level 3</span>
          <span className="text-center">Level 3</span>
          <span className="text-right">Level 3</span>
        </div>
      </div>

      {/* Next badge */}
      <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/60 px-3 py-2.5 text-[11px]">
        <span className="text-muted-foreground">Next Badge:</span>
        <span className="font-extrabold">7-Day Streak 🏅</span>
      </div>

      {/* Today's checklist — all checked, full progress, line-through */}
      <div className="rounded-2xl border border-primary/15 bg-card/60 p-3">
        <p className="mb-2.5 text-[11.5px] font-extrabold">Today's Checklist</p>
        <div className="space-y-2.5">
          {[
            { l: "Meditate 5 min", xp: "+10 XP" },
            { l: "Read 10 pages", xp: "+10 XP" },
            { l: "Go for a walk", xp: "+10 XP" },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
                <Check className="h-2.5 w-2.5 text-primary" strokeWidth={3.5} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-[9.5px]">
                  <span className="line-through text-muted-foreground">{t.l}</span>
                  <span className="font-semibold text-foreground/90">{t.xp}</span>
                </div>
                <div className="mt-1 h-[2px] rounded-full bg-primary" />
              </div>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full rounded-xl border border-primary/50 py-2 text-[11px] font-bold text-primary">
          View Today Details
        </button>
      </div>

      <button className="w-full rounded-2xl bg-white py-2.5 text-[12px] font-extrabold text-black shadow-[0_0_25px_hsl(0_0%_100%/0.1)]">
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
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary-deep ring-2 ring-primary/30">
          <img src={mascot} alt="AI Coach" className="h-7 w-7" />
          <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold">AI Coach</p>
          <p className="text-[8px] text-primary">Online</p>
        </div>
      </div>

      {/* Daily motivation */}
      <div className="rounded-xl border border-primary/30 bg-primary/10 p-2.5">
        <p className="text-[10px] font-bold">Daily Motivation</p>
        <p className="mt-0.5 text-[9px] leading-relaxed text-foreground/80">
          You're on Day 6 of your 21-day journey. One small action today keeps your streak alive 🔥
        </p>
      </div>

      <p className="pt-1 text-[10px] font-bold">Quick Help</p>
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
      <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-2.5">
        <p className="text-[10px] font-bold">Today's Challenge ⚡</p>
        <p className="mt-0.5 text-[9px] text-muted-foreground">
          Finish today's main task 15% faster. Reward: +15 XP
        </p>
        <button className="mt-2 w-full rounded-lg bg-white py-1.5 text-[9px] font-bold text-black">
          Accept Challenge
        </button>
      </div>
    </div>
  );
};

const ChatInput = () => (
  <div className="absolute inset-x-3 bottom-[68px] z-20">
    <div className="flex items-center gap-1.5 rounded-full border border-border/70 bg-card/90 px-2.5 py-1.5 backdrop-blur-xl shadow-elegant">
      <Smile className="h-3 w-3 text-muted-foreground" />
      <span className="flex-1 truncate text-[9px] text-muted-foreground">Type message</span>
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
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary-deep ring-1 ring-primary/40">
        <img src={mascot} alt="" className="h-3.5 w-3.5" />
      </div>
    ) : (
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 text-[7px] font-bold text-white ring-1 ring-white/20">
        J
      </div>
    )}
    <div
      className={`max-w-[75%] rounded-2xl px-2.5 py-1.5 text-[9px] leading-snug ${
        side === "right"
          ? "bg-primary text-primary-foreground"
          : "border border-border/60 bg-card"
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
    </div>
  );
};

/* ============================== REWARD ============================== */
const RewardScreen = () => {
  return (
    <div className="space-y-3 px-4">
      {/* Header */}
      <div className="relative flex items-center">
        <ChevronLeft className="h-4 w-4" />
        <p className="absolute left-1/2 -translate-x-1/2 text-xs font-bold">Rewards Hub</p>
      </div>

      {/* Title row with mascot + glow */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[9px] font-medium text-primary">Your Rewards</p>
          <p className="mt-1 font-display text-[15px] font-bold leading-tight">
            Every streak, every
            <br />
            task it all counts.
          </p>
        </div>
        <div className="relative h-12 w-12 shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary/40 blur-xl" />
          <img src={mascot} alt="" className="relative h-12 w-12" />
        </div>
      </div>

      {/* Summary card with teal gradient */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 p-3"
        style={{ background: "linear-gradient(290deg, hsl(160 18% 5%) 48%, hsl(170 80% 54% / 0.35) 140%)" }}
      >
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-white/10 px-2 py-0.5 text-[8px]">Summary</span>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-warning/15">
            <Star className="h-3 w-3 fill-warning text-warning" />
          </div>
        </div>
        <p className="mt-2 text-[11px] font-bold">Xp & Level Summary</p>
        <div className="my-1.5 h-px bg-primary/20" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] text-primary">Current Level:</p>
            <p className="text-[12px] font-bold">Level 3 Builder</p>
            <p className="mt-1.5 text-[8px] text-primary">Total XP:</p>
            <p className="text-[12px] font-bold">1,240 XP</p>
          </div>
          <div className="relative h-16 w-16">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="hsl(var(--border))" strokeWidth="3.2" />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="url(#rg)"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeDasharray="94"
                strokeDashoffset="26"
              />
              <defs>
                <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#93E82C" />
                  <stop offset="50%" stopColor="hsl(170 80% 54%)" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
              72%
            </span>
          </div>
        </div>
        {/* Progress bar with section dots */}
        <div className="relative mt-2 h-2 rounded-full bg-primary/15">
          <div className="h-full rounded-full bg-primary/80" style={{ width: "60%" }} />
          {[15, 33, 50, 75].map((p) => (
            <span
              key={p}
              className="absolute top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-white"
              style={{ left: `${p}%` }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-[8px]">
          <span className="text-foreground/80">Progress to Next Level</span>
          <span className="font-semibold text-warning">Level 4 — Warrior</span>
        </div>
      </div>

      {/* Badge collection */}
      <div className="rounded-2xl border border-primary/20 bg-card/60 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold">Badge Collection</p>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-3 w-3 text-primary" />
          </div>
        </div>
        <div className="mt-2 flex gap-1.5">
          <span className="flex items-center gap-1 rounded-lg border border-primary/30 bg-primary/5 px-2 py-1 text-[8px]">
            <Lock className="h-2 w-2 text-primary" /> Locked: 4
          </span>
          <span className="flex items-center gap-1 rounded-lg border border-primary/30 bg-primary/5 px-2 py-1 text-[8px] text-primary">
            <Check className="h-2 w-2" strokeWidth={3} /> Unlocked: 2
          </span>
        </div>
        <div className="mt-2.5 grid grid-cols-5 gap-1.5">
          {[
            { unlocked: true, gradient: "from-[hsl(170_80%_54%)] to-[hsl(170_80%_30%)]" },
            { unlocked: true, gradient: "from-[#C99B70] to-[#7A5E50]" },
            { unlocked: true, gradient: "from-[#F7D14E] to-[#8C421D]" },
            { unlocked: false, gradient: "" },
            { unlocked: false, gradient: "" },
          ].map((b, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-lg border border-primary/15 bg-primary/5"
            >
              {b.unlocked ? (
                <div
                  className={`relative flex h-5 w-5 rotate-45 items-center justify-center rounded-md bg-gradient-to-br ${b.gradient} shadow-[inset_0_0_4px_rgba(255,255,255,0.5)]`}
                >
                  <div className="h-2 w-2 -rotate-45 rounded-sm bg-white/30" />
                </div>
              ) : (
                <Lock className="h-3 w-3 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* View Badge Gallery button */}
      <button className="w-full rounded-xl border border-primary py-2.5 text-[11px] font-bold text-primary">
        View Badge Gallery
      </button>

      {/* Stats row */}
      <div className="flex items-center justify-around rounded-2xl border border-primary/20 bg-card/60 px-3 py-3">
        <div>
          <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
            <Crown className="h-3 w-3 text-primary" /> Streak Lvl
          </div>
          <p className="mt-1 font-display text-lg font-bold">Level 3</p>
        </div>
        <div className="h-10 w-px bg-primary/20" />
        <div>
          <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
            <Trophy className="h-3 w-3 text-primary" /> Rank
          </div>
          <p className="mt-1 font-display text-lg font-bold">#142</p>
        </div>
      </div>

      <button className="w-full rounded-xl bg-white py-2.5 text-[11px] font-bold text-black">
        Go to Leaderboard
      </button>
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
      statusBg: "bg-warning/15 text-warning",
      action: "Nudge",
    },
    {
      name: "Sara Lee",
      initials: "SL",
      gradient: "from-pink-400 to-rose-600",
      status: "COMPLETED",
      statusBg: "bg-primary/15 text-primary",
      action: "View",
    },
    {
      name: "Mira K.",
      initials: "MK",
      gradient: "from-amber-400 to-orange-600",
      status: "MISSED",
      statusBg: "bg-destructive/15 text-destructive",
      action: "Nudge",
    },
  ];
  return (
    <div className="space-y-3 px-4">
      <div className="relative flex items-center">
        <ChevronLeft className="h-4 w-4" />
        <p className="absolute left-1/2 -translate-x-1/2 text-xs font-bold">Your Buddies</p>
      </div>

      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[9px] font-medium text-primary">Your Buddies</p>
          <p className="mt-1 font-display text-[15px] font-bold leading-tight">
            Habits grow better
            <br />
            together.
          </p>
        </div>
        <div className="relative h-12 w-12 shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary/40 blur-xl" />
          <img src={mascot} alt="" className="relative h-12 w-12" />
        </div>
      </div>

      <div className="space-y-2">
        {buddies.map((b, i) => (
          <div
            key={i}
            className="rounded-2xl border border-primary/15 bg-card/60 p-2.5 animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${b.gradient} text-[10px] font-bold text-white ring-2 ring-white/10 shadow-soft-glow`}
                >
                  {b.initials}
                </div>
                <div>
                  <p className="text-[11px] font-bold">{b.name}</p>
                  <span className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-orange-500/20 px-1.5 py-0.5 text-[8px] text-orange-300">
                    <Flame className="h-2 w-2" fill="currentColor" /> Streak: 12 days
                  </span>
                </div>
              </div>
              <span className={`rounded-md px-1.5 py-0.5 text-[8px] font-bold ${b.statusBg}`}>
                {b.status}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <button className="rounded-lg border border-primary/60 py-1.5 text-[9px] font-semibold text-primary">
                {b.action}
              </button>
              <button className="rounded-lg bg-primary py-1.5 text-[9px] font-bold text-primary-foreground">
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
