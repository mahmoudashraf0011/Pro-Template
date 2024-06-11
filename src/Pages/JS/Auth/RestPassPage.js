import React from 'react'
import '../../Styles/Auth.css'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RestPassHook from '../../../LogicHooks/Auth/RestPassHook';
export default function RestPassPage() {
  const [newPass,ConfirmPass,onChangePass,onChangeConfirmPass,onSubmit]=RestPassHook();
  return (
    <div className='login auth'> 
        <h2 className='loginTitle'>Enter code sent to mail</h2>
        <form className='loginForm'>
            <input className='loginForm_NewPass' type='password' placeholder='Enter New Password' value={newPass} onChange={onChangePass}/>
            <input className='loginForm_confirmNewPass' type='password' placeholder='Confirm New Password' value={ConfirmPass} onChange={onChangeConfirmPass}/>
            <button className='loginForm_btn'  type='submit' onClick={onSubmit}>Submit</button>
        </form>
        <ToastContainer />
    </div>
  )
}
//m2@gmail.com