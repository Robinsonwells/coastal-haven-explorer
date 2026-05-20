import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Listings", href: "#listings" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="font-display text-xl font-bold tracking-wide" style={{ color: scrolled ? "hsl(var(--foreground))" : "hsl(var(--primary-foreground))" }}>
          Joe Licari
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-body text-sm tracking-wider uppercase transition-colors hover:text-accent ${
                scrolled ? "text-foreground/70" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:8473441200"
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 font-body text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            (847) 344-1200
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:8473441200"
            className="flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 font-body text-xs font-semibold text-accent-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            (847) 344-1200
          </a>
          <button
            onClick={() => setOpen(!open)}
            style={{ color: scrolled ? "hsl(var(--foreground))" : "hsl(var(--primary-foreground))" }}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl animate-fade-in-scale">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm uppercase tracking-wider text-foreground/70 hover:text-accent py-2"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:8473441200" className="flex items-center gap-2 text-accent font-body font-semibold py-2">
              <Phone className="h-4 w-4" />
              (847) 344-1200
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
