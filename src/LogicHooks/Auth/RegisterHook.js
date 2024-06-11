import React, { useEffect, useState } from 'react'
import Notify from '../../Components/JS/Utility/Notify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUserAction } from '../../redux/actions/Auth/AuthAction';

export default function RegisterHook() {

const dispatch=useDispatch();
const navigate=useNavigate();
//States
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [pass,setPass]=useState('');
const [confirmPass,setConfirmPass]=useState('');
const [phone,setPhone]=useState('');
const [loading,setLoading]=useState(true);

// methods 
const onChangeName=(e)=>{
    setName(e.target.value);
}

const onChangeEmail=(e)=>{
    setEmail(e.target.value);
}

const onChangePass=(e)=>{
    setPass(e.target.value);
}

const onChangePassConfirm=(e)=>{
    setConfirmPass(e.target.value);
}

const onChangePhone=(e)=>{
    setPhone(e.target.value);
}

// validate Date
const validateData=()=>{
    let re = /\S+@\S+\.\S+/;
    if(name ==''){
        Notify("Please Enter Your User Name!","warn");
    }
    else if(email ==''){
        Notify("Please Enter Your Email!","warn");
    }
    else if( re.test(email) === false){
        Notify("Unvalid Email Address","error");

    }
    else if(pass ==''){
        Notify("Please Enter Your Password!","warn");
    }
    else if(confirmPass ==''){
        Notify("Please Confirm Your Password!","warn");
    }
    else if(pass !=confirmPass){
        Notify("The password and the password confirmation do not match","error");
    }
    else if(phone ==''){
        Notify("Please Enter Phone Number!","warn");
    }



}

//authReducer
const onSubmit=async (e)=>{
    e.preventDefault();
    validateData();
    setLoading(true)
    await dispatch(createUserAction({
        name: name,
        email:email,
        password:pass,
        passwordConfirm:confirmPass,
        phone:phone
    }))
    setLoading(false)
}

const res=useSelector(state=> state.authReducer.createUser);

useEffect(()=>{
if(loading==false){
    if(res){

        if(res.data.token){
            localStorage.setItem("token",res.data.token)
            Notify("Account successfully created!","success");
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        }
        if(res.data.errors){
            if(res.data.errors[0].msg == "E-mail already in use"){
                Notify("E-mail already in use!","error");
    
            }   
            else if(res.data.errors[0].msg == "must be at least 6 chars"){
                Notify("Password Must be at least 6 chars!","error");
    
            }   
            else if(res.data.errors[0].msg =="accept only egypt phone numbers"){
                Notify("Accept only egypt phone numbers!","error");
    
            }           
        }
   



    }
}
},[loading])

return [name,email,pass,confirmPass,phone,onChangeName,onChangeEmail,onChangePass,onChangePassConfirm,onChangePhone,onSubmit]
}
//01015846758