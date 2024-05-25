import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminAddSubcategory from '../../../Components/JS/Admin/AddSubCategory/AdminAddSubcategory'
export default function AdminAddSubcategoryPage() {
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Add new Sub Category" />
                    <AdminAddSubcategory />
                </div>
            </div>
        </div>
    </div>
  )
}
