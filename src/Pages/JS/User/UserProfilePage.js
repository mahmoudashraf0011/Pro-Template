import React from 'react'
import UserSidebar from '../../../Components/JS/User/UserSidebar'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/UserPage.css'
import UserProfile from '../../../Components/JS/User/Profile/UserProfile'

export default function UserProfilePage() {
  return (
    <div className='userPage'>
    <div className='container'>
        <div className='userPage_items'>
            <UserSidebar />
            <div className='userPage_item'>
                <SectionTitle title="Manage Personal Profile" />
                <UserProfile />
            </div>
        </div>

    </div>


</div>
  )
}
