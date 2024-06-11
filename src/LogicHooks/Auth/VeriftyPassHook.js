import React, { useEffect, useState } from 'react'
import Notify from '../../Components/JS/Utility/Notify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassAction, verityPassAction } from '../../redux/actions/Auth/AuthAction';

export default function VeriftyPassHook() {

const dispatch=useDispatch();
const navigate=useNavigate();

//States
const [code,setCode]=useState('');
const [loading,setLoading]=useState(true);

// methods 
const onChangeCode=(e)=>{
    setCode(e.target.value);
}


// validate Date
const validateData=()=>{
   if(code ==''){
        Notify("Please Enter Code!","warn");
        return;
    }

}

//authReducer
const onSubmit=async (e)=>{
    e.preventDefault();
    validateData();
    setLoading(true)
    await dispatch(verityPassAction({
        resetCode:code

    }))
    setLoading(false)
}

const res=useSelector(state=> state.authReducer.verityPass);

useEffect(()=>{
if(loading==false){
    if(res){
        console.log(res);
        if(res.status==200){
            Notify("Correct Verification Code","success");
            setTimeout(() => {
                navigate("/user/rest-password")
            }, 2000)
            

        }else{
            Notify("Code is Wrong or Expried","error");
        }
}
}
},[loading])

return [code,onChangeCode,onSubmit]
}
//01015846758