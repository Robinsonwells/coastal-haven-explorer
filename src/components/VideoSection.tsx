import { useEffect, useRef, useState } from "react";
import { Facebook, Play } from "lucide-react";
import joeSocial from "@/assets/joe-social.jpg";

const VideoSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="video" className="relative overflow-hidden bg-warm-cream py-12 md:py-16">
      <div className="deco-blob h-56 w-56 -top-16 right-0 animate-blob" />
      <div className="deco-blob h-48 w-48 -bottom-12 -left-8 animate-blob" style={{ animationDelay: "-7s" }} />

      <div className="container relative mx-auto px-4">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-accent">Get To Know Joe</p>
          <h2 className="font-display text-3xl animate-text-shimmer md:text-4xl">A Personal Welcome</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-accent" />
        </div>

        <div
          className={`mx-auto max-w-lg transition-all duration-700 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="tilt-card group relative overflow-hidden rounded-2xl shadow-luxury">
            <img
              src={joeSocial}
              alt="Joe Licari"
              className="block h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-foreground/10" />
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-center font-body text-sm text-muted-foreground">
              Convicted for caring too much about his real estate clients. GUILTY as charged!
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100066644997088"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display font-bold text-accent-foreground shadow-luxury transition-transform hover:scale-105 animate-glow-pulse"
            >
              <Facebook className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
              Follow Joe on Facebook
              <Play className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
