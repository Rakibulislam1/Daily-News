import bitcoin from '../../assets/Publisher/bitcoin.webp'
import shareamerica from '../../assets/Publisher/shareamerica.webp'
import techexplorist from '../../assets/Publisher/techexplorist.webp'
import theprint from '../../assets/Publisher/theprint.webp'
import uberapp from '../../assets/Publisher/uberapp.webp'
import unitednations from '../../assets/Publisher/unitednations.webp'


const AllPublisher = () => {
  return (
   <div>
     <div className="mt-20 text-center">
      <h2 className="text-2xl font-bold">All Publisher</h2>
    </div>
    <div className='flex justify-center items-center gap-7 my-10'>
      <img src={bitcoin} alt="" />
      <img src={shareamerica} alt="" />
      <img src={techexplorist} alt="" />
      <img src={uberapp} alt="" />
      <img src={theprint} alt="" />
      <img src={unitednations} alt="" />
    </div>
   </div>
  );
};

export default AllPublisher;