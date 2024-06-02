import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import { allBrandAction } from '../../redux/actions/Brand/allBrandAction';
import ShopProductHook from '../Products/ShopProductHook';

export default function SideFilterHook() {
    const dispatch=useDispatch();
    const [items,pagintate,length,onPress,getData] = ShopProductHook();
    const run=async ()=>{
        await dispatch(allCategoryAction());
        await dispatch(allBrandAction());
    }
    useEffect(()=>{
        run();
    },[])

    const categories=useSelector(state=> state.allCategory.category);
    const brands=useSelector(state=> state.allBrand.brand);
    const [cateChoose,setCateChoose]=useState([]);
    const [brandChoose,setBrandChoose]=useState([]);
    const [priceFrom,setPriceFrom]=useState('');
    const [priceTo,setPriceTo]=useState('');

    let cate=[];
    try {
        if(categories.data){
            cate=categories.data
        }else{
            cate=[];
        }
    } catch (error) {}


    let brand=[];
    try {
        if(brands.data){
            brand=brands.data
        }else{
            brand=[];
        }
    } catch (error) {}

    const handelChooseCate=(e)=>{
        let cateCheck=e.target.checked;
        let cateValue=e.target.value
     
        if(cateValue==="0"){
            setCateChoose([])
        }else if(cateCheck==true){
            setCateChoose([...cateChoose,cateValue])
            
        }else if(cateCheck==false){
            let arr=cateChoose.filter((e)=>e != cateValue);
            setCateChoose(arr);
        }
   

    }
    useEffect(()=>{
        let choosenCates=cateChoose.map((item)=> `category[in][]=${item}`).join("&");
        localStorage.setItem("choosenCates",choosenCates);
        setTimeout(() => {
           getData();
        }, 500);
    },[cateChoose])
  

    const handelChooseBrand=(e)=>{
        let brandCheck=e.target.checked;
        let brandValue=e.target.value
        if(brandValue==="0"){
            setBrandChoose([])
        }else if(brandCheck==true){
            setBrandChoose([...brandChoose,brandValue])
            
        }else if(brandCheck==false){
            let arr=brandChoose.filter((e)=>e != brandValue);
            setBrandChoose(arr);
        }
      

    }
    useEffect(()=>{
        let choosenBrands=brandChoose.map((item)=> `brand[in][]=${item}`).join("&");
        localStorage.setItem("choosenBrands",choosenBrands);
        setTimeout(() => {
           getData();
        }, 500);
    },[brandChoose])


    // if(window.location.reload){
    //     localStorage.setItem("choosenCates",'');
    //     localStorage.setItem("choosenBrands",'');
    // }

     
    const handlePriceFrom=(e)=>{
        localStorage.setItem("priceFrom",e.target.value)
        setPriceFrom(e.target.value)

    }
    const handlePriceTo=(e)=>{
        localStorage.setItem("priceTo",e.target.value)
        setPriceTo(e.target.value)
    }

    useEffect(()=>{
 

        setTimeout(() => {
          getData();
        }, 500);
    },[priceFrom,priceTo])


  return [cate,brand,handelChooseCate,handelChooseBrand,handlePriceFrom,handlePriceTo]
}
