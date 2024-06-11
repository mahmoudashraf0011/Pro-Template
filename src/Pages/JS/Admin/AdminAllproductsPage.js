import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import AdminAllproducts from '../../../Components/JS/Admin/AllProducts/AdminAllproducts'
import '../../Styles/AdminPage.css'
import Paginate from '../../../Components/JS/Utility/Paginate'
import ViewAllProductsAdminHook from '../../../LogicHooks/Admin/ViewAllProductsAdminHook'


export default function AdminAllproductsPage() {
  const [items,pagintate,onPress]=ViewAllProductsAdminHook();
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Manage all products" />
                    <AdminAllproducts products={items}/>
                </div>
            </div>
            <Paginate pageCount={pagintate} onPress={onPress} />
        </div>


    </div>
  )
}
