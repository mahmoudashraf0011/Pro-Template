import React from 'react'
import UserSidebar from '../../../Components/JS/User/UserSidebar'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/UserPage.css'
import UserAddAddress from '../../../Components/JS/User/Address/UserAddAddress'

export default function UserAddAddressPage() {
  return (
    <div className='userPage'>
    <div className='container'>
        <div className='userPage_items'>
            <UserSidebar />
            <div className='userPage_item'>
                <SectionTitle title="Add New Address" />
                <UserAddAddress />
            </div>
        </div>

    </div>


</div>
  )
}
