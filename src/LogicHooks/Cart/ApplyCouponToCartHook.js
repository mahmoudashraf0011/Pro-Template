import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { applyCouponToCartAction, updateQuntaityForProductCartAction } from '../../redux/actions/Cart/CartAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function ApplyCouponToCartHook(item) {
    const dispatch=useDispatch();
    const [load, setLoad] = useState(true);
    const [couponName, setCouponName] = useState("");
    const res=useSelector(state=>state.cartRducer.applyCouponToCart)

    const onChangeCoupon=(e)=>{
        setCouponName(e);
    }
    const handleCoupon=async(e)=>{
        e.preventDefault();
        setLoad(true)
        await  dispatch(applyCouponToCartAction({
            couponName:couponName
        }));
      setLoad(false)
  

}



useEffect(()=>{
    if(load ===false){
        if(res){
            console.log(res);
            if(res.status == 200){
                Notify("Coupon added Successfully","success")
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }else{
                Notify("Coupon is not exisit","error")
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
    
            }
        }
  
       setLoad(true)
    }
  },[load])
return [couponName,handleCoupon,onChangeCoupon]

}
