
import React from 'react'
import '../../Styles/Auth.css'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ForgetPassHook from '../../../LogicHooks/Auth/ForgetPassHook';
export default function ForgetPassPage() {
  const [email,onChangeEmail,onSubmit]=ForgetPassHook();
  return (
    <div className='login auth'> 
        <h2 className='loginTitle'>Forget Password</h2>
        <form className='loginForm'>
            <input className='loginForm_username' type='email' placeholder='Enter Email Address...' value={email} onChange={onChangeEmail}/>
            <button className='loginForm_btn'  type='submit' onClick={onSubmit}>Send Code</button>
        </form>
        <ToastContainer />
    </div>
  )
}
//m2@gmail.com