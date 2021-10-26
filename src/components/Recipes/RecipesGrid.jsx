import React, { useEffect } from "react";
import axios from "axios";
import Recipe from "../Recipe/Recipe";
import Spinner from "../Spinner/Spinner";
import Empty from "../Empty/Empty";
import { useInfiniteQuery } from "react-query";
import styles from "./RecipesGrid.module.css";

const RecipesGrid = ({ query }) => {
  const getRecipes = async (pageParam) => {
    try {
      const path = pageParam
        ? pageParam
        : `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&type=public`;
      const response = await axios.get(path);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;
      if (scrollHeight - scrollTop <= clientHeight) {
        await fetchNextPage();
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line
  }, []);

  const { data, isFetchingNextPage, status, fetchNextPage } = useInfiniteQuery(
    ["recipes", query],
    ({ pageParam = "" }) => getRecipes(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage._links.next ? lastPage._links.next.href : undefined,
    }
  );

  if (status === "error") {
    return <div>Whoops! something went wrong...Please, try again</div>;
  }

  return (
    <>
      {status === "loading" && <Spinner />}
      <div className={styles.Recipes}>
        {data?.pages.map((item, index) => (
          <React.Fragment key={index}>
            {item.hits.map((recipe) => (
              <Recipe recipe={recipe} key={recipe.recipe.uri} />
            ))}
            {item.hits.length === 0 ? (
              <Empty message="No results found!" />
            ) : null}
          </React.Fragment>
        ))}
      </div>

      {isFetchingNextPage && <Spinner />}
    </>
  );
};

export default RecipesGrid;
