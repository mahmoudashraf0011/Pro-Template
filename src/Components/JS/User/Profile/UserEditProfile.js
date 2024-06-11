import React from 'react'
import '../../../Styles/User/UserEditProfile.css'
import EditUserDataHook from '../../../../LogicHooks/User/EditUserDataHook'
import { ToastContainer } from 'react-toastify';

export default function UserEditProfile() {
  const [name,mobile,email,onChangeName,onChangeMobile,onChangeEmail,onSubmit]=EditUserDataHook();
  return (
    <div className='UserEditProfile'>
        <form className='UserEditProfile_form'>
            <input type='text' className='UserEditProfile_name common' value={name} onChange={onChangeName}/>
            <input type='number' className='UserEditProfile_mobile common' value={mobile}  onChange={onChangeMobile}/>           
            <input type="email" className='UserEditProfile_email common' value={email} onChange={onChangeEmail}/>
            <button className='UserEditProfile_submit' onClick={onSubmit}>Save Modifications</button>
        </form>
        <ToastContainer />
    </div>
  )
}
