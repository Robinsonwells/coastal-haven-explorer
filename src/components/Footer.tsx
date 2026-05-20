const Footer = () => (
  <footer className="bg-charcoal border-t border-primary-foreground/10 py-12">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-2xl font-bold text-primary-foreground/80 mb-2">
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
