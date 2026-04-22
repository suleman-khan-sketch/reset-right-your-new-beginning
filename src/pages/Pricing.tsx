import { useState } from "react";
import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Free",
    icon: Sparkles,
    monthly: 0,
    yearly: 0,
    tagline: "Start your reset, no commitment.",
    features: [
      "1 active 21-day journey",
      "Basic AI coach (5 chats/day)",
      "Daily check-ins & streaks",
      "Habit health score",
      "Push reminders",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    icon: Zap,
    monthly: 9.99,
    yearly: 6.99,
    tagline: "For serious habit builders.",
    features: [
      "Unlimited journeys",
      "Unlimited AI coaching",
      "Context-aware nudges",
      "Buddy system + check-ins",
      "Streak Freeze (1/week)",
      "Identity score & analytics",
      "All 21-day templates",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Premium",
    icon: Crown,
    monthly: 19.99,
    yearly: 14.99,
    tagline: "The full transformation engine.",
    features: [
      "Everything in Pro",
      "Custom AI-generated journeys",
      "Advanced behavior mapping",
      "Priority AI coach (faster + deeper)",
      "1-on-1 monthly coach call",
      "Family sharing (up to 5)",
      "Early access to new features",
    ],
    cta: "Go Premium",
    highlighted: false,
  },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes — cancel from the app any time. You keep access until the end of your billing period." },
  { q: "Is there a free trial for Pro and Premium?", a: "Both come with a 7-day free trial. No charge if you cancel before it ends." },
  { q: "What's the difference between Pro and Premium?", a: "Pro is everything you need to transform. Premium adds custom AI-generated journeys, deeper analytics, and a monthly human coach call." },
  { q: "Does it work on Android and iOS?", a: "Yes. Reset Right is built for both, with full feature parity." },
  { q: "Is my data private?", a: "Always. We never sell data. Buddy sharing is opt-in and granular — you decide what's shared." },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <>
      <section className="container mx-auto px-4 pt-32 pb-12 sm:pt-40">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
          <h1 className="font-display text-5xl font-bold sm:text-6xl">
            Simple plans. <span className="text-gradient">Real change.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Start free. Upgrade when you're ready. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                !yearly ? "bg-gradient-primary text-primary-foreground shadow-soft-glow" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                yearly ? "bg-gradient-primary text-primary-foreground shadow-soft-glow" : "text-muted-foreground"
              }`}
            >
              Yearly <span className="ml-1 text-[10px] text-warning">Save 30%</span>
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => {
            const price = yearly ? t.yearly : t.monthly;
            return (
              <article
                key={t.name}
                className={`reveal hover-lift relative overflow-hidden rounded-3xl border p-8 ${
                  t.highlighted
                    ? "border-primary/50 bg-gradient-to-br from-primary/15 via-card to-card shadow-elegant"
                    : "border-border bg-gradient-card"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {t.highlighted && (
                  <div className="absolute right-6 top-6 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-soft-glow">
                    Most Popular
                  </div>
                )}
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${t.highlighted ? "bg-gradient-primary text-primary-foreground shadow-soft-glow" : "bg-primary/10 text-primary"}`}>
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>

                <div className="my-6">
                  <div className="flex items-end gap-1">
                    <span className="font-display text-5xl font-bold">${price}</span>
                    <span className="mb-1.5 text-sm text-muted-foreground">/{yearly ? "mo" : "month"}</span>
                  </div>
                  {yearly && t.monthly > 0 && (
                    <p className="mt-1 text-xs text-muted-foreground">billed yearly · ${(t.yearly * 12).toFixed(2)}</p>
                  )}
                </div>

                <Link
                  to="/contact"
                  className={`block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                    t.highlighted
                      ? "bg-gradient-primary text-primary-foreground btn-glow"
                      : "border border-border bg-secondary text-foreground hover:border-primary/40"
                  }`}
                >
                  {t.cta}
                </Link>

                <ul className="mt-7 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Questions, answered.</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="reveal group rounded-2xl border border-border bg-gradient-card p-5 [&_summary::-webkit-details-marker]:hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
