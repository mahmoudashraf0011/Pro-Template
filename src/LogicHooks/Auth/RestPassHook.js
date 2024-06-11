import React, { useEffect, useState } from 'react'
import Notify from '../../Components/JS/Utility/Notify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { restPassAction } from '../../redux/actions/Auth/AuthAction';

export default function RestPassHook() {

const dispatch=useDispatch();
const navigate=useNavigate();

//States
const [newPass,setNewPass]=useState('');
const [ConfirmPass,setConfirmPass]=useState('');
const [loading,setLoading]=useState(true);

// methods 
const onChangePass=(e)=>{
    setNewPass(e.target.value);
}

const onChangeConfirmPass=(e)=>{
    setConfirmPass(e.target.value);
}


// validate Date
const validateData=()=>{
   if(newPass =='' || ConfirmPass==''){
        Notify("Please Complete Data!","warn");
        return;
    }

   if(newPass !=ConfirmPass){
        Notify("Confirm Password Not Identical to New Password!","warn");
        return;
    }
}
let email;
if(localStorage.getItem("email")){
   email=localStorage.getItem("email");
}
//authReducer
const onSubmit=async (e)=>{
    e.preventDefault();
    validateData();
    setLoading(true)
    await dispatch(restPassAction({
        email:email,
        newPassword:newPass

    }))
    setLoading(false)
}

const res=useSelector(state=> state.authReducer.restPass);

useEffect(()=>{
if(loading==false){
    if(res){
        console.log(res.status);
        if(res.status==200){
            Notify("Password is Updated Successfully","success");
            setTimeout(() => {
                navigate("/login")
            }, 2000)
            

        }else if(res.status==500){
            Notify("Password Must be at least 6 character","error");
        }
        else{
            Notify("There are problem >> Please Try again","error");
        }
}
}
},[loading])

return [newPass,ConfirmPass,onChangePass,onChangeConfirmPass,onSubmit]
}
//01015846758