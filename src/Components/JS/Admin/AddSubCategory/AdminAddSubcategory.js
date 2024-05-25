import React from 'react'
import '../../../Styles/Admin/AdminAddSubcategory.css'

export default function AdminAddSubcategory() {
  return (
    <div>
      <form className='AdminAddSubcategoryForm'>
        <input type='text' placeholder='Subcategory Name' className='subcategory_title' />
        <select name="cates" id="categories">
            <option value="first">First Category</option>
            <option value="second">Second Category</option>
            <option value="third">Third Category</option>
            <option value="fourth">Fourth Category</option>
        </select>
        <button className='subCatagorySubmit'>Save modifications</button>
      </form>
    </div>
  )
}
