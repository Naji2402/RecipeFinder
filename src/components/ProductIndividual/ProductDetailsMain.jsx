import { React, useContext, useEffect } from "react";
import Header from "../HomePage/Header";
import ProductDetails from "./ProductDetails";

import axios from "axios";

function ProductDetailsMain() {
 

  return (
    <>
      <Header />
      <ProductDetails />
    </>
  );
}

export default ProductDetailsMain;
