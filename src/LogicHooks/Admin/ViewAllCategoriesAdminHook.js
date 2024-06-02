
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCategoryAction, getCategoriesPagesAction } from '../../redux/actions/Category/allCategoryAction';



 export default function ViewAllCategoriesAdminHook() {
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(allCategoryAction(8));
    },[])
  
    const categories=useSelector(state=> state.allCategory.category);
    let items=[]
    try{
   
      if(categories.data){
         items= categories.data;
  
      }else{
        items=[]
      }
    }catch(e){
      console.log(e);
    }
  
  let pagintate=[]
try{
  if(categories.data){
    pagintate= categories.paginationResult.numberOfPages; 
    
      }else{
        pagintate = []
      }
  }catch(e){
    console.log(e);

    }


    const onPress=(page)=>{
      dispatch(getCategoriesPagesAction(8,page))
    }
    return [items,pagintate,onPress]
 }


