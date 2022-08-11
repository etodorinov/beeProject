import { Navigate } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

export const NotLoggedInGuard = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  
  if (!isAuthenticated) {
    return <Navigate to="/users/login" replace />;
  }
  
  return children;
};
