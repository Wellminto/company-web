import StarRating from "./StarRating";

const FEEDBACKS = [
  {
    rating: 4,
    feedback:
      "I couldn't be happier with the service provided by Reliiv. I highly recommend them to anyone in need of reliable home services.",
    user: { name: "James Smith", post: "Office Manager" },
  },
  {
    rating: 4,
    feedback:
      "From their attention to detail to their prompt communication. I'll definitely be using their services again!",
    user: { name: "James Smith", post: "Office Manager" },
  },
  {
    rating: 4,
    feedback:
      "I was hesitant to try a new home service provider, but Reliiv came highly recommended. I'm so glad I gave them a chance!",
    user: { name: "James Smith", post: "Office Manager" },
  },
];

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center mt-24 md:px-24 px-8">
      <h3 className="flex font-bold items-center text-[1rem] gap-2">
        <img src="\icons\star.png" alt="star" />
        TESTIMONIAL
      </h3>
      <h4 className="font-semibold text-[3rem] text-center">Hear What Our Clients Say</h4>
      <p className="text-gray-500 text-center text-[1.5rem]">Client Feedback and Testimonials: <br/>Real Stories of Satisfaction and Success</p>
      <div className="flex md:flex-row flex-col gap-8 mt-8">
        {FEEDBACKS.map((feedback)=>{
          return <TestimonialCard {...feedback} key={feedback.user}/>
        })}
      </div>
    </div>
  );
}

function TestimonialCard({ rating, feedback, user }) {
  return (
    <div className="border rounded-3xl p-6">
      <StarRating size={18} disable maxRating={rating} />
      <p className="mt-6 text-gray-500 text-[1rem]">{feedback}</p>
      <div className="flex items-center gap-6 mt-6 border-t pt-6">
        <img
          src={"icons/user.png"}
          alt={"user"}
          className="w-[40px] h-[40px]"
        />
        <span>
          <p className="font-semibold text-[1.1rem]">{user.name}</p>
          <p className="text-gray-500">{user.post}</p>
        </span>
      </div>
    </div>
  );
}
