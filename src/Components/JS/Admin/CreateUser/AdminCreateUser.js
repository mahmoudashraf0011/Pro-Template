import React from 'react'
import { ToastContainer } from 'react-toastify'
import CreateUserHook from '../../../../LogicHooks/Admin/CreateUserHook';


export default function AdminCreateUser() {
  const [name,email,pass,confirmPass,phone,role,onChangeName,onChangeEmail,onChangePass,onChangePassConfirm,onChangePhone,onChangeRole,onSubmit]=CreateUserHook();
  return (
    <div className='reg auth' style={{width:"50%"}}> 
    <h2 className='regTitle'>Create User</h2>
    <form className='regForm'>
    <input className='regForm_username' type='text' placeholder='Enter Username' onChange={onChangeName} value={name}/>
            <input className='regForm_email' type='email' placeholder='Enter Email' onChange={onChangeEmail} value={email}/>
            <input className='regForm_pass' type='password' placeholder='Enter Password' onChange={onChangePass} value={pass}/>
            <input className='regForm_confirmPass' type='password' placeholder='Confirm Password' onChange={onChangePassConfirm} value={confirmPass}/>
            <input className='regForm_phone' type='phone' placeholder='Enter Mobile Number'onChange={onChangePhone} value={phone}/>
        <select onChange={onChangeRole} value={role}>
           <option value="0">Choose Role</option>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        <button className='regForm_btn'  type='submit' onClick={onSubmit}>Create</button>
    </form>
    <ToastContainer />
</div>
  )
}
