import React from 'react'
import './../../../Styles/Admin/AdminAddCategory.css'
import { ToastContainer, toast } from 'react-toastify';
import Loding from '../../../../Components/JS/Utility/Loading';
import AddCategoryHook from '../../../../LogicHooks/Admin/AddCategoryHook';

export default function AdminAddCategory() {
 const [name,img,press,load,handleIMGChange,handleNameChange,handleSubmit]=AddCategoryHook();

  return (
    <div className='adminAddcategory'>
      <form className='addcategoryForm'>
        <div className='categoryImgContainer'>
            <h3>Add Category Image</h3>
            <label for='categoryIMG'><img src={img} alt='category' /></label>
            <input type='file' id='categoryIMG' hidden onChange={handleIMGChange}/>
        </div>
        <input type='text' className='categoryName' placeholder='Add Category Name...' onChange={handleNameChange} value={name} />
        <button className='addcategorySubmit' onClick={handleSubmit}>Save Modifications</button>
      </form>
      {
        press?load?<Loding />:<h2>Finish</h2>:null
      }
      <ToastContainer />
    </div>
    
  )
}
