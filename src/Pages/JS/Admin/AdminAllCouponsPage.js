import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/AdminPage.css'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import AdminAllCoupons from '../../../Components/JS/Admin/AllCoupons/AdminAllCoupons'
import Paginate from '../../../Components/JS/Utility/Paginate'
import ViewAllCouponsHook from '../../../LogicHooks/Admin/ViewAllCouponsHook'


export default function AdminAllCouponsPage() {
    const [items,pagintate,onPress]=ViewAllCouponsHook();
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Manage all Coupons"/>
                    <AdminAllCoupons items={items}/>
                </div>
            </div>
           {pagintate > 1? <Paginate pageCount={pagintate} onPress={onPress}/>:""}
        </div>


    </div>
  )
}
