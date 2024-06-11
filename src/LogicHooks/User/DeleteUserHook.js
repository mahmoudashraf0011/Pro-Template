import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { deleteCurrentUserAction } from '../../redux/actions/UserProfile/UserProfileAction';

export default function DeleteUserHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.userProfileReducer.deleteCurrentUser)

    const handelDelete=async()=>{
    setLoad(true)
     await dispatch(deleteCurrentUserAction());
     setLoad(false) 
    setShow(false)
}
    useEffect(()=>{
        if(load==false){
            if(res){
                console.log(res);
                if(res.status === 204){           
                    Notify("Account is Deleted successfully!","success")
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    setTimeout(() => {
                        window.location.href="/login"
                       }, 2000)
                       
                }else{
                    Notify("There are problem!","error")
    
                }
            }        
            setLoad(true)
         
        }

    },[load])
  return [show,handelDelete,handleClose,handleShow]

}
