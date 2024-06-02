import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {allBrandAction,getPagesBrandAction} from '../../redux/actions/Brand/allBrandAction'

export default function AllBrandPageHook() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(allBrandAction(10));
  },[])
  
  const brand=useSelector(state=> state.allBrand.brand);
  const load=useSelector(state=> state.allBrand.loading);

  let pageCount=0;
  if(brand.paginationResult){
    pageCount=brand.paginationResult.numberOfPages;
  }

const getPage= (count)=>{
  dispatch(getPagesBrandAction(count))
}
  
return [brand,load,pageCount,getPage]
}
