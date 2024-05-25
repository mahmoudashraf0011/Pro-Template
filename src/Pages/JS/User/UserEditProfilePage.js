import React from 'react'
import UserSidebar from '../../../Components/JS/User/UserSidebar'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/UserPage.css'
import UserEditProfile from '../../../Components/JS/User/Profile/UserEditProfile'

export default function UserEditProfilePage() {
  return (
    <div className='userPage'>
    <div className='container'>
        <div className='userPage_items'>
            <UserSidebar />
            <div className='userPage_item'>
                <SectionTitle title="Edit Profile" />
                <UserEditProfile />
            </div>
        </div>

    </div>
</div>
  )
}
