import { useContext, useEffect } from "react";
import Header from "../HomePage/Header";
import Sidebar from "../HomePage/Sidebar";
import { favRecipeContext } from "../../App";

function Favourites() {
  const { favRecipe, setFavRecipe } = useContext(favRecipeContext);

  console.log(favRecipe);

  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

export default Favourites;
