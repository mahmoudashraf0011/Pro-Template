import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsAction, getProductsPagesAction } from '../../redux/actions/Product/ProductAction';


 export default function ViewAllProductsAdminHook() {
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getAllProductsAction(6));
    },[])
  
    const products=useSelector(state=> state.products.allProduct);
  let items=[]
  try{

    if(products.data){
        items= products.data;

    }else{
      items=[]
    }

  }catch(e){
    console.log(e);
  }

  let pagintate=[]
  try{

    if(products.data){
      pagintate= products.paginationResult.numberOfPages;
    
      
    }else{
      pagintate = []
    }
  }catch(e){
    console.log(e)
  }

    const onPress=(page)=>{
      dispatch(getProductsPagesAction(6,page))
    }
    return [items,pagintate,onPress]
 }


