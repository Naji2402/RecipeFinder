import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ProductDetails from "./components/ProductIndividual/ProductDetails"
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";

export const fetchedValueContext = createContext();

function App() {
  const [fetchedRecipe, setFetchedRecipe] = useState([]);

  return (
    <>
      <fetchedValueContext.Provider value={{ fetchedRecipe, setFetchedRecipe }}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="productdetails" element={<ProductDetails />}></Route>
        </Routes>
      </fetchedValueContext.Provider>
    </>
  );
}

export default App;
