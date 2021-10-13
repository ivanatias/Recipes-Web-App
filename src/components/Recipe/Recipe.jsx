import React from "react";
import styles from "./Recipe.module.css";

const Recipe = ({ recipe }) => {
  return (
    <>
      <div className={styles.Recipe}>
        <div className={styles.Image}>
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            width="260"
            height="260"
          />
        </div>
        <div className={styles.Information}>
          <h5>{recipe.recipe.label}</h5>
        </div>
      </div>
    </>
  );
};

export default Recipe;
