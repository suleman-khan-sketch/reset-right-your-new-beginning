import { Link } from "react-router-dom";
import {
  Shield,
  Database,
  Lock,
  Share2,
  Globe,
  UserCheck,
  Trash2,
  Baby,
  Mail,
  Sparkles,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

const lastUpdated = "April 22, 2026";
const effectiveDate = "April 22, 2026";

const sections = [
  {
    id: "overview",
    icon: Shield,
    title: "1. Overview",
    body: (
      <>
        <p>
          UnHabit (“we,” “us,” or “our”) operates the UnHabit mobile application
          and related services (collectively, the “Service”). This Privacy
          Policy explains what information we collect, how we use it, who we
          share it with, and the rights you have over your data.
        </p>
        <p>
          By creating an account or using the Service, you agree to this Privacy
          Policy. If you do not agree, please do not use the Service.
        </p>
        <p>
          <strong className="text-foreground">Data Controller:</strong>{" "}
          Ahmadzai (Pvt) Ltd — privacy@unhabit.app
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    icon: Database,
    title: "2. Information We Collect",
    body: (
      <>
        <p>We collect the following categories of information:</p>
        <h4 className="mt-4 font-semibold text-foreground">a) Account &amp; Profile Data</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Email address, display name, and password (hashed)</li>
          <li>Optional profile photo</li>
          <li>Sign-in identifiers if you use Sign in with Apple or Google</li>
        </ul>
        <h4 className="mt-4 font-semibold text-foreground">b) Habit &amp; App Activity Data</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Habits you choose to track (free-text descriptions you provide)</li>
          <li>Daily check-ins, micro-task completions, streaks, XP, and journey progress</li>
          <li>Conversations with the AI Coach</li>
          <li>Reflections, journal entries, and reactions you create</li>
        </ul>
        <h4 className="mt-4 font-semibold text-foreground">c) Device &amp; Diagnostic Data</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Device model, operating system version, app version, and language</li>
          <li>IP address and approximate region (derived from IP)</li>
          <li>Crash logs, performance metrics, and error reports</li>
        </ul>
        <h4 className="mt-4 font-semibold text-foreground">d) Optional Permissions (only if you enable them)</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Notifications:</strong> to deliver context-aware nudges and
            reminders.
          </li>
          <li>
            <strong>Approximate location:</strong> only used to tailor nudges
            (e.g., gym vs. home context). Never tracked in the background and
            never shared with advertisers.
          </li>
          <li>
            <strong>Calendar (read-only):</strong> to avoid sending nudges
            during meetings. We never store calendar event content.
          </li>
          <li>
            <strong>Health data (read-only, optional):</strong> sleep and
            activity signals if you opt in. Health data never leaves your
            device unencrypted and is never shared with third parties.
          </li>
        </ul>
        <h4 className="mt-4 font-semibold text-foreground">e) Payment Data</h4>
        <p className="mt-2">
          Subscriptions are processed by Apple App Store and Google Play. We
          receive a transaction confirmation and subscription status — we do
          not receive or store your full payment card details.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    icon: Sparkles,
    title: "3. How We Use Your Information",
    body: (
      <>
        <p>We use your information only for the following purposes:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Provide, personalize, and improve the Service</li>
          <li>Generate your AI-powered 21-day journeys and adaptive coaching</li>
          <li>Deliver context-aware notifications you opted into</li>
          <li>Detect, prevent, and respond to abuse, fraud, or security incidents</li>
          <li>Communicate service updates, security alerts, and support replies</li>
          <li>Analyze aggregated, de-identified usage to improve features</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mt-3">
          <strong className="text-foreground">We do not sell your personal data.</strong>{" "}
          We do not use your data for third-party advertising. We do not build
          advertising profiles.
        </p>
      </>
    ),
  },
  {
    id: "ai-processing",
    icon: Sparkles,
    title: "4. AI Processing",
    body: (
      <>
        <p>
          Some features (AI Coach, habit diagnostic, smart suggestions) use
          large language models. Messages and habit descriptions you submit are
          sent to our AI provider (OpenAI) for processing under a strict data
          processing agreement.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Your AI inputs are <strong>not</strong> used to train third-party foundation models.</li>
          <li>AI conversations are encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
          <li>You can clear your AI history at any time from Settings → Privacy.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    icon: Share2,
    title: "5. How We Share Information",
    body: (
      <>
        <p>We share data only in these limited situations:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            <strong>Service providers (sub-processors):</strong> hosting (AWS),
            authentication (Firebase Auth), AI processing (OpenAI), crash
            reporting (Sentry), email delivery (Postmark), and payment
            confirmation (Apple, Google). Each is bound by a data processing
            agreement.
          </li>
          <li>
            <strong>Buddy sharing:</strong> only the data you explicitly choose
            to share (e.g., daily check-in status) is shown to your buddy.
            Sharing is opt-in, granular, and revocable instantly.
          </li>
          <li>
            <strong>Legal requirements:</strong> when required by law, valid
            legal process, or to protect the rights, safety, or property of
            UnHabit or others.
          </li>
          <li>
            <strong>Business transfers:</strong> if we merge with or are
            acquired by another company, your data may be transferred under the
            same protections described here.
          </li>
        </ul>
        <p className="mt-3">
          We <strong>never</strong> sell, rent, or trade your personal data.
        </p>
      </>
    ),
  },
  {
    id: "international",
    icon: Globe,
    title: "6. International Data Transfers",
    body: (
      <p>
        Our infrastructure is hosted in the United States and the European
        Union. If you access the Service from outside these regions, your data
        may be transferred to and processed in countries with different data
        protection laws. We use standard contractual clauses (SCCs) and
        equivalent safeguards to protect your data in transit and at rest.
      </p>
    ),
  },
  {
    id: "retention",
    icon: RefreshCw,
    title: "7. Data Retention",
    body: (
      <>
        <p>
          We keep your account data for as long as your account is active.
          When you delete your account, we permanently erase your personal data
          within 30 days, except where retention is legally required (e.g.,
          financial records — kept for 7 years).
        </p>
        <p className="mt-2">
          Aggregated, de-identified analytics that cannot be linked back to you
          may be retained indefinitely to improve the Service.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "8. Your Rights",
    body: (
      <>
        <p>
          Depending on where you live (e.g., GDPR in the EEA/UK, CCPA in
          California), you have the following rights:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li><strong>Access</strong> — request a copy of your personal data.</li>
          <li><strong>Correction</strong> — fix inaccurate or incomplete data.</li>
          <li><strong>Deletion</strong> — request erasure of your data.</li>
          <li><strong>Portability</strong> — export your data in a machine-readable format.</li>
          <li><strong>Restriction or objection</strong> — limit how we process your data.</li>
          <li><strong>Withdraw consent</strong> — for any consent-based processing.</li>
          <li><strong>Lodge a complaint</strong> with your local data protection authority.</li>
        </ul>
        <p className="mt-3">
          You can exercise any of these rights from{" "}
          <strong className="text-foreground">Settings → Privacy</strong> in
          the app, or by emailing{" "}
          <a className="text-primary hover:underline" href="mailto:privacy@unhabit.app">
            privacy@unhabit.app
          </a>
          . We respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "security",
    icon: Lock,
    title: "9. Security",
    body: (
      <>
        <p>We protect your data using industry-standard measures:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>TLS 1.3 encryption in transit</li>
          <li>AES-256 encryption at rest</li>
          <li>Hashed passwords (bcrypt) — we never see your plain-text password</li>
          <li>Principle-of-least-privilege internal access controls</li>
          <li>Regular third-party security audits and penetration tests</li>
          <li>24/7 monitoring and incident response</li>
        </ul>
        <p className="mt-3">
          No system is 100% secure. If we ever experience a breach affecting
          your data, we will notify you and the relevant authorities within 72
          hours, as required by GDPR.
        </p>
      </>
    ),
  },
  {
    id: "children",
    icon: Baby,
    title: "10. Children's Privacy",
    body: (
      <>
        <p>
          UnHabit is not directed to children under 13 (or under 16 in the
          European Economic Area). We do not knowingly collect personal data
          from children below this age.
        </p>
        <p className="mt-2">
          If you are a parent or guardian and believe your child has provided
          us with personal data, please contact{" "}
          <a className="text-primary hover:underline" href="mailto:privacy@unhabit.app">
            privacy@unhabit.app
          </a>{" "}
          and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: "deletion",
    icon: Trash2,
    title: "11. How to Delete Your Account",
    body: (
      <>
        <p>You can delete your account at any time:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            <strong>In-app:</strong> Settings → Account → Delete Account.
            Confirm with your password. All data is queued for permanent
            deletion within 30 days.
          </li>
          <li>
            <strong>By email:</strong> send a deletion request from your
            registered email to{" "}
            <a className="text-primary hover:underline" href="mailto:privacy@unhabit.app">
              privacy@unhabit.app
            </a>{" "}
            with subject "Delete my account".
          </li>
        </ul>
        <p className="mt-3">
          Active subscriptions must be cancelled separately through Apple App
          Store or Google Play before account deletion.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    icon: AlertTriangle,
    title: "12. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy occasionally. If changes are
        material, we will notify you in-app and by email at least 14 days
        before they take effect. The “Last updated” date at the top of this
        page always reflects the most recent revision.
      </p>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "13. Contact Us",
    body: (
      <>
        <p>For privacy questions or to exercise your rights, contact us at:</p>
        <ul className="mt-3 space-y-1 pl-5">
          <li>
            <strong>Email:</strong>{" "}
            <a className="text-primary hover:underline" href="mailto:privacy@unhabit.app">
              privacy@unhabit.app
            </a>
          </li>
          <li>
            <strong>Support:</strong>{" "}
            <a className="text-primary hover:underline" href="mailto:support@unhabit.app">
              support@unhabit.app
            </a>
          </li>
          <li>
            <strong>Company:</strong> Ahmadzai (Pvt) Ltd
          </li>
        </ul>
      </>
    ),
  },
];

const PrivacyPolicy = () => (
  <>
    {/* Header */}
    <section className="container mx-auto px-4 pt-32 pb-12 sm:pt-40">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Legal
        </p>
        <h1 className="font-display text-5xl font-bold sm:text-6xl">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Effective: {effectiveDate}</span>
          <span aria-hidden>•</span>
          <span>Last updated: {lastUpdated}</span>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          Your privacy is fundamental to UnHabit. This policy explains exactly
          what we collect, how we use it, and the controls you have. Plain
          English. No dark patterns.
        </p>
      </div>
    </section>

    {/* Table of contents */}
    <section className="container mx-auto px-4 pb-8">
      <div className="reveal mx-auto max-w-3xl rounded-2xl border border-border bg-card/40 p-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          On this page
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Sections */}
    <section className="container mx-auto px-4 pb-24">
      <div className="mx-auto max-w-3xl space-y-4">
        {sections.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className="reveal scroll-mt-28 rounded-2xl border border-border bg-gradient-card p-6 sm:p-8"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                {s.title}
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {s.body}
            </div>
          </article>
        ))}

        {/* Footer note */}
        <div className="reveal rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need help understanding any of this?{" "}
            <Link to="/support" className="font-semibold text-primary hover:underline">
              Visit Support
            </Link>{" "}
            or email{" "}
            <a
              className="font-semibold text-primary hover:underline"
              href="mailto:privacy@unhabit.app"
            >
              privacy@unhabit.app
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
