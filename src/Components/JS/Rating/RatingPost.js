import React from 'react'
import ReactStars from "react-rating-stars-component";
import '../../Styles/Rating/Rating.css'
import CreateReviewHook from '../../../LogicHooks/Review/CreateReviewHook';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function RatingPost() {
    const {id}=useParams();
    const [user,rateValue,rateTxt,onChangeValue,onChangetxt,onSubmit]=CreateReviewHook(id);
    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: rateValue,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            onChangeValue(newValue)
        }
    };


  return (
    <div className='ratingPost'>
        <div className='ratingUp'>
            <span className='ratingPost_title'>{user?user.name:"User"}</span>
            <ReactStars {...setting} />
        </div>
        <form className='ratingComment'>
            <textarea id="comment" name="comment" rows="2" cols="20" value={rateTxt} onChange={onChangetxt}></textarea>
            <button className='addComment' onClick={onSubmit}>Add comment</button>
        </form>

  
    </div>
  )
}
