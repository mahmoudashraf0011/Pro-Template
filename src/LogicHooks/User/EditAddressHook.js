
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { getSpecificAddressAction, updateAddressAction } from '../../redux/actions/UserAddress/UserAddressAction';
import { useNavigate } from 'react-router-dom';

export default function EditAddressHook(id) {
    const [alias,setAlias]=useState("");
    const [desc,setDesc]=useState("");
    const [mobile,setMobile]=useState("");
    const [city,setCity]=useState("");
    const [post,setPost]=useState("");
    const [load,setLoad]=useState(true);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
        const run=async()=>{
             await dispatch(getSpecificAddressAction(id))
        }
        run();
       },[])

       const Address=useSelector(state=> state.userAddressReducer.specificAddress);

       let item =[];
       try {
         if(Address){
             item=Address.data
            // console.log(item);
        
         }
       } catch (error) {}
 
       useEffect(()=>{
         if(item){
          setAlias(item.alias)
          setDesc(item.details)
          setMobile(item.phone)
          setCity(item.city)
          setPost(item.postalCode)
         }
 
        },[item])

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
            Notify("Mobile Number must be Egyptain Number and at least 11 number","warn")
            return;
        }
        setLoad(true);
       await dispatch(updateAddressAction(id,{
        alias: alias,
        details: desc,
        phone:mobile,
        city: city,
        postalCode: post
        }))
        setLoad(false);
    }
    const res=useSelector(state=> state.userAddressReducer.updateAddress);
    useEffect(()=>{
      if(load===false){
          if(res){
            if(res.status===200){
                Notify("The Address is Updated successfully!","success")
                setTimeout(() => {
                  navigate("/user/address")
                }, 2000)
                
            }else{
                Notify("There are problem","error")
            }
            
          }
      
 
        }
      },[load])
    return [alias,desc,mobile,city,post,onChangeAlias,onChangeDesc,onChangeMobile,onChangeCity,onChangePost,onSubmit]

}