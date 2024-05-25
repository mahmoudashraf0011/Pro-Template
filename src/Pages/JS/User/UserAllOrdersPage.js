import React from 'react'
import UserSidebar from '../../../Components/JS/User/UserSidebar'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/UserPage.css'
import UserAllOrders from '../../../Components/JS/User/AllOrders/UserAllOrders'
export default function UserAllOrdersPage() {
  return (
    <div className='userPage'>
        <div className='container'>
            <div className='userPage_items'>
                <UserSidebar />
                <div className='userPage_item'>
                    <SectionTitle title="Welcome Mohame Ali" />
                    <UserAllOrders />
                </div>
            </div>
        </div>


    </div>
  )
}
