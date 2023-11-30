import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import premium from "../../public/premium.json";
import Lottie from "lottie-react";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const AllArticles = () => {

  const axiosSecure = useAxiosSecure();
  // infinite scroll
  const [dataSource, setDataSource] = useState(Array.from({ length: 2 }));
  const [hasMore, setHasMore] = useState(true);
  // infinite scroll



  // infinite scroll
  const fetchData = () => {
    if (dataSource.length < allArticles.length) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 2 })));
      }, 200);
    } else {
      setHasMore(false);
    }
  };

  const { data: allArticles = [] } = useQuery({
    queryKey: ["add-articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/add-articles/approve");
      console.log(res.data);
      return res.data;
    },
  });

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (event) => {
    const searchValue = event.target.value;
    setSearchInput(searchValue);

    
    const filtered = allArticles.filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(filtered);
  };

  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <Helmet>
        <title>Daily News-All Articles</title>
      </Helmet>
      <form className="flex justify-center gap-5 mb-10">
        <div className="flex">
          <input
            type="search"
            placeholder="Search articles..."
            value={searchInput}
            onChange={handleSearchInput}
            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-black focus:outline-none focus:border-black"
          />
          <button
            type="submit"
            title="search"
            className="bg-black text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            Search
          </button>
        </div>
        <select
          id="pricingType"
          name="pricingType"
          className="h-10 border-2 border-black focus:outline-none focus:border-black text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option value="All" selected="">
            All
          </option>
          <option value="Preemium">Preemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </form>

      <div>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
          <div className="mx-4 antialiased grid lg:grid-cols-2 grid-col gap-5">
            {(searchInput ? searchResults : allArticles).slice(0, dataSource.length).map((articles) => (
              <article
                key={articles._id}
                className=" flex flex-wrap md:flex-nowrap shadow-lg rounded-lg max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1"
              >
                <img
                  className="w-full max-h-[400px] object-cover md:w-52 lg:rounded-l-lg rounded-t-lg lg:rounded-tr-none"
                  src={articles?.image}
                  alt=""
                />
                <div className="">
                  <div className="absolute right-2 bottom-2">
                    {articles?.plan === "Premium" && (
                      <Lottie
                        className="w-16"
                        animationData={premium}
                        loop={true}
                      />
                    )}
                  </div>
                  <div className="p-5 pb-4">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      {articles?.title}
                    </h1>
                    <p className="text-xl text-gray-400 mt-2 mb-4 leading-relaxed">
                      {articles?.description.length > 30
                        ? articles?.description
                            .split(" ")
                            .slice(0, 25)
                            .join(" ")
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
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default AllArticles;
