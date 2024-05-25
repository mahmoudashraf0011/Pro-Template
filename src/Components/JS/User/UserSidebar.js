import React from 'react'
import '../../Styles/UserSidebar.css'
import { Link } from 'react-router-dom'
export default function UserSidebar() {
  return (
    <div className='usersidebar'>
      <ul>
        <li><Link to="/user/allorders">Orders management</Link></li>
        <li><Link to="/user/favourite">Favorites List</Link></li>
        <li><Link to="/user/address">Personal Addresses</Link></li>
        <li><Link to="/user/profile">Personal Profile</Link></li>
      </ul>
    </div>
  )
}
