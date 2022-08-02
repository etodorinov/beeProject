import { Link } from "react-router-dom";

export const Details = () => {
  return (
    <main>
      <section className="details-info">
        <h1>Details</h1>
        <div className="hive-image">
          <img src="/pictures/hive2.jpg" alt="hive" />
        </div>

        <div className="hive-info">
          <div className="hive-text">
            <h1 id="name">1/Blue</h1>
            <h3 id="location">Location: Svoge</h3>
            <p id="years-owned">
              <span>Years owned: Two years</span>
            </p>
            <p id="description">Description: Good hive.</p>
            <p id="owner">Owner: Bee king</p>
          </div>
          <div className="product-btn">
            {/* Only for registered user and author of the publication */}
            <div className="author">
              {/* <a href="/hive/add/{{hive._id}}" className="btn-add">
                Add notes
              </a>
              <a href="/hive/view/{{hive._id}}" className="btn-view">
                View notes
              </a>
              <a href="/hive/remove/{{hive._id}}" className="btn-delete">
                Delete
              </a> */}
              <Link to="/hives/add-note/" className="btn-add">
                Add notes
              </Link>
              <Link to="/hives/notes/" className="btn-view">
                View notes
              </Link>
              <Link to="/hives/remove/" className="btn-delete">
                Delete
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
