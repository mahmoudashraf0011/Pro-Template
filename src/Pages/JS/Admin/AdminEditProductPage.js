import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminEditProduct from '../../../Components/JS/Admin/EditProduct/AdminEditProduct'
export default function AdminEditProductPage() {
  return (
    <div>
        <div className='AdminPage'>
            <div className='container'>
                <div className='AdminPage_items'>
                    <AdminSidbar />
                    <div className='AdminPage_item'>
                        <SectionTitle title="Edit Product" />
                        <AdminEditProduct />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
