import React from "react";
import Recipe from "../Recipe/Recipe";
import styles from "./RecipesGrid.module.css";

const RecipesGrid = () => {
  return (
    <div className={styles.Recipes}>
      <Recipe />
    </div>
  );
};

export default RecipesGrid;
