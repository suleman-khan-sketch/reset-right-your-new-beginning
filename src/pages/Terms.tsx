const sections = [
  { t: "Acceptance", b: "By using Reset Right you agree to these terms. If you don't agree, please don't use the service." },
  { t: "Your account", b: "You're responsible for keeping your account secure. One person per account, please. You must be at least 13 to use Reset Right (16 in the EU)." },
  { t: "Subscriptions & billing", b: "Pro and Premium subscriptions auto-renew until cancelled. Manage or cancel from your app store account or in-app settings. We offer a 7-day free trial — cancel before it ends and you won't be charged." },
  { t: "Refunds", b: "Refund policies follow your app store's policies (Apple App Store / Google Play). Reach out to support@resetright.app for any billing questions." },
  { t: "Acceptable use", b: "Don't use Reset Right to harm yourself or others, send spam, scrape data, reverse-engineer the app, or violate any laws. We may suspend accounts that do." },
  { t: "AI content disclaimer", b: "Our AI coach offers guidance, not medical advice. Reset Right is not a substitute for professional mental health care. If you're in crisis, please contact local emergency services." },
  { t: "Intellectual property", b: "Reset Right, the mascot, and all related branding are ours. The content you create (habits, journeys, notes) belongs to you." },
  { t: "Termination", b: "You can delete your account anytime. We may suspend accounts that violate these terms. We'll always tell you why if we do." },
  { t: "Changes", b: "We'll notify you of material changes. Continued use after changes means you accept them." },
  { t: "Contact", b: "Questions? legal@resetright.app" },
];

const Terms = () => (
  <>
    <section className="container mx-auto px-4 pt-32 pb-12 sm:pt-40">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Legal</p>
        <h1 className="font-display text-5xl font-bold sm:text-6xl">Terms of Service</h1>
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

export default Terms;
