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
    setIsLoaded(false)
    const res = favRecipe.map((id) => {
      return axios.get(
        ` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
    });
    const datas = await Promise.all(res);
    const finalProductArray = datas.map((pro) => {
      return pro.data.meals[0];
    })
    setFavRecipes(finalProductArray)
    setIsLoaded(true)
  }
  
  

  return (
    <>
      <Header />
      <Sidebar />
      {isLoaded ? 
      <div className="flex flex-col gap-5 py-4 px-3">
        <h1 className="text-amber-300 text-2xl">Favourites</h1>
        {favRecipes.map((item) => {
          return <RecipeCard key={item.idMeal} id={item.idMeal} name={item.strMeal} image={item.strMealThumb} category={item.strCategory}/>
        })}
      </div>
      : <Loader />}
    </>
  );
}

export default Favourites;
