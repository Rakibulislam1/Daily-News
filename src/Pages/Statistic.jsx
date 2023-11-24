import CountUp from "react-countup";
const Statistic = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center gap-40">
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-center">
            All users
          </h4>
          <p className="mt-2 sm:mt-3 text-xl sm:text-4xl text-center font-bold text-blue-600">
            <CountUp delay={2} end={554200} />
            <span>+</span>
          </p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-center">
          Normal users
          </h4>
          <p className="mt-2 sm:mt-3 text-xl sm:text-4xl text-center font-bold text-blue-600">
            <CountUp delay={2} end={127200} />
            <span>+</span>
          </p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-center">
          Premium users
          </h4>
          <p className="mt-2 sm:mt-3 text-xl sm:text-4xl text-center font-bold text-blue-600">
            <CountUp delay={2} end={222000} />
            <span>+</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
