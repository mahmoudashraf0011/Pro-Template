import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsAction, getBestSellerProductsAction, getHighRatedProductsAction } from '../../redux/actions/Product/ProductAction';

export default function HomeProductsHook() {
  const dispatch=useDispatch();

  useEffect(()=>{
    const run=async()=>{
     await dispatch(getAllProductsAction());
     await dispatch(getBestSellerProductsAction());
     await dispatch(getHighRatedProductsAction());

    }
    run()
  },[])

  const latest=useSelector(state=> state.products.allProduct);
  const best=useSelector(state=> state.products.bestProducts);
  const rated=useSelector(state=> state.products.ratedProducts);
  let bestProducts =[]
  let latestProducts=[]
  let ratedProducts=[]
  try {
    if(latest.data){
      latestProducts= latest.data.slice(0,4);
     
   }
  } catch (error) {}

  try {
    if(best.data){
      bestProducts= best.data.slice(0,4);
     
   }
  } catch (error) {}

  try {
    if(rated.data){
      ratedProducts= rated.data.slice(0,4);
     
   }
  } catch (error) {}


if(window.location.pathname =="/"){
  localStorage.setItem("wordSearch","")
}

  return [bestProducts,latestProducts,ratedProducts]
}
