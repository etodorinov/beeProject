import { useState } from "react";

import { Hive } from "./Hive";

import { getAllByLocation } from "../../services/itemsServices";

export const Search = () => {
  const [hives, setHives] = useState();
  const [value, setValue] = useState({
    search: "",
  });

  function searchHandler(e) {
    e.preventDefault();

    let data = new FormData(e.target);

    let search = data.get("search");

    getAllByLocation(search)
      .then((response) => response.json())
      .then((result) => setHives(result));
  }

  function activation() {
    let mayActivate = false;

    if (value.search.length >= 3) {
      mayActivate = true;
    }

    return mayActivate;
  }

  function changeHandler(e) {
    setValue((state) => ({ ...state, search: e.target.value }));
  }

  const available = hives?.length !== 0 ? true : false;

  return (
    <main>
      <section className="hive-search">
        <h1>
          <span>Search</span>
        </h1>
        <div className="test">
          <form className="search-form" method="POST" onSubmit={searchHandler}>
            <input
              type="text"
              name="search"
              placeholder="Type location here..."
              value={value.search}
              onChange={changeHandler}
            ></input>
            <button
              type="submit"
              className={
                activation() ? "btn-search-active" : "btn-search-inactive"
              }
              disabled={activation() ? "" : "disabled"}
            >
              Search
            </button>
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
  );
};
