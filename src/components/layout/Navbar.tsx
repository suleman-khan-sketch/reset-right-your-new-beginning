import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import mascot from "@/assets/mascot.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const SHRINK_RANGE = 160; // px of scroll over which the navbar gradually morphs

const Navbar = () => {
  const [progress, setProgress] = useState(0); // 0 = full-width bar, 1 = floating pill
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / SHRINK_RANGE));
      setProgress(p);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Interpolated values: smooth easing across the scroll range
  const eased = progress * progress * (3 - 2 * progress); // smoothstep
  const headerStyle: React.CSSProperties = {
    paddingTop: `${eased * 24}px`,
    paddingLeft: `${eased * 16}px`,
    paddingRight: `${eased * 16}px`,
  };
  // width morphs from 100vw → 64rem (max-w-5xl), shadow & radius scale together
  const navStyle: React.CSSProperties = {
    width: `calc((1 - ${eased}) * 100vw + ${eased} * min(64rem, 100vw - 32px))`,
    borderRadius: `${eased * 9999}px`,
    boxShadow: eased > 0.5 ? "var(--shadow-elegant)" : "var(--shadow-card)",
  };

  return (
    <header style={headerStyle} className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <nav
        style={navStyle}
        className="glass-strong relative flex items-center gap-2 p-2 pl-4 shadow-card"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 pr-2">
          <div className="relative h-9 w-9 shrink-0">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-md" />
            <img src={mascot} alt="Reset Right mascot" className="relative h-9 w-9 object-contain" />
          </div>
          <span className="hidden font-display text-lg font-bold tracking-tight sm:block">
            Reset<span className="text-gradient">Right</span>
          </span>
        </Link>

        {/* Desktop links — centered between logo and CTA */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-primary shadow-soft-glow" />
                    )}
                    {l.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/pricing"
          className="ml-auto hidden items-center gap-1.5 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft-glow transition-all hover:scale-[1.04] hover:shadow-glow animate-pulse-glow md:flex"
        >
          <Sparkles className="h-4 w-4" />
          Get the App
          <span className="ml-1 rounded-full bg-primary-foreground/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
            New
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="glass-strong absolute left-4 right-4 top-20 z-40 rounded-3xl p-4 md:hidden animate-fade-in-up">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? "bg-gradient-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/pricing"
                className="mt-2 block rounded-2xl bg-foreground px-4 py-3 text-center text-base font-semibold text-background"
              >
                Get the App
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
