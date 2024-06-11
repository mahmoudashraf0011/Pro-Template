import React, { useEffect, useState } from 'react'
import Notify from '../../Components/JS/Utility/Notify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassAction } from '../../redux/actions/Auth/AuthAction';

export default function ForgetPassHook() {

const dispatch=useDispatch();
const navigate=useNavigate();

//States
const [email,setEmail]=useState('');
const [loading,setLoading]=useState(true);

// methods 
const onChangeEmail=(e)=>{
    setEmail(e.target.value);
}


// validate Date
const validateData=()=>{
    let re = /\S+@\S+\.\S+/;

   if(email ==''){
        Notify("Please Enter Your Email!","warn");
        return;
    }
    else if( re.test(email) === false){
        Notify("Unvalid Email Address Form","error");
        return;

    }
}

//authReducer
const onSubmit=async (e)=>{
    e.preventDefault();
    validateData();
    localStorage.setItem("email",email)
    setLoading(true)
    await dispatch(forgetPassAction({
        email:email,

    }))
    setLoading(false)
}

const res=useSelector(state=> state.authReducer.forgetPass);

useEffect(()=>{
if(loading==false){
    if(res){
        console.log(res);
        if(res.status==200){
            Notify("The code is sent to your email successfully","success");
            setTimeout(() => {
                navigate("/user/verifty-password")
            }, 2000)
            

        }else if(res.status == 404){
            Notify("Email address is not Found!","error");
        }else{
            Notify("There are problem !","error");

        }
}
}
},[loading])

return [email,onChangeEmail,onSubmit]
}
//01015846758