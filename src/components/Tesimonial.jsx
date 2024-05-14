import StarRating from "./StarRating";

const FEEDBACKS = [
  {
    rating: 4,
    feedback:
      "I recently used Wellminto's services for my laundry needs, and I must say I was impressed! The quality of the laundry was top-notch, and the staff was friendly and professional. Will definitely be using their services again!",
    user: { name: "Neha Sharma", post: "Marketing Executive" },
  },
  {
    rating: 3,
    feedback:
      "I have been using Wellminto for my dry cleaning for a few months now, and I am very satisfied with their service. They are reliable, and my clothes always come back looking fresh and clean. Highly recommended!",
    user: { name: "Rajesh Patel", post: "IT Professional" },
  },
  {
    rating: 4,
    feedback:
      "I tried Wellminto's premium laundry service for some of my delicate garments, and I couldn't be happier with the results. The attention to detail and care taken with my clothes was exceptional.",
    user: { name: "Priya Singh", post: "House Wife" },
  },
];

export default function Testimonial() {
  return (
    <section id="testimonials" className="flex flex-col items-center mt-24 md:px-24 px-8">
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
    </section>
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
