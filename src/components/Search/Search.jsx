import React, { useState } from "react";
import { useHistory } from "react-router";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

const Search = ({ setQuery }) => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/?search=" + search);
    setQuery(search);
  };

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

          <button type="submit">
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
