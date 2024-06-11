import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { adminDeleteUserAction } from '../../redux/actions/AdminUseres/AdminUseresAction';

export default function AdminDeleteUserHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.adminUseresReducer.adminDeleteUser)
    const handelDelete=async ()=>{
      setLoad(true)
      await dispatch(adminDeleteUserAction(id));
      setLoad(false)
      setShow(false)

}

useEffect(()=>{
  if(load==false){
    if(res){
        if(res.status === 204){           
            Notify("User Account is Deleted successfully!","success")
            setTimeout(() => {
            window.location.reload();
           }, 2000);
        }else{
            Notify("There are problem!","error")

        }
    }        
    setLoad(true)
 
}
},[load])
  return [show,handelDelete,handleClose,handleShow]

}
