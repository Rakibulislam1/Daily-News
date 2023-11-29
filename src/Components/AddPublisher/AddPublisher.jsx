import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddPublisher = () => {
  const axiosPublic = useAxiosPublic();

  const addPublisher = async (e) => {
    e.preventDefault();
    const form = e.target;
    const publisher = form.name.value;
    const image = form.image.files[0];

    const imgFile = { image: image };
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      const data = {
        image: res.data.data.display_url,
        publisher,
      };
      const result = await axiosPublic.post("/add-publisher", data);
      console.log(result.data);
      if (result.data.insertedId) {
        toast.success("Publisher Info Added Successfully");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center py-5 sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-2xl font-bold text-center">Add New Publisher</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={addPublisher}>
              <div>
                <label className="block text-sm mb-2 dark:text-white">
                  Publisher Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    name="name"
                    placeholder="Enter Publisher Name"
                    type="text"
                    required=""
                    defaultValue=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="mt-6">
              <label className="block">
              <h2 className="text-white mb-2">Choose Articles Image</h2>
              <input
                type="file"
                name="image"
                className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:file:bg-blue-500 dark:hover:file:bg-blue-400"
              />
            </label>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Upload
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPublisher;
