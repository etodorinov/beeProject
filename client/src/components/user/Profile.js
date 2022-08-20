import { useContext, useState } from "react";

import { AuthContext } from "../contexts/UserContext";

import { Hive } from "../hives/Hive";

import { getAllByUser } from "../../services/itemsServices";

import { LoadingSpinner } from "../common/Spinner";

export const Profile = () => {
  const [hives, setHives] = useState([]);
  const { user } = useContext(AuthContext);

  let [isLoading, setIsLoading] = useState(true);

  getAllByUser(user._id)
    .then((response) => response.json())
    .then((result) => {
      setHives(result);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
    });

  const available = hives.length !== 0 ? true : false;

  return (
    (isLoading && <LoadingSpinner />) || (
      <div className="profile">
        <h4>
          username: <span>{user.username}</span>
        </h4>
        <h4>
          email: <span>{user.email}</span>
        </h4>
        {(available && (
          <main>
            <section className="profile-hive-catalogue">
              {/* <h1>
              <span>Hives</span>
            </h1> */}
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
        )}
      </div>
    )
  );
};
