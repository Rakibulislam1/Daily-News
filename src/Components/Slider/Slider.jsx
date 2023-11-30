/* eslint-disable react/no-unescaped-entities */
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div>
      <div className="bg-[#F3F3F3] flex items-center lg:mt-[4rem] mt-[60px] md:mt-[87px]">
        <h2 className="px-6 py-3 text-xl font-medium bg-blue-500 text-white">
          Latest
        </h2>
        <Marquee pauseOnHover={true}>
          <Link to="/" className="text-lg font-semibold text-[#403F3F] mr-10">
          Trump arraignment has "unparalleled public interest," but it won't be broadcast, judge says...
          </Link>
          <Link to="/" className="text-lg font-semibold text-[#403F3F] mr-10">
          Haberman reveals why Trump attacked judge and his family in speech...
          </Link>
          <Link to="/" className="text-lg font-semibold text-[#403F3F] mr-10">
          Judge will only briefly allow photos in the courtroom before Trump arraignment begins...
          </Link>
        </Marquee>
      </div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={500}
        // style={{ height: "90vh" }}
      >
        <div data-src="https://i.ibb.co/zJLZ7pc/slider-1.jpg" />
        <div data-src="https://i.ibb.co/4NN0X7V/slider-2.jpg" />
        <div data-src="https://i.ibb.co/vY6bp3d/slider-3.jpg" />
        <div data-src="https://i.ibb.co/CmwsCLJ/slider-4.jpg" />
        <div data-src="https://i.ibb.co/WHscGkn/slider-5.jpg" />
        <div data-src="https://i.ibb.co/XLsHHVb/slider-6.jpg" />
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
