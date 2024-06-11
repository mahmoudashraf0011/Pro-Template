import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminAddCategory from '../../../Components/JS/Admin/AddCategory/AdminAddCategory'
import AdminEditUserProfile from '../../../Components/JS/Admin/EditUserProfile/AdminEditUserProfile'
export default function AdminEditUserProfilePage() {
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title={`Edit User Profile`} />
                    <AdminEditUserProfile />
                </div>
            </div>
        </div>


    </div>
  )
}
