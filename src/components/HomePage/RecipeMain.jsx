import { React, useContext, useState } from "react";
import RecipeCard from "./RecipeCard";
import { fetchedValueContext } from "../../App";

import { Link } from "react-router-dom";



function RecipeMain() {
  const { fetchedRecipe, setFetchedRecipe } = useContext(fetchedValueContext);
  const [isRecipePresent, setIsRecipePresent] = useState(false);

  return (
    <>
      <div className="p-5 w-full grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {fetchedRecipe.map((item) => {
          return (
            <Link to={`productdetails/${item.idMeal}`} key={item.idMeal}>
              <RecipeCard
                name={item.strMeal}
                category={item.strCategory}
                image={item.strMealThumb}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default RecipeMain;
