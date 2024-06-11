import React from 'react'
import UserAllOrdersCard from './UserAllOrdersCard'

export default function UserAllOrdersItem({order}) {
  console.log(order);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
  return (
    <div className='UserAllOrdersItem'>
      <h5>Order No. <span>{order.id}</span></h5>
      <p>Created on :  <span>{formatDate(order.createdAt)}</span></p>
      {
        order?order.cartItems.map((item)=>{
          return <UserAllOrdersCard item={item}/>
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
