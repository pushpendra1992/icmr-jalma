import React from "react";
import styles from "./important.module.css";
import text from "../../data/importantNote";

const Important = () => {
  return (
    <div className={styles.movingContainer}>
      <div className={styles.staticText}>Important:</div>
      <div>
        <marquee className={styles.movingText}>{text}</marquee>
      </div>
    </div>
  );
};

export default Important;
