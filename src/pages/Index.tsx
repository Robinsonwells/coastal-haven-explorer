import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import Testimonials from "@/components/Testimonials";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import VideoSection from "@/components/VideoSection";
import CursorGlow from "@/components/CursorGlow";

const Index = () => (
  <div className="min-h-screen">
    <CursorGlow />
    <ScrollProgress />
    <Navbar />
    <HeroSlideshow />
    <Testimonials />
    <FeaturedProperties />
    <AboutSection />
    <VideoSection />
    <ContactForm />
    <Footer />
  </div>
);

export default Index;
