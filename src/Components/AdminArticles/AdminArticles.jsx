import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DashboardDecline from "../DashboardDecline/DashboardDecline";
import { useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AdminArticles = () => {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const axiosSecure = useAxiosSecure();
  const { data: addArticles = [], refetch } = useQuery({
    queryKey: ["add-articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/add-articles");
      console.log(res.data);
      return res.data;
    },
  });

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const indexOfLastArticles = (currentPage + 1) * itemsPerPage;
  const indexOfFirstArticles = indexOfLastArticles - itemsPerPage;
  const currentArticles = addArticles.slice(indexOfFirstArticles, indexOfLastArticles);

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
        axiosSecure.delete(`/add-articles/${id}`).then((res) => {
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

  const handlePremium = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, premium it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/add-articles/premium/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Premium!",
              text: "User Premium Successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleApprove = (id) => {
    axiosSecure
      .patch(`/add-articles/${id}`, { status: "Approve" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
        console.log(res.data);
      });
  };

  return (
    <div className="ml-48">
      <Helmet>
        <title>Daily News-Dashboard All Articles</title>
      </Helmet>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Article Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Posted Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Publisher
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Approval
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentArticles.map((article) => (
            <>
              <tr key={article._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user?.displayName}
                      </div>
                      <div className="text-sm text-gray-500">{user?.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{article?.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {article?.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {article?.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {article?.publisher}
                </td>

                <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500">
                  {article.status == "Approve" ? (
                    <p>Approved</p>
                  ) : (
                    <Link
                      onClick={() => handleApprove(article._id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Approve
                    </Link>
                  )}

                  <Link
                    onClick={() => handleOpen(article._id)}
                    className="ml-2 text-red-600 hover:text-red-900"
                  >
                    Decline
                  </Link>
                </td>

                <td className="px-6  py-4 whitespace-nowrap  text-sm font-medium">
                  {article.plan == "Premium" ? (
                    <p>Premium</p>
                  ) : (
                    <Link
                      onClick={() => handlePremium(article._id)}
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Make Premium
                    </Link>
                  )}

                  <Link
                    onClick={() => handleDelete(article._id)}
                    className="ml-2 text-red-600 hover:text-red-900"
                  >
                    Delete
                  </Link>
                </td>
                <DashboardDecline
                  open={open}
                  article={article}
                  handleClose={handleClose}
                />
              </tr>
            </>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <nav className="flex items-center ml-6 pt-20 -space-x-px">
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 0}
          >
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="hidden sm:block">Previous</span>
          </button>
          {[...Array(Math.ceil(addArticles.length / itemsPerPage)).keys()].map((page) => (
            <button
              key={page}
              type="button"
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                currentPage === page
                  ? 'bg-gray-200 text-gray-800'
                  : 'border border-gray-200 text-gray-800 hover:bg-gray-100'
              } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
              onClick={() => setCurrentPage(page)}
            >
              {page + 1}
            </button>
          ))}
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={indexOfLastArticles >= addArticles.length}
          >
            <span className="hidden sm:block">Next</span>
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </nav>
        {/* End Pagination */}
    </div>
  );
};

export default AdminArticles;
