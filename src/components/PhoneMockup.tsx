import { useEffect, useState } from "react";
import { Flame, Check, Trophy, Sparkles, Zap, Calendar } from "lucide-react";
import mascot from "@/assets/mascot.png";

/**
 * Animated iPhone mockup showing the Reset Right "Today" screen.
 * Includes ticking checkmarks, an animated streak number, XP progress,
 * floating UI cards orbiting the device, and a subtle parallax tilt.
 */
const PhoneMockup = () => {
  const [tasks, setTasks] = useState<boolean[]>([true, false, false]);
  const [streak, setStreak] = useState(7);
  const [xp, setXp] = useState(72);

  // Animate tasks ticking + xp incrementing on a loop to feel "live"
  useEffect(() => {
    let i = 1;
    const id = setInterval(() => {
      setTasks((prev) => {
        const next = [...prev];
        next[i % 3] = !next[i % 3];
        return next;
      });
      setXp((v) => (v >= 95 ? 60 : v + 3));
      if (i % 4 === 0) setStreak((s) => (s >= 9 ? 7 : s + 1));
      i++;
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[420px] perspective-1000">
      {/* Background glow */}
      <div className="absolute -inset-10 -z-10 bg-gradient-orb opacity-70 blur-3xl" />

      {/* Floating UI card — XP */}
      <div
        className="glass-strong absolute -left-8 top-16 z-20 hidden rounded-2xl p-3 shadow-elegant animate-float sm:block"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
            <Zap className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">XP gained</p>
            <p className="font-display text-sm font-bold text-foreground">+80 XP</p>
          </div>
        </div>
      </div>

      {/* Floating UI card — Badge */}
      <div
        className="glass-strong absolute -right-6 top-32 z-20 hidden rounded-2xl p-3 shadow-elegant animate-float-slow sm:block"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-warning/20 text-warning">
            <Trophy className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Badge</p>
            <p className="font-display text-sm font-bold text-foreground">7-Day Streak</p>
          </div>
        </div>
      </div>

      {/* Floating UI card — Streak fire */}
      <div
        className="glass-strong absolute -left-6 bottom-32 z-20 hidden rounded-2xl p-3 shadow-elegant animate-float sm:block"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
            <Flame className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Current</p>
            <p className="font-display text-sm font-bold text-foreground">{streak} days</p>
          </div>
        </div>
      </div>

      {/* Floating mascot */}
      <img
        src={mascot}
        alt=""
        aria-hidden
        className="absolute -right-10 bottom-10 z-20 hidden h-20 w-20 animate-float drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)] sm:block"
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
            <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-foreground">
              <span>9:41</span>
              <span className="opacity-70">●●●● 5G</span>
            </div>

            {/* App content */}
            <div className="space-y-3 px-4 pt-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Today</p>
                  <p className="font-display text-base font-bold">Morning Reset</p>
                </div>
                <img src={mascot} alt="" className="h-8 w-8" />
              </div>

              {/* Streak hero */}
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 to-transparent p-3">
                <div className="animate-shimmer absolute inset-0" />
                <div className="relative flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20">
                    <Flame className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground">You did it!</p>
                    <p className="font-display text-lg font-bold leading-tight">
                      <span key={streak} className="inline-block animate-scale-in text-primary">
                        {streak}
                      </span>
                      -Day Streak
                    </p>
                  </div>
                </div>
                {/* XP bar */}
                <div className="mt-2.5">
                  <div className="mb-1 flex justify-between text-[9px] text-muted-foreground">
                    <span>Level 3</span>
                    <span>{xp}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-gradient-primary transition-all duration-700"
                      style={{ width: `${xp}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Today's Tasks
                </p>
                {[
                  { label: "5-min mindful breath", xp: "+20 XP" },
                  { label: "Replace scroll w/ walk", xp: "+30 XP" },
                  { label: "Cool down stretch", xp: "+30 XP" },
                ].map((t, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/60 p-2.5"
                  >
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                        tasks[idx]
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-transparent"
                      }`}
                    >
                      {tasks[idx] && <Check className="h-3.5 w-3.5 animate-tick" strokeWidth={3} />}
                    </div>
                    <div className="flex-1">
                      <p className={`text-xs font-medium ${tasks[idx] ? "line-through opacity-60" : ""}`}>
                        {t.label}
                      </p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[9px] font-semibold text-primary">
                      {t.xp}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom nav */}
              <div className="absolute inset-x-4 bottom-3 flex items-center justify-around rounded-full border border-border bg-card/80 px-3 py-2 backdrop-blur">
                {[Calendar, Sparkles, Trophy].map((Icon, i) => (
                  <button
                    key={i}
                    aria-label="Tab"
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                      i === 1 ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
