import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, Check } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="container mx-auto px-4 pt-32 pb-12 sm:pt-40">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="font-display text-5xl font-bold sm:text-6xl">
            Let's <span className="text-gradient">talk.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Questions, feedback, partnership ideas — we read everything.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="reveal space-y-4">
            {[
              { icon: Mail, t: "Email", v: "hello@resetright.app" },
              { icon: MessageCircle, t: "Support", v: "support@resetright.app" },
              { icon: MapPin, t: "Based in", v: "Remote · Worldwide" },
            ].map((c) => (
              <div key={c.t} className="hover-lift rounded-2xl border border-border bg-gradient-card p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-4 w-4" />
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</p>
                <p className="mt-1 font-semibold">{c.v}</p>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="reveal space-y-4 rounded-3xl border border-border bg-gradient-card p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                <input required className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                <input required type="email" className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60" placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject</label>
              <input required className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60" placeholder="How can we help?" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required rows={5} className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60" placeholder="Tell us a bit more…" />
            </div>
            <button
              type="submit"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              {sent ? <><Check className="h-4 w-4" /> Sent</> : <><Send className="h-4 w-4" /> Send message</>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
