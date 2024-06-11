import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCouponAction } from '../../redux/actions/Coupon/CouponAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function AdminAddCouponHook() {
    const [name,setName]=useState("");
    const [expire,setExpire]=useState("");
    const [discount,setDiscount]=useState("");
    const [load,setLoad]=useState(true);
    const dispatch=useDispatch();



    const onChangeName=(e)=>{
        e.persist();
        setName(e.target.value)
    }
    
    const onChangeExpire=(e)=>{
        e.persist();
        setExpire(e.target.value)
    }

    const onChangeDiscount=(e)=>{
        e.persist();
        setDiscount(e.target.value)

    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        if(name =='' || expire=='' || discount == ""){
             Notify("Please Complete Coupon Data","warn")
            return;
        }
        if(discount > 100){
            Notify("Not Allowed Discount > 100 ","warn")
            return;
        }
        setLoad(true);
       await dispatch(createCouponAction({
            name: name,
            expire: expire,
            discount: discount
        }))
        setLoad(false);
    }
    const res=useSelector(state=> state.couponReducer.createCoupon);
    useEffect(()=>{
        if(load===false){
          if(res){
            console.log(res);
            if(res.status===201){
                Notify("The Coupon is Created successfully!","success")
            }else if(res.status===400){
                Notify("This Coupon is creaeted Before","error")
            }else{
                Notify("There are problem","error")
            }
            
          }
          setLoad(true)
          setName("");
          setExpire('')
          setDiscount('')
 
        }
      },[load])
    return [name,expire,discount,onChangeName,onChangeExpire,onChangeDiscount,onSubmit]

}