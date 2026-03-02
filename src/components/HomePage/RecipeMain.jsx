import { React, useContext, useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { fetchedValueContext } from "../../App";
import NoResult from "./NoResult";

function RecipeMain() {
  const { fetchedRecipe, setFetchedRecipe } = useContext(fetchedValueContext);

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
                recipe={item}
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
