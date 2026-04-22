import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Brain, Bell, Compass, Users, BarChart3, Star, ShieldCheck, Apple } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import mascot from "@/assets/mascot.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4];

const features = [
  { icon: Brain, title: "AI Diagnostic", desc: "Tell us a habit in your own words. Our AI builds a custom 21-day journey just for you." },
  { icon: Bell, title: "Context-Aware Nudges", desc: "Smart reminders at the right time, in the right place — never spam." },
  { icon: Compass, title: "Adaptive AI Coach", desc: "Real conversations, personalized micro-tasks, and slip recovery without judgement." },
  { icon: Users, title: "Buddy System", desc: "Invite a friend. Daily check-ins, emoji reactions, and shared wins keep you accountable." },
  { icon: BarChart3, title: "Identity Analytics", desc: "Track who you're becoming — not just what you did. Behavior maps and consistency scores." },
  { icon: ShieldCheck, title: "Streak Protection", desc: "One Streak Freeze per week. Miss a day, keep your momentum, restart stronger." },
];

const stats = [
  { v: "60%+", l: "complete the 21-day journey" },
  { v: "30%+", l: "reduction in target habits" },
  { v: "5×", l: "weekly meaningful interactions" },
  { v: "21", l: "days to a new identity" },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="container relative mx-auto grid items-center gap-16 px-4 lg:grid-cols-2">
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              AI Habit Transformation • New
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Break the loop.
              <br />
              <span className="text-gradient animate-gradient bg-gradient-primary bg-clip-text">
                Reset Right.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              The AI-powered companion that turns destructive patterns into a new
              identity in just 21 days. Smart nudges, adaptive coaching, real change.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/pricing"
                className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                Start your 21-day journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-secondary"
              >
                <Apple className="h-4 w-4" />
                See how it works
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
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
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-4 py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Features</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Everything you need to <span className="text-gradient">stay consistent.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six pillars working together to help you build a new identity, one day at a time.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="reveal group hover-lift relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft-glow">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container mx-auto px-4 py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">How it works</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            From chaos to clarity in <span className="text-gradient">3 steps.</span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {[
            { n: "01", t: "Tell us your habit", d: "Type freely — “doom-scrolling at night” or “late snacking.” Our AI parses and classifies." },
            { n: "02", t: "Get your 21-day plan", d: "A personalized journey with daily micro-tasks, smart timing, and adaptive difficulty." },
            { n: "03", t: "Become someone new", d: "Identity-level transformation, not just streaks. Measurable change by day 21." },
          ].map((s, i) => (
            <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="glass relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 shadow-soft-glow">
                <span className="font-display text-2xl font-bold text-gradient">{s.n}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.t}</h3>
              <p className="mt-2 max-w-xs text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container mx-auto px-4 py-24">
        <TestimonialCarousel />
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-primary/15 via-card to-card p-12 text-center sm:p-20">
          <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="relative">
            <img src={mascot} alt="" className="mx-auto h-20 w-20 animate-float drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]" />
            <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">
              Your reset starts <span className="text-gradient">today.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join thousands rewiring their habits with AI. Free to start, no credit card.
            </p>
            <Link
              to="/pricing"
              className="btn-glow mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground"
            >
              Get Reset Right
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
