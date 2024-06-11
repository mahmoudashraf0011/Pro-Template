import React from 'react'
import '../../../Styles/User/UserAddress.css'
import UserAddressCard from './UserAddressCard'
import { Link } from 'react-router-dom'

export default function UserAddress({items}) {
  return (
    <div className='UserAddress'>
            {
              items?items.length > 0?(
                items.map((item,i)=>{
                  return <UserAddressCard item={item} key={i}/>
               })
              ):<h2 className='noResult'>There are no addresses</h2>:""
            }
      <Link to="/user/add-address" className='UserAddress_addAddress'>Create new address</Link>
    </div>
  )
}
