import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useContext, useState } from "react";

import { removeHive } from "../../services/itemsServices";
import { HiveContext } from "../contexts/HiveContext";

import { LoadingSpinner } from "../common/Spinner";

export const DeleteHive = () => {
  const { currentHive } = useContext(HiveContext);
  const navigate = useNavigate();

  let [isLoading, setIsLoading] = useState(false);

  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        (isLoading && <LoadingSpinner />) || (
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
                  setIsLoading(true);
                  removeHive(currentHive?._id)
                    .then(() => {
                      navigate("/hives/catalogue");
                      onClose();
                      setIsLoading(false);
                    })
                    .catch(() => {
                      setIsLoading(true);
                      navigate("*");
                      onClose();
                      setIsLoading(false);
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
                  setIsLoading(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        )
      );
    },
  });
};
