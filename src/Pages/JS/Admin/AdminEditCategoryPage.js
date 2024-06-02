import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminEditCategory from '../../../Components/JS/Admin/EditCategory/AdminEditCategory'
export default function AdminEditCategoryPage() {
  return (
    <div>
        <div className='AdminPage'>
            <div className='container'>
                <div className='AdminPage_items'>
                    <AdminSidbar />
                    <div className='AdminPage_item'>
                        <SectionTitle title="Edit Product" />
                        <AdminEditCategory />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
