import React from "react";
import { FaSpinner } from "react-icons/fa";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.SpinnerContainer}>
      <FaSpinner className={styles.spinner} />
    </div>
  );
};

export default Spinner;
