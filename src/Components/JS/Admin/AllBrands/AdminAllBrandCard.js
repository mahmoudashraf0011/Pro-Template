import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteBrandHook from '../../../../LogicHooks/Admin/DeleteBrandHook';
export default function AdminAllBrandCard({item}) {
 const [show,handelDelete,handleClose,handleShow]=DeleteBrandHook(item._id)
  return (
    <div className='brandItem'>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete this brand?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handelDelete}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      <div className='brandItemBtns'>
        <Link to={`/admin/edit-brand/${item._id}`}><button className='changeCat'>Edit</button></Link>
        <button className='changeCat' onClick={handleShow} >Delete</button>
     </div>
      <div className='brandItemImg'>
        <img src={item.image} alt='brand' />
      </div>
      <h3 className='brandItemTitle'>{item.name}</h3>

      <ToastContainer  /> 
    </div>
  )
}
