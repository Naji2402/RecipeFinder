import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { fetchedValueContext } from "../../App";
import { fetchedContext } from "../../App";

function RecipeSearch() {
  const [recipe, setRecipe] = useState("");
  const [saveRecipe, setSaveRecipe] = useState("");
  const { fetchedRecipe, setFetchedRecipe } = useContext(fetchedValueContext);
  const { isFetched, setIsFetched } = useContext(fetchedContext);

  function addRecipe(e) {
    setSaveRecipe(recipe);
    e.preventDefault();
  }

  useEffect(() => {
    fetchData(saveRecipe)
  }, [saveRecipe]);

  async function fetchData(saveRecipe) {
    try {
      setIsFetched(false)
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${saveRecipe}`,
      );
      setFetchedRecipe(res.data.meals);
      setIsFetched(true);
    } catch (error) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="flex items-center flex-col  py-10">
        <h1 className="text-white text-2xl mt-10 font-bold">
          Welcome To Recipe Finder
        </h1>
        <p className="text-white font-bold my-3">Search Your Recipes</p>
        <form
          className="flex gap-2 w-full px-3 max-w-2xl justify-center"
          onSubmit={addRecipe}
        >
          <input
            type="search"
            placeholder="Search Recipe"
            className="bg-amber-300 py-3 px-3 rounded-4xl placeholder:text-black placeholder:font-bold outline-hidden  flex-1 [&::-webkit-search-cancel-button]:appearance-none "
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
          <button className="bg-amber-300 p-3 rounded-4xl hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#10172aec"
              className="size-6 hover:scale-110 hover:transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default RecipeSearch;
