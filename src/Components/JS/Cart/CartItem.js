import React from 'react'
import m from '../../../images/other/mobile.png'
import '../../Styles/Cart/CartContainer.css'
import GetImgCoverHook from '../../../LogicHooks/Cart/GetImgCoverHook'
import UpdateQuantityCartHook from '../../../LogicHooks/Cart/UpdateQuantityCartHook'
import { Button, Modal } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import DeleteProdictCartHook from '../../../LogicHooks/Cart/DeleteProdictCartHook'
export default function CartItem({item}) {

    const [img]=GetImgCoverHook(item.product._id);
    const [quantity,showQ,onChangeQ,handleQClose,handleQShow,handleQuantity]=UpdateQuantityCartHook(item);
    const  [showDelete,handleDelete,handleDeleteClose,handleDeleteShow]=DeleteProdictCartHook(item);
  return (
    
    <div className='cartItem'>
        <Modal show={showQ} onHide={handleQClose} style={{backgroundColor:"transparent"}}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"black"}}>Confirm Update Quantity</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color:"black"}}>Are you sure to Update Quantity of Product?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleQClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleQuantity}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showDelete} onHide={handleDeleteClose} style={{backgroundColor:"transparent"}}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"black"}}>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color:"black"}}>Are you sure to Delete this Product from cart</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleDeleteClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <div className='cartImg'>
            <img src={img} alt="mobile" />
        </div>
        <div className='cartData'>
            <div className='cartDataUp'>
                <h4 className='cartDataUp_catagory'>{item.product.category.name}</h4>
                <li className='cartDataUp_delete' onClick={handleDeleteShow}><i className="fa-regular fa-trash-can"></i> Delete</li>
            </div>
            <p className='cartData_desc'>{item.product.title}</p>
            <span className='cartData_rate'>{item.product.ratingsAverage||0} <i className="fa-solid fa-star"></i></span>
            <p className='cartData_brand'>Brand : <span>{item.product.brand.name}</span></p>
            <div className='cartData_color' style={{backgroundColor:item.color}}></div>
            <div className='cartDataUpDown'>
                <form className='cartDataUpDown_quantity'>
                    <label for="quantity">Quantity : </label>
                    <input id='quantuty' type='number' value={quantity} onChange={onChangeQ}/>
                    <button className='applyQuntity' onClick={handleQShow}>Apply</button>
                </form>
                <p className='cartDataUpDown_price'>$ <span>{item.price}</span></p>
            </div>
          
        </div>
 
    </div>
    
  )
}
