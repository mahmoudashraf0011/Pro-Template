import React from 'react'
import '../../Styles/Auth.css'
import { Link } from 'react-router-dom';
export default function LoginPage() {
  return (
    <div className='login auth'> 
        <h2 className='loginTitle'>sign in</h2>
        <form className='loginForm'>
            <input className='loginForm_username' type='text' placeholder='Enter Username...' />
            <input className='loginForm_pass' type='text' placeholder='Enter Password...' />
            <button className='loginForm_btn'  type='submit'>Login</button>
        </form>
        <p className='loginHint'>Register Now : <Link to="/register">Register</Link></p>
        <Link to="/admin/allproducts" style={{color:"#fff"}}>Login as Admin</Link>
        <br/><br/>
        <Link to="/user/allorders" style={{color:"#fff"}}>Login as User</Link>
    </div>
  )
}
