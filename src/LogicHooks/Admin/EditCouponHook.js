import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCouponAction, getSpecificCouponAction, updateCouponAction } from '../../redux/actions/Coupon/CouponAction';
import Notify from '../../Components/JS/Utility/Notify';
import { useNavigate } from 'react-router-dom';

export default function EditCouponHook(id) {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    
    const [name,setName]=useState("");
    const [expire,setExpire]=useState("");
    const [discount,setDiscount]=useState("");
    const [load,setLoad]=useState(true);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
       const run=async()=>{
            await dispatch(getSpecificCouponAction(id))
       }
       run();
      },[])

      const coupon=useSelector(state=> state.couponReducer.specificCoupon);

      let item =[];
      try {
        if(coupon){
            item=coupon.data
       
        }
      } catch (error) {}

      useEffect(()=>{
        if(item){
            setName(item.name)
            setExpire(formatDate(item.expire))
            setDiscount(item.discount)
        }

       },[item])
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
       await dispatch(updateCouponAction(id,{
            name: name,
            expire: expire,
            discount: discount
        }))
        setLoad(false);
    }
    const res=useSelector(state=> state.couponReducer.updateCoupon);
    useEffect(()=>{
        if(load===false){
          if(res){
            if(res.status===200){
                Notify("The Coupon is Updated successfully!","success")
                setTimeout(() => {
                  navigate('/admin/allcoupons')
                }, 2000)
                
            }else{
                Notify("There are problem","error")
            }
            
          }
 
        }
      },[load])
    return [name,expire,discount,onChangeName,onChangeExpire,onChangeDiscount,onSubmit]

}