import React, { useEffect } from 'react'
import '../../Styles/Cart/CartContainer.css'
import { Link, useNavigate } from 'react-router-dom'
import ClearCartHook from '../../../LogicHooks/Cart/ClearCartHook'
import { ToastContainer } from 'react-toastify'
import { Button, Modal } from 'react-bootstrap'
import ApplyCouponToCartHook from '../../../LogicHooks/Cart/ApplyCouponToCartHook'
import ViewUserProductsCartHook from '../../../LogicHooks/Cart/ViewUserProductsCartHook'
import Notify from '../Utility/Notify'

export default function CartCheckout({totalPrice,discount}) {

  const [showDelete,handleDelete,handleDeleteClose,handleDeleteShow]=ClearCartHook();
  const  [couponName,handleCoupon,onChangeCoupon]=ApplyCouponToCartHook();
  const [items,,,coupon,countItems,cartID]=ViewUserProductsCartHook();
  const navigate=useNavigate();

  useEffect(()=>{
    if(coupon){
      onChangeCoupon(coupon)
    }
  },[coupon])

  const checkItems=()=>{
        if(items){
          window.location.href=("/order/paymentmethod");
        }else{
          Notify("Please add products to Cart","warn");
        }

  }
  return (
    <div className='checkout'>
      <Modal show={showDelete} onHide={handleDeleteClose} style={{backgroundColor:"transparent"}}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black"}}>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"black"}}>Are you sure to clear Your Cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <form className='cartCoupon'>
            <input type='text' placeholder='Coupon Code' value={couponName} onChange={(e)=>onChangeCoupon(e.target.value)}/>
            <button onClick={handleCoupon}>Apply</button>
        </form>
        <p className='checkout_price'>Total Price : <span style={{fontWeight:"bold"}}>
          {
            discount?(
              `${totalPrice}$ - After Discount ${discount}`
            ):totalPrice

        }$
        </span></p>

        <a onClick={checkItems} className='checkout_purchase' style={{cursor:"pointer"}}>purchase completion</a>      
        <button className='checkout_RemoveCart' onClick={handleDeleteShow}>Remove Cart</button>
        <ToastContainer />
    </div>
  )
}
