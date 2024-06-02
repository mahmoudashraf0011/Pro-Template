import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminEditBrand from '../../../Components/JS/Admin/EditBrand/AdminEditBrand'
export default function AdminEditBrandPage() {
  return (
    <div>
        <div className='AdminPage'>
            <div className='container'>
                <div className='AdminPage_items'>
                    <AdminSidbar />
                    <div className='AdminPage_item'>
                        <SectionTitle title="Edit Product" />
                        <AdminEditBrand />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
