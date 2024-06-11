import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Notify from '../../Components/JS/Utility/Notify';
import { updateUserPassAction } from '../../redux/actions/UserProfile/UserProfileAction';

export default function EditUserPasswordHook() {

    const [oldPass,setOldPass]=useState("");
    const [newPass,setNewPass]=useState("");
    const [confirmPass,setConfirmPass]=useState("");
    const [load,setLoad]=useState(true);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const res=useSelector(state=> state.userProfileReducer.updateUserPass);


    const onChangeOldPass=(e)=>{
        e.persist();
        setOldPass(e.target.value)
    
   

    } 
    const onChangeNewPass=(e)=>{
        e.persist();
        setNewPass(e.target.value)
   

    } 

    const onChangeConfirmPass=(e)=>{
        e.persist();
        setConfirmPass(e.target.value)
   

    } 

    
    const onSubmit=async (e)=>{
        e.preventDefault();
        if(oldPass =='' || newPass=="" || confirmPass == ''){
            Notify("Please complete Password Data!","warn")
            return;
        }
        else if(newPass != confirmPass){
            Notify("Password and Confirm Passord are not identical!","error")
            return;
        }else if(newPass.length < 6 || confirmPass.length < 6){
            Notify("Password must be at least 6 characters!","error")
            return;
        }

        setLoad(true);
       await dispatch(updateUserPassAction({
        currentPassword:oldPass,
        password:newPass,
        passwordConfirm:confirmPass
       }))
        setLoad(false);

    } 
    useEffect(()=>{
        if(load===false){
            if(res){
                console.log(res);
              if(res.status===200){
                  Notify("Password is Updated successfully!","success")
                  localStorage.removeItem("user");
                  localStorage.removeItem("token");
                  localStorage.removeItem("role");
                  setTimeout(() => {
                   window.location.href="/login"
                  }, 2000)
                  
              }else if(res.status===400){
                  Notify("Incorrect current password","error")
              }else{
                Notify("There are Problem","error")

              }
              
            }
            setLoad(true)
   
          }
        },[load])

  return[oldPass,newPass,confirmPass,onChangeOldPass,onChangeNewPass,onChangeConfirmPass,onSubmit] ;
}
