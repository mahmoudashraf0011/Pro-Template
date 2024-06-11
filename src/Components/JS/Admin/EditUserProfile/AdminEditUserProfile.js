import React from 'react'
import { ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom';
import AdminEditUserProfileHook from '../../../../LogicHooks/Admin/AdminEditUserProfileHook';

export default function AdminEditUserProfile() {
  const {id}=useParams();
  const [name,mobile,email,onChangeName,onChangeMobile,onChangeEmail,onSubmit]=AdminEditUserProfileHook(id);

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
