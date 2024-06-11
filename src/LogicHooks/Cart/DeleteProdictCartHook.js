import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpecificCartItemAction } from '../../redux/actions/Cart/CartAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function DeleteProdictCartHook(item) {
    const dispatch=useDispatch();
    const [load, setLoad] = useState(true);
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteClose = () => setShowDelete(false);
    const handleDeleteShow = (e) => setShowDelete(true);

    const res=useSelector(state=>state.cartRducer.removeSpecificCartItem)

    const handleDelete=async()=>{
        setShowDelete(false)
        setLoad(true)
        await  dispatch(deleteSpecificCartItemAction(item._id));
        setLoad(false)
  

}

useEffect(()=>{
    if(load ===false){
        if(res){
            console.log(res);
             if(res.status == 200){
                 Notify("Product is removed from Cart Successfully!","success")
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
