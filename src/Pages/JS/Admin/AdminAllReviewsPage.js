import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminAllCategorry from '../../../Components/JS/Admin/AllCategory/AdminAllCategorry'
import  Paginate from '../../../Components/JS/Utility/Paginate'
import ViewAllCategoriesAdminHook from '../../../LogicHooks/Admin/ViewAllCategoriesAdminHook'
import AdminAllReviews from '../../../Components/JS/Admin/AllReviews/AdminAllReviews'
import ViewAllReviewsHook from '../../../LogicHooks/Review/ViewAllReviewsHook'
export default function AdminAllReviewsPage() {
  const  [items,pagintate,onPress]=ViewAllReviewsHook();

  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Manage all Reviews"/>
                    <AdminAllReviews items={items}/>
                </div>
            </div>
            <Paginate pageCount={pagintate} onPress={onPress}/>
        </div>


    </div>
  )
}
