import { NavLink as Link } from "react-router-dom";

export const AddNotes = () => {
  return (
    <main>
      <section className="add-container">
        <div className="add-container-info">
          <h1>Add notes</h1>
          <form method="POST">
            <h1 id="name">
              <Link to="/hives/details">
                <span>1/Blue</span>
              </Link>
            </h1>
            <h3 id="location">Location: Svoge</h3>
            <p id="years-owned">
              <span>Years owned: Two years</span>
            </p>
            <p id="description">Description: Good hive.</p>
            <p id="owner">Owner: Bee king</p>
            <label>Date:</label>
            <input type="date" id="date" name="date" />
            <label>Note:</label>
            <textarea
              name="note"
              id="note"
              placeholder="Write your note here..."
            ></textarea>
            <input type="submit" id="btn" value="Add notes"></input>
          </form>
        </div>
      </section>
    </main>
  );
};
