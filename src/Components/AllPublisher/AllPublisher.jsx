import bitcoin from "../../assets/Publisher/bitcoin.webp";
import shareamerica from "../../assets/Publisher/shareamerica.webp";
import techexplorist from "../../assets/Publisher/techexplorist.webp";
import theprint from "../../assets/Publisher/theprint.webp";
import uberapp from "../../assets/Publisher/uberapp.webp";
import unitednations from "../../assets/Publisher/unitednations.webp";

const AllPublisher = () => {
  return (
    <div>
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold">All Publisher</h2>
      </div>
      <div className="flex justify-center flex-wrap items-center gap-6 my-10">
        <img className="w-32 lg:w-auto" src={bitcoin} alt="" />
        <img className="w-32 lg:w-auto" src={shareamerica} alt="" />
        <img className="w-32 lg:w-auto" src={techexplorist} alt="" />
        <img className="w-32 lg:w-auto" src={uberapp} alt="" />
        <img className="w-32 lg:w-auto" src={theprint} alt="" />
        <img className="w-32 lg:w-auto" src={unitednations} alt="" />
      </div>
    </div>
  );
};

export default AllPublisher;
