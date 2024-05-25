import React from 'react'
import UserSidebar from '../../../Components/JS/User/UserSidebar'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/UserPage.css'
import UserEditAddress from '../../../Components/JS/User/Address/UserEditAddress'
export default function UserEditAddressPage() {
  return (
    <div className='userPage'>
    <div className='container'>
        <div className='userPage_items'>
            <UserSidebar />
            <div className='userPage_item'>
                <SectionTitle title="Edit Address" />
                <UserEditAddress />
            </div>
        </div>

    </div>
</div>
  )
}
