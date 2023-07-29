import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import { AuthContext } from "../context/auth";

const SignUp = ({ setShowSignUp }) => {
  const { setIsAuth, setAuthInfo } = useContext(AuthContext);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const naviate = useNavigate();

  const handleCreateAccount = () => {
    setAuthInfo(prevInfo => {
      return {
        ...prevInfo,
        user,
        email,
        password,
      };
    });
    localStorage.setItem("authInfo", JSON.stringify({ user, email, password }));

    setIsAuth(true);

    naviate("/");
  };

  return (
    <>
      <div className="w-80 flex justify-center items-center relative mb-6">
        <ChevronLeftIcon 
          className="
            w-6
            h-6
            absolute left-0
            text-black
            cursor-pointer
          "
          onClick={() => setShowSignUp(false)}
        />
        <h1 className="font-medium text-xl">Sign in</h1>
      </div>  

      <div className="w-full flex max-w-md flex-col gap-3.5 mb-6">
        <label className="flex flex-col" htmlFor="signup-user">
          Your name
          <input 
            className="w-full p-3 rounded-lg border border-black" 
            type="text" id="signup-user" placeholder="Peter"
            onChange={(event) => setUser(event.target.value)}
            value={user}
          />
        </label>

        <label className="flex flex-col" htmlFor="signup-email">
          Your email
          <input 
            className="w-full p-3 rounded-lg border border-black" 
            type="email" id="signup-email" placeholder="example@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>

        <label className="flex flex-col" htmlFor="signup-password">
          Your password
          <input 
            className="w-full p-3 rounded-lg border border-black" 
            type="password" id="signup-password" placeholder="******"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </label>

        <button
          className="w-full py-3 rounded-lg text-center bg-black text-white"
          onClick={handleCreateAccount}
        >
          Create account
        </button>
      </div>
    </> 
  );
};

export default SignUp;