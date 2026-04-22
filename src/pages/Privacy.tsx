const sections = [
  { t: "What we collect", b: "Account info (email, name), in-app interactions (habits you track, AI coach conversations), device info, and usage analytics. We never collect data without a clear reason tied to making the product work better for you." },
  { t: "How we use it", b: "To personalize your journeys, deliver context-aware nudges, improve the AI coach, and keep the service secure. That's it. We do not sell your data — ever." },
  { t: "AI processing", b: "AI features process the messages and habits you share with the coach. Conversations are encrypted in transit and at rest. You can delete your AI history at any time from settings." },
  { t: "Buddy system & sharing", b: "Sharing with buddies is opt-in and granular. You choose what's shared (e.g., daily check-in only, full progress, etc.) and you can revoke access instantly." },
  { t: "Data retention", b: "We keep your data while your account is active. Delete your account and we wipe it within 30 days, except where law requires longer retention." },
  { t: "Your rights", b: "Access, export, correct, or delete your data any time from settings — or email privacy@resetright.app." },
  { t: "Security", b: "Industry-standard encryption (TLS 1.3 in transit, AES-256 at rest), regular security audits, and a strict access policy for our team." },
  { t: "Contact", b: "Questions? privacy@resetright.app" },
];

const Privacy = () => (
  <>
    <section className="container mx-auto px-4 pt-32 pb-12 sm:pt-40">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Legal</p>
        <h1 className="font-display text-5xl font-bold sm:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: April 2026</p>
      </div>
    </section>

    <section className="container mx-auto px-4 pb-24">
      <div className="mx-auto max-w-3xl space-y-4">
        {sections.map((s, i) => (
          <article key={s.t} className="reveal rounded-2xl border border-border bg-gradient-card p-6" style={{ transitionDelay: `${i * 50}ms` }}>
            <h2 className="font-display text-xl font-bold">{s.t}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Privacy;
