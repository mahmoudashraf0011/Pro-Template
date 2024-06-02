import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DeleteCategoryHook from '../../../../LogicHooks/Admin/DeleteCategoryHook';
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function AdminAllCategoryCard({item}) {
  const [show,handelDelete,handleClose,handleShow]=DeleteCategoryHook(item._id)
  return (
    <div className='CatagoryItem'>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete this Category?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handelDelete}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
     <div className='categoryItemBtns'>
        <Link to={`/admin/edit-category/${item._id}`}><button className='changeCat'>Edit</button></Link>
        <button className='changeCat' onClick={handleShow}>Delete</button>
     </div>
      <div className='catagoryItemImg'>
        <img src={item.image} alt='catagory' />
      </div>
      <h3 className='catagoryItemTitle'>{item.name}</h3>

      <ToastContainer />
    </div>
  )
}
