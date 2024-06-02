import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsAction } from '../../redux/actions/Product/ProductAction';

export default function HomeProductsHook() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getAllProductsAction());
  },[])

  const products=useSelector(state=> state.products.allProduct);
  let bestProducts =[]
  let latestProducts=[]
  let ratedProducts=[]
  let items=[]
  if(products.data){
     items= products.data;
    
  }
  bestProducts=items.slice(0,4);
 latestProducts=items.slice(4,8);
 ratedProducts=items.slice(8,12);

if(window.location.pathname =="/"){
  localStorage.setItem("wordSearch","")
}

  return [bestProducts,latestProducts,ratedProducts]
}
