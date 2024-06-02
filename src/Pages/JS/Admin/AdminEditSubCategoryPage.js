import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminEditSubCategory from '../../../Components/JS/Admin/EditSubCate/AdminEditSubCategory'
export default function AdminEditSubCategoryPage() {
  return (
    <div>
        <div className='AdminPage'>
            <div className='container'>
                <div className='AdminPage_items'>
                    <AdminSidbar />
                    <div className='AdminPage_item'>
                        <SectionTitle title="Edit Product" />
                        <AdminEditSubCategory />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
