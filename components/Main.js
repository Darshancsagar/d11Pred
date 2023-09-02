import React from "react";
import styles from "./Main.module.css";
import Image from "next/image";
import img from "../public/download.jpg";

const Main = () => {
  return (
    <div>
      <h1 className={styles.head}>All about React and Next.js</h1>
      <div className={styles.section1}>
        <div>
          <p>
            Before getting started with React, make sure you have a basic
            understanding of the following prerequisites:
          </p>
          <ul>
            <li>HTML: Understand the structure of HTML elements and tags.</li>
            <li>
              CSS: Familiarity with CSS for styling your React components.
            </li>
            <li>
              JavaScript: Solid knowledge of JavaScript, including ES6 features.
            </li>
          </ul>
        </div>
        <div className={styles.img}>
          <Image src={img} width="30%" height="20%" />
        </div>
      </div>

      <p>
        Once you're comfortable with these fundamentals, you'll be well-prepared
        to dive into the exciting world of React development!
      </p>
      <div>
        <h1>Understanding How React Works Under the Hood</h1>
        <p>
          React's efficiency and performance are achieved through its innovative
          rendering process, centered around the Virtual DOM and the
          reconciliation process.
        </p>
        <h2>The Virtual DOM</h2>
        <p>
          React maintains a lightweight representation of the actual DOM called
          the Virtual DOM. It's a JavaScript object that reflects the current
          state of your UI.
        </p>
        <p>
          When data in your application changes, React doesn't immediately
          update the real DOM. Instead, it compares the Virtual DOM with the
          previous version to determine the minimal set of changes needed.
        </p>
        <h2>Reconciliation Process</h2>
        <p>
          React's reconciliation process is the mechanism used to update the
          real DOM efficiently. It involves comparing the old and new Virtual
          DOMs and making the necessary changes to the actual DOM.
        </p>
        <p>
          React uses a diffing algorithm to identify the differences between the
          old and new Virtual DOMs. This process minimizes the number of actual
          DOM updates, resulting in better performance.
        </p>
        <h2>Benefits</h2>
        <p>
          The Virtual DOM and reconciliation process offer several benefits,
          including improved performance, reduced unnecessary updates, and a
          more consistent development experience.
        </p>
        <p>
          By understanding these under-the-hood concepts, you'll be better
          equipped to create efficient and responsive React applications.
        </p>
        <p>
          In upcoming lessons, we'll explore more React concepts, such as
          component lifecycle, state management, and handling user interactions.
        </p>
      </div>
    </div>
  );
};

export default Main;
