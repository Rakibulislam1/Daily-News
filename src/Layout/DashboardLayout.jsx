import { Link, Outlet } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { RiArticleLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdPublishedWithChanges } from "react-icons/md";
import { Helmet } from "react-helmet";

const DashboardLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Daily News-Dashboard All Users</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row">
        <div className="w-64">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 mt-5 ml-5"
            data-hs-overlay="#docs-sidebar"
            aria-controls="docs-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="flex-shrink-0 w-10 h-10"
              width={20}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <div
            id="docs-sidebar"
            className="hs-overlay bg-black hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
          >
            <div className="px-6 hover:underline">
              <Link
                to="/"
                className="flex-none text-xl font-semibold dark:text-white"
                aria-label="Daily News"
              >
                <div className="flex gap-2 items-center">
                  <IoHomeOutline className="text-2xl"></IoHomeOutline>
                  <span>Daily News</span>
                </div>
              </Link>
            </div>
            <nav
              className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul className="space-y-1.5">
                <li className="hs-accordion" id="users-accordion">
                  <Link
                    to="/dashboard/allUser"
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <LuUsers className="text-lg"></LuUsers>
                    All users
                  </Link>
                </li>

                <li className="hs-accordion" id="projects-accordion">
                  <Link to='/dashboard/adminArticles' className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <RiArticleLine className="text-lg"></RiArticleLine>
                    All Articles
                  </Link>
                </li>
                <li className="hs-accordion" id="projects-accordion">
                  <Link to='/dashboard/addPublisher' className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <MdPublishedWithChanges className="text-lg"></MdPublishedWithChanges>
                    Add Publisher
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
