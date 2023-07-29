import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({
    user: "",
    email: "",
    password: "",
  });

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const authStorage = localStorage.getItem("authInfo");

    if (!authStorage) return;

    const authStorageParsed = JSON.parse(authStorage);
    setAuthInfo(prevInfo => {
      return {
        ...prevInfo,
        ...authStorageParsed,
      };
    });
  }, []);

  return (
    <AuthContext.Provider
      value={
        {
          authInfo,
          setAuthInfo,
          isAuth,
          setIsAuth
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

