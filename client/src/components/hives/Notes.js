import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { HiveContext } from "../contexts/HiveContext";

import { getAllNotes } from "../../services/notesServices";

import { SingleNote } from "./SingleNote";

export const Notes = () => {
  const { currentHive } = useContext(HiveContext);
  const [notes, setNotes] = useState();

  useEffect(() => {
    getAllNotes()
      .then((response) => response.json())
      .then((result) => {
        setNotes(result);
      });
  }, []);

  let thisHiveNotes = notes?.filter((x) => x.hive === currentHive?._id);

  return (
    (thisHiveNotes?.length !== 0 && (
      <main>
        <section className="note-catalogue">
          <h1>
            <Link to={`/hives/details/${currentHive?._id}`}>
              <span>{currentHive?.number}</span>
            </Link>
          </h1>
          {thisHiveNotes?.map((x) => (
            <SingleNote key={x._id} note={x} />
          ))}
        </section>
      </main>
    )) || (
      <div className="no-notes">
        <p>There are no notes found!</p>
      </div>
    )
  );
};
