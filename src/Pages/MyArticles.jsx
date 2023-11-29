import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const MyArticles = () => {
  const axiosPublic  = useAxiosPublic();
  const { user } = useAuth();

  const { data: articles, refetch} = useQuery({
    queryKey: ["add-articles"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/add-articles/myArticle?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/add-articles/myArticle/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User Deleted Successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mt-[4rem]">
      {articles?.length === 0 ? (
        <p className="text-center flex justify-center">No Articles Found</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Serial No
              </th>

              <th
                scope="col"
                className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Article Title
              </th>
              <th
                scope="col"
                className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Details
              </th>
              <th
                scope="col"
                className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Plans
              </th>

              <th
                scope="col"
                className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Update
              </th>

              <th
                scope="col"
                className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles?.map((article, index) => (
              <tr key={article._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <td className="px-6  py-4 whitespace-nowrap  text-sm font-medium">
                    {index + 1}
                  </td>
                </td>

                <td className="px-6  py-4 whitespace-nowrap  text-sm font-medium">
                  {article?.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {article?.status === "Approve" ? (
                      <p className="flex gap-2 font-bold justify-center  items-center">
                        {article?.status}
                      </p>
                    ) : (
                      <button>Decline</button>
                    )}
                  </span>
                </td>
                <td className="px-6  py-4 whitespace-nowrap  text-sm font-medium">
                  <Link to={`/allArticlesViewDetails/${article._id}`}>Details</Link>
                </td>
                <td className="px-6  py-4 whitespace-nowrap  text-sm font-medium">
                  {article?.plan ? (
                    <span className="px-2 font-bold inline-flex text-xs leading-5  rounded-full bg-red-100 text-red-800">
                      {article?.plan}
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Free
                    </span>
                  )}
                </td>

                <td className="px-6  py-4 whitespace-nowrap  text-sm font-medium">
                  <Link to={`/updateArticle/${article._id}`}>Update</Link>
                </td>

                <td className="px-6  py-4 whitespace-nowrap  text-sm font-medium">
                  <Link onClick={() => handleDelete(article._id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyArticles;
