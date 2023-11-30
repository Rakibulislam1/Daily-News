import { FaLocationArrow } from "react-icons/fa6";
const ContactUs = () => {
  return (
    <div className="mx-2">
      <div className="text-center mt-20 mb-10">
        <h2 className="text-2xl font-bold">Contact Us</h2>
      </div>
      <div className="shadow-2xl my-10 bg-gradient-to-r from-blue-500 to-black mx-auto lg:p-10 p-5 rounded-3xl lg:w-2/3">
      <div className="flex lg:flex-row flex-col items-center lg:gap-20 justify-center">
        <div className="mb-3">
          <h2 className="text-xl font-semibold lg:text-start text-center text-white">Daily News</h2>
          <p className="text-white text-center text-sm">Most popular news services website </p>
        </div>
        <div className="relative flex items-center justify-end">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="input input-bordered focus:outline-gray-200 rounded-full py-3 px-5 md:w-[380px] w-[350px]"
          />
          <div className="flex rounded-full mr-1 px-4 py-2 items-center gap-2 bg-blue-500 absolute ">
            <FaLocationArrow className="text-white"></FaLocationArrow>
            <p className="text-white font-semibold">Contact Us</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;