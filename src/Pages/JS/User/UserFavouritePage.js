import React from 'react'
import UserSidebar from '../../../Components/JS/User/UserSidebar'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import '../../Styles/UserPage.css'
import UserFavourite from '../../../Components/JS/User/Favourite/UserFavourite'
import Paginate from '../../../Components/JS/Utility/Paginate'

export default function UserFavouritePage() {
  return (
    <div className='userPage'>
        <div className='container'>
            <div className='userPage_items'>
                <UserSidebar />
                <div className='userPage_item'>
                    <SectionTitle title="Favourite Products" />
                    <UserFavourite />
                </div>
            </div>
       
        </div>


    </div>
  )
}
