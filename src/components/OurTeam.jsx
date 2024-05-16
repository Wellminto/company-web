import Image from "next/image";
import React from "react";

const MeetOurTeamCard = ({ name, detail, link }) => {
  return (
    <div className="bg-white rounded-3xl w-[16rem]">
      <div className="flex bg-gray-700 rounded-t-3xl w-full items-center justify-center h-[16rem]">
        Image
      </div>
      <div className="flex flex-col">
        <h1 className="text-black font-semibold p-4 pb-0">{name}</h1>
        <h2 className="text-gray-500 text-[0.9rem] pt-1 p-4">{detail}</h2>
        <span className="border-b w-full"></span>
        <a className="text-[#EAAD24] text-xs p-4" href={link}>
          + FOLLOW ON LINKEDIN
        </a>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="flex flex-col gap-8 bg-[#F2F2F2] items-center mt-24 md:px-24 py-20 px-8">
      <h1 className="flex items-center gap-2 font-bold text-[1rem]">
        <Image width={10} height={10} src={"icons/star.png"} alt="star" />
        OUR TEAM
      </h1>
      <h1 className="text-[3rem] font-semibold text-center">Meet Our Team</h1>
      <div className="flex md:flex-row flex-col gap-10 items-center flex-wrap">
        <MeetOurTeamCard
          name={"James Wong"}
          detail={"Cleaning Superviser"}
          link={""}
        />
        <MeetOurTeamCard
          name={"Sarah Johnson"}
          detail={"Operations Manager"}
          link={""}
        />
        <MeetOurTeamCard
          name={"David Nguyen"}
          detail={"Cleaning Technician"}
          link={""}
        />
        <MeetOurTeamCard
          name={"Samantha Lee"}
          detail={"Marketing Coordinator"}
          link={""}
        />
      </div>
    </div>
  );
};

export default OurTeam;
