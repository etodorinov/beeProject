import { useNavigate, useLocation } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useContext } from "react";

import { removeHive } from "../../services/itemsServices";
import { HiveContext } from "../contexts/HiveContext";

export const DeleteHive = () => {
  const { currentHive } = useContext(HiveContext);
  const navigate = useNavigate();

  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="overlay">
          <div className="delete-confirmation">
            <h1>Are you sure you want to delete this hive?</h1>
            <div className="hive-text">
              <h3 id="name">Name: {currentHive?.number}</h3>
              <h3 id="location">Location: {currentHive?.location}</h3>
            </div>
            <button
              className="delete-confirmation-yes"
              onClick={() => {
                removeHive(currentHive?._id)
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
                navigate(`/hives/details/${currentHive?._id}`);
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
