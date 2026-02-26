import { React, useContext, useState } from "react";
import RecipeCard from "./RecipeCard";
import { fetchedValueContext } from "../../App";
import NoResult from "./NoResult";

import { Link } from "react-router-dom";

function RecipeMain() {
  const { fetchedRecipe, setFetchedRecipe } = useContext(fetchedValueContext);
  const [isRecipePresent, setIsRecipePresent] = useState(false);

  return (
    <>
      {fetchedRecipe ? (
        <div className="p-5 w-full grid gap-4 sm:grid-cols-2 sm:gap-5  md:gap-6 lg:grid-cols-3 lg:gap-8 2xl:grid-cols-4">
          {fetchedRecipe.map((item) => {
            return (
              <RecipeCard
                key={item.idMeal}
                id={item.idMeal}
                name={item.strMeal}
                category={item.strCategory}
                image={item.strMealThumb}
              />
            );
          })}
        </div>
      ) : (
        <NoResult />
      )}
    </>
  );
}

export default RecipeMain;
