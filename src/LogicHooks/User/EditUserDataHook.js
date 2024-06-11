import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserDataAction } from '../../redux/actions/UserProfile/UserProfileAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function EditUserDataHook() {

    const [name,setName]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [load,setLoad]=useState(true);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const res=useSelector(state=> state.userProfileReducer.updateUserData);

    let user=[];
    try {
    if(localStorage.getItem("user")){
         user=JSON.parse(localStorage.getItem("user"));
    }  
    }catch(e){}

    useEffect(()=>{
        if(user){
            setName(user.name)
            setMobile(user.phone)
            setEmail(user.email)
        }

    },[])

    const onChangeName=(e)=>{
        e.persist();
        setName(e.target.value)
    
   

    } 
    const onChangeMobile=(e)=>{
        e.persist();
        setMobile(e.target.value)
   

    } 

    const onChangeEmail=(e)=>{
        e.persist();
        setEmail(e.target.value)
   

    } 

    
    const onSubmit=async (e)=>{
        e.preventDefault();
        if(name =='' || mobile=="" || email == ''){
            Notify("Please complete Profile Data!","warn")
            return;
        }
        if(mobile < 11){
            Notify("Accept only Egyptaion phone numbers!","warn")
            return;
        }
        let body={}
        if(email==user.email){
            body={
                name:name,
                phone:mobile,
            }
        }else{
            body={
                name:name,
                phone:mobile,
                email:email 
            }
        }
        setLoad(true);
       await dispatch(updateUserDataAction(body))
        setLoad(false);

    } 
    useEffect(()=>{
        if(load===false){
            if(res){
                console.log(res);
              if(res.status===200){
                  Notify("Profile Data is Updated successfully!","success")
                  localStorage.setItem("user",JSON.stringify(res.data.data.user))
                  setTimeout(() => {
                    window.location.href="/user/profile"
                  }, 2000)
              }else if(res.data.errors[0].msg=="Invalid email formate"){
                  Notify("Invalid email formate","error")
                
                  
              }else if(res.data.errors[0].msg=="E-mail already in use"){
                Notify("E-mail already in use","error")
              
                
              }else{
                Notify("There are Problem","error")

              }
              
            }
            setLoad(true)
   
          }
        },[load])

  return[name,mobile,email,onChangeName,onChangeMobile,onChangeEmail,onSubmit] ;
}
