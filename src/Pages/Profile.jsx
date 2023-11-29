import useAuth from "../Hooks/useAuth";

const Profile = () => {

  const {user} = useAuth()
  console.log(user);

  return (
    <div className="mt-32">
      <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
        <img
          className="inline-flex object-cover border-4 border-blue-500 dark:border-indigo-400 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 dark:shadow-indigo-700/100 bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400"
          src={user?.photoURL}
          alt={user?.photoURL}
        />
        <h1 className="text-2xl text-gray-500 font-bold mt-2">{user?.displayName}</h1>
        <h2 className="text-base md:text-xl text-gray-500 font-bold">
          {user?.email}
        </h2>
        <button className="bg-blue-500 rounded-md my-2 px-3 py-1 border-none font-medium text-white hover:rounded-full hover:bg-blue-600">
          Update Profile
        </button>
      </header>
    </div>
  );
};

export default Profile;
