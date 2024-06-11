import React from 'react'
import { Link } from 'react-router-dom'
import DeleteCouponHook from '../../../../LogicHooks/Admin/DeleteCouponHook';
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

export default function AdminAllCouponsCard({item}) {
  const dateString = item.expire;
const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
const [show,handelDelete,handleClose,handleShow]=DeleteCouponHook(item._id)
  return (
    <div className='coupon_Card'>
        <Modal show={show} onHide={handleClose} style={{backgroundColor:"unset"}} >
            <Modal.Header  >
              <Modal.Title style={{color:"black"}}>Confirm Deletion</Modal.Title>
            </Modal.Header>
            
            <Modal.Body style={{color:"black",}}>Are you sure to delete this Coupon?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handelDelete}>
                Save
              </Button>
            </Modal.Footer>

       
        </Modal>
      <div className='coupon_Card_up'>
        <p className='coupon_card_name'>Coupon Name : <span> {item.name}</span></p>
        <ul className='coupon_Card_btns'>
            <li><Link to={`/admin/edit-coupon/${item._id}`}><i className="fa-regular fa-pen-to-square"></i> Edit</Link></li>
            <li onClick={handleShow}><i className="fa-regular fa-trash-can"></i> Delete</li>
        </ul>
      </div>
      <p className='coupon_card_expire'>Expire Date : <span>{formatDate(dateString)}</span></p>
      <p className='coupon_card_discount'>Discount Percentage : <span>{item.discount}</span>%</p>
      <ToastContainer />
    </div>
  )
}
