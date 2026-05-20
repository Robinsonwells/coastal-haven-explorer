const Footer = () => (
  <footer className="bg-charcoal border-t border-primary-foreground/10 py-12">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-2xl font-bold text-primary-foreground/80 mb-2">
        Camron Carpenter
      </p>
      <p className="font-body text-sm text-primary-foreground/50 mb-1">
        Broker · Windermere Commercial · Utah
      </p>
      <p className="font-body text-sm text-primary-foreground/50 mb-1">
        (801) 259-2355 · camron@wincre.com · wincre.com
      </p>
      <p className="font-body text-sm text-primary-foreground/40 mt-4">
        © {new Date().getFullYear()} Camron Carpenter. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
