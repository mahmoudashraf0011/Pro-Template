import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { deleteAddressAction } from '../../redux/actions/UserAddress/UserAddressAction';

export default function DeleteAddressHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.userAddressReducer.deleteAddress)

    const handelDelete=async()=>{
    setLoad(true)
     await dispatch(deleteAddressAction(id));
     setLoad(false) 
    setShow(false)
}
    useEffect(()=>{
        if(load==false){
            if(res){
          
                if(res.status === 200){           
                    Notify("Address is Deleted successfully!","success")
                    setTimeout(() => {
                    window.location.reload();
                   }, 2000);
                }else{
                    Notify("There are problem!","error")
    
                }
            }        
    
         
        }

    },[load])
  return [show,handelDelete,handleClose,handleShow]

}
