import React from 'react'
import './../../../Styles/Admin/AdminAddCategory.css'
import { ToastContainer, toast } from 'react-toastify';
import Loding from '../../../../Components/JS/Utility/Loading';
import { useParams } from 'react-router-dom';
import EditSubCategoryHook from '../../../../LogicHooks/Admin/EditSubCategoryHook';

export default function AdminEditCategory() {
    const {id}=useParams();
    const  [name,handleSubmit,handleChangeName]=EditSubCategoryHook(id);
  return (
    <div className='adminAddcategory'>
      <h2 >Edit SubCategory # {name}</h2>
      <form className='AdminAddSubcategoryForm'>
        <input type='text' placeholder='Subcategory Name' className='subcategory_title' onChange={handleChangeName} value={name}/>
        <button className='subCatagorySubmit' onClick={handleSubmit}>Update modifications</button>

      </form>

    <ToastContainer />
  </div>
  )
}
