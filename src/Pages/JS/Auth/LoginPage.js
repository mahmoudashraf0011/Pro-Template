import React from 'react'
import '../../Styles/Auth.css'
import { Link } from 'react-router-dom';
import LoginHook from '../../../LogicHooks/Auth/LoginHook';
import { ToastContainer } from 'react-toastify';
export default function LoginPage() {
  const [email,pass,onChangeEmail,onChangePass,onSubmit]=LoginHook();
  return (
    <div className='login auth'> 
        <h2 className='loginTitle'>sign in</h2>
        <form className='loginForm'>
            <input className='loginForm_username' type='email' placeholder='Enter Email Address...' value={email} onChange={onChangeEmail}/>
            <input className='loginForm_pass' type='password' placeholder='Enter Password...' value={pass} onChange={onChangePass}/>
            <button className='loginForm_btn'  type='submit' onClick={onSubmit}>Login</button>
        </form>
        <Link to="/user/forget-password" className='forgetLink'><p>Forgot password?</p></Link>
        <p className='loginHint'>Register Now : <Link to="/register">Register</Link></p>
        <ToastContainer />
    </div>
  )
}
//m2@gmail.com