import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import Notify from '../../Components/JS/Utility/Notify';
import { addSubCategoryAction, getSpecificSubcategoriesAction, updateSubcategoryAction } from '../../redux/actions/Subcategory/subcategoryAction';
export default function EditSubCategoryHook(id) {
      
const dispatch=useDispatch();


  const [name,setName]=useState("");
  const [load,setLoad]=useState(true);
  const [press,setPress]=useState(false);

  useEffect(()=>{
    const run=async()=>{
    await dispatch(getSpecificSubcategoriesAction(id))
    }
 run()
   },[])
   const  res=useSelector(state=>state.subCategory.updateSubcategory);
   const subCat=useSelector(state=> state.subCategory.specificSubcategory);
   let item=[]
   try{
 
     if(subCat.data){
       item=subCat.data

     }else{
       item=[]
     }
   }catch(e){
     console.log("error in line24")
   }


    useEffect(()=>{

      setTimeout(() => {
        if(item){
          setName(item.name) 
      }       
      
      }, 300)
      


    },[item])
  


  const handleChangeName=(e)=>{
    e.persist();
    setName(e.target.value)
  }


  const handleSubmit=async (e)=>{
      e.preventDefault();
    if(name===''){
      Notify("Please Enter SubCategory Name!","warn");
      return ;
    }

        setLoad(true);
        setPress(true)   
        await dispatch(updateSubcategoryAction(id,{
            name:name,
            category:id
        }))
        
          setLoad(false)

  }

  useEffect(()=>{
    if(load===false){
     if(res){
        if(res.status === 200){
          Notify("SubCategory is Updated successfully!","success")
        }else{
          Notify("Failed to updated SubCategory!","error")

        }
     }

          
      setLoad(true)
    }
  },[load])
  return [name,handleSubmit,handleChangeName]
}
