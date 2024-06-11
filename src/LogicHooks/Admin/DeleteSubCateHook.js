import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { deleteSubcategoryAction } from '../../redux/actions/Subcategory/subcategoryAction';
import { useNavigate } from 'react-router-dom';

export default function DeleteSubCateHook(id) {
    const dispatch=useDispatch();
    const [load, setLoad] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const res=useSelector(state=>state.subCategory.deleteSubcategory)
    const handelDelete=async()=>{
      setLoad(true)
      await  dispatch(deleteSubcategoryAction(id));
      setLoad(false)
      setShow(false)

}
useEffect(()=>{
  if(load==false){
    if(res){
        console.log(res);
        if(res.status === 204){           
            Notify("SubCategory is Deleted successfully!","success")
            setTimeout(() => {
            window.location.reload();
           }, 2000);
        }else{
            Notify("There are problem!","error")

        }
    }        
    setLoad(true)
 
}
},[load])
  return [show,handelDelete,handleClose,handleShow]

}
