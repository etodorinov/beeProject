import { useNavigate, useLocation } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useState, useEffect } from "react";

import { getOne, removeHive } from "../../services/itemsServices";

export const DeleteHive = () => {
  const [hive, setHive] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const hiveId = location.pathname.split("/").pop();

  useEffect(() => {
    getOne(hiveId)
      .then((response) => response.json())
      .then((result) => {
        setHive(result);
      });
  }, []);

  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="overlay">
          <div className="delete-confirmation">
            <h1>Are you sure you want to delete this hive?</h1>
            <div className="hive-text">
              <h3 id="name">Name: {hive.number}</h3>
              <h3 id="location">Location: {hive.location}</h3>
            </div>
            <button
              className="delete-confirmation-yes"
              onClick={() => {
                removeHive(hiveId)
                  .then(() => {
                    navigate("/hives/catalogue");
                    onClose();
                  })
                  .catch(() => {
                    navigate("*");
                    onClose();
                  });
              }}
            >
              Yes
            </button>
            <button
              className="delete-confirmation-no"
              onClick={() => {
                navigate(`/hives/details/${hiveId}`);
                onClose();
              }}
            >
              No
            </button>
          </div>
        </div>
      );
    },
  });
};
