import { useContext } from "react";

import { AuthContext } from "../context/auth.jsx";

import ProtectedRoute from "../components/ProtectedRoute";

const MyAccount = () => {
  const { setIsAuth, authInfo } = useContext(AuthContext);

  return (
    <ProtectedRoute>
      <h1 className="mb-8 font-medium text-xl">My Account</h1>
      <div className="w-full flex max-w-md flex-col gap-3.5">
        <p>Email: <span className="font-bold">{authInfo.email}</span></p>
        <p>Password: <span className="font-bold">{authInfo.password}</span></p>

        <button
          className="w-full py-3 rounded-lg text-center border border-black"
          onClick={() => setIsAuth(false)}
        >
          Log Out
        </button>
      </div>
    </ProtectedRoute>
  );
};

export default MyAccount;