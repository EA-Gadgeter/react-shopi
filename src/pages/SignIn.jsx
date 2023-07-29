import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth.jsx";

import SignUp from "./SignUp.jsx";

const SignIn = () => {
  const { authInfo, isAuth, setIsAuth } = useContext(AuthContext);
  const [showSignUp, setShowSignUp] = useState(false);

  const navigate = useNavigate();

  const loginButtonStyles = "w-full py-3 rounded-lg text-center text-white bg-black";
  const signUpButtonStyles = "w-full max-w-md py-3 rounded-lg text-center border border-black";

  const dissableLoginButton = Object.values(authInfo).includes("");

  const handleLogin = () => {
    setIsAuth(true);
    navigate("/");
  };

  return (
    <>
      {
        showSignUp ? 
        <SignUp setShowSignUp={setShowSignUp} /> : 
        (
          <>
            <h1 className="mb-8 font-medium text-xl">Sign in</h1>
            <div className="w-full flex max-w-md flex-col gap-3.5 mb-6">
              <p>Email: <span className="font-bold">{authInfo.email}</span></p>
              <p>Password: <span className="font-bold">{authInfo.password}</span></p>

              <button
                className={!dissableLoginButton ? loginButtonStyles : `${loginButtonStyles} opacity-50`}
                disabled={dissableLoginButton}
                onClick={handleLogin}
              >
                Log In
              </button>
            </div>
            <a href="#" className="mb-6 border-b border-black">Forgot my password</a>

            <button
              className={dissableLoginButton ? signUpButtonStyles : `${signUpButtonStyles} opacity-75`}
              disabled={!dissableLoginButton || !isAuth}
              onClick={() => setShowSignUp(true)}
            >
              Sign up
            </button>
          </> 
        )
      }
    </>
  );
};

export default SignIn;