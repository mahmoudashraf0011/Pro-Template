import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import  Paginate from '../../../Components/JS/Utility/Paginate'
import ViewAllSubcateAdminHook from '../../../LogicHooks/Admin/ViewAllSubcateAdminHook'
import AdminAllSubCate from '../../../Components/JS/Admin/AllSubcategory/AdminAllSubCate'
export default function AdminAllSubcatePage() {
  const [items,pagintate,onPress]=ViewAllSubcateAdminHook();
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Manage all SubCategories"/>
                    <AdminAllSubCate  items={items}/>
                </div>
            </div>
            <Paginate pageCount={pagintate} onPress={onPress}/>
        </div>


    </div>
  )
}
