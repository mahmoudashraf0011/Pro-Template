import React from 'react'
import UserSidebar from '../../../Components/JS/User/UserSidebar'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/UserPage.css'
import UserAllOrders from '../../../Components/JS/User/AllOrders/UserAllOrders'
export default function UserAllOrdersPage() {
  let name;
  if(localStorage.getItem("user")){
    name=JSON.parse(localStorage.getItem("user")).name
  }
  return (
    <div className='userPage'>
        <div className='container'>
            <div className='userPage_items'>
                <UserSidebar />
                <div className='userPage_item'>
                    <SectionTitle title={`Welcome ${name}`} />
                    <UserAllOrders />
                </div>
            </div>
        </div>


    </div>
  )
}
