import { useNavigate, Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { HiveContext } from "../contexts/HiveContext";

import { getSpecificNote, editNote } from "../../services/notesServices";

import { LoadingSpinner } from "../common/Spinner";

export const EditNote = () => {
  const [note, setNote] = useState([]);

  const [values, setValues] = useState({
    date: "",
    note: "",
  });

  const [errors, setErrors] = useState({});
  const { currentHive } = useContext(HiveContext);
  const navigate = useNavigate();
  const location = useLocation();

  let [isLoading, setIsLoading] = useState(true);

  const currentNoteId = location.pathname.split("/")[2];

  useEffect(() => {
    getSpecificNote(currentNoteId)
      .then((response) => response.json())
      .then((result) => {
        setNote(result);
        setValues({ date: result[0].date, note: result[0].note });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

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
    const editedDate = data.get("date");
    const editedNote = data.get("note");

    if (!editedDate instanceof Date && isNaN(editedDate)) {
      console.log("Please choose a valid date for the note!");
      return;
    }

    if (editedNote.length < 12) {
      console.log("The note should be at least twelve (12) characters long.");
      return;
    }

    let editedData = { editedDate, editedNote };

    editNote(currentNoteId, editedData)
      .then((response) => response.json())
      .then((result) => {
        if (result._id) {
          navigate(`/notes/${currentHive?._id}/view`);
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
            <h1>Edit note</h1>
            <form method="PUT" onSubmit={createNote}>
              <h1 id="name">
                <Link to={`/notes/${currentHive?._id}/view`}>
                  <span>{note[0]?.date}</span>
                </Link>
              </h1>
              <label>Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={values?.date}
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
                value={values?.note}
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
                value="Edit note"
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
