import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {allCategoryAction,getPagesAction} from '../../redux/actions/Category/allCategoryAction'

export default function AllCatrgoryPageHook() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(allCategoryAction(8));
  },[])
  
  const category=useSelector(state=> state.allCategory.category);
  const load=useSelector(state=> state.allCategory.loading);

  let pageCount=0;
  if(category.paginationResult){
    pageCount=category.paginationResult.numberOfPages;
  }

const getPage= (count)=>{
  dispatch(getPagesAction(count))
}
  
return [category,load,pageCount,getPage]
}
