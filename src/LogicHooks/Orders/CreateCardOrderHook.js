import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllAddresssesAction, getSpecificAddressAction } from '../../redux/actions/UserAddress/UserAddressAction';
import { createOrderCardAction, createOrderCashAction } from '../../redux/actions/Orders/OrdersAction';
import Notify from '../../Components/JS/Utility/Notify';
import { useNavigate } from 'react-router-dom';

export default function CreateCardOrderHook(id,address,check) {
    const [loadAddress,setLoadAddress]=useState(true);
    const [loadCard,setLoadCard]=useState(true);
    const [addresses,setAddresses]=useState([]);
    const [addressID,setAddressID]=useState([]);
   const dispatch=useDispatch();
   const navigate=useNavigate();
    


       // create Cash payment
       const onChooseCard=async()=>{
          if(address == "0" || address == "" || address == undefined ){
            Notify("Please choose Your Address!","warn")
            return;
        }
        if(check==""){
            Notify("Please choose Your Payment Method!","warn")
            return;
        }
        setLoadCard(true)
        await dispatch(createOrderCardAction(id,{
            shippingAddress:{
                details: address.details,
                phone: address.phone,
                city: address.city,
                postalCode:address.postalCode
                }
        }))
        setLoadCard(false)
       }

    const res=useSelector(state=> state.ordersReducer.createCardOrder);
       
      useEffect(()=>{
        if(loadCard ===false){
            if(res){
                console.log(res);
                if(res.status=="success"){
                    Notify("We will refer you to register payment info!","success")
             
                    setTimeout(() => {
                      window.open(res.session.url)
                    }, 3000)
                    
                }else{
                    Notify("This service is not active now!","error")

                }

            }
      
            setLoadCard(true)
        }
      },[loadCard])

return [onChooseCard]
}
