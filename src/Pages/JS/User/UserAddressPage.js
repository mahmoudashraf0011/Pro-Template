import React from 'react'
import UserSidebar from '../../../Components/JS/User/UserSidebar'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/UserPage.css'
import UserAddress from '../../../Components/JS/User/Address/UserAddress'
import ViewAllAddressesHook from '../../../LogicHooks/User/ViewAllAddressesHook'


export default function UserAddressPage() {
  const [items]=ViewAllAddressesHook();

  return (
    <div className='userPage'>
        <div className='container'>
            <div className='userPage_items'>
                <UserSidebar />
                <div className='userPage_item'>
                    <SectionTitle title="Address List" />
                    <UserAddress items={items} />
                </div>
            </div>

        </div>


    </div>
  )
}
