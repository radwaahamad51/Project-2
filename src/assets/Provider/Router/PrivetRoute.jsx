import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../PRobider/AuthProvider";
import Loading from "../Pages/loding";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;