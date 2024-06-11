import React from 'react'
import a from '../../../../images/avaters/1.png'
import b from '../../../../images/avaters/2.png'
import d from '../../../../images/avaters/4.png'
import e from '../../../../images/avaters/5.png'
import f from '../../../../images/avaters/6.png'
import c from '../../../../images/avaters/7.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom'
import AdminDeleteUserHook from '../../../../LogicHooks/Admin/AdminDeleteUserHook'
export default function AdminAllUsersCard({item}) {
    const avatars=[a,b,d,e,f,c]
    const [show,handelDelete,handleClose,handleShow]=AdminDeleteUserHook(item._id);
   
  return (
    <div className='adminAllUsersItem'>
            <Modal show={show} onHide={handleClose} style={{color:"Black"}}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:"Black"}}>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{color:"Black"}}>Are you sure to delete User Account?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handelDelete}>
                    Save
                    </Button>
                </Modal.Footer>
            </Modal>    
      <div className='adminAllUsersItem_img'>
        <img src={avatars[Math.floor(Math.random() * 6 )]} alt='avatar'/>
      </div>
      <div className='adminAllUsersItem_data'>
           <p className='adminAllUsersItem_data_name'>Name : <span>{item?item.name:""}</span></p>
           <p className='adminAllUsersItem_data_email'>Email : <span>{item?item.email:""}</span></p>
           <p className='adminAllUsersItem_data_phone'>Phone : <span>{item?item.phone:""}</span></p>
      </div>
      <div className='adminAllUsersItem_btns'>
        <div className='adminAllUsersItem_btns_edit'>
            <NavLink to={`/admin/edit-user-profile/${item._id}`} className="adminAllUsersItem_btns_editProfile">Edit Profile</NavLink>
            <NavLink to={`/admin/change-user-pass/${item._id}`}className="adminAllUsersItem_btns_editPass">Change Password</NavLink>
        </div>
        <NavLink to="#" className="adminAllUsersItem_btns_delete" onClick={handleShow}>Delete User</NavLink>
      </div>
      <ToastContainer />
    </div>
  )
}
