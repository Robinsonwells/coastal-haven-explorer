import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Mark Henderson",
    location: "Industrial Acquisition · Lehi",
    text: "Camron found us an off-market industrial building that fit our growth plans perfectly. His market knowledge and underwriting saved us six figures at the negotiation table.",
    rating: 5,
  },
  {
    name: "Aspen Capital Partners",
    location: "Investment Sale · Sandy",
    text: "We've closed multiple investment deals with Camron. He brings real buyers, accurate pricing, and clean execution. He's the first call we make for Utah commercial.",
    rating: 5,
  },
  {
    name: "Jenna Lewis, CFO",
    location: "Office Lease · Salt Lake City",
    text: "Camron walked us through every option in the market and negotiated a lease structure that gave us the flexibility we needed. True commercial professional.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="testimonials" className="bg-warm-cream py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            What Clients Say
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-accent" />
        </div>

        {(() => {
          const renderCard = (t: typeof testimonials[number], i: number, animate = true) => (
            <div
              key={i}
              className={`glass-card h-full rounded-xl p-8 shadow-luxury transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                animate
                  ? visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                  : ""
              }`}
              style={animate ? { transitionDelay: `${i * 150 + 200}ms` } : undefined}
            >
              <Quote className="h-8 w-8 text-accent/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-lg text-foreground font-bold">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.location}</p>
              </div>
            </div>
          );

          return (
            <>
              <div className="hidden md:grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                {testimonials.map((t, i) => renderCard(t, i))}
              </div>
              <div className="md:hidden max-w-md mx-auto">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {testimonials.map((t, i) => (
                      <CarouselItem key={i} className="basis-full">
                        {renderCard(t, i, false)}
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

export default Testimonials;
