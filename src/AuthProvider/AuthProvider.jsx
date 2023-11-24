import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Configs/Firebase.config";
import toast from "react-hot-toast";



export const AuthContext = createContext()
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {


  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  // login user
  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update Profile
  const handleUpdateProfile = (name, photo) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // google sign in
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  // log out
  const logout = () => {
    setIsLoading(true);
    toast.success("Logged out successfully");
    return signOut(auth);
  };


  // on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // const userEmail = currentUser?.email || user?.email;

      // const loggedUser = { email: userEmail };
      // if (currentUser) {
      //   axios
      //     .post("https://assign11server.vercel.app/jwt", loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //     });
      // }
      setIsLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);
  // user?.email

  const authInfo = {
    createUser,
    user,
    isLoading,
    login,
    handleUpdateProfile,
    googleSignIn,
    logout,

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;