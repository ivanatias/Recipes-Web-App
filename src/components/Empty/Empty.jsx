import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import styles from "./Empty.module.css";

const Empty = ({ message }) => {
  return (
    <div className={styles.EmptyMessage}>
      <span className={styles.Icon}>
        <FaExclamationCircle />
      </span>
      {message}
    </div>
  );
};

export default Empty;
