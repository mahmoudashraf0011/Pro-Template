import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import { getAllSubCAtegoryForCategoryAction } from '../../redux/actions/Subcategory/subcategoryAction';

export default function FilterByNavHook(id) {
    const dispatch=useDispatch();
    const [load,setLoad]=useState(true);
    const [loadC,setLoadC]=useState(true);
    const [items,setItmes]=useState([]);
    const [subcates,setSubCates]=useState([]);

    useEffect( ()=>{
        const run =async ()=>{
            setLoad(true);
          await dispatch(allCategoryAction());
            setLoad(false)
        }
        run();
      },[])
      const categories=useSelector(state=> state.allCategory.category);
      useEffect( ()=>{
        if(load==false){
            if(categories){
                setItmes(categories.data)
            }
            setLoad(true)
        }
      },[load])

      const handleSubCat=async(id)=>{
        setLoadC(true);
        await dispatch(  getAllSubCAtegoryForCategoryAction(id));
        setLoadC(false)
      }
      const subCate=useSelector(state=>state.subCategory.subcategory)
    
      useEffect( ()=>{
        if(loadC==false){
            if(subCate){
                setSubCates(subCate.data)
            }
            setLoadC(true)
        }
      },[loadC])
      return [items,subcates,handleSubCat]
    
}
