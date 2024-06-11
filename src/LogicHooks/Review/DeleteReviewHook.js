import React, { useEffect, useRef, useState } from 'react'
import { deleteReviewForProdcutAction } from '../../redux/actions/Review/ReviewAction';
import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';

export default function DeleteReviewHook(review) {
    const payRef=useRef();
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(true);
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    
    const handelDelete=async()=>{
        setLoading(true)
        await dispatch(deleteReviewForProdcutAction(review._id));      
        setLoading(false)
        handleCloseDelete();
        
    }

    const res=useSelector(state=> state.reviewReducer.deleteReviewForProduct);

    useEffect(()=>{
      if(loading==false){
        if(res){
            console.log(res);
            if(res.status === 204){           
                Notify("Review is Deleted successfully!","success")
                setTimeout(() => {
                window.location.reload();
               }, 2000);
            }else{
                Notify("There are problem!","error")

            }
        }        
        setLoading(true)
     
    }
    },[loading])
    

return [showDelete,handelDelete,handleShowDelete,handleCloseDelete,payRef]

}