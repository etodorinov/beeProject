import { useState } from "react";

import { Hive } from "./Hive";

import { getAllByLocation } from "../../services/itemsServices";

export const Search = () => {
  const [hives, setHives] = useState();

  function searchHandler(e) {
    e.preventDefault();

    let data = new FormData(e.target);

    let search = data.get("search");

    getAllByLocation(search)
      .then((response) => response.json())
      .then((result) => setHives(result));
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
            ></input>
            <button type="submit" className="btn-search">
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
