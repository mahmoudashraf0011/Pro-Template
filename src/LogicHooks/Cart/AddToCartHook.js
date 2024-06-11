import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { addToCartAction } from '../../redux/actions/Cart/CartAction';

export default function AddToCartHook(id,item) {
    const[color,setColor]=useState("")
    const[index,setIndex]=useState(null)
    const [loading,setLoading]=useState(true);
    const dispatch=useDispatch();
    const res=useSelector(state=> state.cartRducer.addToCart);

    const handleColor=(color,i)=>{
      setColor(color);
      setIndex(i);
    }


    const onSubmit=async (e)=>{
        e.preventDefault();
        if(item.availableColors){
            if(color == ""){
                Notify("Please Choose Product Color!","warn")
                return;
            }
        }

        setLoading(true)
        await dispatch(addToCartAction({
            productId: id,
            color: color
        }))
        setLoading(false)

    }

    
  useEffect(()=>{
    if(loading ===false){
      if(res){
        console.log(res);
        if(res.status===200){
            Notify("Product Added to Cart Successfully!","success")
            setTimeout(() => {
              window.location.href="/cart"
            }, 2000)
            
        }else if(res.status===403){
            Notify("You are not allowed to do this Action","error")

        }else{
          Notify("You are not logged to do this Action","error")

        }

       }
  
       setLoading(true)
    }
  },[loading])

  return [color,index,handleColor,onSubmit]
}
