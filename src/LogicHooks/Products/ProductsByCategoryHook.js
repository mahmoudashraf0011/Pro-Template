import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByCategoryAction, getProductsPagesAction, getProductsPagesForCategoryAction } from '../../redux/actions/Product/ProductAction';
import { getSpecificCategoryAction } from '../../redux/actions/Category/allCategoryAction';

export default function ProductsByCategoryHook(id) {
    const dispatch=useDispatch();
    const run=async()=>{
      await dispatch(getAllProductsByCategoryAction(id,3));
      await dispatch(getSpecificCategoryAction(id));
    }
    useEffect(()=>{
      run();
      
    },[])

    const products=useSelector(state=> state.products.allproductByCategory);
    const category=useSelector(state=> state.allCategory.specificCategory);
    let items=[];
    try {
        if(products.data){
            items=products.data;
        }
    } catch (error) {
        
    }

  let cate=[]
  try{

    if(category.data){
      cate=category.data.name;

      
    }else{
      cate = []
    }
  }catch(e){}

    const onPress=(page)=>{
      dispatch(getProductsPagesForCategoryAction(id,3,page))
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

    

  return [items,pagintate,cate,onPress]
}
