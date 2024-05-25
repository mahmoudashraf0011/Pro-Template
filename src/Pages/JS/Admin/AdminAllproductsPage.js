import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import AdminAllproducts from '../../../Components/JS/Admin/AllProducts/AdminAllproducts'
import '../../Styles/AdminPage.css'
import Paginate from '../../../Components/JS/Utility/Paginate'

export default function AdminAllproductsPage() {
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Manage all products" />
                    <AdminAllproducts />
                </div>
            </div>
            <Paginate />
        </div>


    </div>
  )
}
