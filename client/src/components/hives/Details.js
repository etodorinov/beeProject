import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../contexts/UserContext";
import { HiveContext } from "../contexts/HiveContext";

import { getOne } from "../../services/itemsServices";

export const Details = () => {
  const [hive, setHive] = useState([]);
  const { user } = useContext(AuthContext);
  const { currentHiveFromDetails } = useContext(HiveContext);

  const location = useLocation();
  const hiveId = location.pathname.split("/").pop();

  useEffect(() => {
    getOne(hiveId)
      .then((response) => response.json())
      .then((result) => {
        setHive(result);
        currentHiveFromDetails(result);
      });
  }, []);

  return (
    <main>
      <section className="details-info">
        <h1>Details</h1>
        <div className="hive-image">
          <img src="/pictures/hive2.jpg" alt="hive" />
        </div>

        <div className="hive-info">
          <div className="hive-text">
            <h1 id="name">{hive.number}</h1>
            <h3 id="location">Location: {hive.location}</h3>
            <p id="years-owned">
              <span>Years owned: {hive.condition}</span>
            </p>
            <p id="description">Description: {hive.description}</p>
            <p id="owner">Owner: {hive._ownerId?.username}</p>
          </div>
          <div className="product-btn">
            <div className="author">
              <Link to={`/notes/${hive._id}/view`} className="btn-view">
                View notes
              </Link>
              {user._id === hive._ownerId?._id ? (
                <>
                  {" "}
                  <Link to={`/notes/${hive._id}/add`} className="btn-add">
                    Add notes
                  </Link>
                  <Link to={`/hives/edit/${hive._id}`} className="btn-add">
                    Edit
                  </Link>
                  <Link to={`/hives/remove/${hive._id}`} className="btn-delete">
                    Delete
                  </Link>{" "}
                </>
              ) : undefined}{" "}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
