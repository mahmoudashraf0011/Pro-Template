
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCategoryAction, getCategoriesPagesAction } from '../../redux/actions/Category/allCategoryAction';



 export default function ViewAllCategoriesAdminHook() {
    const dispatch=useDispatch();

    useEffect(()=>{
      const run=async()=>{
        await dispatch(allCategoryAction(8));
      }
      run();
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
  if(categories){
    pagintate= categories.paginationResult.numberOfPages; 
    
      }else{
        pagintate = []
      }
  }catch(e){
    console.log(e);

    }

    
    const onPress=async (page)=>{
     await dispatch(getCategoriesPagesAction(8,page))
    }

    //update all categroies imagse
    if(items){
      console.log(items)
    }
    return [items,pagintate,onPress]
 }


