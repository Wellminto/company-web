const WHYLIST = [
  {
    title: "High-Quality Services",
    subtitle:
      "Trust One Demand Service's skilled professional for reliable and expert service.",
  },
  {
    title: "Trained and Proffesional Staff",
    subtitle:
      "Rely on One Demand Service for excellence in cleaning and a commitment to your happiness.",
  },
  {
    title: "Exceptional Customer Service",
    subtitle:
      "Experience exceptional customer service with One Demand Service's dedicated team, commited to your satisfaction.",
  },
];

export default function WhyChoose() {
  return (
    <div className="flex items-center justify-between mt-24 md:px-24 px-8">
      <div className="flex flex-col md:w-[40%]">
        <img src="/illustrations/laundry-women.png" alt="icon" />
      </div>
      <div className="md:w-[60%]">
        <div className="flex items-center gap-2">
          <img src="/icons/star.png" alt="icon" />
          <span className="text-[1rem] font-semibold">WHY CHOOSE US</span>
        </div>
        <h3 className="font-semibold text-[3rem]">
          Providing Friendly, Reliable Home Services
        </h3>
        <h4 className="text-gray-500 text-[1rem] my-4">
          Serving <span className="text-[#EAAD24]">1000+</span> customers every
          month
        </h4>

        {WHYLIST.map(({ title, subtitle }) => {
          return (
            <div className="flex flex-col gap-6">
              <div className="flex ">
                <img
                  src="/icons/arrowRight.png"
                  className="h-5 w-5 mt-[1.1rem] mx-2"
                  alt=""
                />
                <div className="flex flex-col mt-4 gap-2">
                  <h3 className="tracking-tight text-[1rem] font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-start text-[0.9rem]">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
