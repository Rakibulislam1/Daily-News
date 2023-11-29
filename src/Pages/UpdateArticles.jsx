import { useState } from "react";
import Select from "react-select";

import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const publisherTags = [
  { value: "#fashion", label: "#fashion" },
  { value: "#sports", label: "#sports" },
  { value: "#fitness", label: "#fitness" },
  { value: "#movie", label: "#movie" },
  { value: "#travel", label: "#travel" },
  { value: "#magazine", label: "#magazine" },
];

const UpdateArticles = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth()
  const [value, getValue] = useState([]);
  const updateArticleData = useLoaderData([]);
  console.log(updateArticleData);

  const addData = (e) => {
    getValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const { data: publisher = [] } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get("/add-publisher");
      console.log(res.data);
      return res.data;
      
    },
    
  });

  const handleArticleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const publisherTags = value;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const publisher = form.publisher.value;
    const time = new Date();

    const imgFile = { image: image };

    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      const data = {
        title,
        publisherTags,
        description,
        publisher,
        image: res.data.data.display_url,
        time,
        status: 'Pending',
        email: user?.email,
        authors_name: user?.displayName,
        authors_image:user?.photoURL,
      };

      const result = await axiosPublic.patch(
        `/add-articles/update/${updateArticleData._id}`,
        data
      );

      console.log(result.data);
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: `${updateArticleData?.title} is updated !`,
          icon: "success",
        });
      }
      
    }
  };
  return (
    <div className="mt-28">
      <h2 className="text-2xl font-bold text-center mb-10">
        Add Your Article Here{" "}
      </h2>

      <form
        onSubmit={handleArticleUpdate}
        className="bg-black lg:w-[60%] mx-2 lg:mx-auto rounded-lg p-10"
      >
        <div className="flex justify-center flex-col lg:flex-row gap-5 mb-5">
          <div className="w-full">
            <label className="block text-sm mb-2 dark:text-white">
              Articles Title
            </label>
            <input
              type="text"
              defaultValue={updateArticleData?.title}
              className="py-2 px-4 block w-full bg-white border-transparent rounded-md text-base"
              placeholder="Articles Title"
              name="title"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm mb-2 dark:text-white">
              Articles Description
            </label>
            <input
              type="text"
              className="py-2 px-4 block w-full bg-white border-transparent rounded-md text-base"
              placeholder="Articles Description"
              name="description"
              defaultValue={updateArticleData?.description}
            />
          </div>
        </div>
        <label className="block text-sm mb-2 dark:text-white">
          Articles Publisher
        </label>
        <select
          className="border-2 px-2 py-2 mb-2 w-full bg-white rounded-md"
          name="publisher"
          defaultValue={updateArticleData?.publisher}
        >
          
          {publisher.map((item, index) => (
            <option key={index} value={item?.publisher}>
              {item?.publisher}
            </option>
          ))}
        </select>

        <label className="block text-sm mb-2 dark:text-white">
          Articles Publisher Tags
        </label>
        <Select
          options={publisherTags}
          isMulti
          name="publisherTags"
          defaultValue={
            updateArticleData?.publisherTags
              ? updateArticleData.publisherTags.map((publisherTags) => ({ label: publisherTags, value: publisherTags }))
              : []
          } 
          
          onChange={addData}
        />

        <div className="mt-5">
          <div>
            <label className="block">
              <h2 className="text-white mb-2">Choose Articles Image</h2>
              <input
                type="file"
                name="image"
                className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:file:bg-blue-500 dark:hover:file:bg-blue-400"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update Articles
        </button>
      </form>
    </div>
  );
};

export default UpdateArticles;
