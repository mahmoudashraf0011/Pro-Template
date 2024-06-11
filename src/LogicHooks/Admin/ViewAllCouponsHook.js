import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCouponsAction } from '../../redux/actions/Coupon/CouponAction';





 export default function ViewAllCouponsHook() {
    const dispatch=useDispatch();

    useEffect(()=>{
        const run=async()=>{
           await dispatch(getAllCouponsAction(4,1));
        }
        run();
    
    },[])
  
    const coupons=useSelector(state=> state.couponReducer.allCoupons);
    let items=[]
    try{
   
      if(coupons.data){
         items= coupons.data;

  
      }else{
        items=[]
      }
    }catch(e){
 
    }
  
  let pagintate=[]
try{
  if(coupons.data){
    pagintate= coupons.paginationResult.numberOfPages; 


    
      }else{
        pagintate = []
      }
  }catch(e){


    }

    
    const onPress=(page)=>{
      dispatch(getAllCouponsAction(4,page))
    }


    return [items,pagintate,onPress]
 }


