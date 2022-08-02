import { Link } from "react-router-dom";

export const NoSuchLink = () => {
  return (
    <main>
      <section className="not-found-page">
        <div className="not-found-page-container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            The Page you are looking for does not exist or another error
            occurred. Go to{" "}
            <Link to="/" className="btn">
              Hives
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
};
