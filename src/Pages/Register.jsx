/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { user, createUser, handleUpdateProfile } = useAuth();

  // console.log(user);

  const axiosPublic = useAxiosPublic()

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  // const [photo, setPhoto] = useState();

  
  const handleCreateUser = async (e) => {
    e.preventDefault();

    // const toastId = toast.loading("Signed up...");


    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long", {
        // id: toastId,
      });
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one Capital letter.", {
        // id: toastId,
      });
    } else if (!/[0-9]/.test(password)) {
      return toast.error("Password must contain at least one Numeric letter.", {
        // id: toastId,
      });
    } else if (!/[!@#$%^&*:;?,.]/.test(password)) {
      return toast.error("Password must contain at least one special character", {
        // id: toastId,
      });
    }

  
    const form = e.target
     const photo = form.photo.files[0]
    //  console.log(photo);
    const imgFile = { image: photo };
    // console.log(imgFile);
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log(res.data);
    if (res.data.success) {
      const data = {
        name,
        email,
        image: res.data.data.display_url,
      };
      console.log(data);
      // await createUser(email, password);
      // handleUpdateProfile(name, photo);
      // toast.success("Signed up successfully", { id: toastId });

      const result = await axiosPublic.post("/users", data);
      console.log(result.data);
      if (result.data.insertedId) {
        createUser(email, password)
          .then((data) => {
            // console.log(data);
            handleUpdateProfile(res.data.data.display_url, name).then((res) => {
              // console.log(res);
              // toast.success("User created successfully", { id: toastId });
              navigate(location.state ? location.state : "/");
            });
          })
          .catch((err) => console.log(err.message));
      }
    }

  };

  return (
    <div className="mt-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News - Sign in</title>
      </Helmet>
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-black dark:border-black">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign up
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <Link
                  to="/login"
                  className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sign in here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form onSubmit={handleCreateUser}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Your name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required=""
                        placeholder="Enter your name"
                        aria-describedby="email-error"
                        onBlur={(e) => setName(e.target.value)}
                      />
                      <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="name-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required=""
                        placeholder="Enter your email"
                        aria-describedby="email-error"
                        onBlur={(e) => setEmail(e.target.value)}
                      />
                      <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required=""
                        placeholder="••••••••"
                        aria-describedby="password-error"
                        onBlur={(e) => setPassword(e.target.value)}
                      />
                      <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      6+ characters required
                    </p>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="photo"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Your photo URL
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="photo"
                        name="photo"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required=""
                        placeholder="Your Photo URL"
                        aria-describedby="email-error"
                        // onBlur={(e) => setPhoto(e.target.value)}
                      />
                      <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="photo-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  {/* End Form Group */}
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ms-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm dark:text-white"
                      >
                        I accept the{" "}
                        <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  {/* End Checkbox */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
