import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="text-center mt-20 mb-10">
        <h2 className="text-2xl font-bold">Our Client Review</h2>
      </div>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} className="mySwiper ">

        {reviews.map((review) => (
          <SwiperSlide key={review._id} review={review}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-6">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
