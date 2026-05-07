import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 py-20 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      {/* Left: Big closing statement */}
      <div>
        <h3 className="font-sans text-3xl md:text-4xl font-bold text-foreground leading-[1.05] mb-4">
          Stop planning.
          <br />
          <span className="font-sans">Start shipping.</span>
        </h3>
        <p className="font-sans text-muted-foreground font-normal max-w-sm leading-relaxed">
          Neural Solutions builds AI systems that run your business while you focus on growing it. Based in Victoria, BC, serving businesses across Canada.
        </p>
      </div>

      {/* Right: Nav + contact */}
      <div className="flex gap-16">
        <div>
          <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-4">Navigation</span>
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
                className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground block mb-4">Contact</span>
          <a href="mailto:growth@neuralcoremarketing.com" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
            growth@neuralcoremarketing.com
          </a>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-border/20">
      <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
        © {new Date().getFullYear()} Neural Solutions. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;