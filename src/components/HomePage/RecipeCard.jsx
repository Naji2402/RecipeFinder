import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { favRecipeContext } from "../../App";

function RecipeCard(props) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favRecipe, setFavRecipe } = useContext(favRecipeContext);

  function handleFavButton() {
    setIsFavourite(!isFavourite);
    if (!isFavourite) {
      setFavRecipe((prev) => [...prev, props.recipe]);
    } else {
      setFavRecipe((prev) => prev.filter((item) => item.idMeal !== props.id));
    }
  }

  useEffect(() => {
    let storedRecipes = JSON.parse(localStorage.getItem("fav"));
    setFavRecipe(storedRecipes)
  }, [])

  useEffect(() => {
    if (favRecipe) {
      if (favRecipe.includes(props.recipe)) {
        setIsFavourite(true);
      } else {
        setIsFavourite(false);
      }
    }
    localStorage.setItem("fav", JSON.stringify(favRecipe));
  }, [favRecipe]);

  

  return (
    <>
      <div className="w-full bg-amber-300 p-2 rounded-2xl flex flex-col gap-2 hover:shadow-xl/30 hover:shadow-black hover:scale-102 transition-all">
        <div>
          <img src={props.image} className="w-full rounded-2xl" alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold">{props.name}</h1>
            <p className="text-sm font-bold text-gray-700">{props.category}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to={`/productdetails/${props.id}`}>
              <button className=" text-[#10172aec] px-5 py-1 rounded-3xl font-bold border-5 border-[#10172aec] cursor-pointer">
                View More
              </button>
            </Link>
            <div
              onClick={handleFavButton}
              className="cursor-pointer hover:scale-110"
            >
              {isFavourite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#10172aec"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#10172aec"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
