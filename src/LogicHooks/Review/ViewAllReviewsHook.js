import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { getAllReviewsAction, getPageReviewsAction } from '../../redux/actions/Review/ReviewAction';


export default function ViewAllReviewsHook() {
 
    const dispatch=useDispatch();
    useEffect(()=>{
        const run=async()=>{
       
            await dispatch(getAllReviewsAction(3));
     
        }
        run();
      },[])
      

      const reviews=useSelector(state=> state.reviewReducer.allReviews);
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

    const onPress= async(page)=>{
        await dispatch(getPageReviewsAction(3,page))
       
     }

  


  

return [items,pagintate,onPress]
}
