import React from 'react'
import SectionTitle from '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import AdminEditCoupon from '../../../Components/JS/Admin/EditCoupon/AdminEditCoupon'

export default function AdminEditCouponPage() {
  return (
    <div>
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Edit Coupon" />
                    <AdminEditCoupon />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
