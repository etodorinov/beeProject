import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { create } from "../../services/itemsServices";

export const Create = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    number: "",
    location: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  function changeHandler(e) {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  function minLength(e, limit) {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < limit,
    }));
  }

  function activation() {
    let mayActivate = false;

    if (
      values.number.length >= 1 &&
      values.location.length >= 3 &&
      values.description.length >= 12
    ) {
      mayActivate = true;
    }

    return mayActivate;
  }

  function onSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    const number = data.get("number");
    const location = data.get("location");
    const description = data.get("description");
    const condition = data.get("condition");

    if (number.length < 1) {
      console.log("You must type a name or number for the hive.");
      return;
    }

    if (location.length < 3) {
      console.log("The location must be at least three (3) characters long.");
      return;
    }

    if (description.length < 12) {
      console.log(
        "The description must be at least twelve (12) characters long."
      );
      return;
    }

    let userId = "62e654d3a7b033ccf6e8dc08";
    create(number, location, description, condition, userId)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, '72 at Create');
        if (result._id) {
          navigate("/hives/catalog");
        } else {
          navigate("*");
        }
      });
  }

  return (
    <main>
      <section className="create-container">
        <div className="create-container-info">
          <h1>Create Hive</h1>
          <h4>Post your hive to do records to it</h4>
          <form method="POST" onSubmit={onSubmit}>
            <label>Number/Color:</label>
            <input
              type="text"
              name="number"
              placeholder="1/Blue"
              value={values.number}
              onChange={changeHandler}
              onBlur={(e) => minLength(e, 1)}
            />
            {errors.number && (
              <span className="error">
                You must type a name or number for the hive.
              </span>
            )}
            <label>Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Svoge"
              value={values.location}
              onChange={changeHandler}
              onBlur={(e) => minLength(e, 3)}
            />
            {errors.location && (
              <span className="error">
                The location must be at least three (3) characters long.
              </span>
            )}
            <label>Description:</label>
            <textarea
              name="description"
              placeholder="Describe your hive..."
              value={values.description}
              onChange={changeHandler}
              onBlur={(e) => minLength(e, 10)}
            ></textarea>
            {errors.description && (
              <span className="error">
                The description must be at least twelve (12) characters long.
              </span>
            )}
            <label>Years owned:</label>
            <select name="condition">
              <option value="one">One year</option>
              <option value="two">Two years</option>
              <option value="more">More than two years</option>
            </select>
            <input
              type="submit"
              value="Create"
              className={activation() ? "active" : "not-active"}
              disabled={activation() ? false : true}
            ></input>
          </form>
        </div>
      </section>
    </main>
  );
};
