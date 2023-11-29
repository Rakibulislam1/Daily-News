
import { useLoaderData } from "react-router-dom";

const AllArticlesViewDetails = () => {

  const data = useLoaderData()

  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <section className="mx-4 antialiased flex lg:flex-row justify-center items-center flex-col gap-5 ">
            <article key={data._id} className=" flex flex-wrap md:flex-nowrap shadow-lg rounded-lg max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
          <img
            className="w-full max-h-[400px] object-cover md:w-52 lg:rounded-l-lg rounded-t-lg lg:rounded-tr-none"
            src={data?.image}
            alt=""
          />
          <div className="">
            <div className="p-5 pb-4">
              <h1 className="text-2xl font-semibold text-gray-800 mt-4 mb-4">
                {data?.title}
              </h1>
              <span className="text-base bg-green-400 px-4 py-1 rounded-full font-semibold text-gray-800 mt-4">
                {data?.publisher}
              </span>
              <p className="text-xl text-gray-400 mt-2 leading-relaxed">
              {data?.description}
              </p>
            </div>
          </div>
        </article>

      </section>
    </div>
  );
};

export default AllArticlesViewDetails;