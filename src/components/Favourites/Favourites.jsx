import { useContext, useEffect, useState } from "react";
import Header from "../HomePage/Header";
import Sidebar from "../HomePage/Sidebar";
import { favRecipeContext } from "../../App";
import RecipeCard from "../HomePage/RecipeCard";
import Loader from "../HomePage/Loader";
import axios from "axios";

function Favourites() {
  const { favRecipe, setFavRecipe } = useContext(favRecipeContext);
  const [favRecipes, setFavRecipes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchData(favRecipe);
  }, [favRecipe]);

  async function fetchData(favRecipe) {
    try {
      setIsLoaded(false);
      const res = favRecipe.map((id) => {
        return axios.get(
          ` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
      });
      const datas = await Promise.all(res);
      const finalProductArray = datas.map((pro) => {
        return pro.data.meals[0];
      });
      setFavRecipes(finalProductArray);
      setIsLoaded(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Header />
      <Sidebar />
      {isLoaded ? (
        <div className="flex flex-col gap-5 py-4 px-3 ">
          {favRecipe.length > 0 ? (
            <h1 className="text-amber-300 text-2xl">Favourites</h1>
          ) : (
            <div className="flex justify-center pt-5">
              <h1 className="text-white text-2xl">No Favourite Products</h1>
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-5  md:gap-6 lg:grid-cols-3 lg:gap-8 2xl:grid-cols-4">
            {favRecipes.map((item) => {
              return (
                <RecipeCard
                  key={item.idMeal}
                  id={item.idMeal}
                  name={item.strMeal}
                  image={item.strMealThumb}
                  category={item.strCategory}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Favourites;
