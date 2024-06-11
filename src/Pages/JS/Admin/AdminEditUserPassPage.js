import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminAddCategory from '../../../Components/JS/Admin/AddCategory/AdminAddCategory'
import AdminEditUserProfile from '../../../Components/JS/Admin/EditUserProfile/AdminEditUserProfile'
import AdminChangeUserPass from '../../../Components/JS/Admin/ChangeUserPass/AdminChangeUserPass'
export default function AdminEditUserPassPage() {
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title={`Change User Password`} />
                    <AdminChangeUserPass />
                </div>
            </div>
        </div>


    </div>
  )
}
