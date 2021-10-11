import React from "react";
import Recipe from "../Recipe/Recipe";
import { useQuery } from "react-query";
import { getRecipes } from "../httpRequest/getRecipes";
import styles from "./RecipesGrid.module.css";

const RecipesGrid = () => {
  const requestPath = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
  /* const { data, error, isLoading, isError } = useQuery("recipeData", () => {
    getRecipes(requestPath);
  }); */

  return (
    <div className={styles.Recipes}>
      <Recipe />
    </div>
  );
};

export default RecipesGrid;
