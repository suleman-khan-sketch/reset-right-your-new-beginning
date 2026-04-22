import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Star,
  PlayCircle,
  Check,
  ShieldOff,
} from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import mascot from "@/assets/mascot.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4];

const features = [
  {
    icon: Brain,
    title: "AI Diagnostic",
    desc: "Tell us a habit in your own words. Our AI builds a custom 21-day journey just for you.",
    outcome: "Know exactly why you fail habits.",
    accent: "primary" as const,
  },
  {
    icon: Bell,
    title: "Context-Aware Nudges",
    desc: "Smart reminders at the right time, in the right place — never spam.",
    outcome: "Get reminders at the perfect moment.",
    accent: "violet" as const,
  },
  {
    icon: Compass,
    title: "Adaptive AI Coach",
    desc: "Real conversations, personalized micro-tasks, and slip recovery without judgement.",
    outcome: "A coach in your pocket, 24/7.",
    accent: "primary" as const,
  },
  {
    icon: Users,
    title: "Buddy System",
    desc: "Invite a friend. Daily check-ins, emoji reactions, and shared wins keep you accountable.",
    outcome: "Stay accountable without nagging.",
    accent: "violet" as const,
  },
  {
    icon: BarChart3,
    title: "Identity Analytics",
    desc: "Track who you're becoming — not just what you did. Behavior maps and consistency scores.",
    outcome: "See who you're becoming, in real time.",
    accent: "primary" as const,
  },
  {
    icon: ShieldCheck,
    title: "Streak Protection",
    desc: "One Streak Freeze per week. Miss a day, keep your momentum, restart stronger.",
    outcome: "Never lose progress again.",
    accent: "violet" as const,
  },
];

const stats = [
  { v: "63%", l: "complete the 21-day journey" },
  { v: "+28%", l: "consistency in the first 2 weeks" },
  { v: "5×", l: "weekly meaningful interactions" },
  { v: "12K+", l: "users rewiring habits today" },
];

const steps = [
  {
    n: "01",
    t: "Tell us your habit",
    d: "Type freely — “doom-scrolling at night” or “late snacking.” Our AI parses and classifies.",
    micro: "Takes 30 seconds",
  },
  {
    n: "02",
    t: "Get your 21-day plan",
    d: "A personalized journey with daily micro-tasks, smart timing, and adaptive difficulty.",
    micro: "AI builds your plan instantly",
  },
  {
    n: "03",
    t: "Become someone new",
    d: "Identity-level transformation, not just streaks. Measurable change by day 21.",
    micro: "See change within days",
  },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        {/* subtle violet orb for color contrast */}
        <div className="absolute right-[-10%] top-[20%] -z-0 h-[400px] w-[400px] rounded-full bg-gradient-orb-violet opacity-40 blur-3xl" />

        <div className="container relative mx-auto grid items-center gap-16 px-4 lg:grid-cols-2">
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Identity Transformation System
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Break your bad habits in{" "}
              <span className="text-gradient animate-gradient bg-gradient-primary bg-clip-text">
                21 days
              </span>{" "}
              — with AI that adapts to you.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Become a new version of yourself. Smart nudges, adaptive coaching,
              and a 21-day journey designed to change who you are — not just what you do.
            </p>

            {/* Mini proof line */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="font-semibold text-foreground">12,000+</span> users
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="font-semibold text-foreground">+32%</span> avg. habit improvement in 3 weeks
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/pricing"
                className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground"
              >
                Reset My Habits
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/features"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-background/40 px-7 py-3.5 text-sm font-bold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-soft-glow"
              >
                <PlayCircle className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                See how it works (2 min)
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    loading="lazy"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5">Loved by early adopters worldwide</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="reveal">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative border-y border-border/50 bg-card/30 py-8 backdrop-blur-sm">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 whitespace-nowrap px-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {[...Array(2)].flatMap((_, k) =>
              ["Focus Rewire", "Digital Detox", "Night Routine", "Mindful Eating", "Dopamine Reset", "Deep Work", "Sleep Anchor", "Movement Daily"].map(
                (t) => (
                  <span key={`${k}-${t}`} className="flex items-center gap-3">
                    <span className="text-primary">✦</span> {t}
                  </span>
                )
              )
            )}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-4 py-24">
        <div className="reveal mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet">
            Real change, measured
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            The numbers behind the <span className="text-gradient">transformation.</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal glass hover-lift rounded-3xl p-6 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="font-display text-4xl font-bold text-gradient">{s.v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-6 text-center text-xs text-muted-foreground">
          Based on early-cohort users • Updated quarterly
        </p>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-4 py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Features</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Everything you need to <span className="text-gradient">become someone new.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six pillars working together to rewire who you are — one day at a time.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const isViolet = f.accent === "violet";
            return (
              <article
                key={f.title}
                className="reveal group hover-lift relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7 transition-all hover:border-primary/40"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                    isViolet ? "bg-violet/15 opacity-0" : "bg-primary/15 opacity-0"
                  }`}
                />
                <div className="relative">
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground shadow-soft-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] ${
                      isViolet
                        ? "bg-gradient-violet shadow-glow-violet"
                        : "bg-gradient-primary"
                    }`}
                  >
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 border-t border-border/60 pt-4">
                    <Sparkles
                      className={`h-3.5 w-3.5 ${isViolet ? "text-violet" : "text-primary"}`}
                    />
                    <p
                      className={`text-xs font-bold ${isViolet ? "text-violet" : "text-primary"}`}
                    >
                      {f.outcome}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS — animated timeline */}
      <section className="container mx-auto px-4 py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">How it works</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            From chaos to clarity in <span className="text-gradient">3 steps.</span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Animated connecting line — desktop only */}
          <div className="absolute left-0 right-0 top-12 hidden h-[2px] overflow-hidden md:block">
            <div className="h-full bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute inset-0 h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          </div>

          {steps.map((s, i) => (
            <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="glass relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 shadow-soft-glow">
                <span className="font-display text-2xl font-bold text-gradient">{s.n}</span>
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.t}</h3>
              <p className="mt-2 max-w-xs text-muted-foreground">{s.d}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-[11px] font-semibold text-violet">
                <Sparkles className="h-3 w-3" />
                {s.micro}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container mx-auto px-4 py-24">
        <div className="reveal mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Real stories
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Loved by people who finally{" "}
            <span className="text-gradient">made it stick.</span>
          </h2>
        </div>
        <TestimonialCarousel />
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-primary/15 via-card to-violet/10 p-12 text-center sm:p-20">
          <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-orb opacity-30 blur-3xl" />
          <div className="absolute -right-10 top-0 h-64 w-64 rounded-full bg-gradient-orb-violet opacity-30 blur-3xl" />

          <div className="relative">
            <img
              src={mascot}
              alt=""
              className="mx-auto h-20 w-20 animate-float drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
            />
            <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">
              Start your reset <span className="text-gradient">today.</span>
              <br className="hidden sm:block" />
              <span className="text-foreground/80 text-3xl font-medium sm:text-4xl">
                Your future self will thank you.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join 12,000+ people becoming a new version of themselves with AI.
            </p>
            <Link
              to="/pricing"
              className="btn-glow mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground"
            >
              Start Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                Free forever plan
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldOff className="h-3.5 w-3.5 text-primary" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
