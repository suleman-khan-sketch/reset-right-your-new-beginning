import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import mascot from "@/assets/mascot.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-orb blur-3xl opacity-50" />
      </div>
      <div className="text-center">
        <img src={mascot} alt="" className="mx-auto h-28 w-28 animate-float drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]" />
        <h1 className="mt-6 font-display text-7xl font-bold text-gradient">404</h1>
        <p className="mt-4 max-w-sm text-muted-foreground">
          This page took a wrong turn. Let's reset and start over.
        </p>
        <Link
          to="/"
          className="btn-glow mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          <Home className="h-4 w-4" /> Back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
