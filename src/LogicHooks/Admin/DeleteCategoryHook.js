import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { deleteCategoryAction } from '../../redux/actions/Category/allCategoryAction';

export default function DeleteCategoryHook(id) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const res=useSelector(state=>state.allCategory.deleteCategory)
    const handelDelete=()=>{
    dispatch(deleteCategoryAction(id));
    setShow(false)
    
      setTimeout(() => {
        window.location.reload();
      }, 6200);

     setTimeout(() => {
      Notify("Category is Deleted successfully!","success")
     }, 500);
}
  return [show,handelDelete,handleClose,handleShow]

}
