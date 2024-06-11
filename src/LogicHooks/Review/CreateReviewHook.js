import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { createReviewAction } from '../../redux/actions/Review/ReviewAction';

export default function CreateReviewHook(id) {
    let user=''
    if(localStorage.getItem("user")){
        user=JSON.parse(localStorage.getItem("user"));
    } 

    const [rateValue,setRateValue]=useState(0);
    const [rateTxt,setRateTxt]=useState("");
    const [loading,setLoading]=useState(true);

    const dispatch=useDispatch();

    const onChangeValue=(val)=>{
        setRateValue(val)
    }
    
    const onChangetxt=(e)=>{
        setRateTxt(e.target.value)
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        if(rateValue <1){
            Notify("The rating value for the product must be at least 1", "warn");
            return;
        }
        else if(rateTxt ==''){
            Notify("Invalid comment","warn");
            return;

        }

        setLoading(true)
        await dispatch(createReviewAction(id,{
            review: rateTxt,
            rating: rateValue
        }))
        setLoading(false)

    }

  const res=useSelector(state=> state.reviewReducer.createReview);
    
  useEffect(()=>{
    if(loading ===false){
      if(res){
        if(res.status===201){
            Notify("Review added successfully!","success")
            setTimeout(() => {
              window.location.reload();
            }, 2000)
            
        }else if(res.status == 400){
            Notify("You already added review on this product!","error")

        }else if(res.status == 401){
            Notify("You are not login to review on this product!","error")

        }else if(res.status == 403){
            Notify("You are not allowed to perform this action","error")

        }
        


       }
  
       setLoading(true)
    }
  },[loading])

    return [user,rateValue,rateTxt,onChangeValue,onChangetxt,onSubmit];
}
