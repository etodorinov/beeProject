import { useNavigate, useLocation } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useContext, useState, useEffect } from "react";

import { getSpecificNote, removeNote } from "../../services/notesServices";
import { HiveContext } from "../contexts/HiveContext";

export const DeleteNote = () => {
  const { currentHive } = useContext(HiveContext);
  const [note, setNote] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const currentNoteId = location.pathname.split("/")[2];

  useEffect(() => {
    getSpecificNote(currentNoteId).then((response) =>
      response.json().then((result) => setNote(result))
    );
  }, []);

  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="overlay">
          <div className="delete-confirmation">
            <h1>Are you sure you want to delete this note?</h1>
            <div className="hive-text">
              <h3 id="name">Date: {note[0]?.date}</h3>
              <h3 id="location">Note: {note[0]?.note}</h3>
            </div>
            <button
              className="delete-confirmation-yes"
              onClick={() => {
                removeNote(currentNoteId)
                  .then(() => {
                    navigate(`/notes/${currentHive?._id}/view`);
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
                navigate(`/notes/${currentHive?._id}/view`);
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
