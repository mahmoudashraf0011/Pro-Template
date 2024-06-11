import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { updateOrderDeliverAction, updateOrderPaidAction } from '../../redux/actions/Orders/OrdersAction';
import { useNavigate } from 'react-router-dom';

export default function UpdateOrderStatusHook(id,order) {
    const payRef=useRef();
    const deliverRef=useRef();
    const dispatch=useDispatch();
    const [payLoad,setPayLoad]=useState(true);
    const [deliverLoad,setDeliverLoad]=useState(true);
    const [payStatus,setPayStatus]=useState("");
    const [deliverStatus,setDeliverStatus]=useState("");
    const resPay=useSelector(state=> state.ordersReducer.updatePaidOrder);
    const resDeliver=useSelector(state=> state.ordersReducer.updateDeliverOrder);
    const navigate=useNavigate();
 
    const onChangePayStatus=(e)=>{
        console.log(e.target.value);
        setPayStatus(e.target.value)
    }
    const onChangeDeliverStatus=(e)=>{
        console.log(e.target.value);
        setDeliverStatus(e.target.value)
    }

    const onSubmitPay=async(e)=>{
        e.preventDefault();
        if(payStatus == "true"){
            setPayLoad(true)
            await dispatch(updateOrderPaidAction(id))
            setPayLoad(false)
            payRef.current.style.pointerEvents = 'none'
            
        }else{
            Notify("Updated Payment Status is not apply","error")
            return;
        }
    }

    const onSubmitDeliver=async (e)=>{
        e.preventDefault();
  
        if(order.isPaid == false){
            Notify("Updated Payment Status First","error")
            return;
            
        }else{
            if(deliverStatus == "true"){
                setDeliverLoad(true)
                await dispatch(updateOrderDeliverAction(id))
                setDeliverLoad(false)
                deliverRef.current.style.pointerEvents = 'none'
                return;
            }else{
                Notify("Updated Deliver Status is not apply","error")
                return;
            }
  
        }
    }


    // Pay Status
    useEffect(()=>{
        if(payLoad == false){
         
            if(resPay){
                if(resPay.status == 200){
                    Notify("Payment Status Updated successfuuly","success")
                    setTimeout(() => {
                      navigate("/admin/allorders")
                    }, 2000)
                    
                }else{
                    Notify("There are problem","error")
                }
            
            }
        }
    },[payLoad])

    // deliver Status
    useEffect(()=>{
        if(deliverLoad == false){           
            if(resDeliver){
                if(resDeliver.status == 200){
                    Notify("Deliver Status Updated successfuuly","success")
                    setTimeout(() => {
                        navigate("/admin/allorders")
                    }, 2000)
                    
                }else{
                    Notify("There are problem","error")
                }
            
            }
        }
    },[deliverLoad])
  return [payStatus,deliverStatus,onChangePayStatus,onChangeDeliverStatus,onSubmitPay,onSubmitDeliver,payRef,deliverRef]
}
