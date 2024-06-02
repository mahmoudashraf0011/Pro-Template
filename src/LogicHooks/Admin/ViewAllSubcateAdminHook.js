import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubcategoriesAction, getSubCategoriesPagesAction } from '../../redux/actions/Subcategory/subcategoryAction';



 export default function ViewAllSubcateAdminHook() {
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getAllSubcategoriesAction(8));
    },[])
  
    const subCates=useSelector(state=> state.subCategory.subcategory);
    let items=[]
    try{
   
      if(subCates.data){
         items= subCates.data;
  
      }else{
        items=[]
      }
    }catch(e){
      console.log(e);
    }
  
  let pagintate=[]
try{
  if(subCates.data){
    pagintate= subCates.paginationResult.numberOfPages; 
    
      }else{
        pagintate = []
      }
  }catch(e){
    console.log(e);

    }


    const onPress=(page)=>{
      dispatch(getSubCategoriesPagesAction(8,page))
    }
    return [items,pagintate,onPress]
 }


