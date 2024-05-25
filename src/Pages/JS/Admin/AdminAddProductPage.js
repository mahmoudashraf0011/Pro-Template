import React from 'react'
import AdminAddProduct from '../../../Components/JS/Admin/AddProduct/AdminAddProduct'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
export default function AdminAddProductPage() {
    
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Add new Product" />
                    <AdminAddProduct />
                </div>
            </div>
        </div>
    </div>
  )
}
