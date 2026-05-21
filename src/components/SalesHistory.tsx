import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const listings = [
  { address: "2419 E Olive St #1G", city: "Arlington Heights, IL" },
  { address: "231 E Wayne Pl", city: "Wheeling, IL" },
  { address: "1719 Ferndale Ave", city: "Northbrook, IL" },
  { address: "385 White Oak Ln", city: "Barrington, IL" },
  { address: "915 Westmoreland Dr #9", city: "Vernon Hills, IL" },
  { address: "2050 Beechnut Rd", city: "Northbrook, IL" },
  { address: "135 Morningside Ln", city: "Buffalo Grove, IL" },
  { address: "480 E Montrose Ave #203", city: "Wood Dale, IL" },
  { address: "10071 Frontage Rd #F", city: "Skokie, IL" },
  { address: "7 Michael Ct", city: "Lake In The Hills, IL" },
  { address: "589 Prestwick Ln", city: "Wheeling, IL" },
  { address: "1901 Kingsley Dr", city: "Schaumburg, IL" },
  { address: "99 Lee Rd", city: "Northbrook, IL" },
  { address: "924 Grand Blvd #2", city: "Wauconda, IL" },
];

const SalesHistory = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="sales-history" className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Track Record</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Notable Sales</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-accent" />
          <p className="font-body text-muted-foreground mt-6 max-w-xl mx-auto">
            A selection of homes Joe has represented across Chicago's northwest suburbs.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto rounded-xl border border-border bg-card shadow-luxury overflow-hidden transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ul className="divide-y divide-border">
            {listings.map((l, i) => (
              <li
                key={i}
                className="flex items-start gap-3 px-6 py-4 hover:bg-warm-cream/40 transition-colors"
              >
                <MapPin className="h-4 w-4 text-accent mt-1 shrink-0" />
                <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-body text-sm md:text-base text-foreground font-medium">
                    {l.address}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">{l.city}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SalesHistory;
