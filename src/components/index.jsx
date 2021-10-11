import React from "react";
import RecipesGrid from "./Recipes/RecipesGrid";
import styles from "./index.module.css";

const Main = () => {
  return (
    <section className={`${styles.MainSection} content-wrapper`}>
      <RecipesGrid />
    </section>
  );
};

export default Main;
