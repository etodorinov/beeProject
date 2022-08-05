import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext } from "../contexts/UserContext";
import { logout } from "../../services/usersServices";

export const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);

  useEffect(() => {
    logout(user.accessToken)
      .then(() => {
        userLogout();
        navigate("/");
      })
      .catch(() => {
        navigate("/");
      });
  });

  return null;
};
