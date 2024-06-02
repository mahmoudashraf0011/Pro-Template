import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteProductHook from '../../../../LogicHooks/Admin/DeleteProductHook';
import { ToastContainer } from 'react-toastify';

export default function AdminAllproductsCard({item}) {
  const [show,handelDelete,handleClose,handleShow]=DeleteProductHook(item._id);
  
  return (

    <div className='AdminAllProduct_item'>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete the product?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handelDelete}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
     <div className='AdminAllProduct_item_modify'>
        <Link to={`/admin/edit-product/${item._id}`} className='edit'><button className='AdminAllProduct_item_modify_edit'>Edit</button></Link>
        <button className='AdminAllProduct_item_modify_delete' onClick={handleShow}>Delete</button>
     </div>
      <div className='AdminAllProduct_item_img'>
        <Link to={`/allproducts/${item._id}`}><img src={item.imageCover} alt="best" /></Link>
      </div>
      <h3 className='AdminAllProduct_item_title'>{item.title}</h3>
      <div className='AdminAllProduct_item_more'>
        <span className='AdminAllProduct_item_price'>$ <span>{item.price}</span></span>
        <span className='AdminAllProduct_item_rate'>{item.ratingsQuantity} <i className="fa-solid fa-star"></i></span>
      </div>
      <ToastContainer />
    </div>
  )
}
