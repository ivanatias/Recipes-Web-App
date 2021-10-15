import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import styles from "./Empty.module.css";

const Empty = () => {
  return (
    <div className={styles.EmptyMessage}>
      <span className={styles.Icon}>
        <FaExclamationCircle />
      </span>
      No results found.
    </div>
  );
};

export default Empty;
