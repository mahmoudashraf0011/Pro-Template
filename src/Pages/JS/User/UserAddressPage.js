import React from 'react'
import UserSidebar from '../../../Components/JS/User/UserSidebar'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/UserPage.css'
import UserAddress from '../../../Components/JS/User/Address/UserAddress'


export default function UserAddressPage() {
  return (
    <div className='userPage'>
        <div className='container'>
            <div className='userPage_items'>
                <UserSidebar />
                <div className='userPage_item'>
                    <SectionTitle title="Address List" />
                    <UserAddress />
                </div>
            </div>

        </div>


    </div>
  )
}
