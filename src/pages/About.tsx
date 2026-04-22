import { Heart, Compass, ShieldCheck, Sparkles } from "lucide-react";
import mascot from "@/assets/mascot.png";

const values = [
  { icon: Heart, t: "Compassion over guilt", d: "Slips happen. We help you bounce, not break." },
  { icon: Compass, t: "Identity-first design", d: "We're not a streak counter. We help you become someone new." },
  { icon: ShieldCheck, t: "Privacy by default", d: "Your patterns are yours. Never sold. Always controlled." },
  { icon: Sparkles, t: "Science meets craft", d: "Behavior research + thoughtful design + AI that actually helps." },
];

const About = () => (
  <>
    <section className="container mx-auto px-4 pt-32 pb-16 sm:pt-40">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">About</p>
        <h1 className="font-display text-5xl font-bold sm:text-6xl">
          We believe you can <span className="text-gradient">reset, right.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Reset Right was born from a simple frustration: most habit apps track behavior, but none change it.
          We built an AI companion that meets you in the moment of resistance — not after the fact.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="reveal mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-8 -z-10 bg-gradient-orb opacity-60 blur-3xl" />
          <img src={mascot} alt="Reset Right mascot" className="mx-auto h-72 w-72 animate-float drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)]" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Meet Nudge</h2>
          <p className="mt-4 text-muted-foreground">
            Our mascot — and your companion. Nudge is the friendly face of the
            AI coach: encouraging when you doubt, celebratory when you win,
            and quietly present when you just need a nudge.
          </p>
          <p className="mt-4 text-muted-foreground">
            Behind Nudge is a transformation engine built on adaptive learning,
            context awareness, and 21-day identity programs proven to drive
            measurable behavioral change.
          </p>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-24">
      <div className="reveal mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">What we stand for</h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <div key={v.t} className="reveal hover-lift rounded-3xl border border-border bg-gradient-card p-6" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft-glow">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold">{v.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container mx-auto px-4 py-24">
      <div className="reveal grid gap-6 sm:grid-cols-3">
        {[
          { v: "12 weeks", l: "From idea to launch" },
          { v: "21 days", l: "To a new identity" },
          { v: "∞", l: "Resets you can take" },
        ].map((s, i) => (
          <div key={i} className="glass rounded-3xl p-8 text-center">
            <p className="font-display text-4xl font-bold text-gradient">{s.v}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
