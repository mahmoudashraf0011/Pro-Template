import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { deleteBrandAction } from '../../redux/actions/Brand/allBrandAction';

export default function DeleteBrandHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.allBrand.deleteBrand)
    const handelDelete=()=>{
    dispatch(deleteBrandAction(id));
    setShow(false)
    
      setTimeout(() => {
        window.location.reload();
      }, 6200);

     setTimeout(() => {
      Notify("Brand is Deleted successfully!","success")
     }, 500);
}
  return [show,handelDelete,handleClose,handleShow]

}