import React from "react";
import { Link } from "react-router-dom";
import styles from "./Recipe.module.css";

const Recipe = ({ recipe }) => {
  const recipeId = recipe.recipe.uri.substring(44, 84);

  return (
    <Link to={`/recipes/${recipeId}`} className={styles.RecipeLink}>
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
    </Link>
  );
};

export default Recipe;
