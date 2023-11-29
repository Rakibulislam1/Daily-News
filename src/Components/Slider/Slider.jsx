import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div>
      <div className="bg-[#F3F3F3] flex items-center mt-[4rem]">
        <h2 className="px-6 py-3 text-xl font-medium bg-blue-500 text-white">
          Latest
        </h2>
        <Marquee pauseOnHover={true}>
          <Link to="/" className="text-lg font-semibold text-[#403F3F] mr-10">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
          <Link to="/" className="text-lg font-semibold text-[#403F3F] mr-10">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
          <Link to="/" className="text-lg font-semibold text-[#403F3F] mr-10">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
        </Marquee>
      </div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={500}
        style={{ height: "90vh" }}
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
