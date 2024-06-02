import React from 'react'
import './../../../Styles/Admin/AdminAddCategory.css'
import { ToastContainer, toast } from 'react-toastify';
import Loding from '../../../../Components/JS/Utility/Loading';
import EditCategoryHook from '../../../../LogicHooks/Admin/EditCategoryHook';
import { useParams } from 'react-router-dom';

export default function AdminEditCategory() {
    const {id}=useParams();
    const [name,img,press,load,handleIMGChange,handleNameChange,handleSubmit]=EditCategoryHook(id);
  return (
    <div className='adminAddcategory'>
      <h2 >Edit Category # {name}</h2>
    <form className='addcategoryForm'>
      <div className='categoryImgContainer'>
          <h3>Add Category Image</h3>
          <label for='categoryIMG'><img src={img} alt='category' /></label>
          <input type='file' id='categoryIMG' hidden onChange={handleIMGChange}/>
      </div>
      <input type='text' className='categoryName' placeholder='Add Category Name...' onChange={handleNameChange} value={name} />
      <button className='addcategorySubmit' onClick={handleSubmit}>Update Modifications</button>
    </form>

    <ToastContainer />
  </div>
  )
}
