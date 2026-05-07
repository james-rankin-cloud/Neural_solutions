import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isLandingPage) {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on landing page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  // Navigation links change based on whether we're on landing page or not
  const links = isLandingPage
    ? [
        { to: "/about", label: "About" },
        { label: "Case Studies", action: () => scrollToSection('case-studies') },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/case-studies", label: "Case Studies" },
        { to: "/about", label: "About" },
      ];

  return (
    <nav role="navigation" aria-label="Main navigation" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-sans text-sm font-bold tracking-widest text-foreground uppercase">
          Neural Solutions
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            'action' in l ? (
              <button
                key={l.label}
                onClick={l.action}
                className="font-sans text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                aria-current={location.pathname === l.to ? "page" : undefined}
                className={`font-sans text-xs uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname === l.to ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            )
          ))}
          <Link
            to="/services"
            aria-current={location.pathname.startsWith("/services") ? "page" : undefined}
            className={`font-sans text-xs uppercase tracking-wider transition-colors duration-200 ${
              location.pathname.startsWith("/services") ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Services
          </Link>
          <Button variant="hero" size="sm" asChild>
            <Link to="/book-audit" className="font-sans text-xs uppercase tracking-wider">
              Book Now
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          className="md:hidden text-foreground "
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border/30 px-6 py-4 space-y-3">
          {links.map((l) => (
            'action' in l ? (
              <button
                key={l.label}
                onClick={l.action}
                className="block w-full text-left font-sans text-xs uppercase tracking-wider text-muted-foreground"
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                aria-current={location.pathname === l.to ? "page" : undefined}
                className={`block font-sans text-xs uppercase tracking-wider ${
                  location.pathname === l.to ? "text-foreground font-bold" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            )
          ))}
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            aria-current={location.pathname.startsWith("/services") ? "page" : undefined}
            className={`block font-sans text-xs uppercase tracking-wider ${
              location.pathname.startsWith("/services") ? "text-foreground font-bold" : "text-muted-foreground"
            }`}
          >
            Services
          </Link>
          <Link
            to="/book-audit"
            onClick={() => setOpen(false)}
            className="block font-sans text-xs uppercase tracking-wider text-foreground font-bold"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;