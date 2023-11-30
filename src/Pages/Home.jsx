import { Helmet } from "react-helmet";
import AllPublisher from "../Components/AllPublisher/AllPublisher";
import ContactUs from "../Components/ContactUs/ContactUs";
import PremiumSubscription from "../Components/PremiumSubscription/PremiumSubscription";
import Reviews from "../Components/Reviews/Reviews";
import Slider from "../Components/Slider/Slider";
import Statistic from "../Components/Statistic/Statistic";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Daily News-Home</title>
      </Helmet>
      <Slider></Slider>
      <AllPublisher></AllPublisher>
      <Statistic></Statistic>
      <PremiumSubscription></PremiumSubscription>
      <ContactUs></ContactUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
