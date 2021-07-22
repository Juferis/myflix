import React from "react";
import styles from "./Header.module.css";
// eslint-disable-next-line
export default () => (
  <header>
    <ul className={styles.navList}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/#/tv">TV</a>
      </li>
      <li>
        <a href="/#/search">Search</a>
      </li>
    </ul>
  </header>
);
