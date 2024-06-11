import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuntaityForProductCartAction } from '../../redux/actions/Cart/CartAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function UpdateQuantityCartHook(item) {
    const dispatch=useDispatch();
    const [load, setLoad] = useState(true);
    const [showQ, setShowQ] = useState(false);
    const [quantity, setQuantity] = useState(item.count);
    const handleQClose = () => setShowQ(false);
    const handleQShow = (e) => {
        e.preventDefault();
        setShowQ(true);
    }
    const res=useSelector(state=>state.cartRducer.updateQuentity)

    const onChangeQ=(e)=>{
        setQuantity(e.target.value)
    }

    const handleQuantity=async(e)=>{
        setShowQ(false)
        if(quantity ==0 ||quantity =="" ){
            Notify("Quantity of Product must be at least 1 !","warn")
            return
        }

      setLoad(true)
     await  dispatch(updateQuntaityForProductCartAction(item._id,{
        count: quantity
     }));
      setLoad(false)
  

}

useEffect(()=>{
    if(load ===false){
        if(res){
            if(res.status == 200){
                Notify("Quantity of Product is Updated Successfully!","success")
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
return [quantity,showQ,onChangeQ,handleQClose,handleQShow,handleQuantity]

}
