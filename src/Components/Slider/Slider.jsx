import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={500}
    >
      <div data-src="https://i.ibb.co/zJLZ7pc/slider-1.jpg" />
      <div data-src="https://i.ibb.co/4NN0X7V/slider-2.jpg" />
      <div data-src="https://i.ibb.co/vY6bp3d/slider-3.jpg" />
      <div data-src="https://i.ibb.co/CmwsCLJ/slider-4.jpg" />
      <div data-src="https://i.ibb.co/WHscGkn/slider-5.jpg" />
      <div data-src="https://i.ibb.co/XLsHHVb/slider-6.jpg" />
    </AutoplaySlider>
  );
};

export default Slider;
