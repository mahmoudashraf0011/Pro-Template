import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import Notify from '../../Components/JS/Utility/Notify';
import { addSubCategoryAction } from '../../redux/actions/Subcategory/subcategoryAction';
export default function AddSubcategoryHook() {
      
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(allCategoryAction())
})

const category=useSelector(state=>state.allCategory.category);
const  res=useSelector(state=>state.subCategory.subcategory);
  const [ID,setID]=useState("0");
  const [name,setName]=useState("");
  const [load,setLoad]=useState(true);
  const [press,setPress]=useState(false);
  

  const handleChangeName=(e)=>{
    e.persist();
    setName(e.target.value)
  }

  const handleChangeSelect=(e)=>{
    setID(e.target.value)
  }
  const handleSubmit=async (e)=>{
      e.preventDefault();
    if(name===''){
      Notify("Please Enter SubCategory Name!","warn");
      return ;
    }
    if(ID=="0"){
      Notify("Please Choose the Main Category!","warn");
      return ;
    }

    setLoad(true)
    setPress(true)
    await dispatch(addSubCategoryAction({
      
        name:name,
        category:ID
     
    }))
    setLoad(false)
  }

  useEffect(()=>{
    if(load===false){
      setName("");
      setID("0");
      setTimeout(() => {
        setPress(false)
       
      }, 3000);
      if(res.status === 201){
        Notify("The SubCategory is added successfully!","success")
      }else{
        Notify("Failed to add SubCategory!","error")

      }
      setLoad(true)
    }
  },[load])
  return [name,ID,category,load,press,handleSubmit,handleChangeName,handleChangeSelect]
}
