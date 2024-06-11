import React from 'react'
import '../../Styles/Auth.css'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import VeriftyPassHook from '../../../LogicHooks/Auth/VeriftyPassHook';
export default function VeriftyPassPage() {
  const [code,onChangeCode,onSubmit]=VeriftyPassHook();
  return (
    <div className='login auth'> 
        <h2 className='loginTitle'>Enter code sent to mail</h2>
        <form className='loginForm'>
            <input className='loginForm_code' type='number' placeholder='Enter The Code...' value={code} onChange={onChangeCode}/>
            <button className='loginForm_btn'  type='submit' onClick={onSubmit}>Submit</button>
        </form>
        <ToastContainer />
    </div>
  )
}
//m2@gmail.com