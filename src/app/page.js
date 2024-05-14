import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import WhyChoose from "../components/WhyChoose";
import Features from "../components/Features";
import Testimonial from "../components/Tesimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-custom">
      <header>
        <Navbar />
      </header>
      <Hero />
      <AboutUs />
      <Features />
      <OurServices />
      <WhyChoose />
      <Testimonial />
      <Footer />
    </div>
  );
}
