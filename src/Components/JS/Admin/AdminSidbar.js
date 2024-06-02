import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Admin/adminSidbar.css'

export default function AdminSidbar() {
  return (
    <div className='adminsidebar'>
      <ul>
        <li><Link to="/admin/allorders">Orders management</Link></li>
        <li><Link to="/admin/allproducts">products management</Link></li>
        <li><Link to="/admin/allcategories">categories management</Link></li>
        <li><Link to="/admin/allbrands">brands management</Link></li>
        <li><Link to="/admin/allsubcategories">subcategories management</Link></li>
        <li><Link to="/admin/add-brand">add brand</Link></li>
        <li><Link to="/admin/add-category">add category</Link></li>
        <li><Link to="/admin/add-subcategory">add subcategory</Link></li>
        <li><Link to="/admin/add-product">add product</Link></li>
       
      </ul>
    </div>
  )
}
