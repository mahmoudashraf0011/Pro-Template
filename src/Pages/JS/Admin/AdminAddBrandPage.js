import React from 'react'
import AdminAddBrand from '../../../Components/JS/Admin/AddBrand/AdminAddBrand'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
export default function AdminAddBrandPage() {
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Add new Brand" />
                    <AdminAddBrand />
                </div>
            </div>
        </div>


    </div>
  )
}
