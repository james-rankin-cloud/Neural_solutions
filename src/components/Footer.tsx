import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 py-20 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      {/* Left: Big closing statement */}
      <div>
        <h3 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-[1.05] mb-4">
          Stop planning.
          <br />
          <span className="font-serif italic text-primary">Start shipping.</span>
        </h3>
        <p className="text-muted-foreground font-normal max-w-sm leading-relaxed">
          Neural Solutions builds AI systems that run your business while you focus on growing it.
        </p>
      </div>

      {/* Right: Nav + contact */}
      <div className="flex gap-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-4">Navigation</span>
          <div className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
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
    </div>

    <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-border/20">
      <p className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-wider">
        © {new Date().getFullYear()} Neural Solutions. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;