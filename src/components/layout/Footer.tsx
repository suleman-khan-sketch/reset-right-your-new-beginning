import { Link } from "react-router-dom";
import { Instagram, Twitter, Github, Mail } from "lucide-react";
import mascot from "@/assets/mascot.png";

const Footer = () => (
  <footer className="relative mt-32 border-t border-border/60 bg-card/40 backdrop-blur-xl">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container mx-auto grid gap-12 py-16 md:grid-cols-4">
      <div className="md:col-span-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={mascot} alt="Reset Right mascot" className="h-10 w-10" />
          <span className="font-display text-xl font-bold">
            Reset <span className="text-gradient">Right</span>
          </span>
        </Link>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
          AI-powered habit transformation. Break destructive patterns and build a
          new identity in 21 days.
        </p>
        <div className="mt-6 flex gap-3">
          {[Instagram, Twitter, Github, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Social link"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-soft-glow"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Product</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><Link to="/features" className="hover:text-primary">Features</Link></li>
          <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
          <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          <li><Link to="/privacy" className="hover:text-primary">Privacy</Link></li>
          <li><Link to="/terms" className="hover:text-primary">Terms</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/50 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Reset Right. All rights reserved.</p>
        <p>Crafted for lasting change.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
