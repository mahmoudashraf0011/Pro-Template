import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAddresssesAction } from '../../redux/actions/UserAddress/UserAddressAction';



 export default function ViewAllAddressesHook() {
    const dispatch=useDispatch();
    const [load,setLoad]=useState(true);

    useEffect(()=>{
        const run=async()=>{
            setLoad(true)
            await dispatch(getAllAddresssesAction());
            setLoad(false)

        }
        run();
    
    },[])
  
    const addresses=useSelector(state=> state.userAddressReducer.allAddresses);
    let items=[]
    try {
        if(addresses.data){
            items= addresses.data;
    
    }else{
        items=[]
        }  
    } catch (error) {}
        

    
  

    return [items]
 }


