import { Brain, Bell, Compass, Users, BarChart3, ShieldCheck, Sparkles, Target, Heart, Zap, MapPin, Clock, MessageCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

const featureGroups = [
  {
    title: "AI Diagnostic & Personalized Journeys",
    icon: Brain,
    desc: "Free-text habit input. Intelligent parsing. Risk-aware journey generation that adapts as you grow.",
    items: [
      { icon: Sparkles, t: "Free-text habit input", d: "“Doom-scrolling in bed” → custom plan" },
      { icon: Target, t: "Habit parsing & classification", d: "AI understands triggers, not just labels" },
      { icon: ShieldCheck, t: "Risk-aware safety guardrails", d: "Healthy targets, never crash diets" },
      { icon: Zap, t: "Adaptive difficulty", d: "Levels up only when you're ready" },
    ],
  },
  {
    title: "Context-Aware Interventions",
    icon: Bell,
    desc: "The right nudge, the right moment. Time, location, calendar — orchestrated.",
    items: [
      { icon: Clock, t: "Prime-hour nudges", d: "Catch you before the loop starts" },
      { icon: MapPin, t: "Location awareness", d: "Home, work, gym contexts" },
      { icon: Bell, t: "Calendar-aware", d: "Silent during meetings & sleep" },
      { icon: Heart, t: "Quiet hours", d: "Full control. No spam, ever." },
    ],
  },
  {
    title: "AI Coach with Adaptive Learning",
    icon: Compass,
    desc: "A pocket coach that learns your patterns and grows with you.",
    items: [
      { icon: MessageCircle, t: "Real-time chat", d: "Talk through cravings, get a plan" },
      { icon: Sparkles, t: "Daily micro-tasks", d: "Tiny wins that compound" },
      { icon: Heart, t: "Slip recovery", d: "Compassion over guilt — every time" },
      { icon: Users, t: "Smart escalation", d: "Buddy ping when you need backup" },
    ],
  },
  {
    title: "Identity Transformation Journeys",
    icon: Award,
    desc: "21-day programs designed to change who you are, not just what you do.",
    items: [
      { icon: Target, t: "Focus Rewire", d: "Tame the scroll, reclaim attention" },
      { icon: ShieldCheck, t: "Digital Detox", d: "Healthier screen relationship" },
      { icon: Clock, t: "Night Routine", d: "Sleep deeper, wake clearer" },
      { icon: Award, t: "Completion rewards", d: "Celebrate every milestone" },
    ],
  },
  {
    title: "Buddy System & Accountability",
    icon: Users,
    desc: "Optional, private, opt-out anytime. Just enough social to keep you honest.",
    items: [
      { icon: Sparkles, t: "Invite friends", d: "Secure, time-boxed links" },
      { icon: Heart, t: "Daily check-ins", d: "Emoji reactions, low pressure" },
      { icon: BarChart3, t: "Weekly summaries", d: "Share wins, not raw data" },
      { icon: ShieldCheck, t: "Privacy first", d: "You control what's shared" },
    ],
  },
  {
    title: "Identity Analytics",
    icon: BarChart3,
    desc: "Measure who you're becoming. Behavior maps, consistency scores, before/after.",
    items: [
      { icon: Award, t: "Identity score", d: "Track the version of you you're building" },
      { icon: MapPin, t: "Behavior pattern map", d: "When + where challenges hit" },
      { icon: Zap, t: "Consistency index", d: "Streaks that mean something" },
      { icon: Sparkles, t: "Personalized insights", d: "What's working, what isn't" },
    ],
  },
];

const Features = () => (
  <>
    <section className="container mx-auto px-4 pt-32 pb-12 sm:pt-40">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Features</p>
        <h1 className="font-display text-5xl font-bold sm:text-6xl">
          Built for <span className="text-gradient">lasting change.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Six pillars. One transformation engine. Every feature is designed to
          make consistency feel inevitable.
        </p>
      </div>
    </section>

    <section className="container mx-auto space-y-24 px-4 py-16">
      {featureGroups.map((g, gi) => (
        <div
          key={g.title}
          className={`reveal grid items-center gap-12 lg:grid-cols-2 ${gi % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""}`}
        >
          <div>
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft-glow">
              <g.icon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{g.title}</h2>
            <p className="mt-3 text-muted-foreground">{g.desc}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {g.items.map((it) => (
              <div
                key={it.t}
                className="hover-lift rounded-2xl border border-border bg-gradient-card p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <it.icon className="h-4 w-4" />
                </div>
                <p className="font-semibold">{it.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>

    <section className="container mx-auto px-4 py-24">
      <div className="reveal rounded-3xl border border-primary/20 bg-gradient-card p-10 text-center sm:p-16">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to feel the difference?</h2>
        <p className="mt-3 text-muted-foreground">Free trial. Cancel anytime. iOS & Android.</p>
        <Link
          to="/pricing"
          className="btn-glow mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
        >
          See pricing
        </Link>
      </div>
    </section>
  </>
);

export default Features;
