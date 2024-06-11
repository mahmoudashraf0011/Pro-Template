import React from 'react'
import { Link } from 'react-router-dom'
import '../../../Styles/User/UserProfile.css'
import UserProfileHook from '../../../../LogicHooks/User/UserProfileHook'
import EditUserPasswordHook from '../../../../LogicHooks/User/EditUserPasswordHook';
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteUserHook from '../../../../LogicHooks/User/DeleteUserHook';

export default function UserProfile() {
  const [user]=UserProfileHook();
  const [oldPass,newPass,confirmPass,onChangeOldPass,onChangeNewPass,onChangeConfirmPass,onSubmit]=EditUserPasswordHook();
  const [show,handelDelete,handleClose,handleShow]=DeleteUserHook();
  return (
    <div className='UserProfile'>
        <Modal show={show} onHide={handleClose} style={{backgroundColor:"transparent"}}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"black"}}>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color:"black"}}>Are you sure to delete Your Account?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handelDelete}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        <div className='UserProfile_card'>
            <div className='UserProfile_Upcard'>
                <p className='UserProfile_name'>Name : <span>{user.name}</span></p>
                <Link to={`/user/edit-profile/${user._id}`}><i class="fa-solid fa-pen-to-square"></i> Edit</Link>
            </div>
            <p className='UserProfile_mobile'>Mobile No. : <span>{user.phone}</span></p>
            <p className='UserProfile_Email'>Email : <span>{user.email}</span></p>
        </div>
        <form className='UserProfile_changePass'>
            <h4 className='UserProfile_changePass_header'>Change Password</h4>
            <input type='password' placeholder='Enter Old Password!' value={oldPass} className='UserProfile_changePass_old common' onChange={onChangeOldPass}/>
            <input type='password' placeholder='Enter New Password!' className='UserProfile_changePass_new common' value={newPass} onChange={onChangeNewPass}/>
            <input type='password' placeholder='Confirm New Password!' className='UserProfile_changePass_new common' value={confirmPass} onChange={onChangeConfirmPass}/>
            <button className='UserProfile_changePass_submit' onClick={onSubmit}>Save Password</button> 
        </form>
        <button className='UserProfile_DeleteUSer_submit delete' onClick={handleShow}>Delete Account</button>
        <ToastContainer />
    </div>
  )
}
