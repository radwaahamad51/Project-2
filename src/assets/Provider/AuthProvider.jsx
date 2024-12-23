import { createContext, useEffect, useState } from "react";
import app from "../Auth.init.js/firebase.config";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvoder = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // login sector
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   register section

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google login
  const handelgogolesignin = () => {
    const googleProvider = new GoogleAuthProvider(); // Create an instance of GoogleAuthProvider
    setLoading(true);
    return signInWithPopup(auth, googleProvider) // Pass the instance here
      .then((result) => {
        setUser(result.user);
        console.log("Google Sign-In Successful:", result.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error during Google Sign-In:", error);
        setLoading(false);
      });
  };

  // updateProfile
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };



  // loding data not gone
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const authInfo = {

    user,
    loading,

    setUser,
    userLogin,
    createNewUser,

    logOut,

    handelgogolesignin,
    updateUserProfile


  }



  return <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
};

export default AuthProvoder;