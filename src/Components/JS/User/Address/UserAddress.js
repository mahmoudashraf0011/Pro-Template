import React from 'react'
import '../../../Styles/User/UserAddress.css'
import UserAddressCard from './UserAddressCard'
import { Link } from 'react-router-dom'

export default function UserAddress() {
  return (
    <div className='UserAddress'>
      <UserAddressCard />
      <UserAddressCard />
      <Link to="/user/add-address" className='UserAddress_addAddress'>add new address</Link>
    </div>
  )
}
