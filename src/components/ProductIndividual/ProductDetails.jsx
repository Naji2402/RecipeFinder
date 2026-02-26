import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchedDetailsContext } from "../../App";
import axios from "axios";
import Loader from "../HomePage/Loader";

function ProductDetails() {
  let ingredientsList = [];
  const { recipeId } = useParams();
  const [detailedRecipe, setDetailedRecipe] = useState([]);
  const { isDetailsFetched, setIsDetailsFetched } = useContext(
    fetchedDetailsContext,
  );

  useEffect(() => {
    fetchData(recipeId);
  }, [recipeId]);

  async function fetchData(recipeId) {
    setIsDetailsFetched(false);
    try {
      const res = await axios.get(
        ` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
      );
      setDetailedRecipe(res.data.meals[0]);
      setIsDetailsFetched(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  for (let i = 1; i < 20; i++) {
    if (detailedRecipe[`strIngredient${i}`] !== "") {
      ingredientsList.push({
        ing: detailedRecipe[`strIngredient${i}`],
        measure: detailedRecipe[`strMeasure${i}`],
        id: i,
      });
    }
  }

  return (
    <>
      <div className={`pb-10 ${isDetailsFetched ? "" : "hidden"}`}>
        <div
          className={`p-4 flex flex-col gap-4 sm:p-6 sm:items-start lg:flex-row lg:gap-10 `}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-amber-300 font-bold text-2xl sm:text-2xl">
                {detailedRecipe.strMeal}
              </h1>
              <div className="bg-amber-300 w-fit px-2 py-1 rounded-4xl">
              <h3 className="text-[#10172aec]text-sm font-bold">
                {detailedRecipe.strCategory}
              </h3>
              </div>
            </div>
            <img
              src={detailedRecipe.strMealThumb}
              className="rounded-2xl sm:rounded-3xl"
              alt=""
            />
          </div>
          <div className="mt-6 lg:px-8 lg:py-11">
            <h3 className="heading">Ingredients</h3>
            <ul className="list-disc ml-8 mt-2">
              {ingredientsList.map((item) => {
                return (
                  <li key={item.id} className="list">
                    {item.ing}:{" "}
                    <span className="text-amber-200">{item.measure}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8 px-4">
          <h3 className="heading mb-2">Cooking Instructions</h3>
          <p className="text-white font-medium whitespace-pre-line">
            {detailedRecipe.strInstructions}
          </p>
        </div>
      </div>
      <Loader />
    </>
  );
}

export default ProductDetails;
