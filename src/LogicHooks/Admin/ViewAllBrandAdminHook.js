import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allBrandAction, getBrandsPagesAction } from '../../redux/actions/Brand/allBrandAction';



 export default function ViewAllBrandAdminHook() {
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(allBrandAction(8));
    },[])
  
    const brands=useSelector(state=> state.allBrand.brand);
    let items=[]
    try{
   
      if(brands.data){
         items= brands.data;
  
      }else{
        items=[]
      }
    }catch(e){
      console.log(e);
    }
  
  let pagintate=[]
try{
  if(brands.data){
    pagintate= brands.paginationResult.numberOfPages; 
    
      }else{
        pagintate = []
      }
  }catch(e){
    console.log(e);

    }


    const onPress=(page)=>{
      dispatch(getBrandsPagesAction(8,page))
    }
    return [items,pagintate,onPress]
 }


