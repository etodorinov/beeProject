import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";

import { HiveContext } from "../contexts/HiveContext";

import { createNoteInDatabase } from "../../services/notesServices";

import { LoadingSpinner } from "../common/Spinner";

export const AddNotes = () => {
  const [values, setValues] = useState({
    date: "",
    note: "",
  });
  const [errors, setErrors] = useState({});
  const { currentHive } = useContext(HiveContext);
  const navigate = useNavigate();

  let [isLoading, setIsLoading] = useState(false);

  function changeHandler(e) {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  function minLength(e, border) {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < border,
    }));
  }

  function dateLength(e, border) {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length !== border,
    }));
  }

  function activation() {
    let mayActivate = false;

    if (values.date.length === 10 && values.note.length >= 12) {
      mayActivate = true;
    }

    return mayActivate;
  }

  const createNote = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = new FormData(e.target);
    const date = data.get("date");
    const note = data.get("note");

    if (!date instanceof Date && isNaN(date)) {
      console.log("Please choose a valid date for the note!");
      return;
    }

    if (note.length < 12) {
      console.log("The note should be at least twelve (12) characters long.");
      return;
    }

    createNoteInDatabase(currentHive?._id, date, note)
      .then((response) => response.json())
      .then((result) => {
        if (result._id) {
          navigate(`/hives/details/${currentHive?._id}`);
        } else {
          navigate("*");
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        navigate("*");

        setIsLoading(false);
      });
  };

  return (
    (isLoading && <LoadingSpinner />) || (
      <main>
        <section className="add-container">
          <div className="add-container-info">
            <h1>Add note</h1>
            <form method="POST" onSubmit={createNote}>
              <h1 id="name">
                <Link to={`/hives/details/${currentHive?._id}`}>
                  <span>{currentHive?.number}</span>
                </Link>
              </h1>
              <h3 id="location">Location: {currentHive?.location}</h3>
              <p id="years-owned">
                <span>Years owned: {currentHive?.condition}</span>
              </p>
              <p id="description">Description: {currentHive?.description}</p>
              <p id="owner">Owner: {currentHive?._ownerId.username}</p>
              <label>Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={values.date}
                onChange={changeHandler}
                onBlur={(e) => dateLength(e, 10)}
              />
              {errors.date && (
                <span className="error">
                  Please choose a valid date for the note!
                </span>
              )}
              <label>Note:</label>
              <textarea
                name="note"
                id="note"
                placeholder="Write your note here..."
                value={values.note}
                onChange={changeHandler}
                onBlur={(e) => minLength(e, 12)}
              ></textarea>
              {errors.note && (
                <span className="error">
                  The note should be at least twelve (12) characters long.
                </span>
              )}
              <input
                type="submit"
                id="btn"
                value="Add notes"
                className={activation() ? "active" : "not-active"}
                disabled={activation() ? false : true}
              ></input>
            </form>
          </div>
        </section>
      </main>
    )
  );
};
