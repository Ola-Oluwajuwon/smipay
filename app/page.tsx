import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustMarquee from "../components/TrustMarquee";
import WhyOurApp from "../components/home/WhyOurApp";
import Testimonial from "../components/home/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustMarquee />
      <WhyOurApp />
      <Testimonial />
      <Footer />
    </div>
  );
}
