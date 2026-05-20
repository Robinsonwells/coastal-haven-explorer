import { useEffect, useRef, useState } from "react";
import { Facebook, Play, Volume2, VolumeX } from "lucide-react";

const VideoSection = () => {
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="video" className="relative overflow-hidden bg-warm-cream py-24 md:py-32">
      <div className="deco-blob h-80 w-80 -top-20 right-0 animate-blob" />
      <div className="deco-blob h-72 w-72 -bottom-20 -left-10 animate-blob" style={{ animationDelay: "-7s" }} />

      <div className="container relative mx-auto px-4">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-accent">Get To Know Joe</p>
          <h2 className="font-display text-4xl animate-text-shimmer md:text-5xl">A Personal Welcome</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-accent" />
        </div>

        <div
          className={`mx-auto max-w-4xl transition-all duration-700 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="tilt-card group relative overflow-hidden rounded-2xl shadow-luxury">
            <video
              src="/joe-licari-video.mp4"
              controls
              playsInline
              preload="metadata"
              className="block h-full w-full bg-charcoal"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-foreground/10" />
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-center font-body text-muted-foreground">
              Follow Joe on social media for new listings, market updates, and stories from the field.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100066644997088"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-display font-bold text-accent-foreground shadow-luxury transition-transform hover:scale-105 animate-glow-pulse"
            >
              <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
              Follow Joe on Facebook
              <Play className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
