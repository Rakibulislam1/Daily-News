import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AllPublisher = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["add-publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get("/add-publisher");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  return (
    <div>
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold">All Publisher</h2>
      </div>

      <div className="flex justify-center flex-wrap items-center gap-6 my-10">
        {users.map((user) => (
          <img className="w-44" key={user._id} src={user?.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default AllPublisher;
