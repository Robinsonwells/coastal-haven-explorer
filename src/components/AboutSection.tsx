import { useEffect, useRef, useState } from "react";
import { Award, Building2, Briefcase, Map } from "lucide-react";
import headshot from "@/assets/camron-carpenter-headshot.jpg";

const stats = [
  { icon: Building2, value: "Luxury", label: "Estate Homes" },
  { icon: Briefcase, value: "Residential", label: "Single Family & Condo" },
  { icon: Award, value: "Investment", label: "Income Properties" },
  { icon: Map, value: "Relocation", label: "Northwest Suburbs" },
];

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Your Broker</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">About Joe</h2>
            <div className="mx-auto mt-6 h-px w-20 bg-accent" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div
              className={`md:col-span-2 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src={headshot}
                  alt="Joe Licari, Managing Broker at Keller Williams Success Realty"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
            </div>

            <div
              className={`md:col-span-3 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <p className="font-body text-muted-foreground leading-relaxed text-lg mb-5">
                Joe Licari is the Managing Broker at Keller Williams Success Realty
                in Barrington, Illinois, serving buyers and sellers across the
                Chicago northwest suburbs. He pairs decades of local market expertise
                with a hands-on, relationship-first approach.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
                Whether you're listing a luxury estate, relocating your family,
                purchasing your first home, or building an investment portfolio,
                Joe and the Keller Williams Success team deliver the data,
                negotiation, and concierge service that move you forward with confidence.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`glass-card rounded-xl p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 500}ms` }}
                  >
                    <s.icon className="h-5 w-5 text-accent mb-2" />
                    <p className="font-display text-lg text-foreground font-bold">{s.value}</p>
                    <p className="font-body text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
