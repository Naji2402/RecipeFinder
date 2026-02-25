import { React } from "react";
import Header from "./Header";
import RecipeSearch from "./RecipeSearch";
import RecipeMain from "./RecipeMain";

function HomePage() {
  return (
    <>
      <Header />
      <RecipeSearch />
      <RecipeMain />
    </>
  );
}

export default HomePage;
