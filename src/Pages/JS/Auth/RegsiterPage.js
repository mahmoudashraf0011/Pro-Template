import React from 'react'
import '../../Styles/Auth.css'
import { Link } from 'react-router-dom';
import RegisterHook from '../../../LogicHooks/Auth/RegisterHook';
import { ToastContainer } from 'react-toastify';

export default function RegsiterPage() {
  const [name,email,pass,confirmPass,phone,onChangeName,onChangeEmail,onChangePass,onChangePassConfirm,onChangePhone,onSubmit]=RegisterHook();
  return (
    <div className='reg auth'> 
        <h2 className='regTitle'>sign in</h2>
        <form className='regForm'>
            <input className='regForm_username' type='text' placeholder='Enter Username...' onChange={onChangeName} value={name}/>
            <input className='regForm_email' type='email' placeholder='Enter Email...' onChange={onChangeEmail} value={email}/>
            <input className='regForm_pass' type='password' placeholder='Enter Password...' onChange={onChangePass} value={pass}/>
            <input className='regForm_confirmPass' type='password' placeholder='Confirm Password...' onChange={onChangePassConfirm} value={confirmPass}/>
            <input className='regForm_phone' type='phone' placeholder='Enter Mobile Number...'onChange={onChangePhone} value={phone}/>
            <button className='regForm_btn'  type='submit' onClick={onSubmit}>register</button>
        </form>
        <p className='regHint'>login Now : <Link to="/login">Login</Link></p>
        <ToastContainer />
    </div>
  )
}
