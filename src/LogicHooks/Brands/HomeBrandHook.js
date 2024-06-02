import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {allBrandAction} from '../../redux/actions/Brand/allBrandAction'

export default function HomeBrandHook() {
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(allBrandAction());
  
    },[])
  
    const brand=useSelector(state=> state.allBrand.brand);
    const load=useSelector(state=> state.allBrand.loading);
 return [brand,load]
}
