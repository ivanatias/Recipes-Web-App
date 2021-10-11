import React from "react";
import styles from "./Recipe.module.css";
import Recipe1 from "../../assets/images/pexels-daria-shevtsova-704569.jpg";

const Recipe = () => {
  return (
    <>
      <div className={styles.Recipe}>
        <div className={styles.Image}>
          <img src={Recipe1} alt="Recipe" />
        </div>
        <div className={styles.Information}>
          <div className={styles.Header}>
            <h3>Recipe 1</h3>
            <small>Calories</small>
          </div>

          <div className={styles.ButtonWrapper}>
            <button>View Recipe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
