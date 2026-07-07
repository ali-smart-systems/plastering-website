import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import BeforeAfter from "@/components/sections/BeforeAfter";

import Areas from "@/components/sections/Areas";

import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (

    <><Header />
      <Hero />
      <Stats />
      <Services />
      <BeforeAfter />
      <Gallery />
      <FAQ />
      <Areas />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingButtons />
    </>
  );
}