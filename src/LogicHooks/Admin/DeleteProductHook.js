
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction } from '../../redux/actions/Product/ProductAction';
import Notify from '../../Components/JS/Utility/Notify';
import Loding from '../../Components/JS/Utility/Loading';

export default function DeleteProductHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.products.deleteProduct)
    const handelDelete=async ()=>{
    setLoading(true)
    await dispatch(deleteProductAction(id));
    setLoading(false)

    setShow(false)
    
}

    useEffect(()=>{
      if(loading==false){
        if(res){
            console.log(res);
            if(res.status === 204){           
                Notify("Producted is Deleted successfully!","success")
                setTimeout(() => {
                window.location.reload();
               }, 2000);
            }else{
                Notify("There are problem!","error")

            }
        }        
        setLoading(true)
     
    }
    },[loading])
  return [show,handelDelete,handleClose,handleShow]

}
