import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import  Paginate from '../../../Components/JS/Utility/Paginate'
import ViewAllBrandAdminHook from '../../../LogicHooks/Admin/ViewAllBrandAdminHook'
import AdminAllBrand from '../../../Components/JS/Admin/AllBrands/AdminAllBrand'
export default function AdminAllBrandsPage() {
  const [items,pagintate,onPress]=ViewAllBrandAdminHook();
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Manage all Brands"/>
                    <AdminAllBrand  items={items}/>
                </div>
            </div>
            <Paginate pageCount={pagintate} onPress={onPress}/>
        </div>


    </div>
  )
}
