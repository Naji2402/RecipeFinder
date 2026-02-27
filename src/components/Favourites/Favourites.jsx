import { useEffect, useContext } from "react";
import Header from "../HomePage/Header";
import Sidebar from "../HomePage/Sidebar";
import { favRecipeContext } from "../../App";
import RecipeCard from "../HomePage/RecipeCard";


function Favourites() {
  const { favRecipe, setFavRecipe } = useContext(favRecipeContext);

  useEffect(() => {
    let favouriteRecipes = JSON.parse(localStorage.getItem("fav"));
    if (favouriteRecipes) {
      setFavRecipe(favouriteRecipes)
    }
  }, [])

  return (
    <>
      <Header />
      <Sidebar />
        <div className="flex flex-col gap-5 py-4 px-3 ">
            {/* <div className="flex justify-center pt-5">
              <h1 className="text-white text-2xl">No Favourite Products</h1>
            </div> */}
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-5  md:gap-6 lg:grid-cols-3 lg:gap-8 2xl:grid-cols-4">
            {favRecipe.map((item) => {
              return (
                <RecipeCard
                  key={item.idMeal}
                  id={item.idMeal}
                  name={item.strMeal}
                  image={item.strMealThumb}
                  category={item.strCategory}
                  recipe={item}
                />
              );
            })}
          </div>
        </div>
    </>
  );
}

export default Favourites;
