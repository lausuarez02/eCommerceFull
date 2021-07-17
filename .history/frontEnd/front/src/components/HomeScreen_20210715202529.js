import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product";

import { getProducts as listProducts } from "../redux/actions/productActions";


const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
  
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
  
    return(
        <div>
   Home
      
</div>
        
    )
}

export default HomeScreen;