import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("token", {});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth,
        userLogin,
        userLogout,
        isAuthenticated: !!auth.accessToken,
      }}
    >
      {" "}
      //!! converts object to boolean; alternatively Boolean(accessToken)
      {children}
    </AuthContext.Provider>
  );
};
