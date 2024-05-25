import React from 'react'
import '../../Styles/Auth.css'
import { Link } from 'react-router-dom';

export default function RegsiterPage() {
  return (
    <div className='reg auth'> 
        <h2 className='regTitle'>sign in</h2>
        <form className='regForm'>
            <input className='regForm_username' type='text' placeholder='Enter Username...' />
            <input className='regForm_email' type='email' placeholder='Enter Email...' />
            <input className='regForm_pass' type='password' placeholder='Enter Password...' />
            <button className='regForm_btn'  type='submit'>register</button>
        </form>
        <p className='regHint'>login Now : <Link to="/login">Login</Link></p>
    </div>
  )
}
