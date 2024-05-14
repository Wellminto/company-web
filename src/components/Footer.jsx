import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-[#2A2E36] mt-24 text-white">
      <div className="flex flex-col md:px-24 px-8 py-12">
        <div className="grid md:grid-cols-6 w-full gap-4">
          <div className="flex justify-start flex-col gap-4 col-span-2">
            <span className="flex items-center -ml-4">
              <img src={"icons/logo.svg"} className="w-12 h-12" />
              <h1 className="text-[2rem] font-bold leading-7 tracking-normal">
                Reliiv.
              </h1>
            </span>
            <p className="text-[1rem] font-normal leading-[28px] my-2 cursor-pointer">
              Your Convenience, Our Commitment, One Demand Service.
            </p>
            <span className="flex gap-2">
              <div className="flex justify-center items-center h-11 w-11 rounded-3xl bg-[#EAAD24]">
                <img src={"/icons/twitter.png"} />
              </div>
              <div className="flex justify-center items-center h-11 w-11 rounded-3xl bg-[#EAAD24]">
                <img src={"/icons/instagram.png"} />
              </div>
              <div className="flex justify-center items-center h-11 w-11 rounded-3xl bg-[#EAAD24]">
                <img src={"/icons/youtube.png"} />
              </div>
            </span>
          </div>
          <div className="mt-4 md:mt-0 flex justify-start flex-col gap-4">
            <h4 className=" font-semibold text-[1.5rem] leading-[44px]">
              Navigation
            </h4>
            <a className="text-[1rem] font-normal leading-[28px] cursor-pointer">
              Home
            </a>
            <a className="text-[1rem] font-normal leading-[28px] cursor-pointer">
              About Us
            </a>
            <a className="text-[1rem] font-normal leading-[28px] cursor-pointer">
              Our Service
            </a>
            <a className="text-[1rem] font-normal leading-[28px] cursor-pointer">
              Our Team
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex justify-start flex-col gap-4">
            <h4 className=" font-semibold text-[1.5rem] leading-[44px]">
              Services
            </h4>
            <a className="text-[1rem] font-normal leading-[28px] cursor-pointer">
            Home Cleaning
            </a>
            <a className="text-[1rem] font-normal leading-[28px] cursor-pointer">
              Laundry
            </a>
            <a className="text-[1rem] font-normal leading-[28px] cursor-pointer">
              Gardening
            </a>
            <a className="text-[1rem] font-normal leading-[28px] cursor-pointer">
              AC Repair
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
              <img src={"/icons/map-pin.png"} className="w-[20px] h-[20px]" />{" "}
              1270, Railway Road, Roorkee, Uttarakhand
            </p>
            <p className="flex gap-2 items-center text-[1rem] font-normal leading-[28px] cursor-pointer">
              <img src={"icons/phone.png"} className="w-[20px] h-[20px]" />{" "}
              +919389586440
            </p>
          </div>
        </div>
        <span className="border-b my-8"></span>
        <div className="flex md:flex-row flex-col justify-between items-center">
          <p className="text-[0.9rem] flex items-center gap-2 font-semibold leading-[18.2px]">
            COPYRIGHT © 2024 RELIIV
          </p>
          <p className="mt-4 md:mt-0 flex items-center gap-2 text-[0.9rem] font-semibold leading-[18.2px] cursor-pointer">
            TERM OF USE{" "}
            <span className="border-r border-[#EAAD24] h-[10px]"></span>
            PRIVACY POLICY
          </p>
        </div>
      </div>
    </footer>
  );
}
