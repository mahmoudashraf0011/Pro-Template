import React, { useState } from 'react'
import '../../Styles/Rating/Rating.css'
import DeleteReviewHook from '../../../LogicHooks/Review/DeleteReviewHook'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer } from 'react-toastify';
import UpdateReviewHook from '../../../LogicHooks/Review/UpdateReviewHook';
import ReactStars from "react-rating-stars-component";
export default function RatingList({item}) {

  let nowUser='',check=false,review;
  if(localStorage.getItem("user")){
          nowUser=JSON.parse(localStorage.getItem("user"));
  }
      if(item.user._id == nowUser._id){
          check=true;
          if(item){
            review=item;

          }
      }
   

  const [showDelete,handelDelete,handleShowDelete,handleCloseDelete]=DeleteReviewHook(review)
  const [showupdate,rateVal,rateTxt,handelupdate,handleShowupdate,handleCloseupdate,onChangeRateVal,onChangeRateTxt]=UpdateReviewHook(review);
  const settingUpdate = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: rateVal,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      onChangeRateVal(newValue)
    }
};
  return (
    <div className='rateItem'>
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
        <Modal show={showupdate} onHide={handleCloseupdate} style={{color:"Black"}}>
              <Modal.Header closeButton>
                <Modal.Title style={{color:"Black"}}>Confirm Edition</Modal.Title>
              </Modal.Header>
                <Modal.Body style={{color:"Black"}}>
                <ReactStars {...settingUpdate} />
                <input type='text' className='updateReviewFiled' value={rateTxt} onChange={onChangeRateTxt}/>
                </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseupdate}>
                  Close
                </Button>
                <Button variant="primary" onClick={handelupdate}>
                  Save
                </Button>
              </Modal.Footer>
        </Modal>
      <div className='rateInfo'>
    
        <div className='rateData'>
          <h4 className='rateData_name'>{item.user.name}</h4>
          <p className='rateData_star'><span className='rateData_num'>{item.rating} </span> <i className="fa-solid fa-star"></i></p>
        </div>
        <p className='rateItem_desc'>{item.review}</p>
    
      </div>
      {/* <ToastContainer /> */}

      {
        check==true?(
          <div className='rateBtns'>
          <li onClick={handleShowDelete}><i className="fa-solid fa-trash"></i></li>
          <li onClick={handleShowupdate}><i className="fa-solid fa-pen-to-square"></i></li>
        </div>
        ):""
      }


    </div>

  )
}
