import React from 'react'
import ShopProductHook from '../Products/ShopProductHook';

export default function SortHook() {
    const [items,pagintate,length,onPress,getData] = ShopProductHook();
    const chooseSort=(sortWord)=>{
        localStorage.setItem("sortWord",sortWord)
        getData();
        console.log(sortWord);
      } 
  return [chooseSort]
}
