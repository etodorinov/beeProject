import { useState, useEffect } from "react";

import { getAll } from "../../services/itemsServices";

import { Hive } from "./Hive";
import { LoadingSpinner } from "../common/Spinner";

export const Catalogue = () => {
  let [hives, setHives] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAll()
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setHives(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  hives = hives?.sort((a, b) => {
    return a._ownerId?.username.localeCompare(b._ownerId?.username);
  });

  const available = hives?.length !== 0 ? true : false;

  return (
    (isLoading && <LoadingSpinner />) ||
    (available && (
      <main>
        <section className="hive-catalogue">
          <h1>
            <span>Hives</span>
          </h1>
          <div className="hive-list">
            {hives?.map((x) => (
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
