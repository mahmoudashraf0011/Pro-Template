import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import AdminOrdersDetails from '../../../Components/JS/Admin/OrderDetails/AdminOrdersDetails'
import AdminOrdersDetailsClient from '../../../Components/JS/Admin/OrderDetails/AdminOrdersDetailsClient'
import ViewSpecificOrderHook from '../../../LogicHooks/Admin/ViewSpecificOrderHook'
import { useParams } from 'react-router-dom'
export default function AdminOrdersDetailsPage() {
  const {id}=useParams();
  const [order,orderData]=ViewSpecificOrderHook(id);
  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                  <AdminSidbar />
                <div className='AdminPage_item'>
                  <SectionTitle title={`Details of order No. #${order.id}`}/>
                  <div className='AdminPage_details'>
                      <AdminOrdersDetails order={order} orderData={orderData}/>
                  </div>
                  <AdminOrdersDetailsClient  order={order} />  
                </div>
             
            </div>
       
        </div>


    </div>
  )
}
