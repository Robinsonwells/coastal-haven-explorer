import { useEffect, useRef, useState } from "react";
import { Maximize, MapPin, Tag } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import prop1 from "@/assets/prop1.jpg";
import prop3 from "@/assets/prop3.webp";

import prop5 from "@/assets/prop5.jpg";
import prop7 from "@/assets/prop7.jpg";
import prop8 from "@/assets/prop8.webp";

const properties = [
  { image: prop1, status: "For Sale", type: "Condo", price: "$169,900", detail: "1 Bed · 1 Bath · 800 SF", sqft: "800", address: "2419 E Olive St #1G, Arlington Heights, IL" },
  { image: prop3, status: "Pending", type: "Single Family", price: "$412,500", detail: "3 Bed · 2 Bath · 1,064 SF", sqft: "1,064", address: "1719 Ferndale Ave, Northbrook, IL" },
  { image: prop5, status: "For Rent", type: "Condo", price: "$1,625/mo", detail: "2 Bed · 1.5 Bath · 894 SF", sqft: "894", address: "915 Westmoreland Dr #9, Vernon Hills, IL" },
  { image: prop7, status: "For Rent", type: "Townhome", price: "$2,400/mo", detail: "2 Bed · 2 Bath · 1,081 SF", sqft: "1,081", address: "135 Morningside Ln, Buffalo Grove, IL" },
  { image: prop8, status: "For Sale", type: "Condo", price: "$250,000", detail: "3 Bed · 2 Bath · 1,500 SF", sqft: "1,500", address: "480 E Montrose Ave #203, Wood Dale, IL" },
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
                <p className="flex items-start gap-2 font-display text-lg md:text-xl font-semibold leading-snug text-foreground">
                  <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                  <span>{p.address}</span>
                </p>

                <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                  <p className="font-display text-2xl font-bold text-foreground">{p.price}</p>
                  <p className="font-body text-xs text-muted-foreground">{p.detail}</p>
                </div>

                <div className="flex items-center gap-4 mt-3 text-foreground/80">
                  <span className="flex items-center gap-1 font-body text-sm">
                    <Tag className="h-4 w-4 text-accent" /> <strong>{p.type}</strong>
                  </span>
                  <span className="flex items-center gap-1 font-body text-sm">
                    <Maximize className="h-4 w-4 text-accent" /> <strong>{p.sqft}</strong> sf
                  </span>
                </div>
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
