import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <>
        <header className="flex flex-wrap items-center sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-sm py-3 sm:py-0">
          <nav
            className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Daily News"
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex-none lg:text-xl text-base font-normal lg:font-semibold text-white"
                aria-label="Daily News"
              >
                Daily News
              </Link>
              <div className="sm:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
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
                    <line x1={3} x2={21} y1={6} y2={6} />
                    <line x1={3} x2={21} y1={12} y2={12} />
                    <line x1={3} x2={21} y1={18} y2={18} />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
            >
              <div className="flex text-white text-sm font-normal lg:font-medium flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 lg:gap-x-7 sm:gap-x-3 sm:mt-0 sm:ps-7">  
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-gray-300 lg:font-medium font-sm underline" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/addArticles"
                  className={({ isActive }) =>
                    isActive ? "text-gray-300 lg:font-medium font-sm underline" : ""
                  }
                >
                  Add Articles
                </NavLink>
                <NavLink
                  to="/allArticles"
                  className={({ isActive }) =>
                    isActive ? "text-gray-300 lg:font-medium font-sm underline" : ""
                  }
                >
                  All Articles
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-gray-300 lg:font-medium font-sm underline" : ""
                  }
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/myArticles"
                  className={({ isActive }) =>
                    isActive ? "text-gray-300 lg:font-medium font-sm underline" : ""
                  }
                >
                  My Articles
                </NavLink>
                <NavLink
                  to="/premiumArticles"
                  className={({ isActive }) =>
                    isActive ? "text-gray-300 lg:font-medium font-sm underline" : ""
                  }
                >
                  Premium Articles
                </NavLink>

                {user ? (
                  <div className="flex items-center gap-5">
                    <Link to="/profile">
                      <img
                        className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                        src={user?.photoURL}
                        alt="Image Description"
                      />
                    </Link>

                    <Link
                      onClick={logout}
                      className="flex items-center  gap-x-2 lg:font-medium font-sm text-white hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6"
                    >
                      Log out
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link
                      to="/login"
                      className="flex items-center gap-x-2 font-medium text-white hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4"
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      Log in
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </header>
      </>
    </div>
  );
};

export default Navbar;
