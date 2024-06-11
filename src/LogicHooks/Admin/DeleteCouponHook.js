import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { deleteCouponAction } from '../../redux/actions/Coupon/CouponAction';

export default function DeleteCouponHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.couponReducer.deleteCoupon)

    const handelDelete=async()=>{
    setLoad(true)
     await dispatch(deleteCouponAction(id));
     setLoad(false) 
    setShow(false)
}
    useEffect(()=>{
        if(load==false){
            console.log(res);
            if(res){
                if(res.status === 204){           
                    Notify("Coupon is Deleted successfully!","success")
                    setTimeout(() => {
                    window.location.reload();
                   }, 2000);
                }else{
                    Notify("There are problem!","error")
    
                }
            }        
    
         
        }
    },[load])
  return [show,handelDelete,handleClose,handleShow]

}
