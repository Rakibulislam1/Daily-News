import CountUp from "react-countup";


const Statistic = () => {
  
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">Statistic</h2>
      </div>
      <div className="flex justify-evenly flex-wrap items-center lg:gap-40 gap-x-14 gap-y-10 lg:my-10 my-5">
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-center">
            All users
          </h4>
          <p className="sm:mt-3 text-xl sm:text-3xl text-center font-bold text-blue-500">
            <CountUp delay={0.5} end={554200} />
            <span>+</span>
          </p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-center">
            Normal users
          </h4>
          <p className="sm:mt-3 text-xl sm:text-3xl text-center font-bold text-blue-500">
            <CountUp delay={0.5} end={127200} />
            <span>+</span>
          </p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-center">
            Premium users
          </h4>
          <p className="sm:mt-3 text-xl sm:text-3xl text-center font-bold text-blue-500">
            <CountUp delay={0.5} end={222000} />
            <span>+</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
