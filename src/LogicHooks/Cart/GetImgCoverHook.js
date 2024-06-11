import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProductAction } from '../../redux/actions/Product/ProductAction';

export default function GetImgCoverHook(id) {
    const [img,setImg]=useState("");
    const [load,setLoad]=useState(true);
    const dispatch=useDispatch();
    const product=useSelector(state=> state.products.specificProduct);

    useEffect(()=>{
        const  run=async ()=>{
            setLoad(true)
             await dispatch(getSpecificProductAction(id))
            setLoad(false)

         }
         run();
     
       },[])
     
       useEffect(()=>{
        if(load ==false){
            if(product){
                setImg(product.data.imageCover)
            }
        }
     
       },[load])
    return [img]
}
