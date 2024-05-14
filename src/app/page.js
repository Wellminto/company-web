import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import WhyChoose from "../components/WhyChoose";
import Features from "../components/Features";
import OurTeam from "../components/OurTeam";
import Testimonial from "../components/Tesimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-custom">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <OurServices/>
      <WhyChoose/>
      <Features/>
      <OurTeam/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
