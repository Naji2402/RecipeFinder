import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { fetchedValueContext } from "../../App";

function RecipeSearch() {
  const [recipe, setRecipe] = useState("");
  const [saveRecipe, setSaveRecipe] = useState("pizza");
  const { fetchedRecipe, setFetchedRecipe } = useContext(fetchedValueContext);

  function addRecipe() {
    setSaveRecipe(recipe);
  }

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${saveRecipe}`)
      .then((res) => setFetchedRecipe(res.data.meals))
      .catch((err) => {
        console.log(err);
      });
  }, [saveRecipe]);

  return (
    <>
      <div className="flex items-center flex-col  py-10">
        <h1 className="text-white text-2xl mt-10 font-bold">
          Welcome To Recipe Finder
        </h1>
        <p className="text-white font-bold my-3">Search Your Recipes</p>
        <div className="flex gap-2 w-full px-3 max-w-2xl justify-center">
          <input
            type="search"
            placeholder="Search Recipe"
            className="bg-amber-300 py-3 px-3 rounded-4xl placeholder:text-black placeholder:font-bold outline-hidden  flex-1"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
          <button className="bg-amber-300 p-3 rounded-4xl hover:cursor-pointer" onClick={addRecipe}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default RecipeSearch;
