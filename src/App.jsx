import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ProductDetailsMain from "./components/ProductIndividual/ProductDetailsMain";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";

export const fetchedValueContext = createContext();
export const recipeNameContext = createContext();

function App() {
  const [fetchedRecipe, setFetchedRecipe] = useState([]);
  const [recipeName, setRecipeName] = useState("");

  return (
    <>
      <fetchedValueContext.Provider value={{ fetchedRecipe, setFetchedRecipe }}>
        <recipeNameContext.Provider value={{recipeName, setRecipeName}}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="productdetails" element={<ProductDetailsMain />}></Route>
          </Routes>
        </recipeNameContext.Provider>
      </fetchedValueContext.Provider>
    </>
  );
}

export default App;
