import React from "react";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const path = `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const getRecipe = async (path) => {
    try {
      const response = await axios.get(path);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: recipe,
    isError,
    error,
  } = useQuery(["recipe", recipeId], () => getRecipe(path));

  if (isError) {
    return <div>Whoops something went wrong ... Error: {error.message}</div>;
  }

  return (
    <>
      {recipe && (
        <div className={styles.Recipe}>
          <div className={styles.Image}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          </div>
          <div className={styles.Info}>
            <h3>{recipe.recipe.label}</h3>
            <div className={styles.BasicDetails}>
              <h5>Weight: {recipe.recipe.totalWeight.toFixed(2)}gr</h5>
              <h5>Calories: {recipe.recipe.calories.toFixed(2)}kcal</h5>
            </div>
            <div className={styles.Nutrients}>
              <h5>
                Protein:{" "}
                {recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(2)}gr
              </h5>
              <h5>
                Carbs: {recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}
                gr
              </h5>
              <h5>
                Fat: {recipe.recipe.totalNutrients.FAT.quantity.toFixed(2)}gr
              </h5>
            </div>
            <h5>Ingredients:</h5>
            <ul>
              {recipe.recipe.ingredientLines.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Link to="/" className={styles.Link}>
              <span className={styles.BackBtn}>
                <MdArrowBackIos />
                Go back
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
