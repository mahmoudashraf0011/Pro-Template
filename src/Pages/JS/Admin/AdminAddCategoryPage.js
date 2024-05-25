import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminAddCategory from '../../../Components/JS/Admin/AddCategory/AdminAddCategory'
export default function AdminAddCategoryPage() {
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Add new Category" />
                    <AdminAddCategory />
                </div>
            </div>
        </div>


    </div>
  )
}
