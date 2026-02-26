import { React, useContext, useEffect } from "react";
import Header from "../HomePage/Header";
import ProductDetails from "./ProductDetails";
import Sidebar from "../HomePage/Sidebar";

function ProductDetailsMain() {
  return (
    <>
      <Header />
      <ProductDetails />
      <Sidebar />
    </>
  );
}

export default ProductDetailsMain;
