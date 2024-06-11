import React, { useEffect } from 'react'
import img from '../../../../images/other/item.png'
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProductAction } from '../../../../redux/actions/Product/ProductAction';
import AdminProductDetailsForReviewHook from '../../../../LogicHooks/Admin/AdminProductDetailsForReviewHook';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer } from 'react-toastify';
export default function AdminAllReviewsCard({item,prodID,}) {
const  [product,cate,brand,showDelete,handelDelete,,handleCloseDelete,handleShowDelete]=AdminProductDetailsForReviewHook(prodID,item._id)

  return (
    <div className='adminReviewItem'>
        <div className='adminReviewItem_data'>
          <p className='adminReviewItem_data_name'>Name :<span> {item.user.name}</span></p>
          <p className='adminReviewItem_data_rate'>Rating :<span> {item.rating}</span><i className="fa-solid fa-star"></i></p>
          <p className='adminReviewItem_data_review'>Review :<span> {item.review}</span></p>
          <button className='deleteBtn' onClick={handleShowDelete}>Delete Review</button>
        </div>
        <div className='adminReviewItem_product'>
          <div className='adminReviewItem_product_img'>
            <img src={product?product.imageCover:""} alt='product'/>
          </div>
          <div className='adminReviewItem_product_desc'>
            <h4 className='adminReviewItem_product_desc_cate'>{cate}</h4>
            <p className='adminReviewItem_product_desc_title'>{product?product.title:""}</p>
            <p className='adminReviewItem_product_desc_brand'>{brand}</p>
            <p className='adminReviewItem_product_desc_Rate'>{product?product.ratingsAverage:"0"} <i className="fa-solid fa-star"></i></p>
            <p className='adminReviewItem_product_desc_price'>{product?product.price:""} EGP</p>
      
          </div>
          <Modal show={showDelete} onHide={handleCloseDelete} style={{color:"Black"}}>
              <Modal.Header closeButton>
                <Modal.Title style={{color:"Black"}}>Confirm Deletion</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{color:"Black"}}>Are you sure to delete this Review?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDelete}>
                  Close
                </Button>
                <Button variant="primary" onClick={handelDelete}>
                  Save
                </Button>
              </Modal.Footer>
        </Modal>
        </div>
        <ToastContainer />
    </div>
  )
}
