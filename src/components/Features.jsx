import Card from "./Card";

const FEATURES = [
  {
    title: "Speed",
    description:
      "Experience unparalleled swiftness in receiving the services you require, ensuring you waste no time waiting.",
  },
  {
    title: "Convenience",
    description:
      "Enjoy the ultimate convenience with our platform, granting you effortless access to a wide array of services right from your device, at your convenience.",
  },
  {
    title: "Reliability",
    description:
      "Rely on our steadfast commitment to providing dependable assistance, ensuring peace of mind whenever you call upon us for support.",
  },
];

export default function Features() {
  return (
    <div className="mt-16 md:px-24 px-8">
      <div className="flex md:flex-row flex-col justify-around">
        {FEATURES.map((feature, idx) => {
          return (
            <Card
              key={idx}
              Icon={<img src="icons/star.png"/>}
              className="w-[25%]"
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
}
