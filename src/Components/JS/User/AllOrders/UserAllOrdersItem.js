import React from 'react'
import UserAllOrdersCard from './UserAllOrdersCard'

export default function UserAllOrdersItem() {
  return (
    <div className='UserAllOrdersItem'>
      <h5>Order No. <span>#223412</span></h5>
      <UserAllOrdersCard />
      <UserAllOrdersCard />
      <div className='UserAllOrdersItem_down'>
        <p className='UserAllOrdersItem_status'>Status : <span>Underway</span></p>
        <p className='UserAllOrdersItem_price'>$ <span>40033</span></p>
      </div>
    </div>
  )
}
