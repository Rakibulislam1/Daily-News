import CountUp from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const Statistic = () => {

  const axiosPublic = useAxiosPublic();
  const { data: user = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  const { data: premiumArticles = [] } = useQuery({
    queryKey: ["Premium"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/premiumArticle?plan=Premium`);
      console.log(res.data);
      return res.data;
    },
  });
  
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
            <CountUp delay={0.5} end={premiumArticles.length - user.length} />
            <span>+</span>
          </p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-center">
            Premium users
          </h4>
          <p className="sm:mt-3 text-xl sm:text-3xl text-center font-bold text-blue-500">
            <CountUp delay={0.5} end={44444} />
            <span>+</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
