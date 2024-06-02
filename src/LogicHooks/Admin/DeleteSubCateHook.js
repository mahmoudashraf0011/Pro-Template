import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { deleteSubcategoryAction } from '../../redux/actions/Subcategory/subcategoryAction';

export default function DeleteSubCateHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.subCategory.deleteSubcategory)
    const handelDelete=()=>{
    dispatch(deleteSubcategoryAction(id));
    setShow(false)
    
      setTimeout(() => {
        window.location.reload();
      }, 6200);

     setTimeout(() => {
      Notify("SubCategory is Deleted successfully!","success")
     }, 500);
}
  return [show,handelDelete,handleClose,handleShow]

}
