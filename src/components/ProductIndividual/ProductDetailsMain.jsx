import { React, useContext, useEffect } from "react";
import Header from "../HomePage/Header";
import ProductDetails from "./ProductDetails";
import { fetchedDetailsContext } from "../../App";
import Loader from "../HomePage/Loader";

import axios from "axios";
import Sidebar from "../HomePage/Sidebar";

function ProductDetailsMain() {

   const {isDetailsFetched, setIsDetailsFetched} = useContext(fetchedDetailsContext);

  return (
    <>
      <Header />
      {isDetailsFetched ? <ProductDetails /> : <Loader />}
      <Sidebar />
    </>
  );
}

export default ProductDetailsMain;
