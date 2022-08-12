import { Link } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../contexts/UserContext";
import { HiveContext } from "../contexts/HiveContext";

export const SingleNote = (props) => {
  const { user } = useContext(AuthContext);
  const { currentHive } = useContext(HiveContext);

  return (
    <div className="note">
      <div className="note-info">
        <h1>Date: {props.note.date}</h1>
        <span>Note:</span>
        <p>{props.note.note}</p>
        {user?._id === currentHive?._ownerId?._id ? (
          <>
            <Link to={`/notes/${props.note._id}/edit`} className="btn-note-edit">
              Edit
            </Link>
            <Link to={`/notes/${props.note._id}/remove`} className="btn-note-delete">
              Delete
            </Link>{" "}
          </>
        ) : undefined}{" "}
      </div>
    </div>
  );
};
