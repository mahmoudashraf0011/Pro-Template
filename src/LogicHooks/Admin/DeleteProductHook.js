
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction } from '../../redux/actions/Product/ProductAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function DeleteProductHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.products.deleteProduct)
    const handelDelete=()=>{
    dispatch(deleteProductAction(id));
    setShow(false)
    
      setTimeout(() => {
        window.location.reload();
      }, 6200);

     setTimeout(() => {
      Notify("Producted is Deleted successfully!","success")
     }, 500);
}
  return [show,handelDelete,handleClose,handleShow]

}
