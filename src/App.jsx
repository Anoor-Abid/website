import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";


export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <OurWork />
      <Testimonials />
      <BookingForm />
      
    </div>
  );
}