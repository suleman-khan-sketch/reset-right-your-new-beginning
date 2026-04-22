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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={`glass-strong relative flex w-full max-w-5xl items-center gap-2 rounded-full p-2 pl-4 transition-all duration-500 ${
          scrolled ? "shadow-elegant" : "shadow-card"
        }`}
        aria-label="Primary"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 pr-2">
          <div className="relative h-9 w-9 shrink-0">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-md" />
            <img src={mascot} alt="Reset Right mascot" className="relative h-9 w-9 object-contain" />
          </div>
          <span className="hidden font-display text-lg font-bold tracking-tight sm:block">
            Reset <span className="text-gradient">Right</span>
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
          className="ml-auto hidden items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:scale-[1.03] hover:shadow-glow md:flex"
        >
          <Sparkles className="h-4 w-4" />
          Get the App
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
