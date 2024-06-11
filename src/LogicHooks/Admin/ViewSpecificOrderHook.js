import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificOrderAction } from '../../redux/actions/Orders/OrdersAction';

export default function ViewSpecificOrderHook(id) {

    const [orderData,setOrderData]=useState("");
    const [order,setOrder]=useState("");
    const [load,setLoad]=useState(true);
    const dispatch=useDispatch();
  
  
  
    useEffect(()=>{
     const run=async()=>{
        setLoad(true)
        await dispatch(getSpecificOrderAction(id))
        setLoad(false)

     }
  run()
    },[])
    const res=useSelector(state=> state.ordersReducer.getSpecificOrder);

     useEffect(()=>{
        if(load==false){
            if(res && res.data){ 
                setOrder(res.data)
                setOrderData(res.data.cartItems)
            }
        }
    },[load])
  
  return [order,orderData];
}
