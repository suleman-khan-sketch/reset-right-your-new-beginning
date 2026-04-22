import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  { t: "The science behind 21-day identity change", c: "Habits", time: "6 min", d: "Why three weeks is the sweet spot for rewiring behavior — and what most apps get wrong." },
  { t: "Doom-scrolling: a 5-step exit plan", c: "Focus", time: "4 min", d: "A practical, judgement-free protocol to reclaim your attention without going cold turkey." },
  { t: "Why streaks fail (and what works instead)", c: "Psychology", time: "7 min", d: "Streaks create fragile motivation. Identity-based goals create durable change. Here's the difference." },
  { t: "Designing your night routine for deep sleep", c: "Sleep", time: "5 min", d: "Three anchor habits that make falling asleep effortless and waking up actually pleasant." },
  { t: "AI coaching vs. human coaching: the truth", c: "AI", time: "8 min", d: "When AI wins, when humans win, and why Reset Right uses both." },
  { t: "Building a buddy system that doesn't suck", c: "Community", time: "5 min", d: "Most accountability partners burn out. Here's how to design a system that lasts." },
];

const Blog = () => (
  <>
    <section className="container mx-auto px-4 pt-32 pb-12 sm:pt-40">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Blog</p>
        <h1 className="font-display text-5xl font-bold sm:text-6xl">
          Notes on <span className="text-gradient">becoming.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Research, reflections, and field notes on building a life you actually want.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <article
            key={p.t}
            className="reveal group hover-lift relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="aspect-[16/10] -m-6 mb-5 overflow-hidden rounded-t-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent">
              <div className="grid-bg flex h-full w-full items-center justify-center">
                <span className="font-display text-5xl font-bold text-primary/30">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">{p.c}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.time}</span>
            </div>
            <h2 className="mt-4 font-display text-xl font-bold leading-snug">{p.t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            <Link to="/blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary story-link">
              Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Blog;
