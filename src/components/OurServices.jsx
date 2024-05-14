import Card from "./Card";

const services = [
  {
      title : 'Home Cleaning',
      description : 'Expert Home Cleaning by One Demand Service. From top to bottom, we ensure a sparkling clean tailored to your needs. '
  },
  {
      title : 'Laundry',
      description : 'Freshness Delivered by One Demand Service. Say goodbye to laundry woes with our expert team at your service.  '
  },
  {
      title : 'Gardening',
      description : 'Gardening Bliss, Brought to You by One Demand Service. Transform your outdoor oasis with our expert touch.  '
  },
  {
      title : 'AC Repairing',
      description : 'AC Troubles? One Demand Service Has You Covered. Trust our experts to revive your cooling comfort.'
  }

]

export default function OurServices() {
  return (
    <div className="mt-24 md:px-24 px-8 bg-white text-black flex flex-col gap-5">
      {/* top-section */}
      <div className="flex md:flex-row flex-col justify-between mb-4 md:items-center">
        <div className="flex flex-col gap-2">
          <span className="flex gap-2">
            <img src={"/icons/star.png"} alt="Star" />
            <h1 className="font-[1rem] text-base font-bold leading-5 tracking-wider">
              OUR SERVICES
            </h1>
          </span>
          <h1 className="text-[3rem] font-semibold leading-16 tracking-normal">
            Services We Provide
          </h1>
          <p className="text-gray-500 font-[1rem] leading-7 tracking-normal w-[70%]">
            Simplify Your Life with One Demand Service: Effortless Booking,
            Trusted Providers, Exceptional Results.
          </p>
        </div>
        <button className="w-fit h-fit mt-4 md:mt-0 rounded-3xl bg-black text-white px-6 py-3">
          All Services
        </button>
      </div>
      {/* bottom-card-section */}
      <div className="mt-8 md:mt-0 flex md:flex-row flex-col gap-8">
        {services.map((service, idx) => {
          return (
            <Card
              key={idx}
              title={service.title}
              description={service.description}
              onClick={()=>{}}
              Icon={<img src={"/icons/star.png"} alt="Star" />}           
              />
          );
        })}
      </div>
    </div>
  );
}
