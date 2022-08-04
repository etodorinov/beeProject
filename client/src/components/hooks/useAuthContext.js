import { useContext } from "react";

import { AuthContext } from "../contexts/UserContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
