import React from 'react'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import AdminAddCoupon from '../../../Components/JS/Admin/AddCoupon/AdminAddCoupon'
import SectionTitle from '../../../Components/JS/Utility/SectionTitle'
import { ToastContainer } from 'react-bootstrap'

const AdminAddCouponPage = () => {

  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Add new Coupon" />
                    <AdminAddCoupon />
                </div>
            </div>
        </div>

    </div>
  )
}

export default AdminAddCouponPage
