import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {allCategoryAction} from '../../redux/actions/Category/allCategoryAction'

export default function HomeCategoryHook() {
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(allCategoryAction());
  
    },[])
  
    const category=useSelector(state=> state.allCategory.category);
    const load=useSelector(state=> state.allCategory.loading);
 return [category,load]
}
