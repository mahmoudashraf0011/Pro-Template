import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByBrandAction, getAllProductsByCategoryAction, getProductsPagesAction, getProductsPagesForBrandAction, getProductsPagesForCategoryAction } from '../../redux/actions/Product/ProductAction';
import { getSpecificCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import { getSpecificBrandAction } from '../../redux/actions/Brand/allBrandAction';

export default function ProductsByBrandHook(id) {
    const dispatch=useDispatch();
    const run=async()=>{
      await dispatch(getAllProductsByBrandAction(id,3));
      await dispatch(getSpecificBrandAction(id));
    }
    useEffect(()=>{
      run();
      
    },[])

    const products=useSelector(state=> state.products.allproductByBrand);
    const brands=useSelector(state=> state.allBrand.specificBrand);
    let items=[];
    try {
        if(products.data){
            items=products.data;
        }
    } catch (error) {
        
    }

  let brand=[]
  try{

    if(brands.data){
        brand=brands.data.name;
        console.log(brand)
      
    }else{
        brand = []
    }
  }catch(e){}

    const onPress=(page)=>{
      dispatch(getProductsPagesForBrandAction(id,3,page))
    }

    let pagintate=[]
    try{
  
      if(products.data){
        pagintate= products.paginationResult.numberOfPages;
        console.log(pagintate);
        
      }else{
        pagintate = []
      }
    }catch(e){}

    

  return [items,pagintate,brand,onPress]
}
