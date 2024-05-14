export default function Hero() {
  return (
    <section className="min-h-[70vh] text-white z-10 md:px-24 px-8 py-12 flex flex-col justify-center items-center bg-cover bg-center backdrop-blur" style={{backgroundImage:"url(/icons/hero.jpg)"}}>
      <h1 className="text-[2.2rem] md:text-[3.4rem] text-center font-bold">
        Revolutionize Your Wash with Wellminto
      </h1>
      <p className="w-[85%] text-[1rem] md:text-[1.5rem] text-center leading-[29px] mt-2">
        Simplify Your Laundry with Wellminto's One Demand Laundry Services Your
        One-Stop Solution for Laundry Needs Effortless Booking, Trusted
        Providers, Exceptional Results.
      </p>
      <a
        href="tel:+919389586440"
        className="bg-black text-[1.2rem] px-6 py-3 text-white rounded-3xl mt-8 transition ease-in-out delay-150 hover:scale-110 duration-300"
      >
        Contact Us
      </a>
    </section>
  );
}
