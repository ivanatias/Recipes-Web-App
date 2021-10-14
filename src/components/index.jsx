import React, { useState } from "react";
import RecipesGrid from "./Recipes/RecipesGrid";
import Search from "./Search/Search";
import styles from "./index.module.css";

const Main = () => {
  const [query, setQuery] = useState("");
  /*This is the query value used for the recipes fetching, it's modified 
   by the "Search" component*/

  return (
    <section className={`${styles.MainSection} content-wrapper`}>
      <Search setQuery={setQuery} />
      <RecipesGrid query={query} />
    </section>
  );
};

export default Main;
