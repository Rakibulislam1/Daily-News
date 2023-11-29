import { Link } from "react-router-dom";
import error from "../../src/assets/Icons/error.json"
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[70vh]">
        <Lottie className="w-[600px]" animationData={error} loop={true} />
      </div>
      <div>
        <button className="px-5 py-1 block mx-auto rounded-md bg-blue-500 border-none font-medium text-lg text-white hover:rounded-full hover:bg-blue-600">
          <Link className="text-center" to="/">
            Go Back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
