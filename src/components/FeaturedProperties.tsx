import { useEffect, useRef, useState } from "react";
import { Maximize, MapPin, Tag } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import prop1 from "@/assets/prop1.jpg";
import prop2 from "@/assets/prop2.webp";
import prop3 from "@/assets/prop3.webp";
import prop4 from "@/assets/prop4.jpg";
import prop5 from "@/assets/prop5.jpg";
import prop6 from "@/assets/prop6.webp";
import prop7 from "@/assets/prop7.jpg";
import prop8 from "@/assets/prop8.webp";
import prop9 from "@/assets/prop9.webp";
import prop10 from "@/assets/prop10.jpg";
import prop11 from "@/assets/prop11.jpg";
import prop12 from "@/assets/prop12.jpg";
import prop13 from "@/assets/prop13.jpg";
import prop14 from "@/assets/prop14.jpg";

const properties = [
  { image: prop1, status: "For Sale", type: "Condo", price: "$169,900", detail: "1 Bed · 1 Bath · 800 SF", sqft: "800", address: "2419 E Olive St #1G, Arlington Heights, IL" },
  { image: prop2, status: "Sold", type: "Single Family", price: "$285,000", detail: "3 Bed · 1 Bath · 920 SF", sqft: "920", address: "231 E Wayne Pl, Wheeling, IL" },
  { image: prop3, status: "Pending", type: "Single Family", price: "$412,500", detail: "3 Bed · 2 Bath · 1,064 SF", sqft: "1,064", address: "1719 Ferndale Ave, Northbrook, IL" },
  { image: prop4, status: "Leased", type: "Townhome", price: "$3,000/mo", detail: "3 Bed · 3.5 Bath · 2,338 SF", sqft: "2,338", address: "385 White Oak Ln, Barrington, IL" },
  { image: prop5, status: "For Rent", type: "Condo", price: "$1,625/mo", detail: "2 Bed · 1.5 Bath · 894 SF", sqft: "894", address: "915 Westmoreland Dr #9, Vernon Hills, IL" },
  { image: prop6, status: "Sold", type: "Single Family", price: "$665,000", detail: "3 Bed · 2 Bath · 1,628 SF", sqft: "1,628", address: "2050 Beechnut Rd, Northbrook, IL" },
  { image: prop7, status: "For Rent", type: "Townhome", price: "$2,400/mo", detail: "2 Bed · 2 Bath · 1,081 SF", sqft: "1,081", address: "135 Morningside Ln, Buffalo Grove, IL" },
  { image: prop8, status: "For Sale", type: "Condo", price: "$250,000", detail: "3 Bed · 2 Bath · 1,500 SF", sqft: "1,500", address: "480 E Montrose Ave #203, Wood Dale, IL" },
  { image: prop9, status: "Sold", type: "Townhouse", price: "$300,000", detail: "3 Bed · 1.5 Bath · 1,055 SF", sqft: "1,055", address: "10071 Frontage Rd #F, Skokie, IL" },
  { image: prop10, status: "Sold", type: "Single Family", price: "$375,000", detail: "3 Bed · 2.5 Bath · 1,502 SF", sqft: "1,502", address: "7 Michael Ct, Lake In The Hills, IL" },
  { image: prop11, status: "Sold", type: "Townhouse", price: "$450,000", detail: "3 Bed · 2 Bath · 2,050 SF", sqft: "2,050", address: "589 Prestwick Ln, Wheeling, IL" },
  { image: prop12, status: "Sold", type: "Single Family", price: "$460,000", detail: "4 Bed · 2 Bath · 1,709 SF", sqft: "1,709", address: "1901 Kingsley Dr, Schaumburg, IL" },
  { image: prop13, status: "Sold", type: "Single Family", price: "$725,000", detail: "5 Bed · 3.5 Bath · 4,276 SF", sqft: "4,276", address: "99 Lee Rd, Northbrook, IL" },
  { image: prop14, status: "For Sale", type: "Single Family", price: "$425,000", detail: "3 Bed · 2.5 Bath · 2,292 SF", sqft: "2,292", address: "924 Grand Blvd #2, Wauconda, IL" },
];

const FeaturedProperties = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="listings" className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="deco-blob h-96 w-96 -top-32 right-0 animate-blob" style={{ animationDelay: "-3s" }} />
      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Properties</p>
          <h2 className="font-display text-4xl md:text-5xl animate-text-shimmer">
            Featured Listings
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-accent" />
        </div>

        {(() => {
          const renderCard = (p: typeof properties[number], i: number, animate = true) => (
            <article
              key={i}
              className={`group tilt-card h-full overflow-hidden rounded-xl bg-card shadow-luxury transition-all duration-700 hover:shadow-2xl ${
                animate
                  ? visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                  : ""
              }`}
              style={animate ? { transitionDelay: `${(i % 6) * 80 + 150}ms` } : undefined}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.address}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-125"
                  loading="lazy"
                  width={1280}
                  height={896}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  {p.status}
                </span>
              </div>
              <div className="p-5">
                <p className="font-display text-2xl font-bold text-foreground">{p.price}</p>
                <p className="font-body text-xs text-muted-foreground mb-4">{p.detail}</p>

                <div className="flex items-center gap-4 mb-4 text-foreground/80">
                  <span className="flex items-center gap-1 font-body text-sm">
                    <Tag className="h-4 w-4 text-accent" /> <strong>{p.type}</strong>
                  </span>
                  <span className="flex items-center gap-1 font-body text-sm">
                    <Maximize className="h-4 w-4 text-accent" /> <strong>{p.sqft}</strong> sf
                  </span>
                </div>

                <p className="flex items-start gap-2 font-body text-sm text-muted-foreground border-t border-border pt-4">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  {p.address}
                </p>

                <a
                  href="#contact"
                  className="story-link mt-5 inline-block font-body text-sm font-semibold text-accent"
                >
                  Inquire About This Property →
                </a>
              </div>
            </article>
          );

          return (
            <>
              <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {properties.map((p, i) => renderCard(p, i))}
              </div>
              <div className="md:hidden max-w-md mx-auto">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {properties.map((p, i) => (
                      <CarouselItem key={i} className="basis-full">
                        {renderCard(p, i, false)}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </>
          );
        })()}
      </div>
    </section>
  );
};

export default FeaturedProperties;
