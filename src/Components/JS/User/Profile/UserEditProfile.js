import React from 'react'
import '../../../Styles/User/UserEditProfile.css'

export default function UserEditProfile() {
  return (
    <div className='UserEditProfile'>
        <form className='UserEditProfile_form'>
            <input type='text' className='UserEditProfile_name common' value="Ali Sayed"/>
            <input type='number' className='UserEditProfile_mobile common' value="01034564572"/>           
            <input type="email" className='UserEditProfile_email common' value="ali232@gmail.com"/>
            <button className='UserEditProfile_submit'>Save Edited Profile</button>
        </form>
    </div>
  )
}
