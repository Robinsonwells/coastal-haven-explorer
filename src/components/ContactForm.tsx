import { useEffect, useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! Joe will be in touch shortly.");
  };

  return (
    <section ref={ref} id="contact" className="bg-charcoal py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="deco-blob h-96 w-96 -bottom-32 -left-20 animate-blob" style={{ opacity: 0.25 }} />
      <div className="deco-blob h-80 w-80 -top-20 -right-20 animate-blob" style={{ animationDelay: "-8s", opacity: 0.2 }} />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl animate-text-shimmer">
            Let's Find Your Home
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-accent" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          <div
            className={`md:col-span-2 space-y-8 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { icon: Phone, label: "Call or Text", value: "(847) 344-1200", href: "tel:8473441200" },
              { icon: Mail, label: "Email", value: "MyAgentJoe@gmail.com", href: "mailto:MyAgentJoe@gmail.com" },
              { icon: MapPin, label: "Office", value: "Keller Williams Success Realty · 600 Hart Rd, Barrington, IL 60010" },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-1"
                style={{ animation: visible ? `bounceIn 0.6s ease-out ${i * 120 + 400}ms both` : undefined }}
              >
                <div className="rounded-full bg-accent/10 p-3 transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-accent mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="story-link font-body text-primary-foreground/80 hover:text-accent transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-primary-foreground/80">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className={`md:col-span-3 space-y-5 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" className="input-glow bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent" required />
              <Input placeholder="Last Name" className="input-glow bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent" required />
            </div>
            <Input type="tel" placeholder="Phone Number" className="input-glow bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent" />
            <Input type="email" placeholder="Email Address" className="input-glow bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent" required />
            <Textarea placeholder="Tell Joe about the home you're looking for or listing..." rows={4} className="input-glow bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent resize-none" required />
            <Button type="submit" size="lg" className="w-full group bg-accent hover:bg-accent/90 text-accent-foreground font-display font-bold animate-glow-pulse transition-transform hover:scale-[1.02]">
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:-rotate-12" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
