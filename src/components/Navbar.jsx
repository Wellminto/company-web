import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full bg-white py-7 md:px-24 px-8 items-center">
      <a className="flex gap-2 items-center" href=".">
        <img src="/icons/logo.png" alt="Reliiv." className="h-12 w-12" />
        <span className="text-2xl font-bold">Wellminto</span>
      </a>
      <ul className="flex gap-7 items-center text-gray-900 hidden md:flex">
        <li>
          <a
            href="."
            className="group text-black font-semibold transition duration-300"
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </a>
        </li>
        <li>
          <a
            href="#about-us"
            className="group text-black font-semibold transition duration-300"
          >
            About Us
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </a>
        </li>
        <li>
          <a
            href="#our-services"
            className="group text-black font-semibold transition duration-300"
          >
            Services
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className="group text-black font-semibold transition duration-300"
          >
            Testimonials
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </a>
        </li>
      </ul>
      <a
        href="tel:+919389586440"
        className="bg-black text-white rounded-3xl md:py-3 md:px-6 px-4 py-2 transition ease-in-out delay-150 hover:scale-110 duration-300"
      >
        Contact Us
      </a>
    </nav>
  );
}
