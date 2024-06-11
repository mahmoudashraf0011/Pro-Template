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

  try {
    if(product.data){
      item=product.data
    }else{
      item = []
    }
  } catch (error) {}


  let imgs=[];
 
  try {
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
  } catch (error) {}


  
  const run = async()=>{
 

  
      if(item.brand){
       await  dispatch(getSpecificBrandAction(item.brand))
      }

      if(item.category){
       await dispatch(getLikeProductAction(item.category))
       await dispatch(getSpecificCategoryAction(item.category))
      }

      if(item.category){
       await dispatch(getSpecificCategoryAction(item.category))
      
      }
    }
  
  useEffect(()=>{
    setTimeout(() => {
      run()
    }, 1000);

  },[item])

  const category=useSelector(state=>state.allCategory.specificCategory);
  const brandItem=useSelector(state=>state.allBrand.specificBrand);
  const likeProducts=useSelector(state=>state.products.likeProduct);

  let cat=[];
  try {
    if(category.data){
      cat =category.data.name

    }else{
      cat = []
    }
  
  } catch (error) {}


  let brand=[];
  try {
    if(brandItem.data){
      brand =brandItem.data.name
    }else{
      brand = []
    }
  } catch (error) {
    
  }



 // get all recommended products
  let likes=[];

try {
  if(likeProducts.data){
    likes =likeProducts.data.slice(0,4)
  }else{
    likes = []
  }

} catch (error) {}


  
  return [item , imgs,cat,brand,likes] 
}
