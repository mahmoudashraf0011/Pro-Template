import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminAllorders from '../../../Components/JS/Admin/AllOrders/AdminAllorders'
export default function AdminAllordersPage() {
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Manage all orders" />
                    <AdminAllorders />
                </div>
            </div>
        </div>


    </div>
  )
}
