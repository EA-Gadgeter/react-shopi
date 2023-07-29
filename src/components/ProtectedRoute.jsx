import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/auth";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/sign-in" />;  
  }

  return children;
};

export default ProtectedRoute;