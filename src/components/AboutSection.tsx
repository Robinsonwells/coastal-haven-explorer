import { useEffect, useRef, useState } from "react";
import { Award, Building2, Briefcase, Map } from "lucide-react";
import headshot from "@/assets/joe-licari-headshot.jpeg";

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
    <section ref={ref} id="about" className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="deco-blob h-80 w-80 top-20 -left-20 animate-blob" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Your Broker</p>
            <h2 className="font-display text-4xl md:text-5xl animate-text-shimmer">Meet Joe Licari</h2>
            <div className="mx-auto mt-6 h-px w-20 bg-accent" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div
              className={`md:col-span-2 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-luxury group">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-primary/30 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
                <img
                  src={headshot}
                  alt="Joe Licari, Managing Broker at Keller Williams Success Realty"
                  className="relative h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
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
                Always having a passion for architecture and a desire to meet new people,
                entering the real estate business was a natural fit. In 1994, I began
                developing condominiums on Chicago's North Side after graduating with honors
                from Loyola University. I then formed North Shore Realty Group in 1999, until
                merging talent with Keller Williams in 2016, where I remain today as a Broker.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mb-5">
                Although the market has evolved and I have evolved with it, I've always
                subscribed to one core philosophy — treat others as you wish to be treated.
                If you choose to work with me, I'll be there every step of the way, from
                contract to closing, blending proven technique with modern technology and
                service second to none.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
                Three decades in the Chicagoland market have given me the insight and
                experience to get the deal done. If you're truly interested in buying or
                selling and don't want the hard-sell tactics often associated with our
                industry, I'd be honored to be your agent.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`glass-card group rounded-xl p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxury hover:bg-accent/5 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 500}ms` }}
                  >
                    <s.icon className="h-5 w-5 text-accent mb-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
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
