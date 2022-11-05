import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";

export const Home = () => {
  const text = [
    <div className="explanation">
      <div className="content-home">
        <p>
          This is Emil Todorinov's React.js Project Assignment for the ReactJS
          June 2022 course of{" "}
          <a
            href="https://softuni.bg/"
            target="_blank"
            rel="noreferrer noopener"
            className="outside"
          >
            SoftUni
          </a>
          . This{" "}
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noreferrer noopener"
            className="outside"
          >
            React
          </a>{" "}
          SPA (Single Page Application) with custom{" "}
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noreferrer noopener"
            className="outside"
          >
            Node.js
          </a>{" "}
          back-end was presented and defended on 21 August 2022.
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
          is used as database. Since the project is used rarely the initial load
          of the functionalities may take little longer as it takes some time to
          "wake up" the servers.
        </p>
        <p>
          In the <NavLink to="/requirements">Requirements</NavLink> section one
          may see the requirements for the project.
        </p>
        <p>
          In the <NavLink to="/documentation">Documentation</NavLink> section
          one may see explanation for the functionalities of the project.
        </p>
        <p>
          Link to{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="outside"
          >
            GitHub
          </a>{" "}
          for code review may be provided upon request.
        </p>
      </div>
    </div>,
    {
      /* <article>
        "That which is not good for the bee-hive cannot be good for the bees."
        <div>Marcus Aurelius</div>
      </article>
      ,
      <article>
        "To be successful, one has to be one of three bees - the queen bee, the
        hardest working bee, or the bee that does not fit in."
        <div>Suzy Kassem</div>
      </article>
      ,
      <article>
        "The busy bee has no time for sorrow."
        <div>William Blake</div>
      </article>
      ,
      <article>
        "Aerodynamically, the bumble bee should not be able to fly, but the
        bumble bee does not know it so it goes on flying anyway."
        <div>Mary Kay Ash</div>
      </article>
      ,
      <article>
        "How does a queen bee behave? However, she wants to."
        <div>Whitney Wolfe</div>
      </article>
      ,
      <article>
        "Every saint has a bee in his halo."
        <div>Elbert Hubbard</div>
      </article> */
    },
  ];

  const [display, setDisplay] = useState(text[0]);
  const textLength = text.length;

  // useEffect(() => {
  //   setTimeout(() => {
  //     setDisplay(text[1]);
  //   }, 6000);
  // }, [display]);

  // useEffect(() => {
  //   for (let i = 1; i <= textLength; i++) {
  //     // setDisplay(text[i - 1]);
  //     console.log("hello");
  //     i * 5000;
  //     if (i === textLength) {
  //       i = 1;
  //   }}
  // }, [display]);

  // for (let i = 0; i < textLength; i++) {
  //   setTimeout(function () {
  //     setDisplay(text[i]);
  //   }, 5000 * i);
  // }

  return <main>{display}</main>;
};
