import AllPublisher from "../Components/AllPublisher/AllPublisher";
import PremiumSubscription from "../Components/PremiumSubscription/PremiumSubscription";
import Slider from "../Components/Slider/Slider";
import Statistic from "../Components/Statistic/Statistic";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <AllPublisher></AllPublisher>
      <Statistic></Statistic>
      <PremiumSubscription></PremiumSubscription>
    </div>
  );
};

export default Home;
