import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificSubcategoriesAction } from '../../redux/actions/Subcategory/subcategoryAction';
import { getAllProductsBySubCategoryAction, getProductsPagesForSubCategoryAction } from '../../redux/actions/Product/ProductAction';

export default function ProductsBySubCategoryHook(id) {
    const dispatch=useDispatch();
    const run=async()=>{
      await dispatch(getAllProductsBySubCategoryAction(id,3));
      await dispatch(getSpecificSubcategoriesAction(id));
    }
    useEffect(()=>{
      run();
      
    },[])

    const products=useSelector(state=> state.products.allproductBySubCategory);
    const subcategory=useSelector(state=> state.subCategory.specificSubcategory);
    let items=[];
    try {
        if(products.data){
            items=products.data;
            console.log(items)
        }
    } catch (error) { }

  let subcate=[]
  try{

    if(subcategory.data){
        subcate=subcategory.data.name;

      
    }else{
        subcate = []
    }
  }catch(e){}

    const onPress=(page)=>{
      dispatch(getProductsPagesForSubCategoryAction(id,3,page))
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

    

  return [items,pagintate,subcate,onPress]
}
