import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDebounce } from "../../hooks/useDebounce";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

const Search = ({ setQuery }) => {
  const [search, setSearch] = useState(""); /*Input Search Text*/
  const history = useHistory();

  const debouncedSearch = useDebounce(search, 500);
  /*For Debounced Search Effect*/

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (search === "") {
      history.push("/");
      /*Sets the query to the default "chicken" value in order to display a search recipe example if input is empty*/
      setQuery("chicken");
      return;
    }
    setQuery(debouncedSearch);
    history.push("/?search=" + debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className={styles.SearchRecipe}>
      <h1>Quickly find amazing food recipes!</h1>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <div className={styles.InputWrapper}>
          <input
            type="text"
            name="recipe"
            value={search || ""}
            placeholder="Search recipe e.g. chicken"
            aria-label="Search recipe input"
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
