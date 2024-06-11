
import React, { useEffect, useState } from 'react'
import Notify from '../../Components/JS/Utility/Notify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminCreateUserAction } from '../../redux/actions/AdminUseres/AdminUseresAction';

export default function CreateUserHook() {

const dispatch=useDispatch();
const navigate=useNavigate();
//States
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [pass,setPass]=useState('');
const [confirmPass,setConfirmPass]=useState('');
const [phone,setPhone]=useState('');
const [role,setRole]=useState('');
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
const onChangeRole=(e)=>{
    setRole(e.target.value);
}

// validate Date
const validateData=()=>{
    let re = /\S+@\S+\.\S+/;
    if(name ==''){
        Notify("Please Enter Your User Name!","warn");
        return;
    }
    else if(email ==''){
        Notify("Please Enter Your Email!","warn");
        return;
    }
    else if( re.test(email) === false){
        Notify("Unvalid Email Address","error");
        return;
    }
    else if(pass ==''){
        Notify("Please Enter Your Password!","warn");
        return;
    }
    else if(confirmPass ==''){
        Notify("Please Confirm Your Password!","warn");
        return;
    }
    else if(pass !=confirmPass){
        Notify("The password and the password confirmation do not match","error");
        return;
    }
    else if(phone ==''){
        Notify("Please Enter Phone Number!","warn");
        return;
    }
    else if(pass != confirmPass){
        Notify("Confrim Pass not equal to Password!","warn");
        return;
    }
    else if(role == "" || role=="0"){
        Notify("Please Choose Account Role!","warn");
        return;
    }


}

//authReducer
const onSubmit=async (e)=>{
    e.preventDefault();
    validateData();
    setLoading(true)
    await dispatch(adminCreateUserAction({
        name: name,
        email:email,
        password:pass,
        passwordConfirm:confirmPass,
        phone:phone,
        role:role
    }))
    setLoading(false)
}

const res=useSelector(state=> state.adminUseresReducer.adminCreateUser);

useEffect(()=>{
if(loading==false){
    if(res){
        console.log(res);
        if(res.status==201){
            Notify("Account successfully created!","success");
            setTimeout(() => {
                navigate("/admin/allusers")
            }, 2000)
            
       
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

return [name,email,pass,confirmPass,phone,role,onChangeName,onChangeEmail,onChangePass,onChangePassConfirm,onChangePhone,onChangeRole,onSubmit]
}
//01015846758