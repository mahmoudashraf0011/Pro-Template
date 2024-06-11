import React from 'react'
import CartItem from '../../Cart/CartItem'

import '../../../Styles/Admin/AdminOrderDetails.css'
import SectionTitle from '../../Utility/SectionTitle'
import { useParams } from 'react-router-dom'
import ViewSpecificOrderHook from '../../../../LogicHooks/Admin/ViewSpecificOrderHook'
import AdminOrderDetailsCard from './AdminOrderDetailsCard'
export default function AdminOrdersDetails({order,orderData}) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
  return (
    <div className='UserAllOrdersItem'>
    <p>Created on :  <span>{formatDate(order.createdAt)}</span></p>
    {
      orderData?orderData.map((item)=>{
        return <AdminOrderDetailsCard item={item}/>
      }):""
    }  
    <div className='UserAllOrdersItem_down'>
      <div className='status'>
        <p className='Deliver_status'>Deliver Status : <span>{order.isDelivered == false?"Not Done":"Done"}</span></p>
        <p className='Pay_status'> Payment Status : <span>{order.isPaid == false?"Not Done":"Done"}</span></p>
        <p className='payWay_status'>Payment Method : <span>{order.paymentMethodType}</span></p>
      </div>

      <p className='UserAllOrdersItem_price'>$ <span>{order.totalOrderPrice}</span></p>
    </div>
  </div>
  )
}
