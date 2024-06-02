import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getLikeProductAction, getSpecificProductAction } from '../../redux/actions/Product/ProductAction';
import { getSpecificCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import { getSpecificBrandAction } from '../../redux/actions/Brand/allBrandAction';

export default function ProductDetailsHook(id) {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getSpecificProductAction(id))
  },[])
  const product=useSelector(state=>state.products.specificProduct)

  let item=[];
  if(product.data){
    item=product.data
  }else{
    item = []
  }

  let imgs=[];
 
  if(product.data){
    imgs= item.images.map((img)=>{
          return{
              original: img,
              thumbnail: img
          }

      
  })
  }else{
    imgs=[]
  }

  
  useEffect(()=>{
    if(product.data){
      if(item.category){
        dispatch(getSpecificCategoryAction(item.category))
      }
  
      if(item.brand){
        dispatch(getSpecificBrandAction(item.brand))
      }

      if(item.category){
        dispatch(getLikeProductAction(item.category))
      }

    }

  },[product.data])

  const category=useSelector(state=>state.allCategory.specificCategory);
  const brandItem=useSelector(state=>state.allBrand.specificBrand);
  const likeProducts=useSelector(state=>state.products.likeProduct);

  let cat=[];
  if(category.data){
    cat =category.data.name
  }else{
    cat = []
  }

  let brand=[];
  if(brandItem.data){
    brand =brandItem.data.name
  }else{
    brand = []
  }

 // get all recommended products
  let likes=[];
  if(likeProducts.data){
    likes =likeProducts.data.slice(0,4)
  }else{
    likes = []
  }




  
  return [item , imgs,cat,brand,likes] 
}
