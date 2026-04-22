import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  Mail,
  LifeBuoy,
  MessageCircle,
  Send,
  Check,
  ChevronDown,
  Smartphone,
  CreditCard,
  Lock,
  Trash2,
  Bell,
  RefreshCw,
  HelpCircle,
  Shield,
  Clock,
} from "lucide-react";

/* ============================== FAQ ============================== */
const faqs = [
  {
    icon: Smartphone,
    q: "Which devices does UnHabit support?",
    a: "UnHabit is available on iOS 15.0+ and Android 9.0+. The app works on iPhone, iPad, and all major Android phones and tablets.",
  },
  {
    icon: HelpCircle,
    q: "How do I get started?",
    a: "After installing UnHabit, sign up with your email or use Sign in with Apple/Google. Tell the AI which habit you want to change in your own words. The app will build a personalized 21-day journey for you in seconds.",
  },
  {
    icon: Bell,
    q: "How do I turn notifications on or off?",
    a: "Go to Settings → Notifications inside the app to control nudge frequency, quiet hours, and the types of reminders you receive. You can also disable notifications entirely from your device settings.",
  },
  {
    icon: CreditCard,
    q: "How do subscriptions work?",
    a: "UnHabit offers a free plan and optional Pro / Premium subscriptions. All paid plans are billed through the Apple App Store or Google Play. You can cancel anytime from your device's subscription settings — your access continues until the end of the billing period.",
  },
  {
    icon: RefreshCw,
    q: "How do I cancel my subscription?",
    a: "iOS: Settings → [your name] → Subscriptions → UnHabit → Cancel. Android: Google Play → Profile → Payments & subscriptions → Subscriptions → UnHabit → Cancel. We do not process subscription cancellations directly — Apple/Google handle them.",
  },
  {
    icon: CreditCard,
    q: "Can I get a refund?",
    a: "Refunds are handled by Apple and Google. iOS: visit reportaproblem.apple.com. Android: visit play.google.com → Order history → Request refund. If you have trouble, email support@unhabit.app and we'll help you submit the request.",
  },
  {
    icon: Lock,
    q: "I forgot my password. What do I do?",
    a: "On the sign-in screen, tap “Forgot password?” and enter your email. We'll send a reset link valid for 24 hours. If you don't see it within 5 minutes, check your spam folder or email support@unhabit.app.",
  },
  {
    icon: Trash2,
    q: "How do I delete my account and data?",
    a: "In the app: Settings → Account → Delete Account. Confirm with your password. All your personal data is permanently deleted within 30 days. You can also request deletion by emailing privacy@unhabit.app from your registered address.",
  },
  {
    icon: Shield,
    q: "Is my data private and secure?",
    a: "Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never sell your data. We never share AI conversations or habit data with advertisers. Read our full Privacy Policy for details.",
  },
  {
    icon: HelpCircle,
    q: "The app is crashing or behaving strangely — what should I do?",
    a: "First, make sure you're on the latest version of the app and your device's operating system. If the issue continues, try signing out and back in. Still not working? Email support@unhabit.app with your device model, OS version, and a short description — we usually reply within 24 hours.",
  },
  {
    icon: HelpCircle,
    q: "How does the AI Coach work?",
    a: "The AI Coach uses large language models to give you personalized guidance based on the habits and check-ins you share. It is not a substitute for professional medical or psychological advice — if you're experiencing serious mental health challenges, please contact a qualified professional or local helpline.",
  },
  {
    icon: HelpCircle,
    q: "Can I use UnHabit without creating an account?",
    a: "An account is required so we can sync your progress across devices and personalize your AI journey. The minimum information we need is an email address.",
  },
];

/* ============================== PAGE ============================== */
const Support = () => {
  const [sent, setSent] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Support ticket submitted! We'll reply within 24 hours.");
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* HERO */}
      <section className="container mx-auto px-4 pt-32 pb-12 sm:pt-40">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
            <LifeBuoy className="h-3.5 w-3.5" />
            We're here to help
          </div>
          <h1 className="font-display text-5xl font-bold sm:text-6xl">
            Support <span className="text-gradient">Center</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Find answers to common questions, contact our team, or report an
            issue. We typically respond within 24 hours, 7 days a week.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="container mx-auto px-4 pb-12">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            {
              icon: Mail,
              t: "Email Support",
              d: "support@unhabit.app",
              href: "mailto:support@unhabit.app",
              note: "24h response",
            },
            {
              icon: Shield,
              t: "Privacy & Data",
              d: "privacy@unhabit.app",
              href: "mailto:privacy@unhabit.app",
              note: "GDPR & CCPA requests",
            },
            {
              icon: Clock,
              t: "Hours",
              d: "Mon–Sun · 9am–6pm UTC",
              href: null,
              note: "Worldwide team",
            },
          ].map((c, i) => (
            <div
              key={c.t}
              className="reveal hover-lift rounded-2xl border border-border bg-gradient-card p-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {c.t}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-1 block font-semibold transition-colors hover:text-primary"
                >
                  {c.d}
                </a>
              ) : (
                <p className="mt-1 font-semibold">{c.d}</p>
              )}
              <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Frequently asked <span className="text-gradient">questions.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <article
                key={f.q}
                className="reveal overflow-hidden rounded-2xl border border-border bg-gradient-card transition-colors hover:border-primary/30"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="flex-1 font-display text-base font-bold sm:text-lg">
                    {f.q}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      open ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {open && (
                  <div className="px-5 pb-5 pl-[4.75rem] text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="container mx-auto px-4 py-16">
        <div className="reveal mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Still need help?
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Send us a <span className="text-gradient">message.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Tell us what's going on and we'll get back to you within 24 hours.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-3xl border border-border bg-gradient-card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Topic
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                >
                  <option value="" disabled>Select a topic…</option>
                  <option>Account & login</option>
                  <option>Subscription & billing</option>
                  <option>Bug report</option>
                  <option>Feature request</option>
                  <option>Privacy & data</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Device (optional)
                </label>
                <input
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  placeholder="e.g. iPhone 15, iOS 17.4"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={6}
                className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                placeholder="Describe what's happening, what you expected, and the steps to reproduce if it's a bug…"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to our{" "}
                <Link to="/privacypolicy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <button
                type="submit"
                className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* APP INFO BLOCK (helpful for store reviewers) */}
      <section className="container mx-auto px-4 pb-24">
        <div className="reveal mx-auto max-w-3xl rounded-3xl border border-border bg-card/40 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-bold">App information</h3>
          </div>
          <dl className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            <div className="flex justify-between gap-4 border-b border-border/60 pb-2">
              <dt className="text-muted-foreground">App name</dt>
              <dd className="font-semibold">UnHabit</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border/60 pb-2">
              <dt className="text-muted-foreground">Publisher</dt>
              <dd className="font-semibold">Ahmadzai (Pvt) Ltd</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border/60 pb-2">
              <dt className="text-muted-foreground">Platforms</dt>
              <dd className="font-semibold">iOS 15+, Android 9+</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border/60 pb-2">
              <dt className="text-muted-foreground">Age rating</dt>
              <dd className="font-semibold">13+</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border/60 pb-2">
              <dt className="text-muted-foreground">Support email</dt>
              <dd className="font-semibold">support@unhabit.app</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border/60 pb-2">
              <dt className="text-muted-foreground">Privacy contact</dt>
              <dd className="font-semibold">privacy@unhabit.app</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-muted-foreground">
            For privacy details, see our{" "}
            <Link to="/privacypolicy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            . For terms of service, see our{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Support;
