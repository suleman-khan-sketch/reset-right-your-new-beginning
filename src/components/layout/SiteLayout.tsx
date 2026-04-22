import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollReveal from "./ScrollReveal";

const SiteLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-orb blur-3xl opacity-40 animate-pulse-glow" />
        <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-orb blur-3xl opacity-30 animate-float-slow" />
      </div>
      <ScrollReveal />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
