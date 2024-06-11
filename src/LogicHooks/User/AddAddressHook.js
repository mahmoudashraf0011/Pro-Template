import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCouponAction } from '../../redux/actions/Coupon/CouponAction';
import Notify from '../../Components/JS/Utility/Notify';
import { createAddressAction } from '../../redux/actions/UserAddress/UserAddressAction';

export default function AddAddressHook() {
    const [alias,setAlias]=useState("");
    const [desc,setDesc]=useState("");
    const [mobile,setMobile]=useState("");
    const [city,setCity]=useState("");
    const [post,setPost]=useState("");
    const [load,setLoad]=useState(true);
    const dispatch=useDispatch();



    const onChangeAlias=(e)=>{
        e.persist();
        setAlias(e.target.value)
   

    }
    
    const onChangeDesc=(e)=>{
        e.persist();

        setDesc(e.target.value)
    }
    const onChangeMobile=(e)=>{
        e.persist();
 
        setMobile(e.target.value)
    }
    
    const onChangeCity=(e)=>{
        e.persist();
       
        setCity(e.target.value)
    }
    const onChangePost=(e)=>{
        e.persist();
        setPost(e.target.value)
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        if(alias =='' || desc=='' || mobile == "" || city=="" || post==""){
             Notify("Please Complete Address Data","warn")
             console.log("no");
            return;
        }
        if(mobile < 11){
            Notify("Mobile Number must be at least 11 num","warn")
            return;
        }
        setLoad(true);
       await dispatch(createAddressAction({
        alias: alias,
        details: desc,
        phone:mobile,
        city: city,
        postalCode: post
        }))
        setLoad(false);
    }
    const res=useSelector(state=> state.userAddressReducer.createAddress);
    useEffect(()=>{
      if(load===false){
          if(res){
            console.log(res);
            if(res.status===200){
                Notify("The Address is Created successfully!","success")
            }else if(res.status===400){
                Notify("This Address is creaeted Before","error")
            }else{
                Notify("There are problem","error")
            }
            
          }
          setLoad(true)
          setAlias("")
          setDesc("")
          setMobile("")
          setCity("")
          setPost("")
 
        }
      },[load])
    return [alias,desc,mobile,city,post,onChangeAlias,onChangeDesc,onChangeMobile,onChangeCity,onChangePost,onSubmit]

}