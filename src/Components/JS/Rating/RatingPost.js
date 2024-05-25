import React from 'react'
import ReactStars from "react-rating-stars-component";
import '../../Styles/Rating.css'

export default function RatingPost() {
    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 1.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };
  return (
    <div className='ratingPost'>
        <div className='ratingUp'>
            <span className='ratingPost_title'>Mohamed Ahmed</span>
            <ReactStars {...setting} />
        </div>
        <form className='ratingComment'>
            <textarea id="comment" name="comment" rows="2" cols="20"></textarea>
            <button className='addComment'>Add comment</button>
        </form>


    </div>
  )
}
