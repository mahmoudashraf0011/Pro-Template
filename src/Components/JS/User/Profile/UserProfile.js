import React from 'react'
import { Link } from 'react-router-dom'
import '../../../Styles/User/UserProfile.css'

export default function UserProfile() {
  return (
    <div className='UserProfile'>
        <div className='UserProfile_card'>
            <div className='UserProfile_Upcard'>
                <p className='UserProfile_name'>Name : <span>Ali Sayed</span></p>
                <Link to="/user/edit-profile"><i class="fa-solid fa-pen-to-square"></i> Edit</Link>
            </div>
            <p className='UserProfile_mobile'>Mobile No. : <span>01015432313</span></p>
            <p className='UserProfile_Email'>Email : <span>Ali234@gmail.com</span></p>
        </div>
        <form className='UserProfile_changePass'>
            <h4 className='UserProfile_changePass_header'>Change Password</h4>
            <input type='password' placeholder='Enter Old Password!' className='UserProfile_changePass_old common'/>
            <input type='password' placeholder='Enter New Password!' className='UserProfile_changePass_new common'/>
            <button className='UserProfile_changePass_submit'>Save Password</button>
        </form>
    </div>
  )
}
