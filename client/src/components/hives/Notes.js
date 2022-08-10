import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { HiveContext } from "../contexts/HiveContext";

import { getAllNotesForSpecificHive } from "../../services/notesServices";

import { SingleNote } from "./SingleNote";

export const Notes = () => {
  const { currentHive } = useContext(HiveContext);
  const [notes, setNotes] = useState();

  useEffect(() => {
    getAllNotesForSpecificHive(currentHive?._id)
      .then((response) => response.json())
      .then((result) => {
        setNotes(result);
      });
  }, []);

  const available = notes?.length !== 0 ? true : false;

  return (
    (available && (
      <main>
        <section className="note-catalogue">
          <h1>
            <Link to={`/hives/details/${currentHive?._id}`}>
              <span>{currentHive?.number}</span>
            </Link>
          </h1>
          <div className="note-list">
            {notes?.map((x) => (
              <SingleNote key={x._id} note={x} />
            ))}
          </div>
        </section>
      </main>
    )) || (
      <main>
        <section className="note-catalogue">
          <h1>
            <Link to={`/hives/details/${currentHive?._id}`}>
              <span>{currentHive?.number}</span>
            </Link>
          </h1>
          <div className="no-notes">
            <p>There are no notes found!</p>
          </div>
        </section>
      </main>
    )
  );
};
