import { useState } from "react";

import { Hive } from "./Hive";

import { getAllByCondition } from "../../services/itemsServices";

import { LoadingSpinner } from "../common/Spinner";

export const Search = () => {
  const [hives, setHives] = useState();
  const [value, setValue] = useState({
    search: "",
  });

  let [isLoading, setIsLoading] = useState(false);

  function searchHandler(e) {
    e.preventDefault();

    setIsLoading(true);

    const data = new FormData(e.target);

    const search = data.get("search");
    const searchCriteria = data.get("condition");

    getAllByCondition(search, searchCriteria)
      .then((response) => response.json())
      .then((result) => {
        setHives(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  function activation() {
    let mayActivate = false;

    if (value.search.length > 0) {
      mayActivate = true;
    }

    return mayActivate;
  }

  function changeHandler(e) {
    setValue((state) => ({ ...state, search: e.target.value }));
  }

  const available = hives?.length !== 0 ? true : false;

  return (
    (isLoading && <LoadingSpinner />) || (
      <main>
        <section className="hive-search">
          <h1>
            <span>Search</span>
          </h1>
          <div className="test">
            <form
              className="search-form"
              method="POST"
              onSubmit={searchHandler}
            >
              <div className="search-form-inner">
                <input
                  type="text"
                  name="search"
                  placeholder="Type location here..."
                  value={value.search}
                  onChange={changeHandler}
                ></input>
              </div>
              <div className="search-form-inner">
                <select name="condition">
                  <option value="number">Number/Color</option>
                  <option value="location">Location</option>
                  <option value="description">Description</option>
                  <option value="owner">Owner</option>
                </select>
              </div>
              <div className="search-form-inner">
                <button
                  type="submit"
                  className={
                    activation() ? "btn-search-active" : "btn-search-inactive"
                  }
                  disabled={activation() ? "" : "disabled"}
                >
                  {activation() ? "Search active" : `Search not active`}
                </button>
              </div>
            </form>
          </div>
          {(available && (
            <div className="search-result">
              <div className="search-list">
                {hives?.map((x) => (
                  <Hive key={x._id} hive={x} />
                ))}
              </div>
            </div>
          )) || (
            <div className="no-match">
              <p>No match was found!</p>
            </div>
          )}
        </section>
      </main>
    )
  );
};
