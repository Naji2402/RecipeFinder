import { React, useContext } from "react";
import { recipeNameContext } from "../../App";

function RecipeCard(props) {
  const { recipeName, setRecipeName } = useContext(recipeNameContext);
  function handleRecipeDetails(e) {
    setRecipeName(e.currentTarget.dataset.nameValue)
  }

  return (
    <>
      <div data-name-value={props.name}
        className="w-full bg-amber-300 p-2 rounded-2xl flex flex-col gap-2"
        onClick={handleRecipeDetails}
      >
        <div>
          <img src={props.image} className="w-full rounded-2xl" alt="" />
        </div>
        <div className="relative">
          <h1 className="font-bold">{props.name}</h1>
          <p className="text-sm font-bold text-gray-700">{props.category}</p>
          <div className="absolute right-2 top-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
