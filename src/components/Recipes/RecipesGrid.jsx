import React from "react";
import Recipe from "../Recipe/Recipe";
import Spinner from "../Spinner/Spinner";
import Empty from "../Empty/Empty";
import { useQuery } from "react-query";
import { getRecipes } from "../../utils/httpRequest/getRecipes";
import styles from "./RecipesGrid.module.css";

const RecipesGrid = ({ query }) => {
  /*RecipesGrid receives the dynamical changing value of the query in order to do recipes fetching each time query's value changes*/
  const path = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const { data, isLoading, isFetching, isError } = useQuery(
    ["recipes", query],
    () => getRecipes(path)
  );

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  if (isError || data === undefined) {
    return <div>Whooops! something went wrong... Try again!</div>;
  }

  return (
    <div className={styles.Recipes}>
      {data?.hits.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.recipe.uri} />
      ))}
      {data.hits.length === 0 ? <Empty /> : null}
    </div>
  );
};

export default RecipesGrid;
