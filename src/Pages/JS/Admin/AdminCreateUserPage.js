import React from 'react'
import { ToastContainer } from 'react-toastify'
import AdminCreateUser from '../../../Components/JS/Admin/CreateUser/AdminCreateUser'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import SectionTitle from '../../../Components/JS/Utility/SectionTitle'


export default function AdminCreateUserPage() {

  return (
    <div>
        <div className='AdminPage'>
            <div className='container'>
                <div className='AdminPage_items'>
                    <AdminSidbar />
                    <div className='AdminPage_item'>
                        <SectionTitle title="Change User Password" />
                        <AdminCreateUser />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
