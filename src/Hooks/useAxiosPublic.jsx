import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://daily-news-hazel-seven.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
