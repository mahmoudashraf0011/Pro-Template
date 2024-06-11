import React from 'react'
import EditUserPasswordHook from '../../../../LogicHooks/User/EditUserPasswordHook';
import AdminChangeUserPassHook from '../../../../LogicHooks/Admin/AdminChangeUserPassHook';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


export default function AdminChangeUserPass() {
  const {id}=useParams();
  const [oldPass,newPass,confirmPass,onChangeOldPass,onChangeNewPass,onChangeConfirmPass,onSubmit]=AdminChangeUserPassHook(id);
  return (
    <form className='UserProfile_changePass' style={{border:"1px solid #ddd",padding:"20px"}}>
    
        <input type='password' placeholder='Enter Old Password!' value={oldPass} className='UserProfile_changePass_old common' onChange={onChangeOldPass}/>
        <input type='password' placeholder='Enter New Password!' className='UserProfile_changePass_new common' value={newPass} onChange={onChangeNewPass}/>
        <input type='password' placeholder='Confirm New Password!' className='UserProfile_changePass_new common' value={confirmPass} onChange={onChangeConfirmPass}/>
        <button className='UserProfile_changePass_submit' onClick={onSubmit}>Save Password</button> 
        <ToastContainer />
    </form>
  )
}
