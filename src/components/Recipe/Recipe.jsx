import React from "react";
import styles from "./Recipe.module.css";
import Recipe1 from "../../assets/images/pexels-daria-shevtsova-704569.jpg";

const Recipe = () => {
  return (
    <>
      <div className={styles.Recipe}>
        <div className={styles.Image}>
          <img src={Recipe1} alt="Recipe" />
        </div>
        <div className={styles.Information}>
          <div className={styles.Header}>
            <h3>Recipe 1</h3>
            <small>Calories</small>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            laudantium in est facilis voluptatum impedit atque, mollitia, vero
            culpa maxime quisquam recusandae nesciunt perspiciatis assumenda ex
            enim adipisci aperiam illum.
          </p>
          <div className={styles.ButtonWrapper}>
            <button>View Recipe</button>
          </div>
        </div>
      </div>
      <div className={styles.Recipe}>
        <div className={styles.Image}>
          <img src={Recipe1} alt="Recipe" />
        </div>
        <div className={styles.Information}>
          <div className={styles.Header}>
            <h3>Chicken marinate with Soja Sauce and Fresh veggies</h3>
            <small>Calories</small>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            laudantium in est facilis voluptatum impedit atque, mollitia, vero
            culpa maxime quisquam recusandae nesciunt perspiciatis assumenda ex
            enim adipisci aperiam illum.
          </p>
          <div className={styles.ButtonWrapper}>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
