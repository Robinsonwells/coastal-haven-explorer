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
    toast.success("Thanks! Camron will be in touch shortly.");
  };

  return (
    <section ref={ref} id="contact" className="bg-charcoal py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "hsl(var(--primary-foreground))" }}>
            Let's Find Your Property
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
              { icon: Phone, label: "Call or Text", value: "(801) 259-2355", href: "tel:8012592355" },
              { icon: Mail, label: "Email", value: "camron@wincre.com", href: "mailto:camron@wincre.com" },
              { icon: MapPin, label: "Brokerage", value: "Windermere Commercial · wincre.com" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="rounded-full bg-accent/10 p-3">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-accent mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-body text-primary-foreground/80 hover:text-accent transition-colors">
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
              <Input placeholder="First Name" className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent" required />
              <Input placeholder="Last Name" className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent" required />
            </div>
            <Input type="tel" placeholder="Phone Number" className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent" />
            <Input type="email" placeholder="Email Address" className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent" required />
            <Textarea placeholder="Tell Camron about the commercial property you're looking for or listing..." rows={4} className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent resize-none" required />
            <Button type="submit" size="lg" className="w-full group bg-accent hover:bg-accent/90 text-accent-foreground font-display font-bold">
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
