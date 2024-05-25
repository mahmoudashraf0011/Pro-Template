import React from 'react'
import './../../../Styles/Admin/AdminAddCategory.css'
import av from './../../../../images/other/avatar.png'

export default function AdminAddCategory() {
  return (
    <div className='adminAddcategory'>
      <form className='addcategoryForm'>
        <div className='categoryImgContainer'>
            <label for='categoryIMG'>Add category Image : </label>
            <input type='file' id='categoryIMG' />
          <img src={av} alt='category' />
        </div>
        <input type='text' className='categoryName' placeholder='Add Category Name...' />
        <button className='addcategorySubmit'>Save Modifications</button>
      </form>
    </div>
  )
}
