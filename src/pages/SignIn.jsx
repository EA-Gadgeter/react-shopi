import { useContext } from "react";

import { AuthContext } from "../context/auth.jsx";

const SignIn = () => {
  const { authInfo, isAuth } = useContext(AuthContext);

  const loginButtonStyles = "w-full py-3 rounded-lg text-center text-white bg-black";
  const dissableLoginButton = Object.values(authInfo).includes("");

  return (
    <>
      <h1 className="mb-8 font-medium text-xl">Sign in</h1>
      <div className="w-full flex max-w-md flex-col gap-3.5 mb-6">
        <p>Email: <span className="font-bold">{authInfo.email}</span></p>
        <p>Password: <span className="font-bold">{authInfo.password}</span></p>

        <button
          className={isAuth ? loginButtonStyles : `${loginButtonStyles} bg-opacity-50`}
          disabled={dissableLoginButton}
        >
          Log In
        </button>
      </div>
      <a href="#" className="mb-6 border-b border-black">Forgot my password</a>

      <button
        className="w-full max-w-md py-3 rounded-lg text-center border border-black"
        disabled={!dissableLoginButton}
      >
        Sign up
      </button>
    </>
  );
};

export default SignIn;