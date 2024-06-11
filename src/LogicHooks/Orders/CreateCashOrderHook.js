import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllAddresssesAction, getSpecificAddressAction } from '../../redux/actions/UserAddress/UserAddressAction';
import { createOrderCashAction } from '../../redux/actions/Orders/OrdersAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function CreateCashOrderHook(id,check) {
    const [loadAddress,setLoadAddress]=useState(true);
    const [loadCash,setLoadCash]=useState(true);
    const [addresses,setAddresses]=useState([]);
    const [addressID,setAddressID]=useState([]);
   
    // get all Address
    const addressesRes=useSelector(state=> state.userAddressReducer.allAddresses);

    const dispatch=useDispatch();

    useEffect(()=>{
        const run=async()=>{
            setLoadAddress(true)
            await dispatch(getAllAddresssesAction());
            setLoadAddress(false)

        }
        run();
    
    },[])

      useEffect(()=>{
        if(loadAddress ===false){
            if(addressesRes){
              setAddresses(addressesRes.data)
            }
      
            setLoadAddress(true)
        }
      },[loadAddress])
    
    // get specific address
    const onChangeAddress=async(e)=>{
        await dispatch(getSpecificAddressAction(e.target.value))
    }

    const AddressRes=useSelector(state=> state.userAddressReducer.specificAddress);

       let address =[];
       try {
         if(AddressRes){
            address=AddressRes.data
    
        
         }
       } catch (error) {}

       // create Cash payment
       const onChooseCash=async()=>{
          if(address == "0" || address == "" || address == undefined ){
            Notify("Please choose Your Address!","warn")
            return;
        }
        if(check==""){
          Notify("Please choose Your Payment Method!","warn")
          return;
      }
        setLoadCash(true)
        await dispatch(createOrderCashAction(id,{
            shippingAddress:{
                details: address.details,
                phone: address.phone,
                city: address.city,
                postalCode:address.postalCode
                }
        }))
        setLoadCash(false)
       }

    const res=useSelector(state=> state.ordersReducer.createCashOrder);
       
      useEffect(()=>{
        if(loadCash ===false){
            if(res){
                console.log(res);
                if(res.status==201){
                    Notify("Order is Created Successfully!","success")
                    setTimeout(() => {
                        window.location.href="/user/allorders"
                    }, 2000);
                }else{
                  
                    Notify("There are problem!","error")

                

                }

            }
      
            setLoadCash(true)
        }
      },[loadCash])

return [addresses,address,onChangeAddress,onChooseCash]
}
