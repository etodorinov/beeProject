import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getAll } from "../../services/itemsServices";

import { Hive } from "./Hive";

export const Catalogue = () => {
  let [hives, setHives] = useState([]);
  useEffect(() => {
    getAll()
      .then((response) => response.json())
      .then((result) => setHives(result));
  }, []);

  hives = hives.sort((a, b) => {
    return a._ownerId.username.localeCompare(b._ownerId.username);
  });
  const available = hives.length !== 0 ? true : false;

  return (
    (available && (
      <main>
        <section className="hive-catalogue">
          <h1>
            <span>Hives</span> Trade
          </h1>
          <div className="hive-list">
            {hives.map((x) => (
              <Hive key={x._id} hive={x} />
            ))}
          </div>
        </section>
      </main>
    )) || (
      <div className="no-hives">
        <p>There are no hives found!</p>
      </div>
    )
  );
};
