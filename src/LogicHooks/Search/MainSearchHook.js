import React, { useEffect } from 'react'
import { useState } from 'react';
import ShopProductHook from '../Products/ShopProductHook';

export default function MainSearchHook() {
    const [items,pagintate,length,onPress,getData] = ShopProductHook();
    const [word,setWord] =useState('');
    const handleMainSearch=(e)=>{
        console.log(e.target.value);
        setWord(e.target.value);
        localStorage.setItem("wordSearch",e.target.value)
        // const path=window.location.pathname;
        // if(path != "/allproducts"){
        //     setTimeout(() => {
        //         window.location.href="/allproducts";
        //     }, 1000);
      
        // }
    }

    useEffect(()=>{
        setTimeout(() => {
            getData();
        }, 500);
    },[word])
  return [word,handleMainSearch]
}
