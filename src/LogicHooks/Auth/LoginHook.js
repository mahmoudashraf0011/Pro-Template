import React, { useEffect, useState } from 'react'
import Notify from '../../Components/JS/Utility/Notify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  loginUserAction } from '../../redux/actions/Auth/AuthAction';

export default function LoginHook() {

const dispatch=useDispatch();
const navigate=useNavigate();

//States
const [email,setEmail]=useState('');
const [pass,setPass]=useState('');
const [loading,setLoading]=useState(true);

// methods 
const onChangeEmail=(e)=>{
    setEmail(e.target.value);
}

const onChangePass=(e)=>{
    setPass(e.target.value);
}

// validate Date
const validateData=()=>{
    let re = /\S+@\S+\.\S+/;

   if(email ==''){
        Notify("Please Enter Your Email!","warn");
    }
    else if( re.test(email) === false){
        Notify("Unvalid Email Address","error");

    }
    else if(pass ==''){
        Notify("Please Enter Your Password!","warn");
    }
}

//authReducer
const onSubmit=async (e)=>{
    e.preventDefault();
    validateData();
    setLoading(true)
    await dispatch(loginUserAction({
        email:email,
        password:pass,

    }))
    setLoading(false)

}

const res=useSelector(state=> state.authReducer.loginUser);

useEffect(()=>{
if(loading==false){
    if(res){
         if(res.data){  
            if(res.data.token){
                console.log(res.data)
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("user",JSON.stringify(res.data.data))
                localStorage.setItem("role",res.data.data.role)
                Notify("Account successfully Logged!","success");
                setTimeout(() => {
                   window.location.href="/"
                }, 2000);

            }else{
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                localStorage.removeItem("role")
            }        

        }
     console.log(res)
     if(res.data){
        if(res.data.message== "Incorrect email or password"){
                Notify("Incorrect email or password!","error");
        }

    }
    setLoading("true")
}
}
},[loading])

return [email,pass,onChangeEmail,onChangePass,onSubmit]
}
//01015846758