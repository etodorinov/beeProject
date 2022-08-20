import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { HiveContext } from "../contexts/HiveContext";
import { edit } from "../../services/itemsServices";

import { LoadingSpinner } from "../common/Spinner";

export const Edit = () => {
  const navigate = useNavigate();
  const { currentHive } = useContext(HiveContext);

  const [values, setValues] = useState({
    number: currentHive?.number,
    location: currentHive?.location,
    description: currentHive?.description,
    condition: currentHive?.condition,
  });
  const [errors, setErrors] = useState({});

  let [isLoading, setIsLoading] = useState(false);

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
      values.number?.length >= 1 &&
      values.location?.length >= 3 &&
      values.description?.length >= 12
    ) {
      mayActivate = true;
    }

    return mayActivate;
  }

  function createOptions(option) {
    return [
      { content: "One year", value: "one" },
      { content: "Two years", value: "two" },
      { content: "More than two years", value: "more" },
    ].map((x) => (x.content === option ? { ...x, selected: "selected" } : x));
  }

  let conditionOptions = createOptions(values.condition);

  // function onCancel(e) {
  //   e.preventDefault();

  //   navigate(`/hives/details/${currentHive?._id}`);
  // }

  function onSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

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

    let yearsOwned;

    switch (condition) {
      case "one":
        yearsOwned = "One year";
        break;
      case "two":
        yearsOwned = "Two years";
        break;
      case "more":
        yearsOwned = "More than two years";
        break;
      default:
    }

    const editInfo = { number, location, description, condition: yearsOwned };

    edit(currentHive?._id, editInfo)
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
  }

  return (
    (isLoading && <LoadingSpinner />) || (
      <main>
        <section className="create-container">
          <div className="create-container-info">
            <h1>Edit</h1>
            <h1 id="name">
              <Link to={`/hives/details/${currentHive?._id}`}>
                <span> {values.number}</span>
              </Link>
            </h1>
            <h4>Post your hive for edits to take effect</h4>
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
                {conditionOptions.map((x) =>
                  x.selected === "selected" ? (
                    <option key={x.value} value={x.value} selected={true}>
                      {x.content}
                    </option>
                  ) : (
                    <option key={x.value} value={x.value}>
                      {x.content}
                    </option>
                  )
                )}
              </select>
              <input
                type="submit"
                value="Edit"
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
