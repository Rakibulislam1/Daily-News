import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import bg_01 from "../../src/assets/image/bg_1.jpg"
import bg_02 from "../../src/assets/image/bg_2.jpg"
import bg_03 from "../../src/assets/image/bg_3.jpg"

const Subscription = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const [pay, setPay] = useState("");
  console.log(pay);

  return (
    <div className="mt-[4rem] mb-20">
      <Helmet>
        <title>Daily News-Subscription</title>
      </Helmet>

      <div>
        {" "}
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={1000}
          // style={{ height: "70vh" }}
        >
          
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={bg_01}
              className="w-full rounded-xl"
            />
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={bg_02}
              className="w-full rounded-xl"
            />
          </div> 
          <div id="slide3" className="carousel-item relative w-full bg">
            <img
              src={bg_03}
              className="w-full rounded-xl"
            />
          </div> 

        </AutoplaySlider>
        <div className="my-20">
          <div className="flex flex-col justify-center items-center pb-20">
            <div className="bg-gray-100 rounded-lg shadow-lg p-16">
              <h1 className="text-2xl font-bold mb-6">Make Payment</h1>

              <select
                className="w-full"
                onChange={(e) => setPay(e.target.value)}
                name="payment"
                id=""
              >
                <option value="" disabled selected>
                  Select Plan
                </option>
                <option value="20">1 Days -$20</option>
                <option value="50">1 Days -$50</option>
                <option value="100">3 Days -$100</option>
              </select>

              <div className="flex justify-center mt-6">
                <Link to={`/payment/${pay}`}>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={pay === ""}
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
