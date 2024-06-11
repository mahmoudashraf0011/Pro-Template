import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { createReviewAction, reviewProductAction } from '../../redux/actions/Review/ReviewAction';

export default function ViewAllReviewsForProductHook(id) {

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(reviewProductAction(id,3));
      },[])
    
      const reviews=useSelector(state=> state.reviewReducer.reviewForProduct);
      let items=[]
      try{
     
        if(reviews){
           items= reviews.data;  

        }else{
          items=[]
        }
      }catch(e){ }

    
let pagintate=[]
  try{
    if(reviews.data){
      pagintate= reviews.paginationResult.numberOfPages;       
        }else{
          pagintate = []
        }
    }catch(e){}

const onPress=async (page)=>{
   await dispatch(reviewProductAction(id,3,page))
}
  
return [items,pagintate,onPress]
}
