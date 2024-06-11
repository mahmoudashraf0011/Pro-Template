import React, { useEffect, useState } from 'react'
import { deleteReviewForProdcutAction, updateReviewForProdcutAction } from '../../redux/actions/Review/ReviewAction';
import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';

export default function UpdateReviewHook(review) {

    
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(true);
    const [showupdate, setShowupdate] = useState(false);
    const [rateVal,setRateValue]=useState("");
    const [rateTxt,setRateTxt]=useState("");
    const handleCloseupdate = () => setShowupdate(false);
    const handleShowupdate = () => setShowupdate(true);


    useEffect(()=>{
        if(review){
            setRateValue(review.rating)
            setRateTxt(review.review)
        }
        
    },[])

    const onChangeRateVal=(val)=>{
        setRateValue(val)
    }

    const onChangeRateTxt=(e)=>{
        setRateTxt(e.target.value)
    }

    const handelupdate=async()=>{
        
        if(rateVal <1){
            Notify("The rating value for the product must be at least 1", "warn");
            return;

        }
        else if(rateTxt ==''){
            Notify("Invalid comment","warn");
            return;


        }
        setLoading(true)
        await dispatch(updateReviewForProdcutAction(review._id,{
            review: rateTxt,
            rating: rateVal
        }));      
        setLoading(false)

        handleCloseupdate();
    }

    const res=useSelector(state=> state.reviewReducer.updateReviewForProduct);

    useEffect(()=>{
        if(loading ===false){
            if(res){
               if(res.status ==200){
                Notify("Review Updated successfully!","success")
               }else{
               Notify("There are Problem!","error")

               }
            }

                setTimeout(() => {
                  window.location.reload();
                }, 2000)
                

             setLoading(true)
           
        }
      },[loading])
    

return [showupdate,rateVal,rateTxt,handelupdate,handleShowupdate,handleCloseupdate,onChangeRateVal,onChangeRateTxt]

}