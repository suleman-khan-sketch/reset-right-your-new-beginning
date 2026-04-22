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
  Sparkles,
} from "lucide-react";
import mascot from "@/assets/mascot.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

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
                tab === "chat" ? "pb-[210px]" : "pb-28"
              }`}
            >
              {tab === "home" && <HomeScreen />}
              {tab === "chat" && <ChatScreen />}
              {tab === "stats" && <StatsScreen />}
              {tab === "reward" && <RewardScreen />}
              {tab === "buddies" && <BuddiesScreen />}
            </div>

            {tab === "chat" && (
              <>
                <TodaysChallenge />
                <ChatInput />
              </>
            )}

            {/* Bottom Nav — pill style matching real app */}
            <div className="absolute inset-x-3 bottom-3 z-30">
              <div className="flex items-center justify-between rounded-full border border-primary/20 bg-[hsl(160_22%_6%)] px-2 py-2 shadow-elegant">
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
      {/* Header row — avatar with photo + bell on right (iOS app style) */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-[hsl(170_30%_22%)] to-[hsl(170_30%_14%)] ring-2 ring-primary/40">
            {/* stylized avatar silhouette */}
            <svg viewBox="0 0 40 40" className="h-full w-full">
              <circle cx="20" cy="15" r="6" fill="hsl(30 35% 60%)" />
              <path d="M6 40 Q 20 22 34 40 Z" fill="hsl(220 25% 25%)" />
              <path d="M14 11 Q 20 6 26 11 L 26 14 Q 20 12 14 14 Z" fill="hsl(20 15% 15%)" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-primary leading-tight">Good Morning, Jimmy</p>
            <p className="font-display text-[15px] font-extrabold leading-tight">Day 7 of 21</p>
          </div>
        </div>
        <button
          aria-label="Notifications"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(160_18%_10%)] ring-1 ring-primary/30"
        >
          <Bell className="h-3.5 w-3.5 text-primary" fill="currentColor" />
        </button>
      </div>

      {/* Habit Health gauge — multi-color segmented arc + dotted track + mascot */}
      <div className="relative flex h-[185px] items-end justify-center overflow-hidden rounded-2xl border border-primary/15 bg-card/50 pb-2">
        <svg viewBox="0 0 220 130" className="h-full w-full">
          {/*
            Semicircle center (110, 120), radius 80.
            Path goes from (30,120) → top → (190,120). Length = π*80 ≈ 251.33.
            Segments (in order along the path):
              red    25%  → 0   to 63
              yellow 38%  → 63  to 158
              orange 10%  → 158 to 183
              mint   27%  → 183 to 251
            We render each as a separate dasharray on the same path.
          */}

          {/* Dotted inner track (smaller radius) */}
          <path
            d="M40 120 A 70 70 0 0 1 180 120"
            fill="none"
            stroke="hsl(0 0% 75% / 0.45)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="1.2 5"
          />

          {/* Red segment */}
          <path
            d="M30 120 A 80 80 0 0 1 190 120"
            fill="none"
            stroke="#E07B6F"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="60 251"
            strokeDashoffset="0"
            pathLength="251"
          />
          {/* Yellow segment */}
          <path
            d="M30 120 A 80 80 0 0 1 190 120"
            fill="none"
            stroke="#F1D88A"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="92 251"
            strokeDashoffset="-66"
            pathLength="251"
          />
          {/* Orange segment */}
          <path
            d="M30 120 A 80 80 0 0 1 190 120"
            fill="none"
            stroke="#E89A55"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="22 251"
            strokeDashoffset="-162"
            pathLength="251"
          />
          {/* Mint segment */}
          <path
            d="M30 120 A 80 80 0 0 1 190 120"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="60 251"
            strokeDashoffset="-188"
            pathLength="251"
          />

          {/* White progress indicator dot at orange/mint join (~75% along arc) */}
          {/* angle from left = 180° - (188/251)*180 ≈ 45° → x = 110 + 80*cos(45°), y = 120 - 80*sin(45°) */}
          <circle cx="166.5" cy="63.5" r="8" fill="white" />
        </svg>

        {/* Mascot above text, centered */}
        <div className="absolute inset-x-0 top-6 text-center">
          <img
            src={mascot}
            alt=""
            className="mx-auto h-6 w-6 drop-shadow-[0_0_10px_hsl(var(--primary)/0.7)]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-8 text-center">
          <p className="text-[10px] text-muted-foreground">Habit Health</p>
          <p className="font-display text-[26px] font-extrabold text-primary leading-none mt-0.5">
            78%
          </p>
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
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-primary animate-xp-fill"
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
        <span className="font-extrabold">7-Day Streak <span className="inline-block animate-streak-glow">🏅</span></span>
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
          <img src={mascot} alt="AI Nudge" className="h-7 w-7" />
          <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold">AI Nudge</p>
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
    </div>
  );
};

/* Today's Challenge — pinned directly above the chat input */
const TodaysChallenge = () => (
  <div className="absolute inset-x-3 bottom-[120px] z-20">
    <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent p-2.5 backdrop-blur-xl shadow-elegant">
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
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [14, 15, 16, 17, 18, 19, 20];
  const completed = [true, true, true, true, false, false, false];

  return (
    <div className="space-y-3 px-4">
      {/* Header with mascot top-right */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold text-primary">Your Progress</p>
          <p className="font-display text-[15px] font-extrabold leading-tight">
            Day 7 of 21 Completed
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30">
          <img src={mascot} alt="" className="h-6 w-6 drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
        </div>
      </div>

      {/* Completion Calendar */}
      <div className="rounded-2xl border border-primary/15 bg-card/50 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-extrabold">Completion Calendar</p>
          <Calendar className="h-3.5 w-3.5 text-primary" strokeWidth={2.2} />
        </div>
        <p className="mt-0.5 text-[9px] font-semibold text-primary">7 / 21 Days Completed</p>
        <div className="mt-2.5 grid grid-cols-7 gap-1 text-center">
          {days.map((d, i) => (
            <span
              key={d}
              className={`text-[9px] font-medium ${
                completed[i] ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {d}
            </span>
          ))}
          {dates.map((n, i) => (
            <div key={n} className="flex justify-center">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${
                  completed[i]
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/70 text-foreground/80"
                }`}
              >
                {n}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* XP Progress chart */}
      <div className="rounded-2xl border border-primary/15 bg-card/50 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-extrabold">XP Progress</p>
          <span className="rounded-full border border-border/70 px-2 py-0.5 text-[9px] font-bold">
            Level 3
          </span>
        </div>

        <div className="relative mt-3 h-[70px] w-full">
          <svg viewBox="0 0 200 70" className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="xpFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(170 80% 54%)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="hsl(170 80% 54%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Dashed top reference line */}
            <line
              x1="0"
              y1="22"
              x2="200"
              y2="22"
              stroke="hsl(160 14% 30%)"
              strokeWidth="0.6"
              strokeDasharray="3 3"
            />
            {/* Vertical guide at +80 marker */}
            <line
              x1="135"
              y1="22"
              x2="135"
              y2="65"
              stroke="hsl(160 14% 30%)"
              strokeWidth="0.6"
            />
            {/* Filled curve */}
            <path
              d="M0 60 C 20 58, 35 55, 50 50 S 80 38, 100 35 S 125 28, 140 25 C 160 22, 180 18, 200 12 L 200 70 L 0 70 Z"
              fill="url(#xpFill)"
            />
            {/* Stroke line */}
            <path
              d="M0 60 C 20 58, 35 55, 50 50 S 80 38, 100 35 S 125 28, 140 25 C 160 22, 180 18, 200 12"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Marker dot at +80 */}
            <circle cx="135" cy="25" r="3" fill="hsl(var(--primary))" stroke="white" strokeWidth="0.8" />
          </svg>
          {/* XP labels overlaid on the curve */}
          <span className="absolute left-[3%] top-[42%] text-[7px] font-semibold text-foreground/80">
            +50
          </span>
          <span className="absolute left-[18%] top-[35%] text-[7px] font-semibold text-foreground/80">
            +80
          </span>
          <span className="absolute left-[40%] top-[22%] text-[7px] font-semibold text-foreground/80">
            +20
          </span>
          <span className="absolute left-[55%] top-[12%] text-[7px] font-semibold text-foreground/80">
            +50
          </span>
          <span className="absolute left-[64%] top-[2%] text-[7px] font-semibold text-foreground/80">
            +80
          </span>
        </div>

        <div className="mt-2 flex items-end justify-between">
          <div>
            <p className="text-[9px] text-muted-foreground">Total XP earned:</p>
            <p className="font-display text-[16px] font-extrabold leading-tight">1250</p>
          </div>
          {/* Circular Level indicator */}
          <div className="relative h-9 w-9">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="hsl(160 14% 18%)" strokeWidth="3" />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="94"
                strokeDashoffset="38"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold">
              4
            </span>
          </div>
        </div>
      </div>

      {/* Streak card */}
      <div className="rounded-2xl border border-primary/15 bg-card/50 p-2.5">
        <div className="flex gap-2.5">
          {/* Flame badge */}
          <div className="flex w-[78px] shrink-0 flex-col items-center justify-center rounded-xl border border-primary/20 bg-[hsl(160_18%_8%)] py-2">
            <Flame className="h-5 w-5 text-primary" fill="hsl(var(--primary))" strokeWidth={1.5} />
            <p className="mt-1 font-display text-[12px] font-extrabold">03 days</p>
            <p className="text-[8px] font-semibold text-primary">Steps Streak</p>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] text-muted-foreground">Longest: 9 Days</p>
            <p className="text-[11px] font-extrabold text-primary">Current Streak: 7 Days</p>

            {/* Progress bar with dot markers */}
            <div className="relative mt-1.5 h-[5px] rounded-full bg-[hsl(160_10%_18%)]">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-primary"
                style={{ width: "57%" }}
              />
              {[25, 50, 75].map((p, i) => (
                <span
                  key={p}
                  className={`absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    i < 1 ? "bg-[hsl(170_60%_18%)]" : "bg-[hsl(160_10%_30%)]"
                  }`}
                  style={{ left: `${p}%` }}
                />
              ))}
            </div>

            {/* Day-of-week check row */}
            <div className="mt-1.5 grid grid-cols-7 gap-0.5 text-center">
              {days.map((d, i) => (
                <div key={d} className="flex flex-col items-center gap-0.5">
                  <div
                    className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                      completed[i]
                        ? "bg-primary/20 ring-1 ring-primary/60"
                        : "bg-[hsl(160_10%_18%)] ring-1 ring-border/60"
                    }`}
                  >
                    {completed[i] && (
                      <Check className="h-2 w-2 text-primary" strokeWidth={4} />
                    )}
                  </div>
                  <span
                    className={`text-[7.5px] font-medium ${
                      completed[i] ? "text-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Missed Days */}
      <div className="rounded-2xl border border-primary/15 bg-card/50 p-3">
        <p className="text-[12px] font-extrabold">Missed Days</p>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full ring-1 ring-primary">
                <span className="text-[8px] font-bold text-primary leading-none">×</span>
              </span>
              <span className="text-[9.5px] text-foreground/85">Total missed days</span>
            </div>
            <p className="mt-1.5 font-display text-[16px] font-extrabold text-primary leading-none">
              2 Days
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary" strokeWidth={2.2} />
              <span className="text-[9.5px] text-foreground/85">Last missed</span>
            </div>
            <p className="mt-1.5 font-display text-[16px] font-extrabold text-primary leading-none">
              5 Days
            </p>
          </div>
        </div>
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
      name: "Suleman Ahmadzai",
      photo: avatar2,
      status: "ACTIVE",
      statusBg: "bg-primary/15 text-primary",
      action: "Nudge",
    },
    {
      name: "Davis Curtis",
      photo: avatar4,
      status: "PENDING",
      statusBg: "bg-warning/15 text-warning",
      action: "Nudge",
    },
    {
      name: "Sara Lee",
      photo: avatar3,
      status: "COMPLETED",
      statusBg: "bg-primary/15 text-primary",
      action: "View",
    },
    {
      name: "Mira K.",
      photo: avatar1,
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
                <img
                  src={b.photo}
                  alt={b.name}
                  loading="lazy"
                  className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-primary/30 shadow-soft-glow"
                />
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
