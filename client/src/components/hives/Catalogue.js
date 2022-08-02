import { Link } from "react-router-dom";

export const Catalogue = () => {
  return (
    <main>
      <section className="hive-catalogue">
        <h1>
          <span>Hives</span> Trade
        </h1>
        <div className="hive-list">
          <div className="hive">
            <div className="hive-img">
              <img src="/pictures/hive2.jpg" alt="hive" />
            </div>
            <div className="hive-info">
              <h1>1/Blue</h1>
              <p>
                <span>Location: </span>Svoge
              </p>
              <p>
                <span>Owner: </span>Bee King
              </p>
            </div>

            <Link to="/hives/details" className="btn-details">
              Details
            </Link>
          </div>
        </div>

        {/* <div className="no-hives">
            <p>There are no hives found!</p>
        </div> */}
      </section>
    </main>
  );
};
