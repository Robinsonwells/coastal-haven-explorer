import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import sold1 from "@/assets/sold1.jpg";
import sold2 from "@/assets/sold2.jpg";
import sold3 from "@/assets/sold3.jpg";
import sold4 from "@/assets/sold4.jpg";

const sold = [
  { image: sold1, price: "$4,250,000", type: "Industrial Warehouse", address: "742 W Cabela Way", city: "Lehi, UT 84043", size: "32,400 sf" },
  { image: sold2, price: "$2,180,000", type: "Professional Office", address: "1208 N Research Pkwy", city: "Sandy, UT 84070", size: "9,650 sf" },
  { image: sold3, price: "$3,925,000", type: "Retail Investment", address: "455 W Center St", city: "Provo, UT 84601", size: "14,800 sf" },
  { image: sold4, price: "$2,650,000", type: "Development Land", address: "918 S Frontage Rd", city: "St. George, UT 84770", size: "12.4 acres" },
];

const RecentlySold = () => {
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
    <section ref={ref} id="sold" className="bg-warm-cream py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Closed Transactions</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Recently Closed</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-accent" />
        </div>

        {(() => {
          const renderCard = (s: typeof sold[number], i: number, animate = true) => (
            <article
              key={i}
              className={`group h-full overflow-hidden rounded-xl bg-card shadow-luxury transition-all duration-700 hover:-translate-y-2 ${
                animate
                  ? visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                  : ""
              }`}
              style={animate ? { transitionDelay: `${i * 100 + 150}ms` } : undefined}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.address}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
                <span className="absolute top-3 left-3 rounded bg-primary px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  Closed
                </span>
              </div>
              <div className="p-5">
                <p className="font-display text-xl font-bold text-foreground">{s.price}</p>
                <p className="font-body text-xs text-muted-foreground mb-3">{s.type}</p>
                <p className="font-body text-sm text-foreground/80">{s.address}</p>
                <p className="font-body text-sm text-muted-foreground mb-3">{s.city}</p>
                <div className="flex items-center gap-3 border-t border-border pt-3 font-body text-xs text-muted-foreground">
                  <span>{s.size}</span>
                </div>
              </div>
            </article>
          );

          return (
            <>
              <div className="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                {sold.map((s, i) => renderCard(s, i))}
              </div>
              <div className="md:hidden max-w-md mx-auto">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {sold.map((s, i) => (
                      <CarouselItem key={i} className="basis-full">
                        {renderCard(s, i, false)}
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

export default RecentlySold;
