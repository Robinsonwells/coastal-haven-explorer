import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import img1 from "@/assets/bristlecone-1.webp";
import img2 from "@/assets/bristlecone-2.webp";
import img3 from "@/assets/bristlecone-3.webp";
import img4 from "@/assets/bristlecone-4.webp";
import img5 from "@/assets/bristlecone-5.webp";
import img6 from "@/assets/bristlecone-6.webp";
import img7 from "@/assets/bristlecone-7.webp";
import img8 from "@/assets/bristlecone-8.webp";
import img9 from "@/assets/bristlecone-9.webp";

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const listing = {
  status: "For Sale",
  price: "$248,600",
  address: "3806 Bristlecone Dr, Springfield, IL 62712",
};

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
          <h2 className="font-display text-4xl md:text-5xl animate-text-shimmer">Featured Listing</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-accent" />
        </div>

        <article
          className={`max-w-4xl mx-auto overflow-hidden rounded-xl bg-card shadow-luxury transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {photos.map((src, i) => (
                  <CarouselItem key={i}>
                    <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                      <img
                        src={src}
                        alt={`${listing.address} photo ${i + 1}`}
                        className="h-full w-full object-cover"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 z-10" />
              <CarouselNext className="right-4 z-10" />
            </Carousel>
            <span className="absolute top-4 left-4 z-10 rounded-full bg-accent px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              {listing.status}
            </span>
          </div>
          <div className="p-6 md:p-8">
            <p className="flex items-start gap-3 font-display text-2xl md:text-3xl font-semibold leading-snug text-foreground">
              <MapPin className="h-7 w-7 text-accent mt-1 shrink-0" />
              <span>{listing.address}</span>
            </p>
            <div className="mt-6 border-t border-border pt-6">
              <p className="font-display text-4xl font-bold text-foreground">{listing.price}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedProperties;
