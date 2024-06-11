import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {allCategoryAction,getPagesAction} from '../../redux/actions/Category/allCategoryAction'

export default function AllCatrgoryPageHook() {
  const dispatch=useDispatch();
  useEffect( ()=>{
    const run =async ()=>{
      await dispatch(allCategoryAction(8));

    }
    run();
  },[])
  
  const category=useSelector(state=> state.allCategory.category);
  const load=useSelector(state=> state.allCategory.loading);

  let cates=[];
  try {
    if(category.data){
      cates=category.data;
    }
  } catch (error) {}

  let pageCount=0;

  try {
    if(category.paginationResult){
      pageCount=category.paginationResult.numberOfPages;
    }
  } catch (error) {}


const getPage= (count)=>{
  dispatch(getPagesAction(count))
}
  
return [category,load,pageCount,getPage,cates]
}
