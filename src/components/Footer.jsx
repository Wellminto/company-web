import React from "react";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer bg-[#2A2E36] mt-24 text-white">
      <div className="flex flex-col md:px-24 px-8 py-12">
        <div className="grid md:grid-cols-6 w-full gap-4">
          <div className="flex justify-start flex-col gap-4 col-span-2">
            <span className="flex items-center">
              <Image width={20} height={20} src={"/icons/logo.png"} className="w-10 h-10" alt="wellminto-logo"/>
              <h1 className="ml-2 text-[2rem] font-bold leading-7 tracking-normal">
                Wellminto
              </h1>
            </span>
            <p className="text-[1rem] font-normal leading-[28px] my-2 cursor-pointer">
              Your Convenience, Our Commitment, On Demand Service.
            </p>
            <span className="flex gap-2">
              <div className="flex justify-center items-center h-11 w-11 rounded-3xl bg-[#EAAD24]">
                <Image width={30} height={30} src={"/icons/twitter.png"} alt="twitter-link"/>
              </div>
              <div className="flex justify-center items-center h-11 w-11 rounded-3xl bg-[#EAAD24]">
                <Image width={30} height={30} src={"/icons/instagram.png"} alt="instagram-link"/>
              </div>
            </span>
          </div>
          <div className="mt-4 md:mt-0 flex justify-start flex-col gap-4">
            <h4 className=" font-semibold text-[1.5rem] leading-[44px]">
              Navigation
            </h4>
            <a
              href="#nav-bar"
              className="text-[1rem] font-normal leading-[28px] cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about-us"
              className="text-[1rem] font-normal leading-[28px] cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#our-services"
              className="text-[1rem] font-normal leading-[28px] cursor-pointer"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-[1rem] font-normal leading-[28px] cursor-pointer"
            >
              Testimonials
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex justify-start flex-col gap-4">
            <h4 className=" font-semibold text-[1.5rem] leading-[44px]">
              Services
            </h4>
            <a
              href="#our-services"
              className="text-[1rem] font-normal leading-[28px] cursor-pointer"
            >
              Laundry Service
            </a>
            <a
              href="#our-services"
              className="text-[1rem] font-normal leading-[28px] cursor-pointer"
            >
              Steam Ironing
            </a>
            <a
              href="#our-services"
              className="text-[1rem] font-normal leading-[28px] cursor-pointer"
            >
              Premium Laundry
            </a>
            <a
              href="#our-services"
              className="text-[1rem] font-normal leading-[28px] cursor-pointer"
            >
              Dry Cleaning
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex justify-start flex-col gap-4 col-span-2">
            <h4 className="font-semibold text-[1.5rem] leading-[44px]">
              Contact Us
            </h4>
            <p className="text-[1rem] font-normal leading-[28px] cursor-pointer">
              Our Support and Sales team is available 24/7 to answer your
              queries
            </p>
            <p className="flex items-center gap-2 text-[1rem] font-normal leading-[28px] cursor-pointer">
              <Image width={10} height={10} src={"/icons/map-pin.png"} className="w-[20px] h-[20px]" alt="map-pin"/>{" "}
              1270, Railway Road, Roorkee, Uttarakhand
            </p>
            <p className="flex gap-2 items-center text-[1rem] font-normal leading-[28px] cursor-pointer">
              <Image width={10} height={10} src={"/icons/phone.png"} className="w-[20px] h-[20px]" alt="contact-number"/>{" "}
              +919389586440
            </p>
          </div>
        </div>
        <span className="border-b my-8"></span>
        <div className="flex md:flex-row flex-col justify-center items-center">
          <p className="text-[0.9rem] flex items-center gap-2 font-semibold leading-[18.2px]">
            COPYRIGHT © 2024 RELIIV
          </p>
        </div>
      </div>
    </footer>
  );
}
