import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 py-16 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <span className="font-mono text-sm font-bold tracking-widest text-foreground uppercase">
          Neural<span className="text-primary">.</span>Solutions
        </span>
        <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
          AI-powered digital solutions that transform how businesses operate and grow.
        </p>
      </div>

      <div>
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-4">Navigation</span>
        <div className="space-y-2">
          {[
            { to: "/", label: "Home" },
            { to: "/case-studies", label: "Case Studies" },
            { to: "/about", label: "About" },
            { to: "/book-audit", label: "Book Audit" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block font-mono text-xs text-muted-foreground hover:text-primary transition-colors cursor-none"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-4">Contact</span>
        <a href="mailto:hello@neuralsolutions.dev" className="block font-mono text-xs text-muted-foreground hover:text-primary transition-colors cursor-none">
          hello@neuralsolutions.dev
        </a>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border/20">
      <p className="font-mono text-xs text-muted-foreground/50 text-center">
        © {new Date().getFullYear()} Neural Solutions. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
