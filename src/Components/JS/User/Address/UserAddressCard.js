import React from 'react'
import { Link } from 'react-router-dom'
import DeleteAddressHook from '../../../../LogicHooks/User/DeleteAddressHook'
import { ToastContainer } from 'react-toastify'
import { Button, Modal } from 'react-bootstrap';

export default function UserAddressCard({item}) {
  const [show,handelDelete,handleClose,handleShow]=DeleteAddressHook(item._id)
  return (
    <div className='UserAddressCard'>
        <Modal show={show} onHide={handleClose} style={{backgroundColor:"unset"}} >
            <Modal.Header  >
              <Modal.Title style={{color:"black"}}>Confirm Deletion</Modal.Title>
            </Modal.Header>
            
            <Modal.Body style={{color:"black",}}>Are you sure to delete this Address?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handelDelete}>
                Save
              </Button>
            </Modal.Footer>

       
        </Modal>
      <div className='UserAddressCard_up'>
        <h5 className='UserAddressCard_title'>{item.alias}</h5>
        <ul className='UserAddressCard_btns'>
            <li><Link to={`/user/edit-address/${item._id}`}><i class="fa-regular fa-pen-to-square"></i> Edit</Link></li>
            <li onClick={handleShow}><i class="fa-regular fa-trash-can"></i> Delete</li>
        </ul>
      </div>
      <p className='UserAddressCard_desc'>{item.details}</p>
      <p className='UserAddressCard_mobile'>Mobile Number: <span>{item.phone}</span></p>
      <p className='UserAddressCard_mobile'>City: <span>{item.city}</span></p>
      <p className='UserAddressCard_mobile'>PostalCode: <span>{item.postalCode}</span></p>
      <ToastContainer />
    </div>
  )
}
