import { NavLink } from "react-router-dom";

export const Documentation = () => {
  return (
    <main>
      <section className="documentation-catalogue">
        <h1>
          <span>Documentation</span>
        </h1>
        <div className="documentation-list">
          <div className="documentation-content">
            <p>
              The goal of the application is to create a database of hives with
              the corresponding notes for each hive.
            </p>
            <p>
              The front-end is hosted on{" "}
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="outside"
              >
                Firebase
              </a>
              . The back-end is hosted on{" "}
              <a
                href="https://www.heroku.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="outside"
              >
                Heroku
              </a>
              .{" "}
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="outside"
              >
                MongoDB
              </a>{" "}
              is used as database to store the information. The application may
              be reached on the following URL -{" "}
              <a
                href="https://react-beeproject-client.web.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="outside"
              >
                Bee Project
              </a>
              . Since the project is used rarely the initial load of the
              functionalities may take little longer as it takes some time to
              "wake up" the servers.
            </p>
            <h2>Home page</h2>
            <p>A citate in connection with bees is displayed.</p>
            <h2>All hives page</h2>
            <p>
              All created hives are displayed, sorted by owner. If no hives are
              available an appropriate message is displayed. Every visitor may
              see all created hives and all notes for each of the hives. Only a
              registered user may create hive or manipulate (edit and delete)
              it. Note for a hive may also be created only by registered user.
            </p>
            <h2>Register page</h2>
            <p>
              One may register by providing username, email and password. The
              username and password should be at least four (4) characters long
              and the email should be a valid email of type email@email.bg
              Successfully registered user will be redirected to the{" "}
              <NavLink to="/" className={"yellow"}>
                Home page
              </NavLink>
              .
            </p>
            <h2>Login page</h2>
            <p>
              Every registered user may login with the email used to register
              and the correct password. If incorrect email or password is
              provided the user is forwarded to{" "}
              <NavLink to="*" className={"yellow"}>
                404 page
              </NavLink>
              . Successfully logged in user will be redirected to the{" "}
              <NavLink to="/" className={"yellow"}>
                Home page
              </NavLink>
              .
            </p>
            <h2>Logout page</h2>
            <p>
              Every logged in user may log out at any time. Successfully logged
              out user will be redirected to the{" "}
              <NavLink to="/" className={"yellow"}>
                Home page
              </NavLink>
              .
            </p>
            <h2>Profile page</h2>
            <p>
              Every logged in user may visit its{" "}
              <NavLink to="/users/profile" className={"yellow"}>
                Profile page
              </NavLink>
              . On the{" "}
              <NavLink to="/users/profile" className={"yellow"}>
                Profile page
              </NavLink>{" "}
              the username, user email and a catalogue of user’s hives is
              visible. If the user has not created any hives yet an appropriate
              message is displayed.
            </p>
            <h2>Create hive page</h2>
            <p>
              Every registered user may create hive. The number of hives is not
              limited. In order to create hive the user should provide
              information about hive's name/number, location, short description
              and the period of time the hive has been owned. The time the hive
              is owned is chosen from a drop down list with values for one year,
              two years or more than two years. The name/number may be a string,
              number or combination of both. The location should be string and
              must be at least three (3) characters long. The description should
              be string and must be at least twelve (12) characters long. After
              a successful creation of hive the user is forwarded to{" "}
              <NavLink to="/hives/catalogue" className={"yellow"}>
                All hives page
              </NavLink>
              .
            </p>
            <h2>Details page</h2>
            <p>
              Every user may visit the{" "}
              <NavLink to="/hives/details/:id" className={"yellow"}>
                Details page
              </NavLink>
              . For not registered user or not logged in user only the button
              View notes is available. By clicking on it one is forwarded to{" "}
              <NavLink
                to="/notes/62f354fe7435f5389160d3f4/view"
                className={"yellow"}
              >
                View notes page
              </NavLink>
              . For registered user who is not the owner of the hive only the
              button View notes is available. By clicking on it the user is
              forwarded to{" "}
              <NavLink
                to="/notes/62f354fe7435f5389160d3f4/view"
                className={"yellow"}
              >
                View notes page
              </NavLink>
              . For registered user who owns the hive the buttons View notes,
              Add notes, Edit and Delete are available. By clicking View notes
              button the user is forwarded to{" "}
              <NavLink
                to="/notes/62f354fe7435f5389160d3f4/view"
                className={"yellow"}
              >
                View notes page
              </NavLink>
              . By clicking Add notes button the user is forwarded to{" "}
              <NavLink to="/notes/:id/add" className={"yellow"}>
                Add notes page
              </NavLink>
              . By clicking Edit button the user is forwarded to{" "}
              <NavLink to="/notes/:id/edit" className={"yellow"}>
                Edit page
              </NavLink>
              . By clicking Delete button the user is forwarded to{" "}
              <NavLink to="/notes/:id/remove" className={"yellow"}>
                Delete page
              </NavLink>
              .
            </p>
            <h2>View notes page</h2>
            <p>
              Every visitor of the site, no matter if registered or not
              registered, may view the notes for each of the hives. On this page
              all notes for the corresponding hive are displayed. If no notes
              are available an appropriate message is displayed. One may return
              back to the{" "}
              <NavLink to="/hives/details/:id" className={"yellow"}>
                Details page
              </NavLink>{" "}
              by pressing the number/name of the hive at the top of the page.
            </p>
            <h2>Add notes page</h2>
            <p>
              On this page the owner of the hive may add note for it. In order
              to add note the user must provide a valid date and text for the
              note not shorter than twelve (12) characters. After a successful
              creation of the note the user is forwarded to the{" "}
              <NavLink to="/hives/details/:id" className={"yellow"}>
                Details page
              </NavLink>
              . If the user decides not to create note one may return back to
              the{" "}
              <NavLink to="/hives/details/:id" className={"yellow"}>
                Details page
              </NavLink>{" "}
              by pressing the number/name of the hive at the top of the page.
            </p>
            <h2>Edit note page</h2>
            <p>
              On this page the owner of the hive may edit any of the notes
              attached to it. If the user do not provide valid date or the
              note's text is shorter than twelve (12) characters the Edit button
              becomes inactive until the proper information is provided. After a
              successfull edit the user is forwarded to{" "}
              <NavLink
                to="/notes/62f354fe7435f5389160d3f4/view"
                className={"yellow"}
              >
                View notes page
              </NavLink>
              .
            </p>
            <h2>Delete note page</h2>
            <p>
              On this page, after a confirmation, the owner of the hive may
              delete any of the notes attached to it. After a successfull delete
              the user is forwarded to{" "}
              <NavLink
                to="/notes/62f354fe7435f5389160d3f4/view"
                className={"yellow"}
              >
                View notes page
              </NavLink>
              .
            </p>
            <h2>Edit page</h2>
            <p>
              On this page the owner of the hive may change the information
              about the hive. The current information about the hive is
              preloaded and owner may change any of it. The name/number may be a
              string, number or combination of both. The location should be
              string and must be at least three (3) characters long. The
              description should be string and must be at least twelve (12)
              characters long. The time the hive is owned is chosen from a drop
              down list with values for one year, two years or more than two
              years. After a successful edit the owner is redirected to the{" "}
              <NavLink to="/hives/details/:id" className={"yellow"}>
                Details page
              </NavLink>
              .
            </p>
            <h2>Delete page</h2>
            <p>
              The owner of the hive may delete it after confirmation. If a hive
              is deleted all the notes for it are also deleted. After a
              successful delete operation the owner is forwarded to the{" "}
              <NavLink to="/hives/catalogue" className={"yellow"}>
                All hives page
              </NavLink>
              .
            </p>
            <h2>Search page</h2>
            <p>
              Any visitor or logged in user may search for hives based on part
              of the hive’s number/colour, hive’s location, hive’s description
              or hive’s owner or the whole word. If any result is available a
              list with the result is rendered. If no result is available an
              appropriate message is displayed. Until at least one character is
              written in the input field the search button is inactive. While
              the search button is not active it is coloured in red and text
              “Search not active” is displayed. Once it is activated it becomes
              transparent and the text “Search active” is displayed.
            </p>
            <h2>404 page</h2>
            <p>
              The page is displayed if any problem occurs during the use of the
              application. From it the user may go back to{" "}
              <NavLink to="/" className={"yellow"}>
                Home page
              </NavLink>{" "}
              and try again.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
