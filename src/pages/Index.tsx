import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import Testimonials from "@/components/Testimonials";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import RecentlySold from "@/components/RecentlySold";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSlideshow />
    <Testimonials />
    <FeaturedProperties />
    <AboutSection />
    <RecentlySold />
    <ContactForm />
    <Footer />
  </div>
);

export default Index;
