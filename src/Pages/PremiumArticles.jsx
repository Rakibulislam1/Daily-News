import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import premium from "../../public/premium.json";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const PremiumArticles = () => {
  const axiosSecure = useAxiosSecure();

  const { data: premiumArticles = [] } = useQuery({
    queryKey: ["Premium"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/premiumArticle?plan=Premium`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="mt-20">
      <Helmet>
        <title>Daily News- Premium Articles</title>
      </Helmet>
      <section className="mx-4 antialiased grid lg:grid-cols-2 grid-col gap-5">
        {premiumArticles.map((articles) => (
          <article
            key={articles._id}
            className=" flex flex-wrap md:flex-nowrap border-2 shadow-lg rounded-lg max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1"
          >
            <img
              className="w-full max-h-[400px] object-cover md:w-52 lg:rounded-l-lg rounded-t-lg lg:rounded-tr-none"
              src={articles?.image}
              alt=""
            />
            <div className="">
              <div className="absolute right-2 bottom-2">
              {articles?.plan === "Premium" && (
                <Lottie className="w-16" animationData={premium} loop={true} />
              )}
              </div>
              <div className="p-5 pb-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {articles?.title}
                </h1>
                <p className="text-xl text-gray-400 mt-2 mb-4 leading-relaxed">
                  {articles?.description.length > 30
                    ? articles?.description.split(" ").slice(0, 25).join(" ")
                    : articles?.description}
                </p>
              </div>
              <div className="p-5">
                <div className="sm:flex sm:justify-between">
                  <Link
                    to={`/allArticlesViewDetails/${articles._id}`}
                    href=""
                    className="text-blue-500 border absolute bottom-3 border-blue-500 py-3 px-4 rounded inline-flex items-center"
                  >
                    View Details
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="w-6 h-6 ml-2"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PremiumArticles;
