import { React, useContext, useEffect, useState } from "react";
import { recipeNameContext } from "../../App";
import axios from "axios";

function ProductDetails() {
  const { recipeName, setRecipeName } = useContext(recipeNameContext);
  const [detailedRecipe, setDetailedRecipe] = useState([]);
  useEffect(() => {
    axios
      .get(
        ` https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`,
      )
      .then((res) => setDetailedRecipe(res.data.meals[0]));
  }, [recipeName]);

  console.log(detailedRecipe);

  return (
    <>
      <div className="p-4 flex flex-col gap-3 sm:p-6 sm:items-start lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-amber-300 font-bold text-lg sm:text-2xl">
            {detailedRecipe.strMeal}
          </h1>
          <h4 className="text-amber-300 text-sm font-medium">{detailedRecipe.strCategory}</h4>
          <img
            src={detailedRecipe.strMealThumb}
            className="rounded-2xl sm:rounded-3xl"
            alt=""
          />
        </div>
        <div className="mt-6 lg:px-8 py-11">
          <h3 className="heading">Ingredients</h3>
          <ul className="list-disc ml-8 mt-2">
            <li className="list">{detailedRecipe.strIngredient1}</li>
            <li className="list">{detailedRecipe.strIngredient2}</li>
            <li className="list">{detailedRecipe.strIngredient3}</li>
            <li className="list">{detailedRecipe.strIngredient4}</li>
            <li className="list">{detailedRecipe.strIngredient5}</li>
            <li className="list">{detailedRecipe.strIngredient6}</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 px-4">
        <h3 className="heading mb-2">Cooking Instructions</h3>
        <p className="text-white font-medium">{detailedRecipe.strInstructions}</p>
      </div>
    </>
  );
}

export default ProductDetails;
