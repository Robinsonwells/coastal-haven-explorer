import { useEffect, useRef, useState } from "react";
import { Building2, Maximize, MapPin, Tag } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import listing1 from "@/assets/listing1.jpg";
import listing2 from "@/assets/listing2.jpg";
import listing3 from "@/assets/listing3.jpg";

const properties = [
  {
    image: listing1,
    status: "For Sale",
    type: "Luxury",
    price: "$2,495,000",
    detail: "5 Bed · 6 Bath · 6,400 SF",
    sqft: "6,400",
    address: "412 Bateman Cir, South Barrington, IL 60010",
  },
  {
    image: listing2,
    status: "For Sale",
    type: "Single Family",
    price: "$895,000",
    detail: "4 Bed · 3.5 Bath · 3,250 SF",
    sqft: "3,250",
    address: "78 Hawthorne Ln, Barrington, IL 60010",
  },
  {
    image: listing3,
    status: "For Sale",
    type: "Estate",
    price: "$1,725,000",
    detail: "5 Bed · 5 Bath · 1.4 Acres",
    sqft: "5,180",
    address: "215 Old Sutton Rd, Barrington Hills, IL 60010",
  },
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
              className={`group h-full overflow-hidden rounded-xl bg-card shadow-luxury transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                animate
                  ? visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                  : ""
              }`}
              style={animate ? { transitionDelay: `${i * 120 + 200}ms` } : undefined}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.address}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
                <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  {p.status}
                </span>
              </div>
              <div className="p-6">
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
                  className="mt-5 inline-block font-body text-sm font-semibold text-accent hover:underline"
                >
                  View Listing Details →
                </a>
              </div>
            </article>
          );

          return (
            <>
              <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
