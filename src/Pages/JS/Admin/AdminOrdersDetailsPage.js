import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminOrdersDetails from '../../../Components/JS/Admin/OrderDetails/AdminOrdersDetails'
import AdminOrdersDetailsClient from '../../../Components/JS/Admin/OrderDetails/AdminOrdersDetailsClient'
export default function AdminOrdersDetailsPage() {
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Details of order No. #223141" />
                    <AdminOrdersDetails />
                </div>
            </div>
            <AdminOrdersDetailsClient />
        </div>


    </div>
  )
}
