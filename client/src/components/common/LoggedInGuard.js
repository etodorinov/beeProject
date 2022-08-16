import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

export const LoggedInGuard = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children ? children : <Outlet /> ;
};