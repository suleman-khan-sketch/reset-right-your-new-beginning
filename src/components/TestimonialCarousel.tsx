import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import mascot from "@/assets/mascot.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I tried every habit app. ResetRight is the first one that actually changed how I see myself. Day 21 felt like meeting a new version of me.",
    name: "Maya R.",
    detail: "Beat doom-scrolling, day 47 strong",
    avatar: mascot,
  },
  {
    quote:
      "The AI nudges arrive exactly when my willpower dips. It's uncanny — like having a coach in my pocket who actually pays attention.",
    name: "Jordan P.",
    detail: "Quit late-night snacking, day 32",
    avatar: avatar1,
  },
  {
    quote:
      "I've tried journaling, streak apps, even therapy apps. ResetRight is the first one where I felt understood and not judged.",
    name: "Aiden K.",
    detail: "Rebuilt morning routine, day 60",
    avatar: avatar2,
  },
  {
    quote:
      "The 21-day journey gave structure to something I'd been trying for years. By week three I genuinely felt like a different person.",
    name: "Priya S.",
    detail: "Daily meditation, day 84",
    avatar: avatar3,
  },
  {
    quote:
      "What hooked me was the slip recovery. I missed two days, expected guilt — got encouragement and a smarter plan instead.",
    name: "Marcus L.",
    detail: "Cut social media 70%, day 28",
    avatar: avatar4,
  },
  {
    quote:
      "My buddy and I check in every morning. The accountability layer is the secret sauce — I show up because she does.",
    name: "Elena G.",
    detail: "Daily walks, day 51",
    avatar: avatar1,
  },
  {
    quote:
      "I've never finished a self-improvement program. ResetRight made it feel like a game I actually wanted to keep playing.",
    name: "Tom H.",
    detail: "No phone before bed, day 39",
    avatar: avatar2,
  },
  {
    quote:
      "The identity analytics blew me away. Seeing the chart of who I'm becoming made every small win feel meaningful.",
    name: "Sara N.",
    detail: "Reading habit, day 75",
    avatar: avatar3,
  },
  {
    quote:
      "Honestly, the chat with the AI coach feels more real than most conversations. It remembers, it adapts, it cheers me on.",
    name: "Daniel V.",
    detail: "Quit vaping, day 42",
    avatar: avatar4,
  },
  {
    quote:
      "Three weeks in and my anxiety around routines disappeared. ResetRight isn't a tracker — it's a transformation engine.",
    name: "Layla M.",
    detail: "Evening wind-down, day 23",
    avatar: avatar1,
  },
];

const ROTATION_MS = 4000;

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <div
      className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-primary/20 bg-gradient-card p-10 sm:p-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-orb opacity-50 blur-3xl" />

      <div className="relative min-h-[260px] sm:min-h-[220px]">
        <div key={index} className="animate-fade-in">
          <div className="flex items-center gap-1 text-warning">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>

          <blockquote className="mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl">
            “{t.quote}”
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <img
              src={t.avatar}
              alt=""
              loading="lazy"
              className="h-12 w-12 rounded-full bg-primary/20 object-cover p-0.5"
            />
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.detail}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="relative mt-8 flex flex-wrap items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
