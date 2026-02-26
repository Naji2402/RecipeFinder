import { useContext } from "react";
import Header from "./Header";
import RecipeSearch from "./RecipeSearch";
import RecipeMain from "./RecipeMain";
import Sidebar from "./Sidebar";
import Loader from "./Loader";
import { fetchedContext } from "../../App";

function HomePage() {
    const {isFetched, setIsFetched} = useContext(fetchedContext);
  return (
    <>
      <div className="relative">
        <Header />
        <RecipeSearch />
        {isFetched ? <RecipeMain /> : <Loader />}
        <Sidebar />
      </div>
    </>
  );
}

export default HomePage;
