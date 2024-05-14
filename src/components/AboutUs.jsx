"use client";

import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const data = [
  { label: "Experienced", percentage: 98 },
  { label: "Reliable", percentage: 86 },
  { label: "Skilled & Capable", percentage: 90 },
  { label: "Flexible", percentage: 80 },
];

export default function AboutUs() {
  return (
    <section className="mt-24 md:px-24 px-8">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:w-[50%] flex gap-3.5 flex-col">
          <div className="flex gap-2 font-bold text-[1rem]">
            <img src="\icons\star.png" alt="star" />
            <span>ABOUT US</span>
          </div>
          <div className="font-semibold text-[3rem] leading-[64px]">
            <span>
              Clean Your Laundry Hassle-Free with Our Professional Laundry
              Services
            </span>
          </div>
          <div className="font-normal text-[1rem] leading-[28px] text-gray-500">
            <p>
              Experience Convenience with One-Stop Laundry Solutions: Effortless
              Booking, Secure Transactions, Trusted Providers.
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-[40%] w-full flex gap-[30px] flex-col left-[758px]">
          {data.map(({ label, percentage }) => (
            <div key={label} className="flex flex-col gap-1 w-full">
              <div className="flex w-full h-[40px] justify-between font-semibold text-[20px] leading-10">
                <span className="text-[#252525] font-semibold">{label}</span>
                <span className="text-[#EAAD24] font-semibold">
                  {percentage}%
                </span>
              </div>
              <ProgressBar
                completed={percentage}
                customLabel=" "
                bgColor="black"
                height="10px"
                width="full"
                borderRadius="20px"
                baseBgColor="#D1D1DC"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[96px] w-full h-[464px] bg-[#E5E5E5] rounded-xl">
        <video src="" alt="#" className="" />
      </div>
    </section>
  );
}
