import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearUserCartAction, deleteSpecificCartItemAction } from '../../redux/actions/Cart/CartAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function ClearCartHook(item) {
    const dispatch=useDispatch();
    const [load, setLoad] = useState(true);
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteClose = () => setShowDelete(false);
    const handleDeleteShow = () => setShowDelete(true);

    const res=useSelector(state=>state.cartRducer.clearUserCart)

    const handleDelete=async()=>{
        setShowDelete(false)
        setLoad(true)
        await  dispatch(clearUserCartAction());
        setLoad(false)
  

}

useEffect(()=>{
    if(load ===false){
        if(res){
            console.log(res);
             if(res.status == 204){
                 Notify("Clear Cart Successfully!","success")
                 setTimeout(() => {
                     window.location.reload();
                 }, 2000);
             }else{
                 Notify("There are problem, please try again!","error")
    
            }
        }
  
       setLoad(true)
    }
  },[load])
return [showDelete,handleDelete,handleDeleteClose,handleDeleteShow]

}
