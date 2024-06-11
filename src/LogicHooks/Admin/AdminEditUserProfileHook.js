import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserDataAction } from '../../redux/actions/UserProfile/UserProfileAction';
import Notify from '../../Components/JS/Utility/Notify';
import { adminGetSpecificUserAction, adminUpdateUserAction } from '../../redux/actions/AdminUseres/AdminUseresAction';

export default function AdminEditUserProfileHook(id) {

    const [name,setName]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [load,setLoad]=useState(true);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    useEffect(()=>{
        const run=async()=>{
            await dispatch(adminGetSpecificUserAction(id))
        }
        run();
    },[])
    const res=useSelector(state=> state.adminUseresReducer.adminUpdateUser);
    const userRes=useSelector(state=> state.adminUseresReducer.adminGetSpecificUser);


    let user=[];
    try {
    if(userRes){
         user=userRes.data;
      
    }  
    }catch(e){}

    useEffect(()=>{
        if(userRes.data){
            setName(user.name)
            setMobile(user.phone)
            setEmail(user.email)
        }

    },[userRes.data])

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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name =='' || mobile=="" || email == ''){
            Notify("Please complete Profile Data!","warn")
            return;
        }
        else if(mobile.length < 11){
            Notify("Accept only Egyptain mobiles && at least 11 num!","warn")
            return;
        }
        else if(emailRegex.test(email) == false){
            Notify("Invalid Email Address Format","warn")
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
       await dispatch(adminUpdateUserAction(id,body))
        setLoad(false);

    } 
    useEffect(()=>{
        if(load===false){
            if(res){
                console.log(res);
              if(res.status===200){
                  Notify("Profile Data is Updated successfully!","success")
                  setTimeout(() => {
                    navigate("/admin/allusers")
                  }, 2000)
                  
              }else if(res.status===400){
                  Notify("Email is Already used","error")
              }else{
                Notify("There are Problem","error")

              }
              
            }
            setLoad(true)
   
          }
        },[load])

  return[name,mobile,email,onChangeName,onChangeMobile,onChangeEmail,onSubmit] ;
}
