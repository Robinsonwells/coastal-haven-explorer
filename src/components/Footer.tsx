const marqueeItems = [
  "Luxury Homes",
  "Residential",
  "Investment",
  "Barrington",
  "South Barrington",
  "Barrington Hills",
  "Inverness",
  "Lake Zurich",
  "Keller Williams Success Realty",
];

const Footer = () => (
  <footer className="bg-charcoal border-t border-primary-foreground/10">
    <div className="relative overflow-hidden border-b border-primary-foreground/5 py-5">
      <div className="flex w-max gap-12 animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="font-display text-lg uppercase tracking-[0.3em] text-primary-foreground/30"
          >
            {item} <span className="ml-12 text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
    <div className="container mx-auto px-4 py-12 text-center">
      <p className="font-display text-2xl font-bold text-primary-foreground/80 mb-2 animate-text-shimmer inline-block">
        Joe Licari
      </p>
      <p className="font-body text-sm text-primary-foreground/50 mb-1">
        Managing Broker · Keller Williams Success Realty
      </p>
      <p className="font-body text-sm text-primary-foreground/50 mb-1">
        600 Hart Rd, Barrington, IL 60010 · (847) 344-1200 · MyAgentJoe@gmail.com
      </p>
      <p className="font-body text-sm text-primary-foreground/40 mt-4">
        © {new Date().getFullYear()} Joe Licari. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
