import { useState, useEffect } from "react";

export const Home = () => {
  const text = [
    <article>
      "That which is not good for the bee-hive cannot be good for the bees."
      <div>Marcus Aurelius</div>
    </article>,
    <article>
      "To be successful, one has to be one of three bees - the queen bee, the
      hardest working bee, or the bee that does not fit in."
      <div>Suzy Kassem</div>
    </article>,
    <article>
      "The busy bee has no time for sorrow."
      <div>William Blake</div>
    </article>,
    <article>
      "Aerodynamically, the bumble bee should not be able to fly, but the bumble
      bee does not know it so it goes on flying anyway."
      <div>Mary Kay Ash</div>
    </article>,
    <article>
      "How does a queen bee behave? However, she wants to."
      <div>Whitney Wolfe</div>
    </article>,
    <article>
      "Every saint has a bee in his halo."
      <div>Elbert Hubbard</div>
    </article>,
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
