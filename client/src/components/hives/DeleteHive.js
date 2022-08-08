import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { removeHive } from "../../services/itemsServices";

export const DeleteHive = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const hiveId = location.pathname.split("/").pop();

  useEffect(() => {
    removeHive(hiveId)
      .then(() => {
        navigate("/hives/catalogue");
      })
      .catch(() => {
        navigate("*");
      });
  });
};
