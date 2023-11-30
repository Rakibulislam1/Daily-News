import CountUp from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react";



const Statistic = () => {
  const [data, setData] = useState('')

  const axiosPublic = useAxiosPublic();
  const { data: user = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  useEffect(() => {
    const premiumUser = user.filter((u) => u.premiumTaken === "true");
    setData(premiumUser);
  }, [user]);
 
  
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
            <CountUp delay={0.5} end={user.length} />
            <span>+</span>
          </p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-center">
            Normal users
          </h4>
          <p className="sm:mt-3 text-xl sm:text-3xl text-center font-bold text-blue-500">
            <CountUp delay={0.5} end={user.length - data.length} />
            <span>+</span>
          </p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-center">
            Premium users
          </h4>
          <p className="sm:mt-3 text-xl sm:text-3xl text-center font-bold text-blue-500">
            <CountUp delay={0.5} end={data.length} />
            <span>+</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
