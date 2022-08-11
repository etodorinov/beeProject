export const Search = () => {
  return (
    <main>
      <section className="hive-search">
        <h1>
          <span>Search</span>
        </h1>
        <div className="test">
          <from className="search-form">
            <input
              type="text"
              name="search"
              placeholder="Type location here..."
            ></input>
            <button type="submit" className="btn-search">
              Search
            </button>
          </from>
        </div>
        <div className="search-result">
          <div className="search-list">
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

              <a href="/hives/details/" className="btn-details">
                Details
              </a>
            </div>
          </div>
        </div>

        {/* <div className="no-match">
            <p>No match was found!</p>
        </div> */}
      </section>
    </main>
  );
};
