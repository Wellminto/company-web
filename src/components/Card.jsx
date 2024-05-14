export default function Card({ title, description, onClick, className,Icon }) {
  return (
    <div
      className={`${
        className || ""
      } flex flex-col gap-4 md:w-[30%] w-full pb-12 relative`}
    >
      <div className="bg-black flex justify-center items-center w-[50px] h-[50px] rounded-[50%]">
        {Icon}
      </div>

      <h3 className="font-semibold text-[1.5rem] leading-11 tracking-normal">
        {title}
      </h3>
      <p className="font-normal text-[1rem] leading-7 tracking-normal text-gray-500">
        {description}
      </p>
      {onClick && (
        <a className="cursor-pointer absolute bottom-2 text-[#EAAD24] font-button text-sm font-semibold leading-4 tracking-normal">
          Learn More
        </a>
      )}
    </div>
  );
}
