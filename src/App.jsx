import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ProductDetailsMain from "./components/ProductIndividual/ProductDetailsMain";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites/Favourites";

export const fetchedValueContext = createContext();
export const hamClickContext = createContext();
export const fetchedContext = createContext();
export const fetchedDetailsContext = createContext();

function App() {
  const [fetchedRecipe, setFetchedRecipe] = useState([]);
  const [hamClick, setHamClick] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [isDetailsFetched, setIsDetailsFetched] = useState(false);

  return (
    <>
      <fetchedValueContext.Provider value={{ fetchedRecipe, setFetchedRecipe }}>
        <hamClickContext.Provider value={{ hamClick, setHamClick }}>
          <fetchedContext.Provider value={{ isFetched, setIsFetched }}>
            <fetchedDetailsContext.Provider
              value={{ isDetailsFetched, setIsDetailsFetched }}
            >
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                  path="productdetails/:recipeId"
                  element={<ProductDetailsMain />}
                ></Route>
                <Route path="favourites" element={<Favourites />}></Route>
              </Routes>
            </fetchedDetailsContext.Provider>
          </fetchedContext.Provider>
        </hamClickContext.Provider>
      </fetchedValueContext.Provider>
    </>
  );
}

export default App;
