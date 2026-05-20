import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import signatureRaw from "@/assets/joe-licari-signature.svg?raw";
import home1 from "@/assets/home1.jpg";
import home2 from "@/assets/home2.jpg";
import home3 from "@/assets/home3.jpg";
import home4 from "@/assets/home4.jpg";
import { useMagnetic } from "@/hooks/useMagnetic";

const images = [home1, home2, home3, home4];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const signatureRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>(20);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !signatureRef.current) return;

    const paths = Array.from(signatureRef.current.querySelectorAll("path"));
    if (!paths.length) return;

    const pixelsPerSecond = 700; // slower pen for a more deliberate hand-written feel
    const minDuration = 0.55;
    const maxDuration = 1.1;
    const overlap = 0.1; // next stroke begins ~100ms before previous ends for continuous flow
    const lengths = paths.map((path) => path.getTotalLength());

    let elapsed = 0;

    paths.forEach((path, index) => {
      const length = lengths[index];
      const duration = Math.min(maxDuration, Math.max(minDuration, length / pixelsPerSecond));

      path.style.setProperty("--path-length", `${length}`);
      path.style.setProperty("--sig-delay", `${elapsed}s`);
      path.style.setProperty("--sig-duration", `${duration}s`);

      elapsed += Math.max(0.05, duration - overlap);
    });
  }, [isLoaded]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1.5s] ease-in-out"
          style={{
            opacity: current === i ? 1 : 0,
            transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(${1 + scrollY * 0.0006})`,
          }}
        >
          <img
            src={img}
            alt={`Featured Barrington area property ${i + 1}`}
            className="h-full w-full object-cover animate-ken-burns"
            width={1920}
            height={1080}
            {...(i > 0 ? { loading: "lazy" as const } : {})}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/85" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="sr-only">Joe Licari</h1>
          {isLoaded && (
            <div
              ref={signatureRef}
              className="signature-hero mx-auto w-full max-w-4xl text-primary-foreground [&_svg]:h-32 md:[&_svg]:h-48 lg:[&_svg]:h-56 [&_svg]:w-full"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: signatureRaw }}
            />
          )}
        </div>

        <div
          className={`mt-6 flex flex-col items-center gap-2 transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 w-full max-w-md">
            <div className="h-px flex-1 bg-primary-foreground/30" />
            <div className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <div className="h-px flex-1 bg-primary-foreground/30" />
          </div>
          <p
            className="font-body text-center text-sm md:text-base uppercase tracking-[0.25em] mt-2"
            style={{ color: "hsla(0, 0%, 100%, 0.85)" }}
          >
            Luxury Homes · Residential · Investment — Barrington & Chicago's Northwest Suburbs
          </p>
        </div>

        <div
          className={`mt-10 transition-all duration-1000 delay-500 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-base font-bold text-accent-foreground transition-transform hover:scale-105 shadow-lg"
          >
            Get Started
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="absolute bottom-16 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                current === i
                  ? "w-10 bg-accent"
                  : "w-6 bg-primary-foreground/30 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <a
          href="#testimonials"
          aria-label="Scroll down"
          className="absolute bottom-6 text-primary-foreground/70 hover:text-accent transition-colors animate-float"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSlideshow;
