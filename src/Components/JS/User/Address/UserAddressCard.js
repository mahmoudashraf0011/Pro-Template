import React from 'react'
import { Link } from 'react-router-dom'

export default function UserAddressCard() {
  return (
    <div className='UserAddressCard'>
      <div className='UserAddressCard_up'>
        <div className='UserAddressCard_title'>Home</div>
        <ul className='UserAddressCard_btns'>
            <li><Link to="/user/edit-address"><i class="fa-regular fa-pen-to-square"></i> Edit</Link></li>
            <li><i class="fa-regular fa-trash-can"></i> Delete</li>
        </ul>
      </div>
      <p className='UserAddressCard_desc'>Cairo, Nasr City, 90th Street, Building 12</p>
      <p className='UserAddressCard_mobile'>Mobile Number: <span>01035835947</span></p>
      
    </div>
  )
}
