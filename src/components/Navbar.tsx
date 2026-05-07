import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  // Determine navbar style based on page and scroll state
  const getNavbarStyle = () => {
    if (isLandingPage) {
      // Landing page: transparent with white text, subtle blur on scroll
      return {
        bgClass: scrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent",
        textClass: "text-white/80 hover:text-white",
        logoClass: "text-white",
        buttonClass: "text-white border-white/30 hover:border-white/60 hover:bg-white/5",
        dropdownBg: "bg-black/90",
        dropdownText: "text-white/80 hover:text-white hover:bg-white/5",
        mobileBg: "bg-black/95",
        mobileText: "text-white/80 hover:text-white"
      };
    } else {
      // Other pages: solid background with dark text
      return {
        bgClass: "bg-background/95 backdrop-blur-md shadow-sm border-b border-border",
        textClass: "text-muted-foreground hover:text-foreground",
        logoClass: "text-foreground",
        buttonClass: "text-foreground border-border hover:border-foreground hover:bg-secondary/50",
        dropdownBg: "bg-background",
        dropdownText: "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
        mobileBg: "bg-background",
        mobileText: "text-muted-foreground hover:text-foreground"
      };
    }
  };

  const style = getNavbarStyle();

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${style.bgClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative h-20 flex items-center">

          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            <Link
              to="/"
              className={`font-sans text-xs uppercase tracking-wider ${style.textClass} transition-colors duration-200`}
            >
              Home
            </Link>

            {isLandingPage ? (
              <button
                onClick={() => scrollToSection('case-studies')}
                className={`font-sans text-xs uppercase tracking-wider ${style.textClass} transition-colors duration-200`}
              >
                Case Studies
              </button>
            ) : (
              <Link
                to="/case-studies"
                className={`font-sans text-xs uppercase tracking-wider ${style.textClass} transition-colors duration-200`}
              >
                Case Studies
              </Link>
            )}

            <Link
              to="/about"
              className={`font-sans text-xs uppercase tracking-wider ${style.textClass} transition-colors duration-200`}
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-sans text-xs uppercase tracking-wider ${style.textClass} transition-colors duration-200`}
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className={`${style.dropdownBg} backdrop-blur-md rounded-md border ${isLandingPage ? 'border-white/10' : 'border-border'} overflow-hidden shadow-lg`}>
                    <Link
                      to="/services/ai-solutions"
                      className={`block px-4 py-3 font-sans text-xs uppercase tracking-wider ${style.dropdownText} transition-colors`}
                    >
                      AI Solutions
                    </Link>
                    <Link
                      to="/services/software-development"
                      className={`block px-4 py-3 font-sans text-xs uppercase tracking-wider ${style.dropdownText} transition-colors`}
                    >
                      Software Development
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Logo - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link
              to="/"
              className={`font-sans text-xl font-light tracking-[0.3em] ${style.logoClass} uppercase hover:opacity-80 transition-opacity duration-300`}
            >
              NEURAL
            </Link>
          </div>

          {/* Right CTA - Desktop */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <Link
              to="/book-audit"
              className={`px-6 py-2.5 font-sans text-xs uppercase tracking-wider ${style.buttonClass} border rounded-md transition-all duration-200`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link
              to="/"
              className={`font-sans text-base font-light tracking-[0.25em] ${style.logoClass} uppercase`}
            >
              NEURAL
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle mobile menu"
              aria-expanded={open}
              className={`${style.logoClass} p-2`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`lg:hidden ${style.mobileBg} backdrop-blur-md border-t ${isLandingPage ? 'border-white/10' : 'border-border'}`}>
          <div className="px-6 py-6 space-y-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`block font-sans text-sm uppercase tracking-wider ${style.mobileText} py-2`}
            >
              Home
            </Link>

            {isLandingPage ? (
              <button
                onClick={() => scrollToSection('case-studies')}
                className={`block w-full text-left font-sans text-sm uppercase tracking-wider ${style.mobileText} py-2`}
              >
                Case Studies
              </button>
            ) : (
              <Link
                to="/case-studies"
                onClick={() => setOpen(false)}
                className={`block font-sans text-sm uppercase tracking-wider ${style.mobileText} py-2`}
              >
                Case Studies
              </Link>
            )}

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={`block font-sans text-sm uppercase tracking-wider ${style.mobileText} py-2`}
            >
              About
            </Link>

            <div className="space-y-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center justify-between w-full font-sans text-sm uppercase tracking-wider ${style.mobileText} py-2`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className={`pl-4 space-y-2 border-l ${isLandingPage ? 'border-white/10' : 'border-border'}`}>
                  <Link
                    to="/services/ai-solutions"
                    onClick={() => setOpen(false)}
                    className={`block font-sans text-sm uppercase tracking-wider ${style.mobileText} opacity-80 py-2`}
                  >
                    AI Solutions
                  </Link>
                  <Link
                    to="/services/software-development"
                    onClick={() => setOpen(false)}
                    className={`block font-sans text-sm uppercase tracking-wider ${style.mobileText} opacity-80 py-2`}
                  >
                    Software Development
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/book-audit"
              onClick={() => setOpen(false)}
              className={`block w-full text-center mt-6 px-6 py-3 font-sans text-sm uppercase tracking-wider ${style.buttonClass} border rounded-md transition-all duration-200`}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
