import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { deleteBrandAction } from '../../redux/actions/Brand/allBrandAction';

export default function DeleteBrandHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.allBrand.deleteBrand)
    const handelDelete=async ()=>{
      setLoad(true)
      await dispatch(deleteBrandAction(id));
      setLoad(false)
      setShow(false)

}

useEffect(()=>{
  if(load==false){
    if(res){
        if(res.status === 204){           
            Notify("Brand is Deleted successfully!","success")
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
