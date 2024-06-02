import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsAction, getAllProductsWithSearchAction, getProductsPagesAction } from '../../redux/actions/Product/ProductAction';

export default function ShopProductHook() {
    let limit=3;

    const dispatch=useDispatch();

  //Get Sort Data
  let word , sortWord,sortData,catesString,brandsString,priceFrom,priceTo,priceFromStr,priceToStr;
  const getStorage=()=>{
    if(localStorage.getItem("wordSearch") !=null){
      word=localStorage.getItem("wordSearch")
      
    }
    if(localStorage.getItem("sortWord") !=null){
      sortWord=localStorage.getItem("sortWord")
      
    }
    if(localStorage.getItem("choosenCates")!=null){
      catesString=localStorage.getItem("choosenCates");
    }
    if(localStorage.getItem("choosenBrands")!=null){
      brandsString=localStorage.getItem("choosenBrands");
    }
    if(localStorage.getItem("priceFrom")!=null){
      priceFrom=localStorage.getItem("priceFrom");
    }
    if(localStorage.getItem("priceTo")!=null){
      priceTo=localStorage.getItem("priceTo");
    }
    if(priceFrom <=0 || priceFrom ===""){
      priceFromStr=''
    }else{
      priceFromStr=`&price[gte]=${priceFrom}`
    }
    if(priceTo <=0 || priceTo ===""){
      priceToStr=''
    }else{
      priceToStr=`&price[lte]=${priceTo}`
    }


  }
    const getData=async()=>{

      getStorage();
      sortType();

     await dispatch(getAllProductsWithSearchAction(`sort=${sortData}&limit=${limit}&keyword=${word}&${catesString}&${brandsString}${priceFromStr}${priceToStr}`));
 
    }
    useEffect(()=>{
      getData();
    },[])


  
    const products=useSelector(state=> state.products.allProductSearch);
    let items=[]
    let length='';
    try {
      if(products.data){
        items= products.data;
        length=products.results;
        console.log(items);
 
     }else{
       items=[]
     }
 
    } catch (error) {}

    let pagintate=[]
    try {
     
      if(products.data){
        pagintate= products.paginationResult.numberOfPages;
      
       
      }else{
        pagintate = []
      }
    } catch (error) { }
 
    const onPress=(page)=>{
     getStorage();
      sortType();

      dispatch(getAllProductsWithSearchAction(`sort=${sortData}&limit=${limit}&page=${page}&keyword=${word}&${catesString}&${brandsString}${priceFromStr}${priceToStr}`));
    }

    const sortType=()=>{
      if(sortWord==''){
        sortData='';
      }else if(sortWord=="best"){
        sortData="sold"
      }else if(sortWord=="rate"){
        sortData="ratingsQuantity"
      }else if(sortWord=="priceUP"){
        sortData="-price"
      }else if(sortWord=="priceDown"){
        sortData="+price"
      }
    }
    return [items,pagintate,length,onPress,getData]
}
